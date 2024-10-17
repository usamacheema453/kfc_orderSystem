import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaMinus, FaPlus, FaAngleRight } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

const MenuDetails = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className="w-2/3 bg-[#1C1816] mx-auto my-20 rounded-2xl relative">
        {/* Cancel Icon Positioned in the Top Right */}
        <div className="absolute top-4 right-4">
          <MdCancel className="text-red-600 text-3xl cursor-pointer" />
        </div>

        <div className="relative overflow-hidden space-x-2 text-center">
              <span className="border-8 border-red-600"></span>
              <span className="border-8 border-red-600"></span>
              <span className="border-8 border-red-600"></span>
            </div>

        {/* Grid Layout for Small and Large Screens */}
        <div className="grid md:grid-cols-5 sm:grid-cols-1">
          {/* Product details for Small Screens shown first */}
          <div className="col-span-2 sm:order-1 md:order-2">
            <div>
              <img src="/images/ala_carte.png" className="mt-16 w-60 mx-auto" />
            </div>

            <div className="px-4 pt-4">
              <h1 className="text-xl font-bold text-center">
                Zinger Stacker Combo
              </h1>
              <p className="text-center text-sm px-2">
                The irresistible combo of 2 Signature Zingers + 2 pcs Hot &
                Crispy Chicken + 1 Large fries + 2 Regular drinks
              </p>
            </div>

            <div className="flex flex-row justify-center items-center gap-2 py-3">
              <button className="border border-red-600 rounded-md p-2">
                <FaMinus />
              </button>
              <span className="font-semibold">1</span>
              <button className="border border-red-600 rounded-md p-2">
                <FaPlus />
              </button>
            </div>

            <div className="bg-red-600 flex justify-between p-3 md:rounded-lg sm:rounded-t-lg m-4 rounded-tr-xl cursor-pointer">
              <span>
                <span className="font-bold">Rs 290</span>
              </span>

              <span className="flex flex-row items-center font-bold text-xl gap-2">
                View Bucket <FaAngleRight className="bg-white text-black rounded-full" />
              </span>
            </div>
          </div>

          {/* Accordion shown below Product details for Small Screens */}
          <div className="col-span-3 sm:order-2 md:order-1">
         

            <div id="accordion" className="space-y-2 md:m-8 sm:m-4">
              {/* Accordion Item 1 */}
              <div className="rounded-t-xl">
                <h2 id="heading-1">
                  <button
                    type="button"
                    className="flex items-center rounded-t-xl justify-between w-full p-5 font-medium bg-red-600 hover:bg-red-600 dark:hover:bg-red-600 focus:outline-none"
                    onClick={() => toggleAccordion(1)}
                  >
                    <p className="font-bold tracking-wider">Choose an Option</p>
                    <IoMdArrowDropdown className="mt-2" />
                  </button>
                </h2>
                {activeIndex === 1 && (
                  <div className="p-3 bg-black rounded-b-xl">
                    <p className="mb-2">
                      <div className="flex items-center">
                        <input
                          checked
                          id="default-radio-2"
                          type="radio"
                          value=""
                          name="default-radio"
                          className="w-4 h-4 border-2 border-red-600"
                        />
                        <label
                          htmlFor="default-radio-2"
                          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Krunch Burger
                        </label>
                      </div>
                    </p>
                  </div>
                )}
              </div>

              {/* Accordion Item 2 */}
              <div className="rounded-t-xl">
                <h2 id="heading-2">
                  <button
                    type="button"
                    className="flex items-center rounded-t-xl justify-between w-full p-5 font-medium bg-red-600 hover:bg-red-600 dark:hover:bg-red-600 focus:outline-none"
                    onClick={() => toggleAccordion(2)}
                  >
                    <p className="font-bold tracking-wider">Drink</p>
                    <p className="flex items-center gap-2">
                      (Optional) <IoMdArrowDropdown className="mt-1" />
                    </p>
                  </button>
                </h2>
                {activeIndex === 2 && (
                  <div className="p-3 bg-black rounded-b-xl">
                    <p className="mb-2">
                      <div className="flex items-center">
                        <input
                          checked
                          id="default-radio-2"
                          type="radio"
                          value=""
                          name="default-radio"
                          className="w-4 h-4 border-2 border-red-600"
                        />
                        <label
                          htmlFor="default-radio-2"
                          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Krunch Burger
                        </label>
                      </div>
                    </p>
                  </div>
                )}
              </div>

              {/* Accordion Item 3 */}
              <div className="rounded-t-xl">
                <h2 id="heading-3">
                  <button
                    type="button"
                    className="flex items-center rounded-t-xl justify-between w-full p-5 font-medium bg-red-600 hover:bg-red-600 dark:hover:bg-red-600 focus:outline-none"
                    onClick={() => toggleAccordion(3)}
                  >
                    <p className="font-bold tracking-wider">Ads On</p>
                    <p className="flex items-center gap-2">
                      (Optional) <IoMdArrowDropdown className="mt-1" />
                    </p>
                  </button>
                </h2>
                {activeIndex === 3 && (
                  <div className="p-3 bg-black rounded-b-xl">
                    <p className="mb-2">
                      <div className="flex items-center">
                        <input
                          checked
                          id="default-radio-2"
                          type="radio"
                          value=""
                          name="default-radio"
                          className="w-4 h-4 border-2 border-red-600"
                        />
                        <label
                          htmlFor="default-radio-2"
                          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Krunch Burger
                        </label>
                      </div>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuDetails;
