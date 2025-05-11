import {
  CircleDashed,
  Cog,
  Gift,
  MonitorSmartphone,
  Store,
} from 'lucide-react';
import { AiOutlineProduct } from 'react-icons/ai';
import { FaRegUserCircle } from 'react-icons/fa';
import { FaHandHoldingDollar } from 'react-icons/fa6';
import { MdOutlineReport, MdStorefront } from 'react-icons/md';

export const stores = [
  {
    id: 1,
    label: 'Total Skin Store',
    value: 'totalSkinStore',
  },
  {
    id: 2,
    label: 'Patriotic Buys',
    value: 'patrioticBuys',
  },
  {
    id: 3,
    label: 'Affortable Essentials',
    value: 'affortAbleEssentials',
  },
  {
    id: 4,
    label: 'Cambridge Capital',
    value: 'cambridgeCapital',
  },
  {
    id: 5,
    label: 'MRS Bargain LCC',
    value: 'mrsBargainLcc',
  },
];

export const items = [
  {
    title: 'User',
    icons: FaRegUserCircle,
    items: [
      {
        title: 'Users',
        url: '/user/users',
        icon: CircleDashed,
      },
    ],
  },
  {
    title: 'Vendor Management',
    icons: MdStorefront,
    items: [
      {
        title: 'Vendor List',
        url: '/vendor-management/vendor-list',
        icon: CircleDashed,
      },
      {
        title: 'Purchase Order',
        url: '/vendor-management/purchase-order',
        icon: CircleDashed,
      },
      {
        title: 'Purchase List',
        url: '/vendor-management/purchase-list',
        icon: CircleDashed,
      },
      {
        title: 'Receive History',
        url: '/vendor-management/receive-history',
        icon: CircleDashed,
      },
      {
        title: 'Return to Vendor',
        url: '/vendor-management/return-to-vendor',
        icon: CircleDashed,
      },
      {
        title: 'Return to Vendor List',
        url: '/vendor-management/return-to-vendor-list',
        icon: CircleDashed,
      },
      {
        title: 'Vendor Payment',
        url: '/vendor-management/vendor-payment',
        icon: CircleDashed,
      },
      {
        title: 'Vendor Payment List',
        url: '/vendor-management/vendor-payment-list',
        icon: CircleDashed,
      },
      {
        title: 'Vendor Due',
        url: '/vendor-management/vendor-due',
        icon: CircleDashed,
      },
      {
        title: 'Initial Stock Entry',
        url: '/vendor-management/initial-stock-entry',
        icon: CircleDashed,
      },
    ],
  },
  {
    title: 'Product Management',
    icons: AiOutlineProduct,
    items: [
      {
        title: 'High GP',
        url: '/product-management/high-gp',
        icon: CircleDashed,
      },
      {
        title: 'Fast Moving',
        url: '/product-management/fast-moving',
        icon: CircleDashed,
      },
      {
        title: 'Slow Moving',
        url: '/product-management/slow-moving',
        icon: CircleDashed,
      },
      {
        title: 'Price Update',
        url: '/product-management/price-update',
        icon: CircleDashed,
      },
      {
        title: 'Product List',
        url: '/product-management/product-list',
        icon: CircleDashed,
      },
      {
        title: 'Product Category',
        url: '/product-management/product-category',
        icon: CircleDashed,
      },
      {
        title: 'Print Barcode',
        url: '/product-management/print-barcode',
        icon: CircleDashed,
      },
      {
        title: 'Bulk Upload',
        url: '/product-management/bulk-upload',
        icon: CircleDashed,
      },
      {
        title: 'Stock Value',
        url: '/product-management/stock-value',
        icon: CircleDashed,
      },
      {
        title: 'Current Stock',
        url: '/product-management/current-stock',
        icon: CircleDashed,
      },
      {
        title: 'Zero Stock',
        url: '/product-management/zero-stock',
        icon: CircleDashed,
      },
      {
        title: 'Central Stock',
        url: '/product-management/central-stock',
        icon: CircleDashed,
      },
      {
        title: 'Central Zero Stock',
        url: '/product-management/central-zero-stock',
        icon: CircleDashed,
      },
      {
        title: 'Expired Products',
        url: '/product-management/expired-products',
        icon: CircleDashed,
      },
    ],
  },
  {
    title: 'POS Management',
    url: '#',
    icons: MonitorSmartphone,
    items: [
      {
        title: 'Sales List',
        url: '/pos-management/sales-list',
        icon: CircleDashed,
      },
      {
        title: 'Wastage Entry',
        url: '/pos-management/wastage-entry',
        icon: CircleDashed,
      },
      {
        title: 'Wastage List',
        url: '/pos-management/wastage-list',
        icon: CircleDashed,
      },
      {
        title: 'Return form Customer',
        url: '/pos-management/return-form-customer',
        icon: CircleDashed,
      },
      {
        title: 'Return List',
        url: '/pos-management/return-list',
        icon: CircleDashed,
      },
    ],
  },
  {
    title: 'Report',
    icons: MdOutlineReport,
    items: [
      {
        title: 'My Sales',
        url: '/report/my-sales',
        icon: CircleDashed,
      },
      {
        title: 'Sales Man Sales',
        url: '/report/sales-man-sales',
        icon: CircleDashed,
      },
      {
        title: 'Summery Report',
        url: '/report/summery-report',
        icon: CircleDashed,
      },
      {
        title: 'Invoice Details Report',
        url: '/report/invoice-details-report',
        icon: CircleDashed,
      },
      {
        title: 'Details Report',
        url: '/report/details-report',
        icon: CircleDashed,
      },
      {
        title: 'Vendor Sale Report',
        url: '/report/vendor-sale-report',
        icon: CircleDashed,
      },
      {
        title: 'Purchase Report',
        url: '/report/purchase-report',
        icon: CircleDashed,
      },
      {
        title: 'Card Expense',
        url: '/report/card-expense',
        icon: CircleDashed,
      },
      {
        title: 'Central Card Expense',
        url: '/report/central-card-expense',
        icon: CircleDashed,
      },
      {
        title: 'Vendor Due',
        url: '/report/vendor-due',
        icon: CircleDashed,
      },
      {
        title: 'Customer Due',
        url: '/report/customer-due',
        icon: CircleDashed,
      },
      {
        title: 'Customer Ledger',
        url: '/report/customer-ledger',
        icon: CircleDashed,
      },
      {
        title: 'Invoice Due',
        url: '/report/invoice-due',
        icon: CircleDashed,
      },
      {
        title: 'VAT/TAX Report',
        url: '/report/vat-tax-report',
        icon: CircleDashed,
      },
      {
        title: 'VAT Challan',
        url: '/report/vat-challan',
        icon: CircleDashed,
      },
      {
        title: 'Cashbook',
        url: '/report/cashbook',
        icon: CircleDashed,
      },
      {
        title: 'Central Profit Report',
        url: '/report/central-profit-report',
        icon: CircleDashed,
      },
      {
        title: 'Profit Report',
        url: '/report/profit-report',
        icon: CircleDashed,
      },
      {
        title: 'Promotions',
        url: '/report/promotions',
        icon: CircleDashed,
      },
      {
        title: 'Central Promotions',
        url: '/report/central-promotions',
        icon: CircleDashed,
      },
    ],
  },
  {
    title: 'Expense',
    icons: FaHandHoldingDollar,
    url: '#',
    items: [
      {
        title: 'Expense List',
        url: '/expense/expense-list',
        icon: CircleDashed,
      },
      {
        title: 'Expense Entry',
        url: '/expense/expense-entry',
        icon: CircleDashed,
      },
      {
        title: 'Expense (All Stores)',
        url: '/expense/expense-all-stores',
        icon: CircleDashed,
      },
      {
        title: 'Expense Category',
        url: '/expense/expense-category',
        icon: CircleDashed,
      },
    ],
  },
  {
    title: 'Gift Card',
    icons: Gift,
    url: '#',
    items: [
      {
        title: 'Git Card List',
        url: '/gift-card/gift-card-list',
        icon: CircleDashed,
      },
    ],
  },
  {
    title: 'Settings',
    url: '#',
    icons: Cog,
    items: [
      {
        title: 'Warehouse List',
        url: '/settings/warehouse-list',
        icon: CircleDashed,
      },
      {
        title: 'Tax Rules',
        url: '/settings/tax-rules',
        icon: CircleDashed,
      },
      {
        title: 'Payment Cards',
        url: '/settings/payment-cards',
        icon: CircleDashed,
      },
      {
        title: 'Unit List',
        url: '/settings/unit-list',
        icon: CircleDashed,
      },
    ],
  },
  {
    title: 'Stores',
    icons: Store,
    items: [
      {
        title: 'Store List',
        url: '/stores/store-list',
        icon: CircleDashed,
      },
    ],
  },
];
