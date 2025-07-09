'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import './page.css';

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
      <main className="login-page">
        <div className="login-form">
          {/* Background Image */}
          <div className="form-image-container">
            <Image
              src="/formimage.png"
              alt="Latehar Delivery"
              width={1200}
              height={400}
              className="form-image"
            />
          </div>
          
          {/* Content overlay */}
          <div className="form-content">
            <h1 className="form-title">
              "Latehar Ka Apna Delivery App!"
            </h1>
            
            <div className="form-buttons">
              <Link
                href="/login"
                className="form-button"
              >
                Login
              </Link>

              <Link
                href="/signup"
                className="form-button"
              >
                Sign Up
              </Link>
            </div>
            
            <div className="guest-link-container">
              <Link
                href="/shop/products"
                className="guest-link"
              >
                Browse as Guest
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="loading-screen">
      
      {/* Circular orange background */}
      <div className="loading-circle"></div>

      {/* Logo and Text */}
      <div className="loading-content">
        <Image
          src="/logoo.png"
          alt="Bazar Se Logo"
          width={550}
          height={250}
          className="loading-logo logo-scooter animate-driveIn"
          priority
        />
        <h1 className="loading-title">
          BazarSe
        </h1>
      </div>
      
    </main>
  );
}