'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'framer-motion';
import { submitWeddingInsurance } from '@/app/actions/wedding-insurance';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

const formSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Valid email required'),
  phone: z.string().min(10, 'Valid phone number required'),
  eventLocation: z.string().min(5, 'Detailed location is required'),
  eventType: z.enum(['Wedding', 'Pre-Wedding (Sangeet/Mehendi)', 'Reception', 'Engagement', 'Other']),
  eventDate: z.string().min(1, 'Event date is required'),
  eventTime: z.string().min(1, 'Event time is required'),
  attendees: z.string().min(1, 'Number of attendees is required'),
  agreeTerms: z.boolean().refine((val) => val === true, {
    message: 'You must agree to the terms and conditions',
  }),
});

type FormValues = z.infer<typeof formSchema>;

interface WeddingInsuranceFormProps {
  onSuccess?: () => void;
}

export function WeddingInsuranceForm({ onSuccess }: WeddingInsuranceFormProps) {
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
      fieldsToValidate = ['firstName', 'lastName', 'email', 'phone'];
    } else if (step === 2) {
      fieldsToValidate = ['eventType', 'eventLocation', 'eventDate', 'eventTime', 'attendees'];
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
    const result = await submitWeddingInsurance(data);
    setIsSubmitting(false);

    if (result.success) {
      toast.success(result.message);
      if (onSuccess) onSuccess();
    } else {
      toast.error(result.message);
    }
  };

  // Base input classes for a premium look
  const inputClass = "w-full rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/50 focus:border-rose-500 transition-all text-gray-900 dark:text-gray-100 placeholder:text-gray-400";
  const labelClass = "text-sm font-semibold text-gray-700 dark:text-gray-300 block mb-2";
  const errorClass = "text-red-500 text-xs mt-1.5 font-medium";

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Stepper Indicator */}
      <div className="mb-10 relative flex justify-between items-center w-full px-2">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-100 dark:bg-gray-800 rounded-full z-0">
          <div 
            className="h-full bg-rose-500 rounded-full transition-all duration-700 ease-in-out"
            style={{ width: `${((step - 1) / 2) * 100}%` }}
          />
        </div>
        {[1, 2, 3].map((s) => (
          <div 
            key={s} 
            className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-500 ${
              step >= s ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/30 scale-110' : 'bg-white dark:bg-gray-900 text-gray-400 border-2 border-gray-100 dark:border-gray-800'
            }`}
          >
            {step > s ? <CheckCircle2 className="w-6 h-6" /> : s}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl shadow-black/5 border border-gray-100 dark:border-gray-800 p-8 md:p-10 relative overflow-hidden">
        
        {/* Subtle background gradient for premium feel */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />

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
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Personal Information</h2>
                <p className="text-sm text-gray-500 mt-1">Let's start with your contact details.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className={labelClass}>First Name *</label>
                  <input id="firstName" type="text" {...register('firstName')} className={inputClass} placeholder="John" />
                  {errors.firstName && <p className={errorClass}>{errors.firstName.message}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="lastName" className={labelClass}>Last Name *</label>
                  <input id="lastName" type="text" {...register('lastName')} className={inputClass} placeholder="Doe" />
                  {errors.lastName && <p className={errorClass}>{errors.lastName.message}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className={labelClass}>Email Address *</label>
                  <input id="email" type="email" {...register('email')} className={inputClass} placeholder="you@example.com" />
                  {errors.email && <p className={errorClass}>{errors.email.message}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className={labelClass}>Phone Number *</label>
                  <input id="phone" type="tel" {...register('phone')} className={inputClass} placeholder="9876543210" />
                  {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
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
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Event Details</h2>
                <p className="text-sm text-gray-500 mt-1">Tell us about the big day.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="eventType" className={labelClass}>Type of Event *</label>
                  <select id="eventType" {...register('eventType')} className={inputClass}>
                    <option value="">Select Event Type</option>
                    <option value="Wedding">Wedding Ceremony</option>
                    <option value="Pre-Wedding (Sangeet/Mehendi)">Pre-Wedding (Sangeet/Mehendi)</option>
                    <option value="Reception">Reception</option>
                    <option value="Engagement">Engagement</option>
                    <option value="Other">Other Celebration</option>
                  </select>
                  {errors.eventType && <p className={errorClass}>{errors.eventType.message}</p>}
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="eventLocation" className={labelClass}>Location of the Event *</label>
                  <input id="eventLocation" type="text" {...register('eventLocation')} className={inputClass} placeholder="Venue Name, City, State" />
                  {errors.eventLocation && <p className={errorClass}>{errors.eventLocation.message}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="eventDate" className={labelClass}>Date of the Event *</label>
                  <input id="eventDate" type="date" {...register('eventDate')} className={inputClass} />
                  {errors.eventDate && <p className={errorClass}>{errors.eventDate.message}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="eventTime" className={labelClass}>Time of the Event *</label>
                  <input id="eventTime" type="time" {...register('eventTime')} className={inputClass} />
                  {errors.eventTime && <p className={errorClass}>{errors.eventTime.message}</p>}
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="attendees" className={labelClass}>Expected Number of Attendees *</label>
                  <select id="attendees" {...register('attendees')} className={inputClass}>
                    <option value="">Select Range</option>
                    <option value="Less than 100">Less than 100</option>
                    <option value="100 - 500">100 - 500</option>
                    <option value="500 - 1000">500 - 1000</option>
                    <option value="More than 1000">More than 1000</option>
                  </select>
                  {errors.attendees && <p className={errorClass}>{errors.attendees.message}</p>}
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
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Confirmation</h2>
                <p className="text-sm text-gray-500 mt-1">Review and submit your application.</p>
              </div>

              <div className="pt-6">
                <label className="flex items-start space-x-4 cursor-pointer group">
                  <div className="flex-shrink-0 mt-1">
                    <input 
                      type="checkbox" 
                      {...register('agreeTerms')}
                      className="w-5 h-5 rounded text-rose-500 focus:ring-rose-500 border-gray-300"
                    />
                  </div>
                  <div className="space-y-1">
                    <span className="text-base font-bold text-gray-900 dark:text-gray-100 group-hover:text-rose-500 transition-colors">
                      Yes, I agree with the terms and conditions. *
                    </span>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      By clicking submit, you agree to our privacy policy and terms of service regarding event insurance processing.
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
              className="flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-white bg-rose-500 hover:bg-rose-600 shadow-lg shadow-rose-500/20 transition-all active:scale-95"
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
