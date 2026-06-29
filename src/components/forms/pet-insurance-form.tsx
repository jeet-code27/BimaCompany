'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'framer-motion';
import { submitPetInsurance } from '@/app/actions/pet-insurance';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

const formSchema = z.object({
  petType: z.enum(['Cat', 'Dog']),
  petName: z.string().min(1, 'Pet name is required'),
  ownerName: z.string().min(1, 'Owner name is required'),
  mobileNumber: z.string().min(10, 'Valid mobile number required'),
  email: z.string().email('Valid email required'),
  petGender: z.enum(['Male', 'Female']),
  petBreed: z.string().min(1, 'Please select a breed'),
  otherBreed: z.string().optional(),
  petWeight: z.string().min(1, 'Weight is required'),
  ageYears: z.string().min(1, 'Year is required'),
  ageMonths: z.string().min(1, 'Month is required'),
  distinguishingFeatures: z.string().min(1, 'Please mention distinguishing features'),
  microchip: z.enum(['Yes', 'No']),
  address: z.string().min(5, 'Address is required'),
  pinCode: z.string().min(6, 'Valid pin code required'),
  addons: z.array(z.string()),
  agreeTerms: z.boolean().refine((val) => val === true, {
    message: 'You must agree to the terms and conditions',
  }),
});

type FormValues = z.infer<typeof formSchema>;

const dogBreeds = ['Labrador', 'Golden Retriever', 'German Shepherd', 'Pug', 'Indie', 'Others'];
const catBreeds = ['Persian', 'Maine Coon', 'Siamese', 'Indie', 'Others'];
const addonsList = [
  'Terminal Diseases Cover',
  'Long Term Care Cover',
  'OPD Cover',
  'Mortality Cover',
  'Theft / Lost / Straying Cover',
  'Third Party Cover'
];

interface PetInsuranceFormProps {
  onSuccess?: () => void;
}

export function PetInsuranceForm({ onSuccess }: PetInsuranceFormProps) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    trigger,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      addons: [],
      agreeTerms: false,
    },
  });

  const watchPetType = watch('petType');
  const watchPetBreed = watch('petBreed');
  const watchAddons = watch('addons');

  const breeds = watchPetType === 'Cat' ? catBreeds : dogBreeds;

  const nextStep = async () => {
    let fieldsToValidate: any[] = [];
    if (step === 1) {
      fieldsToValidate = ['petType', 'petName', 'petGender', 'petBreed', 'otherBreed', 'petWeight', 'ageYears', 'ageMonths', 'distinguishingFeatures', 'microchip'];
    } else if (step === 2) {
      fieldsToValidate = ['ownerName', 'mobileNumber', 'email', 'address', 'pinCode'];
    }

    const isStepValid = await trigger(fieldsToValidate as any);
    if (isStepValid) {
      setStep((s) => s + 1);
    }
  };

  const prevStep = () => {
    setStep((s) => s - 1);
  };

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    const result = await submitPetInsurance(data);
    setIsSubmitting(false);

    if (result.success) {
      toast.success(result.message);
      if (onSuccess) onSuccess();
    } else {
      toast.error(result.message);
    }
  };

  // Base input classes for a premium look
  const inputClass = "w-full rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#673CDD]/50 focus:border-[#673CDD] transition-all text-gray-900 dark:text-gray-100 placeholder:text-gray-400";
  const labelClass = "text-sm font-semibold text-gray-700 dark:text-gray-300 block mb-2";
  const errorClass = "text-red-500 text-xs mt-1.5 font-medium";

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Stepper Indicator */}
      <div className="mb-10 relative flex justify-between items-center w-full px-2">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-100 dark:bg-gray-800 rounded-full z-0">
          <div 
            className="h-full bg-[#673CDD] rounded-full transition-all duration-700 ease-in-out"
            style={{ width: `${((step - 1) / 2) * 100}%` }}
          />
        </div>
        {[1, 2, 3].map((s) => (
          <div 
            key={s} 
            className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-500 ${
              step >= s ? 'bg-[#673CDD] text-white shadow-lg shadow-[#673CDD]/30 scale-110' : 'bg-white dark:bg-gray-900 text-gray-400 border-2 border-gray-100 dark:border-gray-800'
            }`}
          >
            {step > s ? <CheckCircle2 className="w-6 h-6" /> : s}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl shadow-black/5 border border-gray-100 dark:border-gray-800 p-8 md:p-10 relative overflow-hidden">
        
        {/* Subtle background gradient for premium feel */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#673CDD]/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />

        <AnimatePresence mode="wait">
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
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Pet Information</h2>
                <p className="text-sm text-gray-500 mt-1">Tell us about your furry companion.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Pet Type */}
                <div className="space-y-2">
                  <label className={labelClass}>Pet Type *</label>
                  <div className="flex gap-4">
                    <label className="flex-1 cursor-pointer">
                      <input type="radio" value="Dog" {...register('petType')} className="peer sr-only" />
                      <div className="w-full text-center px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 peer-checked:bg-[#673CDD]/10 peer-checked:border-[#673CDD] peer-checked:text-[#673CDD] font-medium transition-all">
                        🐶 Dog
                      </div>
                    </label>
                    <label className="flex-1 cursor-pointer">
                      <input type="radio" value="Cat" {...register('petType')} className="peer sr-only" />
                      <div className="w-full text-center px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 peer-checked:bg-[#673CDD]/10 peer-checked:border-[#673CDD] peer-checked:text-[#673CDD] font-medium transition-all">
                        🐱 Cat
                      </div>
                    </label>
                  </div>
                  {errors.petType && <p className={errorClass}>{errors.petType.message}</p>}
                </div>

                {/* Pet Gender */}
                <div className="space-y-2">
                  <label className={labelClass}>Pet Gender *</label>
                  <div className="flex gap-4">
                    <label className="flex-1 cursor-pointer">
                      <input type="radio" value="Male" {...register('petGender')} className="peer sr-only" />
                      <div className="w-full text-center px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 peer-checked:bg-[#673CDD]/10 peer-checked:border-[#673CDD] peer-checked:text-[#673CDD] font-medium transition-all">
                        Male
                      </div>
                    </label>
                    <label className="flex-1 cursor-pointer">
                      <input type="radio" value="Female" {...register('petGender')} className="peer sr-only" />
                      <div className="w-full text-center px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 peer-checked:bg-[#673CDD]/10 peer-checked:border-[#673CDD] peer-checked:text-[#673CDD] font-medium transition-all">
                        Female
                      </div>
                    </label>
                  </div>
                  {errors.petGender && <p className={errorClass}>{errors.petGender.message}</p>}
                </div>

                {/* Pet Name */}
                <div className="space-y-2">
                  <label htmlFor="petName" className={labelClass}>Pet Name *</label>
                  <input id="petName" type="text" {...register('petName')} className={inputClass} placeholder="e.g. Max" />
                  {errors.petName && <p className={errorClass}>{errors.petName.message}</p>}
                </div>

                {/* Pet Breed */}
                <div className="space-y-2">
                  <label htmlFor="petBreed" className={labelClass}>Pet Breed *</label>
                  <select id="petBreed" {...register('petBreed')} className={inputClass}>
                    <option value="">Select Breed</option>
                    {breeds.map((breed) => (
                      <option key={breed} value={breed}>{breed}</option>
                    ))}
                  </select>
                  {errors.petBreed && <p className={errorClass}>{errors.petBreed.message}</p>}
                </div>

                {/* Other Breed Conditional */}
                {watchPetBreed === 'Others' && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="space-y-2 md:col-span-2">
                    <label htmlFor="otherBreed" className={labelClass}>Mention Specific Breed *</label>
                    <input id="otherBreed" type="text" {...register('otherBreed')} className={inputClass} placeholder="Enter exact breed" />
                    {errors.otherBreed && <p className={errorClass}>{errors.otherBreed.message}</p>}
                  </motion.div>
                )}

                {/* Pet Weight */}
                <div className="space-y-2">
                  <label htmlFor="petWeight" className={labelClass}>Pet Weight (Kg) *</label>
                  <input id="petWeight" type="number" step="0.1" {...register('petWeight')} className={inputClass} placeholder="e.g. 12.5" />
                  {errors.petWeight && <p className={errorClass}>{errors.petWeight.message}</p>}
                </div>

                {/* Pet Age */}
                <div className="space-y-2">
                  <label className={labelClass}>Pet Age *</label>
                  <div className="flex gap-4">
                    <select {...register('ageYears')} className={inputClass}>
                      <option value="">Years</option>
                      {[...Array(15)].map((_, i) => (
                        <option key={i} value={i.toString()}>{i} Years</option>
                      ))}
                    </select>
                    <select {...register('ageMonths')} className={inputClass}>
                      <option value="">Months</option>
                      {[...Array(12)].map((_, i) => (
                        <option key={i} value={i.toString()}>{i} Months</option>
                      ))}
                    </select>
                  </div>
                  {(errors.ageYears || errors.ageMonths) && (
                    <p className={errorClass}>Please select both years and months.</p>
                  )}
                </div>

                {/* Distinguishing Features */}
                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="distinguishingFeatures" className={labelClass}>Distinguishing features of the Pet *</label>
                  <input id="distinguishingFeatures" type="text" {...register('distinguishingFeatures')} className={inputClass} placeholder="e.g. White spot on left ear" />
                  {errors.distinguishingFeatures && <p className={errorClass}>{errors.distinguishingFeatures.message}</p>}
                </div>

                {/* Microchip */}
                <div className="space-y-2 md:col-span-2">
                  <label className={labelClass}>Does the pet have a Microchip? *</label>
                  <div className="flex gap-4 max-w-sm">
                    <label className="flex-1 cursor-pointer">
                      <input type="radio" value="Yes" {...register('microchip')} className="peer sr-only" />
                      <div className="w-full text-center px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 peer-checked:bg-[#673CDD]/10 peer-checked:border-[#673CDD] peer-checked:text-[#673CDD] font-medium transition-all">
                        Yes
                      </div>
                    </label>
                    <label className="flex-1 cursor-pointer">
                      <input type="radio" value="No" {...register('microchip')} className="peer sr-only" />
                      <div className="w-full text-center px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 peer-checked:bg-[#673CDD]/10 peer-checked:border-[#673CDD] peer-checked:text-[#673CDD] font-medium transition-all">
                        No
                      </div>
                    </label>
                  </div>
                  {errors.microchip && <p className={errorClass}>{errors.microchip.message}</p>}
                </div>
              </div>
            </motion.div>
          )}

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
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Contact & Address</h2>
                <p className="text-sm text-gray-500 mt-1">Where can we reach you?</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Owner Name */}
                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="ownerName" className={labelClass}>Owner's Full Name *</label>
                  <input id="ownerName" type="text" {...register('ownerName')} className={inputClass} placeholder="e.g. John Doe" />
                  {errors.ownerName && <p className={errorClass}>{errors.ownerName.message}</p>}
                </div>

                {/* Mobile Number */}
                <div className="space-y-2">
                  <label htmlFor="mobileNumber" className={labelClass}>Mobile Number *</label>
                  <input id="mobileNumber" type="tel" {...register('mobileNumber')} className={inputClass} placeholder="9876543210" />
                  {errors.mobileNumber && <p className={errorClass}>{errors.mobileNumber.message}</p>}
                </div>

                {/* Email Id */}
                <div className="space-y-2">
                  <label htmlFor="email" className={labelClass}>Email Address *</label>
                  <input id="email" type="email" {...register('email')} className={inputClass} placeholder="you@example.com" />
                  {errors.email && <p className={errorClass}>{errors.email.message}</p>}
                </div>

                {/* Address */}
                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="address" className={labelClass}>Full Address *</label>
                  <textarea id="address" rows={3} {...register('address')} className={inputClass} placeholder="House No, Street, City" />
                  {errors.address && <p className={errorClass}>{errors.address.message}</p>}
                </div>

                {/* Pin Code */}
                <div className="space-y-2">
                  <label htmlFor="pinCode" className={labelClass}>Pin Code *</label>
                  <input id="pinCode" type="text" {...register('pinCode')} className={inputClass} placeholder="110001" />
                  {errors.pinCode && <p className={errorClass}>{errors.pinCode.message}</p>}
                </div>
              </div>
            </motion.div>
          )}

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
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Add-ons & Confirmation</h2>
                <p className="text-sm text-gray-500 mt-1">Select optional covers and submit your application.</p>
              </div>

              <div className="space-y-4">
                <label className="text-lg font-bold text-gray-900 dark:text-white">Optional Add-on Covers</label>
                <div className="grid sm:grid-cols-2 gap-4">
                  {addonsList.map((addon) => {
                    const isChecked = watchAddons?.includes(addon);
                    return (
                      <label 
                        key={addon} 
                        className={`flex items-center space-x-3 p-4 rounded-xl border cursor-pointer transition-all ${
                          isChecked 
                            ? 'bg-[#673CDD]/5 border-[#673CDD]' 
                            : 'bg-gray-50 dark:bg-gray-950 border-gray-200 dark:border-gray-800 hover:border-[#673CDD]/50'
                        }`}
                      >
                        <input 
                          type="checkbox" 
                          value={addon}
                          {...register('addons')}
                          className="w-5 h-5 rounded text-[#673CDD] focus:ring-[#673CDD] border-gray-300"
                        />
                        <span className="text-sm font-medium text-gray-800 dark:text-gray-200 select-none">
                          {addon}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              <div className="pt-6 mt-8">
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
                      Yes, I agree with the terms and conditions. *
                    </span>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      By clicking submit, you agree to our privacy policy and terms of service regarding pet insurance processing.
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
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          
          {step < 3 ? (
            <button 
              type="button" 
              onClick={nextStep}
              className="flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-white bg-[#673CDD] hover:bg-[#5a33c2] shadow-lg shadow-[#673CDD]/20 transition-all active:scale-95"
            >
              Next Step <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="flex items-center justify-center gap-2 px-10 py-3 rounded-xl font-bold text-[#1B2A4A] bg-[#FBCE04] hover:bg-[#e6bc00] shadow-lg shadow-[#FBCE04]/20 transition-all active:scale-95 disabled:opacity-70"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
