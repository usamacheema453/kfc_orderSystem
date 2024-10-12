import React from "react";
import { RiMenu2Fill } from "react-icons/ri";

const Navbar = () => {
  return (
    <>
      {/* Main container */}
      <div className="w-full px-4 sm:px-16 my-6">
        {/* First row: Logo and Login/Cart */}
        <div className="flex justify-between items-center">
          {/* Left side: Menu and Logo */}
          <div className="flex items-center">
            <RiMenu2Fill className="text-2xl font-bold" />
            <img src="/images/logo.png" className="px-3" alt="logo" />





 {/* Delivery and Pickup Options */}
 <div className="hidden lg:flex lg:flex-row sm:gap-x-3 gap-y-2 sm:gap-y-0 mb-4 sm:mb-0">
  <div className="flex items-center bg-[#1C1816] px-4 py-2 rounded-md">
    <img src="/images/deliver.png" className="w-6 h-6" alt="delivery" />
    <p className="pl-2 font-bold">Delivery</p>
  </div>
  <div className="flex items-center bg-[#1C1816] px-4 py-2 rounded-md">
    <img src="/images/pickup.png" className="w-6 h-6" alt="pickup" />
    <p className="pl-2 font-bold">Pickup</p>
  </div>
</div>












          </div>




          

          {/* Right side: Cart and Login */}
          <div className="flex items-center gap-x-4">
            <div>
              <img src="/images/cart.png" className="w-8 h-8 rounded-md" alt="cart" />
            </div>
            <div className="hidden sm:block">
              <button className="bg-red-600 px-2 py-1 rounded-md text-white">Login</button>
            </div>
          </div>
        </div>

        {/* Second row: Delivery and Pickup Options (hidden on larger screens) */}
        <div className="md:hidden sm:mt-0 w-full sm:flex flex-row sm:justify-center">
          <div className="flex justify-center gap-4 sm:gap-x-3 gap-y-2 sm:gap-y-0">
            {/* Delivery Option */}
            <div className="flex items-center bg-[#1C1816] px-4 py-2 rounded-md">
              <img src="/images/deliver.png" className="w-6 h-6" alt="delivery" />
              <p className="pl-2 text-white font-bold">Delivery</p>
            </div>
            {/* Pickup Option */}
            <div className="flex items-center bg-[#1C1816] px-4 py-2 rounded-md">
              <img src="/images/pickup.png" className="w-6 h-6" alt="pickup" />
              <p className="pl-2 text-white font-bold">Pickup</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
