'use client';

import React from 'react';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';

// Sample permissions data
const permissions = [
  { id: 'user', label: 'User' },
  { id: 'staff', label: 'Staff' },
  { id: 'raw_material', label: 'Raw Material' },
  { id: 'stock', label: 'Stock' },
  { id: 'purchase_order', label: 'Purchase Order' },
  { id: 'sales', label: 'Sales' },
  { id: 'product_wastage', label: 'Product Wastage' },
  { id: 'product_return', label: 'Product Return' },
  { id: 'product_manage', label: 'Product Manage' },
  { id: 'po_approval', label: 'PO Approval' },
  { id: 'sales_report', label: 'Sales Report' },
  { id: 'target', label: 'Target' },
  { id: 'expense', label: 'Expense' },
  { id: 'settings', label: 'Settings' },
  { id: 'delete_permission', label: 'Delete Permission' },
  { id: 'edit_permission', label: 'Edit Permission' },
  { id: 'return_to_vendor', label: 'Return to vendor' },
  { id: 'vendor_payment', label: 'Vendor Payment' },
  { id: 'tax_rules', label: 'Tax Rules' },
  { id: 'customer_payment', label: 'Customer Payment' },
  { id: 'vendor_management', label: 'Vendor management' },
  { id: 'expired_products', label: 'Expired Products' },
  { id: 'excel_export', label: 'Excel Export' },
  { id: 'dashboard_report', label: 'Dashboard report' },
  { id: 'price_update', label: 'Price Update' },
  { id: 'sales_man_sales', label: 'Sales man sales' },
  { id: 'my_sales', label: 'My Sales' },
  { id: 'central_inventory', label: 'Central Inventory' },
  { id: 'central_expense_list', label: 'Central Expense List' },
  { id: 'cashbook', label: 'Cashbook' },
  { id: 'central_cashbook', label: 'Central Cashbook' },
  { id: 'gift_card', label: 'Gift Card' },
  { id: 'payment_cards', label: 'Payment Cards' },
  { id: 'receive_history', label: 'Receive History' },
];

// Sample stores data
const stores = [
  'Patriotic Buys',
  'TotalSkinStore.com',
  'Cambridge Capital',
  'AffordableEssentials',
];
type Params = { id: string };

function isPromise(params: unknown): params is Promise<Params> {
  return !!params && typeof (params as Promise<Params>).then === 'function';
}

export default function UserForm({
  params,
}: { params: Params } | { params: Promise<Params> }) {
  const router = useRouter();

  const { id } = isPromise(params) ? React.use(params) : params;

  const isNewUser = id === 'new';
  const [selectedPermissions, setSelectedPermissions] = useState<string[]>([
    'staff',
  ]);

  // For demo purposes, pre-fill form if editing
  const userData = !isNewUser
    ? {
        name: id === '1' ? 'demo' : 'nurul',
        email: id === '1' ? 'demo@demo.com' : '',
        username: id === '1' ? 'demo_user' : 'nurul_user',
        password: '••••••••',
        phone: '',
        address: '',
        userType: 'Admin',
        store: 'Cambridge Capital',
      }
    : {
        name: '',
        email: '',
        username: '',
        password: '',
        phone: '',
        address: '',
        userType: 'Admin',
        store: '',
      };

  const handlePermissionChange = (permission: string, checked: boolean) => {
    if (checked) {
      setSelectedPermissions([...selectedPermissions, permission]);
    } else {
      setSelectedPermissions(
        selectedPermissions.filter((p) => p !== permission)
      );
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    router.push('/');
  };

  return (
    <div className="w-full mx-auto px-6">
      <Card className="border-none shadow-none">
        <CardHeader>
          <CardTitle className="text-3xl font-semibold text-gray-800">
            {isNewUser ? 'Add New User' : 'Edit User'}
          </CardTitle>
          <CardDescription className="text-lg text-gray-600">
            {isNewUser
              ? 'Create a new user account with appropriate permissions.'
              : 'Update user information and access permissions.'}
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit} className="w-full">
          <CardContent className="space-y-8">
            <div className="w-full grid grid-cols-2 gap-8">
              <div className="space-y-3">
                <Label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-700"
                >
                  Name
                </Label>
                <Input
                  id="name"
                  defaultValue={userData.name}
                  required
                  className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="space-y-3">
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue={userData.email}
                  className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="space-y-3">
                <Label
                  htmlFor="username"
                  className="text-sm font-medium text-gray-700"
                >
                  Username
                </Label>
                <Input
                  id="username"
                  defaultValue={userData.username}
                  required
                  className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="space-y-3">
                <Label
                  htmlFor="phone"
                  className="text-sm font-medium text-gray-700"
                >
                  Phone
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  defaultValue={userData.phone}
                  className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="space-y-3">
                <Label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-700"
                >
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  defaultValue={userData.password}
                  required
                  className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="space-y-3">
                <Label
                  htmlFor="address"
                  className="text-sm font-medium text-gray-700"
                >
                  Address
                </Label>
                <Input
                  id="address"
                  defaultValue={userData.address}
                  className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="space-y-3 w-full">
                <Label
                  htmlFor="userType"
                  className="text-sm font-medium text-gray-700"
                >
                  User Type
                </Label>
                <Select defaultValue={userData.userType}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select user type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Admin">Admin</SelectItem>
                    <SelectItem value="Manager">Manager</SelectItem>
                    <SelectItem value="Staff">Staff</SelectItem>
                    <SelectItem value="Customer">Customer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-3 w-full">
                <Label
                  htmlFor="store"
                  className="text-sm font-medium text-gray-700"
                >
                  Store
                </Label>
                <Select defaultValue={userData.store}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select store" />
                  </SelectTrigger>
                  <SelectContent>
                    {stores.map((store) => (
                      <SelectItem key={store} value={store}>
                        {store}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Access Permissions
                </h3>
                <p className="text-sm text-gray-500">
                  Select the permissions for this user
                </p>
              </div>
              <Separator />
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {permissions.map((permission) => (
                  <div
                    key={permission.id}
                    className="flex items-center space-x-3"
                  >
                    <Checkbox
                      id={permission.id}
                      checked={selectedPermissions.includes(permission.id)}
                      onCheckedChange={(checked) =>
                        handlePermissionChange(
                          permission.id,
                          checked as boolean
                        )
                      }
                    />
                    <Label
                      htmlFor={permission.id}
                      className="text-sm font-medium text-gray-700 cursor-pointer"
                    >
                      {permission.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end gap-4">
            <Button
              variant="outline"
              type="button"
              onClick={() => router.push('/')}
              className="hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
            >
              Cancel
            </Button>
            <Button type="submit" className="bg-primary">
              Submit
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
