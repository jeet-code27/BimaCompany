'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'framer-motion';
import { submitDoctorLiability } from '@/app/actions/doctor-liability';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

const formSchema = z.object({
  // Step 1
  doctorName: z.string().min(1, 'Doctor Name is required'),
  mobileNumber: z.string().min(10, 'Valid mobile number required'),
  dob: z.string().min(1, 'Date of Birth is required'),
  mailingAddress: z.string().min(5, 'Mailing Address is required'),
  qualification: z.string().min(1, 'Qualification is required'),
  specialist: z.string().min(1, 'Specialization is required'),
  licenseNumber: z.string().min(1, 'License Number is required'),
  yearOfLicense: z.string().min(4, 'Year of License is required'),
  
  // Step 2
  premisesCovered: z.string().min(5, 'Premises address is required'),
  sumInsured: z.string().min(1, 'Sum Insured is required'),
  descriptionOfProfession: z.string().min(5, 'Description is required'),
  policyPeriodFrom: z.string().min(1, 'Policy Start Date is required'),
  policyPeriodTo: z.string().min(1, 'Policy End Date is required'),
  retroactiveDate: z.string().min(1, 'Retroactive Date is required'),

  // Step 3
  planOption: z.enum(['Option 1', 'Option 2']),
  aoy: z.string().min(1, 'AOY (Aggregate One Year) is required'),
  aoa: z.string().min(1, 'AOA (Any One Accident) is required'),
  totalPremium: z.string().min(1, 'Total Premium is required'),
  coInsurancePercentage: z.string().min(1, 'Co-insurance Percentage is required'),
  insurerName: z.string().min(1, 'Insurer Name is required'),
  
  agreeTerms: z.boolean().refine((val) => val === true, {
    message: 'You must agree to the terms and conditions',
  }),
});

type FormValues = z.infer<typeof formSchema>;

interface DoctorLiabilityFormProps {
  onSuccess?: () => void;
}

export function DoctorLiabilityForm({ onSuccess }: DoctorLiabilityFormProps) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      agreeTerms: false,
    },
  });

  const nextStep = async () => {
    let fieldsToValidate: any[] = [];
    if (step === 1) {
      fieldsToValidate = [
        'doctorName', 'mobileNumber', 'dob', 'mailingAddress', 
        'qualification', 'specialist', 'licenseNumber', 'yearOfLicense'
      ];
    } else if (step === 2) {
      fieldsToValidate = [
        'premisesCovered', 'sumInsured', 'descriptionOfProfession', 
        'policyPeriodFrom', 'policyPeriodTo', 'retroactiveDate'
      ];
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
    // Add the read-only values to the payload before submission
    const finalData = {
      ...data,
      territorialLimits: 'Anywhere in India',
      aoaAoyRatio: '1:1',
      compulsoryExcess: '0.25% of the claim amount subject to a minimum of INR 12,500'
    };
    
    const result = await submitDoctorLiability(finalData);
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
  const readOnlyClass = "w-full rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 px-4 py-3 text-sm text-gray-600 dark:text-gray-400 cursor-not-allowed";

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Stepper Indicator */}
      <div className="mb-10 relative flex justify-between items-center w-full px-4">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-100 dark:bg-gray-800 rounded-full z-0">
          <div 
            className="h-full bg-[#673CDD] rounded-full transition-all duration-700 ease-in-out"
            style={{ width: `${((step - 1) / 2) * 100}%` }}
          />
        </div>
        {['Personal Info', 'Policy Details', 'Coverage & Premium'].map((label, index) => {
          const s = index + 1;
          return (
            <div key={s} className="flex flex-col items-center gap-2 relative z-10">
              <div 
                className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-500 ${
                  step >= s ? 'bg-[#673CDD] text-white shadow-lg shadow-[#673CDD]/30 scale-110' : 'bg-white dark:bg-gray-900 text-gray-400 border-2 border-gray-100 dark:border-gray-800'
                }`}
              >
                {step > s ? <CheckCircle2 className="w-6 h-6" /> : s}
              </div>
              <span className={`text-xs font-semibold ${step >= s ? 'text-[#673CDD]' : 'text-gray-400'}`}>{label}</span>
            </div>
          );
        })}
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
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Personal & Professional Details</h2>
                <p className="text-sm text-gray-500 mt-1">Provide your basic profile and medical credentials.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="doctorName" className={labelClass}>Doctor Name *</label>
                  <input id="doctorName" type="text" {...register('doctorName')} className={inputClass} placeholder="Dr. John Doe" />
                  {errors.doctorName && <p className={errorClass}>{errors.doctorName.message}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="mobileNumber" className={labelClass}>Mobile Number *</label>
                  <input id="mobileNumber" type="tel" {...register('mobileNumber')} className={inputClass} placeholder="9876543210" />
                  {errors.mobileNumber && <p className={errorClass}>{errors.mobileNumber.message}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="dob" className={labelClass}>Date of Birth (dd/mm/yy) *</label>
                  <input id="dob" type="date" {...register('dob')} className={inputClass} />
                  {errors.dob && <p className={errorClass}>{errors.dob.message}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="mailingAddress" className={labelClass}>Mailing Address *</label>
                  <input id="mailingAddress" type="text" {...register('mailingAddress')} className={inputClass} placeholder="123 Clinic Ave, City" />
                  {errors.mailingAddress && <p className={errorClass}>{errors.mailingAddress.message}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="qualification" className={labelClass}>Qualification *</label>
                  <input id="qualification" type="text" {...register('qualification')} className={inputClass} placeholder="MBBS, MD" />
                  {errors.qualification && <p className={errorClass}>{errors.qualification.message}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="specialist" className={labelClass}>Specialist *</label>
                  <input id="specialist" type="text" {...register('specialist')} className={inputClass} placeholder="Cardiologist" />
                  {errors.specialist && <p className={errorClass}>{errors.specialist.message}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="licenseNumber" className={labelClass}>License Number *</label>
                  <input id="licenseNumber" type="text" {...register('licenseNumber')} className={inputClass} placeholder="REG-12345" />
                  {errors.licenseNumber && <p className={errorClass}>{errors.licenseNumber.message}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="yearOfLicense" className={labelClass}>Year of License *</label>
                  <input id="yearOfLicense" type="text" {...register('yearOfLicense')} className={inputClass} placeholder="YYYY" />
                  {errors.yearOfLicense && <p className={errorClass}>{errors.yearOfLicense.message}</p>}
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
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Policy Details</h2>
                <p className="text-sm text-gray-500 mt-1">Specify your coverage requirements.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="premisesCovered" className={labelClass}>Premises Covered *</label>
                  <input id="premisesCovered" type="text" {...register('premisesCovered')} className={inputClass} placeholder="Where Professional Services are performed" />
                  {errors.premisesCovered && <p className={errorClass}>{errors.premisesCovered.message}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="sumInsured" className={labelClass}>Sum Insured (INR) *</label>
                  <input id="sumInsured" type="text" {...register('sumInsured')} className={inputClass} placeholder="e.g. 1,00,00,000" />
                  {errors.sumInsured && <p className={errorClass}>{errors.sumInsured.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className={labelClass}>Territorial Limits</label>
                  <input type="text" value="Anywhere in India" readOnly className={readOnlyClass} />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="descriptionOfProfession" className={labelClass}>Description of the profession / business *</label>
                  <input id="descriptionOfProfession" type="text" {...register('descriptionOfProfession')} className={inputClass} placeholder="Brief description..." />
                  {errors.descriptionOfProfession && <p className={errorClass}>{errors.descriptionOfProfession.message}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="policyPeriodFrom" className={labelClass}>Policy Period (From) *</label>
                  <input id="policyPeriodFrom" type="date" {...register('policyPeriodFrom')} className={inputClass} />
                  {errors.policyPeriodFrom && <p className={errorClass}>{errors.policyPeriodFrom.message}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="policyPeriodTo" className={labelClass}>Policy Period (To) *</label>
                  <input id="policyPeriodTo" type="date" {...register('policyPeriodTo')} className={inputClass} />
                  {errors.policyPeriodTo && <p className={errorClass}>{errors.policyPeriodTo.message}</p>}
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="retroactiveDate" className={labelClass}>Retroactive Date *</label>
                  <input id="retroactiveDate" type="date" {...register('retroactiveDate')} className={inputClass} />
                  {errors.retroactiveDate && <p className={errorClass}>{errors.retroactiveDate.message}</p>}
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
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Premium & Coverage Limits</h2>
                <p className="text-sm text-gray-500 mt-1">Finalize underwriting and premium specifics.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2 md:col-span-2">
                  <label className={labelClass}>Plan Option *</label>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" value="Option 1" {...register('planOption')} className="w-4 h-4 text-[#673CDD] focus:ring-[#673CDD]" />
                      <span className="text-sm font-medium">Option 1</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" value="Option 2" {...register('planOption')} className="w-4 h-4 text-[#673CDD] focus:ring-[#673CDD]" />
                      <span className="text-sm font-medium">Option 2</span>
                    </label>
                  </div>
                  {errors.planOption && <p className={errorClass}>{errors.planOption.message}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="aoy" className={labelClass}>Aggregate One Year (AOY) INR *</label>
                  <input id="aoy" type="text" {...register('aoy')} className={inputClass} placeholder="INR Amount" />
                  {errors.aoy && <p className={errorClass}>{errors.aoy.message}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="aoa" className={labelClass}>Any One Accident (AOA) INR *</label>
                  <input id="aoa" type="text" {...register('aoa')} className={inputClass} placeholder="INR Amount" />
                  {errors.aoa && <p className={errorClass}>{errors.aoa.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className={labelClass}>AOA:AOY Ratio</label>
                  <input type="text" value="1:1" readOnly className={readOnlyClass} />
                </div>

                <div className="space-y-2">
                  <label htmlFor="totalPremium" className={labelClass}>Total Premium (INR) *</label>
                  <input id="totalPremium" type="text" {...register('totalPremium')} className={inputClass} placeholder="Final Premium" />
                  {errors.totalPremium && <p className={errorClass}>{errors.totalPremium.message}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="coInsurancePercentage" className={labelClass}>Co-insurance Percentage *</label>
                  <input id="coInsurancePercentage" type="text" {...register('coInsurancePercentage')} className={inputClass} placeholder="e.g. 10%" />
                  {errors.coInsurancePercentage && <p className={errorClass}>{errors.coInsurancePercentage.message}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="insurerName" className={labelClass}>Name of the Insurer *</label>
                  <input id="insurerName" type="text" {...register('insurerName')} className={inputClass} placeholder="Insurer Company" />
                  {errors.insurerName && <p className={errorClass}>{errors.insurerName.message}</p>}
                </div>

                <div className="space-y-2 md:col-span-2 mt-4 p-4 bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-900/30 rounded-xl">
                  <label className="text-xs font-bold text-orange-800 dark:text-orange-400 uppercase tracking-wide block mb-1">Compulsory Excess (Each and Every Claim)</label>
                  <p className="text-sm font-medium text-orange-900 dark:text-orange-200">
                    0.25% of the claim amount subject to a minimum of INR 12,500
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100 dark:border-gray-800">
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
                      By clicking submit, you confirm that all provided information is accurate and agree to the underwriting terms.
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
              className="flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-white bg-[#673CDD] hover:bg-[#5b32c6] shadow-lg shadow-[#673CDD]/20 transition-all active:scale-95"
            >
              Next Step <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="flex items-center justify-center gap-2 px-10 py-3 rounded-xl font-bold text-[#1B2A4A] bg-[#FBCE04] hover:bg-[#e6bc00] shadow-lg shadow-[#FBCE04]/20 transition-all active:scale-95 disabled:opacity-70"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Policy Form'}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
