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
            
            <Link
              href="/signup"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-700 transition-colors block text-center"
            >
              Sign Up
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