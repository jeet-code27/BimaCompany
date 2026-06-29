'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { submitTravelInsurance } from '@/app/actions/travel-insurance';
import { PlaneTakeoff, Loader2 } from 'lucide-react';

const formSchema = z.object({
  firstName: z.string().min(1, 'First Name is required'),
  secondName: z.string().min(1, 'Second Name is required'),
  destination: z.string().min(1, 'Destination is required'),
  dob: z.string().min(1, 'Date of Birth is required'),
  departureDate: z.string().min(1, 'Departure Date is required'),
  returnDate: z.string().min(1, 'Return Date is required'),
  purpose: z.string().min(1, 'Purpose of trip is required'),
  modeOfTransport: z.string().min(1, 'Mode of transport is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
});

type FormValues = z.infer<typeof formSchema>;

export function TravelInsuranceForm({ onSuccess }: { onSuccess?: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    const result = await submitTravelInsurance(data);
    setIsSubmitting(false);

    if (result.success) {
      toast.success(result.message);
      if (onSuccess) onSuccess();
    } else {
      toast.error(result.message);
    }
  };

  const inputClass = "w-full rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-gray-900 dark:text-gray-100 placeholder:text-gray-400";
  const labelClass = "text-sm font-semibold text-gray-700 dark:text-gray-300 block mb-2";
  const errorClass = "text-red-500 text-xs mt-1.5 font-medium";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl shadow-black/5 border border-gray-100 dark:border-gray-800 p-6 md:p-10 relative overflow-hidden">
      
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />

      <div className="space-y-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="firstName" className={labelClass}>First Name</label>
            <input id="firstName" type="text" {...register('firstName')} className={inputClass} placeholder="John" />
            {errors.firstName && <p className={errorClass}>{errors.firstName.message}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="secondName" className={labelClass}>Second Name</label>
            <input id="secondName" type="text" {...register('secondName')} className={inputClass} placeholder="Doe" />
            {errors.secondName && <p className={errorClass}>{errors.secondName.message}</p>}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="email" className={labelClass}>Email Address</label>
            <input id="email" type="email" {...register('email')} className={inputClass} placeholder="john@example.com" />
            {errors.email && <p className={errorClass}>{errors.email.message}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className={labelClass}>Phone Number</label>
            <input id="phone" type="tel" {...register('phone')} className={inputClass} placeholder="+91 XXXXX XXXXX" />
            {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="dob" className={labelClass}>Date of Birth</label>
            <input id="dob" type="date" {...register('dob')} className={inputClass} />
            {errors.dob && <p className={errorClass}>{errors.dob.message}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="destination" className={labelClass}>Destination</label>
            <input id="destination" type="text" {...register('destination')} className={inputClass} placeholder="Country/City" />
            {errors.destination && <p className={errorClass}>{errors.destination.message}</p>}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="departureDate" className={labelClass}>Departure Date</label>
            <input id="departureDate" type="date" {...register('departureDate')} className={inputClass} />
            {errors.departureDate && <p className={errorClass}>{errors.departureDate.message}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="returnDate" className={labelClass}>Return Date</label>
            <input id="returnDate" type="date" {...register('returnDate')} className={inputClass} />
            {errors.returnDate && <p className={errorClass}>{errors.returnDate.message}</p>}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="purpose" className={labelClass}>Purpose of the trip</label>
            <select id="purpose" {...register('purpose')} className={inputClass}>
              <option value="">Select Purpose</option>
              <option value="Tourism/Leisure">Tourism / Leisure</option>
              <option value="Business">Business</option>
              <option value="Education/Study">Education / Study</option>
              <option value="Medical/Treatment">Medical / Treatment</option>
              <option value="Visiting Family/Friends">Visiting Family/Friends</option>
            </select>
            {errors.purpose && <p className={errorClass}>{errors.purpose.message}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="modeOfTransport" className={labelClass}>Mode of Transport</label>
            <select id="modeOfTransport" {...register('modeOfTransport')} className={inputClass}>
              <option value="">Select Transport</option>
              <option value="Flight">Flight</option>
              <option value="Train">Train</option>
              <option value="Cruise/Ship">Cruise / Ship</option>
              <option value="Road/Bus/Car">Road / Bus / Car</option>
            </select>
            {errors.modeOfTransport && <p className={errorClass}>{errors.modeOfTransport.message}</p>}
          </div>
        </div>

        <div className="pt-6">
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/20 transition-all active:scale-[0.98] disabled:opacity-70"
          >
            {isSubmitting ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                <PlaneTakeoff className="w-5 h-5" />
                Submit Application
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
}
