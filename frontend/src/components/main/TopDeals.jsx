import React from "react";
import { MdFavoriteBorder } from "react-icons/md";


const TopDeals=()=>{



    
    const topdeals=[
        {src:'/images/krunch.png', label: 'Krunch Burder', details:'Twister + 1 Regular fries + 1 Regular drink' , price:'290'},
        {src:'/images/hot_wings.png', label: 'Hot Wings Bucket',details:'Twister + 1 Regular fries + 1 Regular drink' , price:'650' },
        {src:'/images/mighty.png', label:'Mighty Zinger',details:'Twister + 1 Regular fries + 1 Regular drink', price: '750'},
        {src:'/images/festivsl3.png', label:'Family Festival 3',details:'Twister + 1 Regular fries + 1 Regular drink', price:'2450'}
    ]




    return(
        <>
              <section className="py-6">
  <div className="container mx-auto px-6">
    <p className="text-2xl font-bold underline decoration-red-600 decoration-4 underline-offset-8">
      Top Deals
    </p>
  </div>

  <div className="container md:mx-auto my-6 mx-6">
    {/* Horizontal scroll container with custom scrollbar */}
    <div className="flex flex-row overflow-x-auto space-x-4 py-6 scrollbar-thin scrollbar-thumb-slate-950 scrollbar-track-black">
      {topdeals.map((item) => (
        <div key={item} className="bg-[#1C1816] w-60 rounded-xl shrink-0">
          <div className="text-center overflow-hidden space-x-2">
            <span className="border-8 border-red-600"></span>
            <span className="border-8 border-red-600"></span>
            <span className="border-8 border-red-600"></span>

            <div className="text-red-600 text-2xl text-right">
              <MdFavoriteBorder className="relative inline-block right-2 -top-5 " />
            </div>
          </div>

          <div>
            <img src={item.src} alt={item.label} />
          </div>
          <div className="p-2">
            <p className="text-xl font-bold">{item.label}</p>
            <p className="text-sm">{item.details}</p>
            <p className="py-2">Rs. {item.price}</p>
          </div>

          <div className="text-center relative top-5">
            <button className="uppercase text-sm bg-red-600 px-2 py-1 rounded-md">
              + Add to Bucket
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>








                <section className="container mx-auto py-8 px-6">

                    <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-6 ">
                        <div className="rounded-xl">
                            <img src="/images/pick_banner.png" alt="pick banner" className="rounded-xl" />
                        </div>
                        <div className="rounded-lg">
                            <img src="/images/favorite.png" alt="favorite" className="rounded-xl" />
                        </div>
                        <div className="rounded-lg">
                            <img src="/images/scanorder.jpeg" alt="pick banner" className="rounded-xl" />
                        </div>
                        <div className="bg-[#1C1816] text-center p-6 rounded-lg">
                            <div className="w-full">
                            <img src="/images/meal.png" alt="favorite" className="w-72 h-40 mx-auto" />
                            </div>
                            <p className="text-xl font-semibold">Adding 11 herbs and spices, Explore our menu and add items to your cart.</p>
                            <button className="bg-red-600 py-1 px-3 my-2 rounded-xl text-xl font-bold">Explore Menu</button>
                        </div>
                        

                    </div>
                </section>

        
        </>
    )
}

export default TopDeals;