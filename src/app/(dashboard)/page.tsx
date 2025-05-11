'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { eachDayOfInterval, endOfMonth, format, startOfMonth } from 'date-fns';
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

// Dynamic current month data
const today = new Date();
const monthDays = eachDayOfInterval({
  start: startOfMonth(today),
  end: endOfMonth(today),
});

const data = monthDays.map((day) => ({
  date: format(day, 'MMM d'),
  sales: 0,
}));

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6 bg-gray-50 h-[calc(100dvh-64px)]">
      {/* Sales Chart at Top */}
      <Card className="shadow-md rounded-2xl">
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold mb-4">
            Sales Chart ({format(today, 'MMMM yyyy')})
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="date"
                interval={3}
                angle={-45}
                textAnchor="end"
                height={60}
              />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" fill="#6e60b1" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Lower Section: 3 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column: Tracking ID + Barcode */}
        <div className="space-y-4">
          <Card className="shadow-sm rounded-xl">
            <CardContent className="flex items-center gap-2 p-4">
              <Input placeholder="Enter Tracking ID..." />
              <Button className="bg-primary">Search</Button>
            </CardContent>
          </Card>

          <Card className="shadow-sm rounded-xl">
            <CardContent className="flex items-center gap-2 p-4">
              <Input placeholder="Enter Barcode..." />
              <Button className="bg-primary">Search</Button>
            </CardContent>
          </Card>
        </div>

        {/* Middle Column: Daily Sale */}
        <Card className="shadow-sm rounded-xl">
          <CardContent className="p-4 space-y-4">
            <div className="flex gap-2 items-center">
              <Input type="date" defaultValue={format(today, 'yyyy-MM-dd')} />
              <Button className="bg-primary">Search</Button>
            </div>
            <div className="text-sm font-medium">
              TOTAL INVOICE: <span className="font-bold">0</span>
            </div>
            <div className="text-sm font-medium">
              SUB TOTAL: <span className="font-bold">0.00</span>
            </div>
          </CardContent>
        </Card>

        {/* Right Column: Payments Table */}
        <Card className="shadow-sm rounded-xl">
          <CardContent className="p-4">
            <h3 className="text-base font-semibold mb-2">Payments</h3>
            <table className="w-full text-sm border">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left p-2 border">SL</th>
                  <th className="text-left p-2 border">CARD NAME</th>
                  <th className="text-right p-2 border">AMOUNT</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-2 border">TOTAL</td>
                  <td className="p-2 border"></td>
                  <td className="p-2 text-right border">0.00</td>
                </tr>
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
