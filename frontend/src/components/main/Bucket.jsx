import React from "react";
import Navbar from "../Navbar/Navbar";
import { FaAngleRight, FaAngleLeft, FaMinus, FaPlus } from "react-icons/fa";

const Bucket = () => {
  return (
    <>
      <div className="mx-10">
        <div>
          <Navbar />
        </div>

        <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-8 mt-8 pt-4 md:pt-0">



          {/* Cart Section */}
          <section className="lg:col-span-2 overflow-y-auto max-h-[calc(100vh-80px)] scrollbar-none">
            <div className="flex flex-col">
              <div className="min-h-[28rem] max-h-[600px] bg-[#1C1816] p-4 rounded-xl">
                <div className="flex items-center gap-3 pb-4">
                  <FaAngleLeft className="border-2 rounded-full border-red-600 text-2xl p-1" />
                  <h1 className="md:text-xl font-bold">Items From Your Cart</h1>
                </div>
                <hr />

                {/* Scrollable section with auto-scroll when items exceed max height */}
                <section id="item-from-your-cart" className="pt-3">
                  {/* Example Item */}
                  <div className="bg-black mt-2 rounded-md p-3">
                    <div className="flex  gap-2 justify-between">
                      <div className="flex  items-center">
                       <div> <img src="/images/ala_carte.png" className="w-24" /></div>
                        <div className="text-center">
                          <h1 className="text-xs md:text-xl font-bold">
                            Krunch Burger
                          </h1>
                          <p className="text-xs">(Krunch Burger)</p>
                          <div className=" space-x-2 space-y-1">
                            <button className="border-2 border-red-600 p-1 rounded-md">
                              <FaMinus />
                            </button>
                            <span>1</span>
                            <button className="border-2 border-red-600 p-1 rounded-md">
                              <FaPlus />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div>
                        <p className="font-bold">Rs 290</p>
                      </div>
                    </div>
                  </div>
                  {/* Repeat for more items */}
                 
                </section>
              </div>

              {/* You May Also Like Section */}
              <div className="mt-3 mx-2">
                <h1 className="font-bold sm:text-sm md:text-xl">
                  You may also like
                </h1>

                {/* Scrollable items */}
                <div className="flex flex-row gap-3 overflow-x-auto scrollbar-thin scrollbar-track-black scrollbar-thumb-zinc-900 whitespace-nowrap my-6">
                  {/* Repeat for more items */}
                  <div className="border-2 border-slate-900 p-2 border-t-0 shadow-lg rounded-lg">
                    <img src="/images/ala_carte.png" className="w-36 mx-auto" />
                    <h1 className="font-semibold text-center">One Piece Chicken</h1>

                    <div className="flex flex-row items-center gap-4 py-2">
                      <p className="text-sm">Rs 300</p>
                      <button className="text-sm bg-red-600 px-1 py-1 font-semibold rounded-md hover:border-red-500 hover:bg-white hover:text-red-600">
                        + Add to Bucket
                      </button>
                    </div>
                  </div>
                  {/* Repeat for more items */}
                    {/* Repeat for more items */}
                    <div className="border-2 border-slate-900 p-2 border-t-0 shadow-lg rounded-lg">
                    <img src="/images/ala_carte.png" className="w-36 mx-auto" />
                    <h1 className="font-semibold text-center">One Piece Chicken</h1>

                    <div className="flex flex-row items-center gap-4 py-2">
                      <p className="text-sm">Rs 300</p>
                      <button className="text-sm bg-red-600 px-1 py-1 font-semibold rounded-md hover:border-red-500 hover:bg-white hover:text-red-600">
                        + Add to Bucket
                      </button>
                    </div>
                  </div>
                    {/* Repeat for more items */}
                    <div className="border-2 border-slate-900 p-2 border-t-0 shadow-lg rounded-lg">
                    <img src="/images/ala_carte.png" className="w-36 mx-auto" />
                    <h1 className="font-semibold text-center">One Piece Chicken</h1>

                    <div className="flex flex-row items-center gap-4 py-2">
                      <p className="text-sm">Rs 300</p>
                      <button className="text-sm bg-red-600 px-1 py-1 font-semibold rounded-md hover:border-red-500 hover:bg-white hover:text-red-600">
                        + Add to Bucket
                      </button>
                    </div>
                  </div>
                    {/* Repeat for more items */}
                    <div className="border-2 border-slate-900 p-2 border-t-0 shadow-lg rounded-lg">
                    <img src="/images/ala_carte.png" className="w-36 mx-auto" />
                    <h1 className="font-semibold text-center">One Piece Chicken</h1>

                    <div className="flex flex-row items-center gap-4 py-2">
                      <p className="text-sm">Rs 300</p>
                      <button className="text-sm bg-red-600 px-1 py-1 font-semibold rounded-md hover:border-red-500 hover:bg-white hover:text-red-600">
                        + Add to Bucket
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>



          {/* Order Details Section */}
          <section className="col-span-1">
            <div className="sticky top-0 md:bg-[#1C1816] rounded-xl w-full">
              <div className="md:block hidden">
                <h1 className="px-4 py-2 sm:text-sm md:text-xl font-bold">Order Details</h1>
              </div>
              <hr className="md:block hidden border-red-600 border" />
              <section className="p-5">
                <div className="bg-black p-3 my-2 rounded-lg md:block hidden">
                  <label className="font-bold block mb-2">Special Instructions (Optional)</label>
                  <textarea
                    type="text"
                    rows={2}
                    className="w-full rounded-md bg-[#1C1816] placeholder:text-sm p-3 placeholder:text-gray-700 outline-none"
                    placeholder="Add Cooking/Delivery Instructions (optional)"
                  />
                </div>

                <div className="bg-black p-3  rounded-lg">
                  <h1 className="text-center text-xl font-bold">Your Order</h1>

                  <div className="space-y-2">
                    <div className="flex flex-row justify-between">
                      <p>Sub Total :</p>
                      <p>Rs 0</p>
                    </div>
                    <div className="flex flex-row justify-between">
                      <p>Delivery Fee :</p>
                      <p>Rs 0</p>
                    </div>
                    <div className="flex flex-row justify-between">
                      <p>GST (13%) :</p>
                      <p>Rs 342</p>
                    </div>
                    <hr />
                    <div className="flex flex-row justify-between">
                      <p>Total :</p>
                      <p>Rs 342</p>
                    </div>
                  </div>
                </div>
              </section>

              <button className="flex flex-row justify-between w-full bg-red-600 px-3 py-5 rounded-t-lg">
                <span>
                  0 Items <span>| Rs 0</span>
                </span>
                <span className="flex flex-row items-center gap-2 font-bold">
                  View Bucket <FaAngleRight className="bg-white mt-1 text-black rounded-full" />
                </span>
              </button>
            </div>
          </section>


                  </div>
      </div>
    </>
  );
};

export default Bucket;
