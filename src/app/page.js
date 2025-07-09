'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [showLoginPage, setShowLoginPage] = useState(false);

  useEffect(() => {
    // Show login page after animation completes (1s animation + 1s delay)
    const timer = setTimeout(() => {
      setShowLoginPage(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (showLoginPage) {
    return (
      <main className="min-h-screen bg-[#fce4c7] flex items-center justify-center"
      style={{backgroundImage: "url('/groceryman.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "690px 180px",
         
        backgroundSize: "auto 80vh"
         
      }}>
        
      
        <div className="bg-white p-4 rounded-lg shadow-lg w-100">
          {/* Image at top of form */}
          <div className="text-center mb-4">
   <Image
  src="/formimage.png"
  alt="Latehar Delivery"
  width={1200}
  height={400}
  style={{ width: "4000px", height: "80px", objectFit: "contain" }}
  className=""
/>


          </div>
          
          <h1 className="text-2xl font-bold text-center mb-4 font-poppins">
            "Latehar Ka Apna Delivery App!"
          </h1>
          
          <div className="space-y-3">
            <Link
              href="/login"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-700 transition-colors block text-center"
            >
              Login
            </Link>

            {/* Orders */}
            <Link href="/orders" className="group">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Track Orders</h4>
                <p className="text-gray-600">Keep track of your orders and manage your purchases easily.</p>
              </div>
            </Link>
          </div>
          
          <div className="mt-4 text-center">
            <Link
              href="/shop/products"
              className="text-blue-600 hover:text-blue-800 text-sm"
            >
              Browse as Guest
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen bg-[#fce4c7] overflow-x-hidden flex justify-center items-center">
      
      {/* Circular orange background */}
      <div className="absolute w-80 h-80 bg-[#f9a826] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"></div>

      {/* Logo and Text */}
      <div className="relative z-10 text-center">
        <Image
          src="/logoo.png"
          alt="Bazar Se Logo"
          width={550}
          height={250}
          className="logo-scooter animate-driveIn mx-auto"
          priority
        />
        <h1 className="text-[90px] font-extrabold text-gray-900 tracking-widest font-poppins">
          BazarSe
        </h1>
      </div>
      
    </main>
  );
}