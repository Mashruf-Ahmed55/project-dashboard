'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { ChevronLeft, ChevronRight, Save } from 'lucide-react';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import FormProgress from './from-progress';
import BasicInfoForm from './steps/step1';
import FinancialDetailsForm from './steps/step2';
import InventoryDetailsForm from './steps/step3';

// Define the form schema
const formSchema = z.object({
  // Basic Information
  orderId: z.string().min(1, 'Order ID is required'),
  status: z.string().min(1, 'Status is required'),
  wfsStatus: z.string().optional(),
  picture: z.string().optional(),
  link: z.string().url('Please enter a valid URL').optional(),

  // Inventory Details
  addUpc: z.string().min(1, 'UPC is required'),
  sentToWfs: z.number().min(0, 'Value must be 0 or greater'),
  received: z.number().min(0, 'Value must be 0 or greater'),
  lost: z.number().min(0, 'Value must be 0 or greater'),
  remaining: z.number().min(0, 'Value must be 0 or greater'),

  // Financial Information
  creditCard: z.string().min(1, 'Credit card information is required'),
  purchase: z.number().min(0, 'Value must be 0 or greater'),
  costPerItem: z.number().min(0, 'Value must be 0 or greater'),
  totalCost: z.number().min(0, 'Value must be 0 or greater'),
  sentToWfsCost: z.number().min(0, 'Value must be 0 or greater'),
  remainingWareHouseCost: z.number().min(0, 'Value must be 0 or greater'),
});

type FormValues = z.infer<typeof formSchema>;

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      orderId: '',
      status: '',
      wfsStatus: '',
      picture: '',
      link: '',
      addUpc: '',
      sentToWfs: 0,
      received: 0,
      lost: 0,
      remaining: 0,
      creditCard: '',
      purchase: 0,
      costPerItem: 0,
      totalCost: 0,
      sentToWfsCost: 0,
      remainingWareHouseCost: 0,
    },
    mode: 'onChange',
  });

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const onSubmit = (data: FormValues) => {
    console.log('Form submitted:', data);
    // Here you would typically send the data to your backend
    alert('Form submitted successfully!');
  };

  return (
    <div className="max-w-3xl mx-auto">
      <FormProgress currentStep={step} totalSteps={totalSteps} />

      <Card className="mt-6 shadow-none">
        <CardHeader>
          <CardTitle>
            {step === 1 && 'Basic Information'}
            {step === 2 && 'Inventory Details'}
            {step === 3 && 'Financial Information'}
          </CardTitle>
        </CardHeader>
        <CardContent className="w-full">
          <FormProvider {...form}>
            <form className="w-full">
              {step === 1 && <BasicInfoForm />}
              {step === 2 && <InventoryDetailsForm />}
              {step === 3 && <FinancialDetailsForm />}
            </form>
          </FormProvider>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            type="button"
            variant="outline"
            onClick={prevStep}
            disabled={step === 1}
          >
            <ChevronLeft className="mr-2 h-4 w-4" /> Previous
          </Button>

          {step < totalSteps ? (
            <Button type="button" onClick={nextStep}>
              Next <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button type="button" onClick={form.handleSubmit(onSubmit)}>
              Submit <Save className="ml-2 h-4 w-4" />
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
