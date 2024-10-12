import React from "react";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer=()=>{
    return(
        <>
           <section>
                <div className=" bg-[#1C1816]  py-8 px-8">

                 <div className="container mx-auto">
                 <div className="flex flex-row items-center justify-center gap-6 mb-8">
                       <div>
                       <img src="/images/logo.png" alt="logo" />
                       </div>
                       <div className="flex flex-row gap-3">
                            <FaYoutube className="bg-white text-red-600  rounded-full text-3xl p-1" />
                            <FaFacebookF className="bg-white text-blue-900  rounded-full text-3xl p-1"  />
                            <FaInstagram className="bg-white text-gray-900  rounded-full text-3xl p-1"  />
                       </div>

                    </div>

                    <div className="grid md:grid-cols-4 sm:grid-cols-1">
                        <div className="flex flex-col gap-2">
                            <Link >About Us</Link>
                            <Link>Mitao Bhook</Link>
                            <Link>Mitao Bhook - Scholarship</Link>
                            <Link >Privacy Policy</Link>
                            <Link >Careers</Link>
                        </div>


                        <div className="flex flex-col gap-2">
                            <Link>Contact Us</Link>
                            <Link>Store Locator</Link>
                            <Link>Track Order</Link>
                        </div>

                        <div className="py-2">
                            <Link>Term & Conditions</Link>
                        </div>

                        <div className="flex md:flex-col  gap-4" >
                            <img src="/images/apple.png" alt="apple" className="w-32" />
                            <img src="/images/google.png" alt="google" className="w-32" />
                        </div>

                    </div>

                 </div>
                </div>
                </section>
        </>
    )
}

export default Footer;