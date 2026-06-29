'use client';

import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'framer-motion';
import { submitDogProposal } from '@/app/actions/dog-proposal';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

const VACCINES = [
  'Rabies', 'Distemper', 'Hepatitis', 'Adeno Virus', 
  'Leptospirosis', 'Para-Influenza', 'Corona', 'Parvovirus'
];

const formSchema = z.object({
  // Step 1: Proposer Details
  proposerName: z.string().min(1, 'Name is required'),
  streetAddress: z.string().min(1, 'Street address is required'),
  apartment: z.string().optional(),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(1, 'State is required'),
  zipCode: z.string().min(1, 'ZIP is required'),
  ckycNumber: z.string().optional(),

  // Step 2: Pet Details
  petName: z.string().min(1, 'Pet Name is required'),
  petSex: z.enum(['Male', 'Female']),
  petAge: z.string().min(1, 'Age (YY/MM) is required'),
  petBreed: z.string().min(1, 'Breed is required'),
  petWeight: z.string().min(1, 'Weight is required'),
  identificationMarks: z.string().min(1, 'Identification marks required'),
  registrationNumber: z.string().optional(),

  // Step 3: Base & Optional Covers
  coPay: z.enum(['0%', '10%', '20%']),
  terminalIllness: z.enum(['Yes', 'No']),
  lostStolen: z.enum(['Yes', 'No']),
  longTermCare: z.enum(['Yes', 'No']),
  funeralCost: z.enum(['Yes', 'No']),
  vetOnCall: z.enum(['Yes', 'No']),
  vetOnCallAmount: z.string().optional(),
  vetOnCallVisits: z.string().optional(),
  emergencyPetMinding: z.enum(['Yes', 'No']),
  emergencyPetMindingDays: z.string().optional(),
  emergencyPetMindingLimit: z.string().optional(),
  thirdPartyLiability: z.enum(['Yes', 'No']),
  thirdPartyLiabilitySumInsured: z.string().optional(),

  // Step 4: Medical History & Existing Insurance
  commercialPurpose: z.enum(['Yes', 'No']),
  healthy: z.enum(['Yes', 'No']),
  vaccines: z.array(z.string()).min(1, 'At least one vaccine must be checked'),
  preExisting: z.enum(['Yes', 'No']),
  preExistingDetails: z.string().optional(),
  otherInfo: z.enum(['Yes', 'No']),
  otherInfoDetails: z.string().optional(),
  existingInsurance: z.enum(['Yes', 'No']),
  existingInsuranceCompany: z.string().optional(),
  existingInsurancePolicy: z.string().optional(),
  existingInsuranceClaimAmount: z.string().optional(),
  existingInsuranceReason: z.string().optional(),

  // Step 5: Consent
  agreeTerms: z.boolean().refine((val) => val === true, {
    message: 'You must agree to the terms and conditions',
  }),
});

type FormValues = z.infer<typeof formSchema>;

interface DogProposalFormProps {
  onSuccess?: () => void;
}

export function DogProposalForm({ onSuccess }: DogProposalFormProps) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      vaccines: [],
      agreeTerms: false,
      terminalIllness: 'No',
      lostStolen: 'No',
      longTermCare: 'No',
      funeralCost: 'No',
      vetOnCall: 'No',
      emergencyPetMinding: 'No',
      thirdPartyLiability: 'No',
      commercialPurpose: 'No',
      preExisting: 'No',
      otherInfo: 'No',
      existingInsurance: 'No'
    },
  });

  // Watch values for conditional rendering
  const watchVetOnCall = watch('vetOnCall');
  const watchEmergency = watch('emergencyPetMinding');
  const watchLiability = watch('thirdPartyLiability');
  const watchPreExisting = watch('preExisting');
  const watchOtherInfo = watch('otherInfo');
  const watchExistingIns = watch('existingInsurance');

  const nextStep = async () => {
    let fieldsToValidate: any[] = [];
    if (step === 1) {
      fieldsToValidate = ['proposerName', 'streetAddress', 'city', 'state', 'zipCode'];
    } else if (step === 2) {
      fieldsToValidate = ['petName', 'petSex', 'petAge', 'petBreed', 'petWeight', 'identificationMarks'];
    } else if (step === 3) {
      fieldsToValidate = ['coPay', 'terminalIllness', 'lostStolen', 'longTermCare', 'funeralCost', 'vetOnCall', 'emergencyPetMinding', 'thirdPartyLiability'];
      // Add conditional fields to validation if needed
      if (watchVetOnCall === 'Yes') fieldsToValidate.push('vetOnCallAmount', 'vetOnCallVisits');
      if (watchEmergency === 'Yes') fieldsToValidate.push('emergencyPetMindingDays', 'emergencyPetMindingLimit');
      if (watchLiability === 'Yes') fieldsToValidate.push('thirdPartyLiabilitySumInsured');
    } else if (step === 4) {
      fieldsToValidate = ['commercialPurpose', 'healthy', 'vaccines', 'preExisting', 'otherInfo', 'existingInsurance'];
      if (watchPreExisting === 'Yes') fieldsToValidate.push('preExistingDetails');
      if (watchOtherInfo === 'Yes') fieldsToValidate.push('otherInfoDetails');
      if (watchExistingIns === 'Yes') fieldsToValidate.push('existingInsuranceCompany', 'existingInsurancePolicy');
    }

    const isStepValid = await trigger(fieldsToValidate as any);
    if (isStepValid) {
      setStep((s) => s + 1);
    } else {
      // Show general error if validation fails
      toast.error("Please fill all required fields correctly.");
    }
  };

  const prevStep = () => {
    setStep((s) => s - 1);
  };

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    // Add hardcoded base coverages
    const finalData = {
      ...data,
      baseSurgeryCover: 'Included',
      baseOpdCover: 'INR 10,000/-',
    };
    
    const result = await submitDogProposal(finalData);
    setIsSubmitting(false);

    if (result.success) {
      toast.success(result.message);
      if (onSuccess) onSuccess();
    } else {
      toast.error(result.message);
    }
  };

  // Base input classes
  const inputClass = "w-full rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#673CDD]/50 focus:border-[#673CDD] transition-all text-gray-900 dark:text-gray-100 placeholder:text-gray-400";
  const labelClass = "text-sm font-semibold text-gray-700 dark:text-gray-300 block mb-2";
  const errorClass = "text-red-500 text-xs mt-1.5 font-medium";
  const readOnlyClass = "w-full rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 px-4 py-3 text-sm text-gray-600 dark:text-gray-400 cursor-not-allowed";

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Stepper Indicator */}
      <div className="mb-10 relative flex justify-between items-center w-full px-2 md:px-6">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-100 dark:bg-gray-800 rounded-full z-0">
          <div 
            className="h-full bg-[#673CDD] rounded-full transition-all duration-700 ease-in-out"
            style={{ width: `${((step - 1) / 4) * 100}%` }}
          />
        </div>
        {[
          { num: 1, label: "Proposer" },
          { num: 2, label: "Pet" },
          { num: 3, label: "Covers" },
          { num: 4, label: "Health" },
          { num: 5, label: "Consent" }
        ].map((s) => (
          <div key={s.num} className="flex flex-col items-center gap-2 relative z-10">
            <div 
              className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-500 ${
                step >= s.num ? 'bg-[#673CDD] text-white shadow-lg shadow-[#673CDD]/30 scale-110' : 'bg-white dark:bg-gray-900 text-gray-400 border-2 border-gray-100 dark:border-gray-800'
              }`}
            >
              {step > s.num ? <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6" /> : s.num}
            </div>
            <span className={`text-[10px] md:text-xs font-semibold hidden sm:block ${step >= s.num ? 'text-[#673CDD]' : 'text-gray-400'}`}>{s.label}</span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl shadow-black/5 border border-gray-100 dark:border-gray-800 p-6 md:p-10 relative overflow-hidden">
        
        {/* Subtle background gradient for premium feel */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#673CDD]/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />

        <AnimatePresence mode="wait">
          {/* STEP 1: Proposer Details */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8 relative z-10"
            >
              <div className="border-b border-gray-100 dark:border-gray-800 pb-4">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Proposer Details</h2>
                <p className="text-sm text-gray-500 mt-1">Please share your personal information as the policy owner.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="proposerName" className={labelClass}>Your Name *</label>
                  <input id="proposerName" type="text" {...register('proposerName')} className={inputClass} placeholder="Full Name" />
                  {errors.proposerName && <p className={errorClass}>{errors.proposerName.message}</p>}
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="streetAddress" className={labelClass}>Street Address *</label>
                  <input id="streetAddress" type="text" {...register('streetAddress')} className={inputClass} placeholder="123 Main St" />
                  {errors.streetAddress && <p className={errorClass}>{errors.streetAddress.message}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="apartment" className={labelClass}>Apartment, suite, etc.</label>
                  <input id="apartment" type="text" {...register('apartment')} className={inputClass} placeholder="Apt 4B" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="city" className={labelClass}>City *</label>
                  <input id="city" type="text" {...register('city')} className={inputClass} />
                  {errors.city && <p className={errorClass}>{errors.city.message}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="state" className={labelClass}>State/Province *</label>
                  <input id="state" type="text" {...register('state')} className={inputClass} />
                  {errors.state && <p className={errorClass}>{errors.state.message}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="zipCode" className={labelClass}>ZIP / Postal Code *</label>
                  <input id="zipCode" type="text" {...register('zipCode')} className={inputClass} />
                  {errors.zipCode && <p className={errorClass}>{errors.zipCode.message}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="ckycNumber" className={labelClass}>CKYC Number (if available)</label>
                  <input id="ckycNumber" type="text" {...register('ckycNumber')} className={inputClass} />
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 2: Pet Details */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8 relative z-10"
            >
              <div className="border-b border-gray-100 dark:border-gray-800 pb-4">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Pet Details</h2>
                <p className="text-sm text-gray-500 mt-1">Tell us about your furry friend.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="petName" className={labelClass}>Name of Pet Dog *</label>
                  <input id="petName" type="text" {...register('petName')} className={inputClass} placeholder="Max" />
                  {errors.petName && <p className={errorClass}>{errors.petName.message}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="petSex" className={labelClass}>Sex *</label>
                  <select id="petSex" {...register('petSex')} className={inputClass}>
                    <option value="">Select Sex</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                  {errors.petSex && <p className={errorClass}>{errors.petSex.message}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="petAge" className={labelClass}>Age (YY/MM) *</label>
                  <input id="petAge" type="text" {...register('petAge')} className={inputClass} placeholder="e.g. 02/05" />
                  {errors.petAge && <p className={errorClass}>{errors.petAge.message}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="petBreed" className={labelClass}>Breed *</label>
                  <input id="petBreed" type="text" {...register('petBreed')} className={inputClass} placeholder="Golden Retriever" />
                  {errors.petBreed && <p className={errorClass}>{errors.petBreed.message}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="petWeight" className={labelClass}>Weight of pet (at 15-18 months) *</label>
                  <input id="petWeight" type="text" {...register('petWeight')} className={inputClass} placeholder="e.g. 25 kg" />
                  {errors.petWeight && <p className={errorClass}>{errors.petWeight.message}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="identificationMarks" className={labelClass}>Identification features/marks *</label>
                  <input id="identificationMarks" type="text" {...register('identificationMarks')} className={inputClass} placeholder="e.g. White patch on chest" />
                  {errors.identificationMarks && <p className={errorClass}>{errors.identificationMarks.message}</p>}
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="registrationNumber" className={labelClass}>Registration No. or Micro-chip No. (optional)</label>
                  <input id="registrationNumber" type="text" {...register('registrationNumber')} className={inputClass} placeholder="Local Govt authority / Kennel Club / Micro-chip" />
                  <p className="text-xs text-gray-500 mt-1 italic">If Micro-chip No is given then you are eligible for discount.</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 3: Covers */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8 relative z-10"
            >
              <div className="border-b border-gray-100 dark:border-gray-800 pb-4">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Base & Optional Covers</h2>
                <p className="text-sm text-gray-500 mt-1">Select your coverage options and add-ons.</p>
              </div>

              <div className="space-y-6">
                {/* Base Covers (Readonly UI) */}
                <div className="p-5 bg-[#673CDD]/5 border border-[#673CDD]/20 rounded-xl space-y-4">
                  <h3 className="font-bold text-[#673CDD]">Included Base Covers</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                     <div>
                       <label className={labelClass}>Surgery and Hospitalisation Cover</label>
                       <input type="text" value="Included automatically" readOnly className={readOnlyClass} />
                     </div>
                     <div>
                       <label className={labelClass}>OPD Cover (20% of Surgery Sum)</label>
                       <input type="text" value="Automatic Coverage INR 10,000/-" readOnly className={readOnlyClass} />
                     </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="coPay" className={labelClass}>Do you want to opt for co-pay of? *</label>
                  <select id="coPay" {...register('coPay')} className={inputClass}>
                    <option value="">Select Co-pay</option>
                    <option value="0%">0%</option>
                    <option value="10%">10%</option>
                    <option value="20%">20%</option>
                  </select>
                  {errors.coPay && <p className={errorClass}>{errors.coPay.message}</p>}
                </div>

                <div className="border-t border-gray-100 dark:border-gray-800 pt-6 space-y-6">
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg">Optional Add-ons</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-800 rounded-xl">
                      <div>
                        <p className="font-semibold text-sm text-gray-900 dark:text-gray-100">Terminal Illness Cover</p>
                        <p className="text-xs text-gray-500">Same as Coverage I</p>
                      </div>
                      <select {...register('terminalIllness')} className="p-2 text-sm rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900">
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                      </select>
                    </div>

                    <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-800 rounded-xl">
                      <div>
                        <p className="font-semibold text-sm text-gray-900 dark:text-gray-100">Lost and Stolen Cover</p>
                        <p className="text-xs text-gray-500">25% of the Sum Insured of "Coverage I"</p>
                      </div>
                      <select {...register('lostStolen')} className="p-2 text-sm rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900">
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                      </select>
                    </div>

                    <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-800 rounded-xl">
                      <div>
                        <p className="font-semibold text-sm text-gray-900 dark:text-gray-100">Long Term Care Cover</p>
                        <p className="text-xs text-gray-500">Max Rs.50,000/-</p>
                      </div>
                      <select {...register('longTermCare')} className="p-2 text-sm rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900">
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                      </select>
                    </div>

                    <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-800 rounded-xl">
                      <div>
                        <p className="font-semibold text-sm text-gray-900 dark:text-gray-100">Funeral Cost Cover</p>
                        <p className="text-xs text-gray-500">Rs.5,000/-</p>
                      </div>
                      <select {...register('funeralCost')} className="p-2 text-sm rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900">
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                      </select>
                    </div>
                  </div>

                  {/* Complex Optionals */}
                  <div className="space-y-4 p-4 border border-gray-200 dark:border-gray-800 rounded-xl">
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-sm text-gray-900 dark:text-gray-100">Veterinary on Call (Home Visits)</p>
                      <select {...register('vetOnCall')} className="p-2 text-sm rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900">
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                      </select>
                    </div>
                    {watchVetOnCall === 'Yes' && (
                      <div className="grid md:grid-cols-2 gap-4 pt-2 border-t border-gray-100 dark:border-gray-800 mt-2">
                        <input type="text" {...register('vetOnCallAmount')} placeholder="Amount per visit" className={inputClass} />
                        <input type="text" {...register('vetOnCallVisits')} placeholder="No. of visits" className={inputClass} />
                      </div>
                    )}
                  </div>

                  <div className="space-y-4 p-4 border border-gray-200 dark:border-gray-800 rounded-xl">
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-sm text-gray-900 dark:text-gray-100">Emergency Pet Minding Cover</p>
                      <select {...register('emergencyPetMinding')} className="p-2 text-sm rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900">
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                      </select>
                    </div>
                    {watchEmergency === 'Yes' && (
                      <div className="grid md:grid-cols-2 gap-4 pt-2 border-t border-gray-100 dark:border-gray-800 mt-2">
                        <input type="text" {...register('emergencyPetMindingDays')} placeholder="How many days?" className={inputClass} />
                        <input type="text" {...register('emergencyPetMindingLimit')} placeholder="Per Day limit (Max Rs.1500)" className={inputClass} />
                      </div>
                    )}
                  </div>

                  <div className="space-y-4 p-4 border border-gray-200 dark:border-gray-800 rounded-xl">
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-sm text-gray-900 dark:text-gray-100">Third Party Liability Cover</p>
                      <select {...register('thirdPartyLiability')} className="p-2 text-sm rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900">
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                      </select>
                    </div>
                    {watchLiability === 'Yes' && (
                      <div className="pt-2 border-t border-gray-100 dark:border-gray-800 mt-2">
                        <input type="text" {...register('thirdPartyLiabilitySumInsured')} placeholder="Specify Sum Insured (up to 10,00,000/-)" className={inputClass} />
                      </div>
                    )}
                  </div>

                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 4: Medical History */}
          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8 relative z-10"
            >
              <div className="border-b border-gray-100 dark:border-gray-800 pb-4">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Medical History & Insurance</h2>
                <p className="text-sm text-gray-500 mt-1">Disclose all material facts regarding your pet's health.</p>
              </div>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className={labelClass}>Do you use your Dog for Commercial Purpose? *</label>
                    <select {...register('commercialPurpose')} className={inputClass}>
                      <option value="No">No</option>
                      <option value="Yes">Yes</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className={labelClass}>Is/Are your pet Dog(s) healthy? *</label>
                    <select {...register('healthy')} className={inputClass}>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className={labelClass}>Is your Pet Dog vaccinated? (Select all that apply) *</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl border border-gray-200 dark:border-gray-800">
                    {VACCINES.map((vaccine) => (
                      <label key={vaccine} className="flex items-center gap-2 cursor-pointer">
                        <input 
                          type="checkbox" 
                          value={vaccine}
                          {...register('vaccines')}
                          className="w-4 h-4 text-[#673CDD] rounded border-gray-300"
                        />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{vaccine}</span>
                      </label>
                    ))}
                  </div>
                  {errors.vaccines && <p className={errorClass}>{errors.vaccines.message}</p>}
                </div>

                {/* Pre-existing */}
                <div className="space-y-4 p-4 border border-gray-200 dark:border-gray-800 rounded-xl">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-sm text-gray-900 dark:text-gray-100">Does Your Pet suffer from pre-existing diseases? *</p>
                    <select {...register('preExisting')} className="p-2 text-sm rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900">
                      <option value="No">No</option>
                      <option value="Yes">Yes</option>
                    </select>
                  </div>
                  {watchPreExisting === 'Yes' && (
                    <div className="pt-2 border-t border-gray-100 dark:border-gray-800 mt-2">
                      <textarea {...register('preExistingDetails')} placeholder="Please share details..." className={inputClass} rows={3}></textarea>
                    </div>
                  )}
                </div>

                {/* Other Info */}
                <div className="space-y-4 p-4 border border-gray-200 dark:border-gray-800 rounded-xl">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-sm text-gray-900 dark:text-gray-100">Any other information important for the policy? *</p>
                    <select {...register('otherInfo')} className="p-2 text-sm rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900">
                      <option value="No">No</option>
                      <option value="Yes">Yes</option>
                    </select>
                  </div>
                  {watchOtherInfo === 'Yes' && (
                    <div className="pt-2 border-t border-gray-100 dark:border-gray-800 mt-2">
                      <textarea {...register('otherInfoDetails')} placeholder="If yes, please mention..." className={inputClass} rows={2}></textarea>
                    </div>
                  )}
                </div>

                {/* Existing Insurance */}
                <div className="space-y-4 p-4 border border-gray-200 dark:border-gray-800 rounded-xl">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-sm text-gray-900 dark:text-gray-100">Any existing insurance for your dogs? *</p>
                    <select {...register('existingInsurance')} className="p-2 text-sm rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900">
                      <option value="No">No</option>
                      <option value="Yes">Yes</option>
                    </select>
                  </div>
                  {watchExistingIns === 'Yes' && (
                    <div className="grid md:grid-cols-2 gap-4 pt-2 border-t border-gray-100 dark:border-gray-800 mt-2">
                      <input type="text" {...register('existingInsuranceCompany')} placeholder="Name of Insurance company" className={inputClass} />
                      <input type="text" {...register('existingInsurancePolicy')} placeholder="Policy number" className={inputClass} />
                      <input type="text" {...register('existingInsuranceClaimAmount')} placeholder="Claim Amount (last 3 yrs)" className={inputClass} />
                      <input type="text" {...register('existingInsuranceReason')} placeholder="Reason of Claim" className={inputClass} />
                    </div>
                  )}
                </div>

              </div>
            </motion.div>
          )}

          {/* STEP 5: Consent */}
          {step === 5 && (
            <motion.div
              key="step5"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8 relative z-10"
            >
              <div className="border-b border-gray-100 dark:border-gray-800 pb-4">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Final Review & Consent</h2>
                <p className="text-sm text-gray-500 mt-1">Please agree to our terms before submitting.</p>
              </div>

              <div className="bg-orange-50 dark:bg-orange-900/10 border border-orange-200 dark:border-orange-900/30 p-6 rounded-2xl space-y-4">
                 <h3 className="font-bold text-orange-800 dark:text-orange-400">Important Guidelines</h3>
                 <ul className="list-disc pl-5 text-sm text-orange-900 dark:text-orange-200 space-y-2">
                   <li>Insurance is a contract of utmost good faith requiring the Proposer to disclose all material facts.</li>
                   <li>Your cover will start only after we accept your application and receive the payment.</li>
                   <li>If required, you need to share your Dog’s health evaluation report subsequent to this form.</li>
                 </ul>
              </div>

              <div className="pt-6">
                <label className="flex items-start space-x-4 cursor-pointer group">
                  <div className="flex-shrink-0 mt-1">
                    <input 
                      type="checkbox" 
                      {...register('agreeTerms')}
                      className="w-5 h-5 rounded text-[#673CDD] focus:ring-[#673CDD] border-gray-300"
                    />
                  </div>
                  <div className="space-y-1">
                    <span className="text-base font-bold text-gray-900 dark:text-gray-100 group-hover:text-[#673CDD] transition-colors">
                      Yes, I agree with the privacy policy and terms and conditions. *
                    </span>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      By checking this box, I declare that all information provided is accurate and true to the best of my knowledge.
                    </p>
                  </div>
                </label>
                {errors.agreeTerms && <p className={errorClass}>{errors.agreeTerms.message}</p>}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer Navigation */}
        <div className="mt-10 flex justify-between pt-6 border-t border-gray-100 dark:border-gray-800 relative z-10">
          <button 
            type="button" 
            onClick={prevStep} 
            disabled={step === 1 || isSubmitting}
            className="flex items-center gap-2 px-4 md:px-6 py-3 rounded-xl font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          
          {step < 5 ? (
            <button 
              type="button" 
              onClick={nextStep}
              className="flex items-center gap-2 px-6 md:px-8 py-3 rounded-xl font-bold text-white bg-[#673CDD] hover:bg-[#5b32c6] shadow-lg shadow-[#673CDD]/20 transition-all active:scale-95"
            >
              Next Step <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="flex items-center justify-center gap-2 px-6 md:px-10 py-3 rounded-xl font-bold text-[#1B2A4A] bg-[#FBCE04] hover:bg-[#e6bc00] shadow-lg shadow-[#FBCE04]/20 transition-all active:scale-95 disabled:opacity-70"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Proposal'}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
