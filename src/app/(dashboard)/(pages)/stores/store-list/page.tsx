import { StoreForm } from '@/components/main/store-form';
import { StoreList } from '@/components/main/store-list';

export default function page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-8">
          Store Management
        </h1>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Add New Store
          </h2>
          <StoreForm />
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <StoreList />
        </div>
      </div>
    </div>
  );
}
