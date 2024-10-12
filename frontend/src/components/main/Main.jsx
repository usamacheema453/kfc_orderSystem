import React, { useState, useEffect } from 'react';
import Navbar from "../Navbar/Navbar";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";


const Main = () => {
    // State to hold the current index
    const [currentSlide, setCurrentSlide] = useState(0);
    // Total number of slides
    const totalSlides = 5;
    // Interval for auto-rotate slides
    const autoSlideInterval = 8000;
    let slideInterval;

    // Effect to handle auto-rotation
    useEffect(() => {
        startSlideTimer();
        return () => stopSlideTimer(); // Cleanup to stop the timer when component unmounts
    }, [currentSlide]);

    // Function to start the slide timer
    const startSlideTimer = () => {
        slideInterval = setInterval(() => {
            setCurrentSlide((currentSlide + 1) % totalSlides);
        }, autoSlideInterval);
    };

    // Function to stop the slide timer
    const stopSlideTimer = () => {
        clearInterval(slideInterval);
    };

    // Function to update the current slide based on index
    const updateSlide = (index) => {
        stopSlideTimer();
        setCurrentSlide(index);
        startSlideTimer();
    };

     // Data for the carousel items
  const carouselItems = [
    { src: '/images/everyday.png', label: 'EveryDay Value' },
    { src: '/images/ala_carte.png', label: 'Ala-Carte & Combos' },
    { src: '/images/promotion.png', label: 'Promotion' },
    { src: '/images/signature.png', label: 'Signature Boxes' },
    { src: '/images/sharing.png', label: 'Sharing' },
    { src: '/images/snacks.png', label: 'Snacks & Beverages' },
    { src: '/images/midnight.png', label: 'Midnight (Start at 12 am)' },
  ];


    //state to keep track the currect index
    const [currentIndex, setCurrectIndex] = useState(0);
    const visibleItems= 5;



    const updateIndex=(newIndex)=>{
        if(newIndex < 0){
            newIndex = carouselItems.length - visibleItems;
        }else if(newIndex > carouselItems.length - visibleItems){
            newIndex = 0;
        }
        setCurrectIndex(newIndex);
    }



    return (
        <>
            <div>
                

                {/* carousel section */}
                <section id='carousel' className="relative w-full">
    <div className="relative w-full h-64 md:h-96 overflow-hidden">
        {Array.from({ length: totalSlides }).map((_, index) => (
            <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            >
                <img
                    src={`/images/cover${index + 1}.jpg`}
                    className="block w-full h-full object-cover"
                    alt={`Slide ${index + 1}`}
                />
            </div>
        ))}
    </div>

    {/* Left button */}
    <button
        type="button"
        className="absolute top-1/2 left-2 transform -translate-y-1/2 z-30 flex items-center p-2 md:p-4 cursor-pointer"
        onClick={() => updateSlide((currentSlide - 1 + totalSlides) % totalSlides)}
    >
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-600 hover:bg-red-800 ">
            <FaAngleLeft />
        </span>
    </button>

    {/* Right button */}
    <button
        type="button"
        className="absolute top-1/2 right-2 transform -translate-y-1/2 z-30 flex items-center p-2 md:p-4 cursor-pointer"
        onClick={() => updateSlide((currentSlide + 1) % totalSlides)}
    >
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-600 hover:bg-red-800 ">
            <FaAngleRight />
        </span>
    </button>
</section>

                    
                   
                        <div className='text-center my-6'>
                        <button className='w-1/2 bg-red-600 text-xl font-bold py-1 rounded-md'>
                            Reorder
                        </button>
                        </div>



                        <section>
                                <div className='container mx-auto'>
                                    <p className='text-2xl font-bold underline decoration-red-600 decoration-4 underline-offset-8'> Explore Menu</p>
                                </div>

                               




                                

                                <div id="controls-carousel" className="relative w-full py-4">
                        <div className="container mx-auto w-full overflow-hidden relative flex flex-row text-center gap-6">
                            <div className="flex transition-transform duration-700 ease-in-out gap-x-8 py-8" style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}>
                            {carouselItems.map((item, index) => (
                                <div key={index} className="transition ease-in-out delay-600 hover:-translate-y-4  duration-300 cursor-pointer flex-none w-1/5 rounded-l-full py-6 rounded-tr-full  bg-[#1C1816]" data-carousel-item>
                                <img src={item.src} className="w-28 h-28 mx-auto" alt={item.label} />
                                <p className='relative inline-block pb-1.5 text-center font-bold custom-underline'>{item.label}</p>
                                </div>
                            ))}
                        </div>
                        </div>

                        <button
                                type="button"
                                className="absolute top-1/2 left-2 transform -translate-y-1/2 z-30 flex items-center p-2 md:p-4 cursor-pointer"
                                onClick={() => updateIndex(currentIndex - 1)}
                            >
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-600 hover:bg-red-800 ">
                                <FaAngleLeft />
                            </span>
                        </button>

                        {/* Right button */}
                        <button
                            type="button"
                            className="absolute top-1/2 right-2 transform -translate-y-1/2 z-30 flex items-center p-2 md:p-4 cursor-pointer"
                            onClick={() => updateIndex(currentIndex + 1)}
                        >
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-600 hover:bg-red-800 ">
                                <FaAngleRight />
                            </span>
                        </button>


                        </div>



                        </section>


              
                    




            </div>
        </>
    );
}

export default Main;
