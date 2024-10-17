import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaSearchLocation } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";


const Sidebar = ()=>{

    const menu= [
        {title:'About Us', href: ''},
        {title:'FeedBack'},
        {title:'Terms & Conditions'},
        {title: 'Privacy Policy'},
        {title:'Contact Us'},
        {title: 'Mitao Bhook'},
        {title: 'Mitao Bhook - Scholarship'},
        {title: 'Careers'}
    ]
    return(
        <>

<div
  class="relative flex h-full w-full max-w-[20rem] flex-col  bg-[#1C1816] bg-clip-border p-4  shadow-xl shadow-blue-gray-900/5">
  <div class="flex items-center gap-4 p-4 mb-2">
    <button className="bg-red-700 text-white rounded-md px-3 py-2 font-bold">Login</button>

    
  </div>
       
        <div className="py-6">
            <hr />
        </div>
 
  <nav class="flex min-w-[240px] flex-col gap p-2 ">
    <div class=" w-full flex flex-col gap-4">


    <button className="flex items-center hover:bg-gray-400 w-full hover:-translate-x-2 text-start p-2 ">
            <CiLocationOn className="text-3xl font-bold text-white bg-red-600 p-1" />
            <h1 className="pl-2">Store Locator</h1>
            </button>


        <button className="flex items-center hover:bg-gray-400 w-full hover:-translate-x-2 text-start p-2 ">
            <FaSearchLocation className="text-3xl font-bold text-white bg-red-600 p-1" />
            <h1 className="pl-2">Track Order</h1>
            </button>

        
            
            <button className="flex items-center hover:bg-gray-400 w-full hover:-translate-x-2 text-start p-2 ">
            <IoIosMenu className="text-3xl font-bold text-white bg-red-600 p-1" />
            <h1 className="pl-2">Explore Menu</h1>
            </button>
    


    </div>

    <div className="py-8">
        <hr />
    </div>



    <div className="flex flex-col gap-5" >
        {menu.map((items)=>(
            <div className="">
            <button className="hover:bg-gray-400 w-full hover:-translate-x-2 text-start p-2 ">{items.title}</button>
            </div>
        ))}
        

   </div> 





   
   
 </nav>
 </div>
 

        
        
        </>
    )
}


export default Sidebar;