"use client"
<<<<<<< HEAD
import React from "react";
import { assets, BagIcon, BoxIcon, CartIcon, HomeIcon } from "@/assets/assets";
=======
import React, { useState } from "react";
import { assets, CartIcon } from "@/assets/assets";
>>>>>>> e23eb9ba502a25a5bbe3a8c2cbaea51051c75502
import Link from "next/link"
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { useClerk, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const { isSeller, router, user } = useAppContext();
  const { openSignIn } = useClerk();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

<<<<<<< HEAD
  const { isSeller, router, user } = useAppContext();
  const { openSignIn } = useClerk()

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700">
      <Image
        className="cursor-pointer w-28 md:w-32"
        onClick={() => router.push('/')}
        src={assets.logo}
        alt="logo"
      />
      <div className="flex items-center gap-4 lg:gap-8 max-md:hidden">
        <Link href="/" className="hover:text-gray-900 transition">
          Home
        </Link>
        <Link href="/all-products" className="hover:text-gray-900 transition">
          Shop
        </Link>
        <Link href="/" className="hover:text-gray-900 transition">
          About Us
        </Link>
        <Link href="/" className="hover:text-gray-900 transition">
          Contact
        </Link>

        {isSeller && <button onClick={() => router.push('/seller')} className="text-xs border px-4 py-1.5 rounded-full">Seller Dashboard</button>}

      </div>

      <ul className="hidden md:flex items-center gap-4 ">
        <Image className="w-4 h-4" src={assets.search_icon} alt="search icon" />
        {
        user 
        ? <>
        <UserButton>
          <UserButton.MenuItems>
            <UserButton.Action label="Cart" labelIcon={<CartIcon />} onClick={()=> router.push('/cart')} />
          </UserButton.MenuItems>
          <UserButton.MenuItems>
            <UserButton.Action label="My Orders" labelIcon={<BagIcon />} onClick={()=> router.push('/my-orders')} />
          </UserButton.MenuItems>
        </UserButton>
        </>
         : <button onClick={openSignIn} className="flex items-center gap-2 hover:text-gray-900 transition">
          <Image src={assets.user_icon} alt="user icon" />
          Account
        </button>}
      </ul>

      <div className="flex items-center md:hidden gap-3">
        {isSeller && <button onClick={() => router.push('/seller')} className="text-xs border px-4 py-1.5 rounded-full">Seller Dashboard</button>}
        {
        user 
        ? <>
        <UserButton>
          <UserButton.MenuItems>
            <UserButton.Action label="Home" labelIcon={<HomeIcon />} onClick={()=> router.push('/')} />
          </UserButton.MenuItems>
          <UserButton.MenuItems>
            <UserButton.Action label="Products" labelIcon={<BoxIcon />} onClick={()=> router.push('/all-products')} />
          </UserButton.MenuItems>
          <UserButton.MenuItems>
            <UserButton.Action label="Cart" labelIcon={<CartIcon />} onClick={()=> router.push('/cart')} />
          </UserButton.MenuItems>
          <UserButton.MenuItems>
            <UserButton.Action label="My Orders" labelIcon={<BagIcon />} onClick={()=> router.push('/my-orders')} />
          </UserButton.MenuItems>
        </UserButton>
        </>
         : <button onClick={openSignIn} className="flex items-center gap-2 hover:text-gray-900 transition">
          <Image src={assets.user_icon} alt="user icon" />
          Account
        </button>}
=======
  // Close mobile menu when navigating
  const handleNavigation = (path) => {
    router.push(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="flex items-center justify-between px-4 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700 bg-white relative z-50">
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Logo */}
        <Image
          className="cursor-pointer w-24 md:w-32 absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none"
          onClick={() => handleNavigation('/')}
          src={assets.logo}
          alt="logo"
        />

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          <Link href="/" className="hover:text-gray-900 transition">
            Home
          </Link>
          <Link href="/all-products" className="hover:text-gray-900 transition">
            Shop
          </Link>
          <Link href="/" className="hover:text-gray-900 transition">
            About Us
          </Link>
          <Link href="/" className="hover:text-gray-900 transition">
            Contact
          </Link>
        </div>

        {/* Desktop Right Side Actions */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Search Icon - Hidden on mobile to save space */}
          <Image 
            className="w-4 h-4 cursor-pointer hidden md:block" 
            src={assets.search_icon} 
            alt="search icon" 
          />
          
          {user ? (
            <>
              {/* Desktop: Text labels */}
              <div className="hidden md:flex items-center gap-4">
                <button 
                  onClick={() => handleNavigation('/cart')}
                  className="flex items-center gap-2 hover:text-gray-900 transition"
                >
                  <CartIcon />
                  Cart
                </button>
                <button 
                  onClick={() => handleNavigation('/my-orders')}
                  className="flex items-center gap-2 hover:text-gray-900 transition"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  Orders
                </button>
              </div>

              {/* Mobile: Cart icon only */}
              <div className="flex md:hidden items-center gap-3">
                <button 
                  onClick={() => handleNavigation('/cart')}
                  className="p-2 hover:text-gray-900 transition relative"
                  title="Cart"
                >
                  <CartIcon />
                </button>
              </div>

              <UserButton />
            </>
          ) : (
            <button 
              onClick={openSignIn} 
              className="flex items-center gap-2 hover:text-gray-900 transition"
            >
              <Image src={assets.user_icon} alt="user icon" className="w-5 h-5" />
              <span className="hidden md:inline">Account</span>
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black bg-opacity-50" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* Mobile Menu */}
      <div className={`
        md:hidden fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Mobile Menu Header with Close Button */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <Image
            className="w-28 cursor-pointer"
            onClick={() => handleNavigation('/')}
            src={assets.logo}
            alt="logo"
          />
          {/* Close Icon */}
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 hover:text-gray-900 transition"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-4">
          {/* Navigation Links */}
          <div className="flex flex-col space-y-4">
            <button 
              onClick={() => handleNavigation('/')}
              className="text-left py-3 px-4 hover:bg-gray-100 rounded-lg transition font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavigation('/all-products')}
              className="text-left py-3 px-4 hover:bg-gray-100 rounded-lg transition font-medium"
            >
              All Products
            </button>
            {user && (
              <button 
                onClick={() => handleNavigation('/my-orders')}
                className="text-left py-3 px-4 hover:bg-gray-100 rounded-lg transition font-medium"
              >
                My Orders
              </button>
            )}
            <button 
              onClick={() => handleNavigation('/')}
              className="text-left py-3 px-4 hover:bg-gray-100 rounded-lg transition font-medium"
            >
              About Us
            </button>
            <button 
              onClick={() => handleNavigation('/')}
              className="text-left py-3 px-4 hover:bg-gray-100 rounded-lg transition font-medium"
            >
              Contact
            </button>
          </div>
        </div>
>>>>>>> e23eb9ba502a25a5bbe3a8c2cbaea51051c75502
      </div>
    </>
  );
};

export default Navbar;