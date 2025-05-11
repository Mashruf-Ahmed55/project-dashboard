'use client';

import MultiStepForm from '@/components/addProduct/AddProduct';

export default function page() {
  return (
    <main className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Product Management
      </h1>
      <MultiStepForm />
    </main>
  );
}
