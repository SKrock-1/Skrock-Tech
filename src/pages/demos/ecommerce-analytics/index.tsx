import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Code, TrendingUp, Users, ShoppingCart, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

const EcommerceAnalyticsDemo: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [metrics, setMetrics] = useState({
    totalSales: 0,
    activeUsers: 0,
    orders: 0,
    revenue: 0
  });

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setMetrics({
        totalSales: 125000,
        activeUsers: 2500,
        orders: 850,
        revenue: 45000
      });
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 p-8 pt-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/projects')}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Projects
            </Button>
            <h1 className="text-2xl font-bold">E-Commerce Analytics Dashboard</h1>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open('https://ecommerce-analytics.vercel.app', '_blank', 'noopener,noreferrer')}
          >
            <Code className="h-4 w-4 mr-2" />
            Full Version
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Total Sales Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <ShoppingCart className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="text-sm text-slate-500 dark:text-slate-400">Total Sales</span>
            </div>
            <div className="text-2xl font-bold text-slate-900 dark:text-white">
              ${metrics.totalSales.toLocaleString()}
            </div>
            <div className="text-sm text-green-500 mt-2">
              +12.5% from last month
            </div>
          </motion.div>

          {/* Active Users Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <span className="text-sm text-slate-500 dark:text-slate-400">Active Users</span>
            </div>
            <div className="text-2xl font-bold text-slate-900 dark:text-white">
              {metrics.activeUsers.toLocaleString()}
            </div>
            <div className="text-sm text-green-500 mt-2">
              +8.3% from last month
            </div>
          </motion.div>

          {/* Orders Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                <TrendingUp className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <span className="text-sm text-slate-500 dark:text-slate-400">Orders</span>
            </div>
            <div className="text-2xl font-bold text-slate-900 dark:text-white">
              {metrics.orders.toLocaleString()}
            </div>
            <div className="text-sm text-green-500 mt-2">
              +15.2% from last month
            </div>
          </motion.div>

          {/* Revenue Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
                <DollarSign className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
              </div>
              <span className="text-sm text-slate-500 dark:text-slate-400">Revenue</span>
            </div>
            <div className="text-2xl font-bold text-slate-900 dark:text-white">
              ${metrics.revenue.toLocaleString()}
            </div>
            <div className="text-sm text-green-500 mt-2">
              +10.8% from last month
            </div>
          </motion.div>
        </div>

        {/* Sales Chart Placeholder */}
        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow mb-8">
          <h2 className="text-lg font-semibold mb-4">Sales Overview</h2>
          <div className="h-64 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center">
            <p className="text-slate-500 dark:text-slate-400">Interactive sales chart will be displayed here</p>
          </div>
        </div>

        {/* Recent Orders Table */}
        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow">
          <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-slate-500 dark:text-slate-400">
                  <th className="pb-4">Order ID</th>
                  <th className="pb-4">Customer</th>
                  <th className="pb-4">Product</th>
                  <th className="pb-4">Amount</th>
                  <th className="pb-4">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-200 dark:border-slate-700">
                  <td className="py-4">#ORD-001</td>
                  <td>John Doe</td>
                  <td>Premium Headphones</td>
                  <td>$299.99</td>
                  <td>
                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full text-xs">
                      Completed
                    </span>
                  </td>
                </tr>
                <tr className="border-t border-slate-200 dark:border-slate-700">
                  <td className="py-4">#ORD-002</td>
                  <td>Jane Smith</td>
                  <td>Smart Watch</td>
                  <td>$199.99</td>
                  <td>
                    <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400 rounded-full text-xs">
                      Processing
                    </span>
                  </td>
                </tr>
                <tr className="border-t border-slate-200 dark:border-slate-700">
                  <td className="py-4">#ORD-003</td>
                  <td>Mike Johnson</td>
                  <td>Wireless Earbuds</td>
                  <td>$149.99</td>
                  <td>
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-xs">
                      Shipped
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceAnalyticsDemo; 