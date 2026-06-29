'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { submitCyberInsurance } from '@/app/actions/cyber-insurance';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

const formSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Valid email required'),
  phone: z.string().min(10, 'Valid phone number required'),
  agreeTerms: z.boolean().refine((val) => val === true, {
    message: 'You must agree to the terms and conditions',
  }),
});

type FormValues = z.infer<typeof formSchema>;

interface CyberInsuranceFormProps {
  onSuccess?: () => void;
}

export function CyberInsuranceForm({ onSuccess }: CyberInsuranceFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      agreeTerms: false,
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    const result = await submitCyberInsurance(data);
    setIsSubmitting(false);

    if (result.success) {
      toast.success(result.message);
      if (onSuccess) {
        onSuccess();
      }
    } else {
      toast.error(result.message);
    }
  };

  // Base input classes for a premium look
  const inputClass = "w-full rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-gray-900 dark:text-gray-100 placeholder:text-gray-400";
  const labelClass = "text-sm font-semibold text-gray-700 dark:text-gray-300 block mb-2";
  const errorClass = "text-red-500 text-xs mt-1.5 font-medium";

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl shadow-black/5 border border-gray-100 dark:border-gray-800 p-8 md:p-10 relative overflow-hidden">
        
        {/* Subtle background gradient for premium feel */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-8 relative z-10"
        >
          <div className="border-b border-gray-100 dark:border-gray-800 pb-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Cyber Insurance Quote</h2>
            <p className="text-sm text-gray-500 mt-1">Get a quick quote to secure your digital assets.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* First Name */}
            <div className="space-y-2">
              <label htmlFor="firstName" className={labelClass}>First Name *</label>
              <input id="firstName" type="text" {...register('firstName')} className={inputClass} placeholder="John" />
              {errors.firstName && <p className={errorClass}>{errors.firstName.message}</p>}
            </div>

            {/* Last Name */}
            <div className="space-y-2">
              <label htmlFor="lastName" className={labelClass}>Last Name *</label>
              <input id="lastName" type="text" {...register('lastName')} className={inputClass} placeholder="Doe" />
              {errors.lastName && <p className={errorClass}>{errors.lastName.message}</p>}
            </div>

            {/* Email */}
            <div className="space-y-2 md:col-span-2">
              <label htmlFor="email" className={labelClass}>Email Address *</label>
              <input id="email" type="email" {...register('email')} className={inputClass} placeholder="you@company.com" />
              {errors.email && <p className={errorClass}>{errors.email.message}</p>}
            </div>

            {/* Phone */}
            <div className="space-y-2 md:col-span-2">
              <label htmlFor="phone" className={labelClass}>Phone Number *</label>
              <input id="phone" type="tel" {...register('phone')} className={inputClass} placeholder="9876543210" />
              {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
            </div>
          </div>

          <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
            <label className="flex items-start space-x-4 cursor-pointer group">
              <div className="flex-shrink-0 mt-1">
                <input 
                  type="checkbox" 
                  {...register('agreeTerms')}
                  className="w-5 h-5 rounded text-blue-600 focus:ring-blue-500 border-gray-300"
                />
              </div>
              <div className="space-y-1">
                <span className="text-base font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 transition-colors">
                  Yes, I agree with the terms and conditions. *
                </span>
                <p className="text-sm text-gray-500 leading-relaxed">
                  By clicking submit, you agree to our privacy policy and terms of service regarding insurance processing.
                </p>
              </div>
            </label>
            {errors.agreeTerms && <p className={errorClass}>{errors.agreeTerms.message}</p>}
          </div>

          {/* Submit Button */}
          <div className="mt-8 flex justify-end relative z-10">
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full md:w-auto flex items-center justify-center gap-2 px-10 py-3.5 rounded-xl font-bold text-[#1B2A4A] bg-[#FBCE04] hover:bg-[#e6bc00] shadow-lg shadow-[#FBCE04]/20 transition-all active:scale-95 disabled:opacity-70"
            >
              {isSubmitting ? 'Submitting...' : 'Get Quote Now'} <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </form>
    </div>
  );
}
