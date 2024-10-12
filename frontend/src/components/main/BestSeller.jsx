import React from "react";
import Navbar from "../Navbar/Navbar";
import Main from "./Main";
import TopDeals from "./TopDeals";
import Footer from "../footer/Footer";


const BestSeller = ()=>{


    const bestseller=[
        {src:'/images/krunch.png', label: 'Krunch Burger', price:'290'},
        {src:'/images/hot_wings.png', label: 'Hot Wings Bucket' , price:'650' },
        {src:'/images/mighty.png', label:'Mighty Zinger', price: '750'},
        {src:'/images/festivsl3.png', label:'Family Festival 3', price:'2450'}
 
    ]






    return(
        <>
            <div>
                <div>
                    <Navbar />
                </div>

                <div>
                    <Main />
                </div>




              <section className="py-6 ">
                    <div className='container md:mx-auto px-6'>
                        <p className='text-2xl font-bold underline decoration-red-600 decoration-4 underline-offset-8'>Best Sellers</p>
                    </div>

                    <div className="container mx-auto my-6 sm:px-8 md:px-2">
                        <div className="flex flex-row overflow-x-auto w-full scrollbar-thin scrollbar-thumb-slate-950 scrollbar-track-black">
                        {bestseller.map((item) => (
                            <div key={item} className="bg-[#1C1816] rounded-md mx-3" style={{ minWidth: "300px", width: "300px" }}>
                            <div className="text-center space-x-2">
                                <span className="border-8 border-red-600"></span>
                                <span className="border-8 border-red-600"></span>
                                <span className="border-8 border-red-600"></span>
                            </div>

                            <div className="py-4">
                                <p className="text-xl pl-4 pt-2 font-bold">{item.label}</p>
                                <div className="w-full text-right">
                                <p className="relative inline-block bg-red-600 pr-3 pl-5">
                                    <span className="text-sm">Rs </span>{item.price}
                                </p>
                                </div>

                                <div>
                                <img src={item.src} alt={item.label} className="w-full h-auto" />
                                </div>
                            </div>
                            </div>
                        ))}
                        </div>
                    </div>
                    </section>



                <TopDeals />
                <Footer />
            </div>
        </>

    )
}

export default BestSeller;