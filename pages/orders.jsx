import Link from 'next/link';
import { useState } from 'react';

export default function Orders() {
  const [activeTab, setActiveTab] = useState('all');

  // Sample orders data
  const orders = [
    {
      id: 'ORD-001',
      date: 'March 15, 2024',
      status: 'delivered',
      total: 45.97,
      items: [
        { name: 'Fresh Organic Tomatoes', quantity: 2, price: 4.99 },
        { name: 'Artisan Bread', quantity: 1, price: 8.99 },
        { name: 'Local Honey', quantity: 1, price: 15.99 }
      ],
      shop: 'Green Valley Farm'
    },
    {
      id: 'ORD-002',
      date: 'March 14, 2024',
      status: 'processing',
      total: 32.98,
      items: [
        { name: 'Handmade Soap', quantity: 1, price: 12.99 },
        { name: 'Ceramic Mug', quantity: 1, price: 19.99 }
      ],
      shop: 'Natural Wellness'
    },
    {
      id: 'ORD-003',
      date: 'March 13, 2024',
      status: 'shipped',
      total: 13.98,
      items: [
        { name: 'Organic Apples', quantity: 2, price: 6.99 }
      ],
      shop: 'Orchard Fresh'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'shipped': return 'bg-blue-100 text-blue-800';
      case 'processing': return 'bg-yellow-100 text-yellow-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredOrders = orders.filter(order => {
    if (activeTab === 'all') return true;
    return order.status === activeTab;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-blue-600 hover:text-blue-500">
                ← Back to Home
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">My Orders</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Track Order
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Status Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-8">
            {[
              { id: 'all', name: 'All Orders', count: orders.length },
              { id: 'processing', name: 'Processing', count: orders.filter(o => o.status === 'processing').length },
              { id: 'shipped', name: 'Shipped', count: orders.filter(o => o.status === 'shipped').length },
              { id: 'delivered', name: 'Delivered', count: orders.filter(o => o.status === 'delivered').length }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                {tab.name} ({tab.count})
              </button>
            ))}
          </nav>
        </div>

        {/* Orders List */}
        <div className="space-y-6">
          {filteredOrders.map(order => (
            <div key={order.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Order #{order.id}</h3>
                    <p className="text-sm text-gray-600">Placed on {order.date}</p>
                    <p className="text-sm text-gray-600">From {order.shop}</p>
                  </div>
                  <div className="text-right">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </span>
                    <p className="text-lg font-bold text-gray-900 mt-2">${order.total.toFixed(2)}</p>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-medium text-gray-900 mb-3">Items ({order.items.length})</h4>
                  <div className="space-y-2">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gray-200 rounded-md flex items-center justify-center">
                            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{item.name}</p>
                            <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                          </div>
                        </div>
                        <p className="font-medium text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t">
                  <div className="flex space-x-4">
                    <button className="text-blue-600 hover:text-blue-500 text-sm font-medium">
                      View Details
                    </button>
                    <button className="text-blue-600 hover:text-blue-500 text-sm font-medium">
                      Track Order
                    </button>
                    {order.status === 'delivered' && (
                      <button className="text-blue-600 hover:text-blue-500 text-sm font-medium">
                        Reorder
                      </button>
                    )}
                  </div>
                  {order.status === 'processing' && (
                    <button className="text-red-600 hover:text-red-500 text-sm font-medium">
                      Cancel Order
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredOrders.length === 0 && (
          <div className="text-center py-12">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No orders found</h3>
            <p className="text-gray-600 mb-4">You haven't placed any orders yet</p>
            <Link href="/shop/products" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Start Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
