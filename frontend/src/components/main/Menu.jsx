import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { MdFavoriteBorder } from "react-icons/md";
import { FaAngleLeft } from "react-icons/fa";
import { fetchProductsByCategories } from '../redux/productsSlice'; 
import { useDispatch, useSelector } from 'react-redux';

const Menu=()=>{
    const dispatch= useDispatch();
   

    const categorizedProducts = useSelector(state => state.products.categorizedProducts);
    const status = useSelector(state=> state.products.status);
    const error = useSelector(state => state.products.error);

      // Define the category order
      const categoryOrder = [
        'EveryDay Value', 
        'Ala-Carte-&-Combos', 
        'Promotion', 
        'Signature-Boxes', 
        'Sharing', 
        'Snacks-&-Beverages', 
        'Midnight (Start at 12 am)'
    ];

    //references for each categoy section

    const categoryRefs = useRef([]);
    const [activeCategory, setActiveCategory] = useState(0);


    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 80; // Offset for nav height
            categoryRefs.current.forEach((ref, index) => {
                if (ref) { // Check if ref is defined
                    const top = ref.offsetTop;
                    const height = ref.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveCategory(index);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleCategoryClick = (index) => {
        const categoryRef = categoryRefs.current[index];
        if (categoryRef) {
            categoryRef.scrollIntoView({ behavior: 'smooth' });
        }
    };




    useEffect(()=>{
        dispatch(fetchProductsByCategories(categoryOrder));
    }, [dispatch]);

 

    // if(status == 'loading') return <p>Loading</p>;
    // if(error) return <p>Error: {error} </p>;



    return(
        <>
            {/* <div>
            <div>
               
                <Navbar />

            </div>


<div className="fixed sm:top-[100px] md:top-[80px] z-40 shadow-md w-full bg-black mt"> 
 
  <div className=" py-5">
    
    <div className="bg-black"> 
      <nav className="flex flex-row justify-center gap-4 w-full px-4 sm:px-16 overflow-x-auto whitespace-nowrap">
        {categoryOrder.map((item, index) => (
          <div key={index}>
            <button
              onClick={() => handleCategoryClick(index)}
              className={`py-2 px-3 rounded-md text-sm ${activeCategory === index ? 'bg-red-600 text-white' : 'bg-[#1C1816]'}`}
            >
              {item}
            </button>
          </div>
        ))}
      </nav>
    </div>
  </div>
</div>







                <section className='mx-12 mb-4  py-4 mt-12'>
              
                        

                        <div className='grid grid-cols-6  overflow-y-scroll h-screen scrollbar-none'>
                            <div className='col-span-4'>




                            <section className=' my-2'>
                                {categoryOrder.map((categoryName, index) => (
                                    <div key={categoryName} className='my-10'ref={el => (categoryRefs.current[index] = el)}>
                                        <div className='py-2'>
                            
                                            <p className='relative inline-block uppercase text-2xl pb-1.5 text-center font-bold custom-underline-heading'>{categoryName}</p>
                                            </div>

                                        <div className="flex flex-wrap gap-6">
                                            {categorizedProducts[categoryName] && categorizedProducts[categoryName].map(product => (

                                            <div key={product._id} className="bg-[#1C1816] w-60 rounded-xl shrink-0 my-2 cursor-pointer group transition-all duration-300 ease-in-out">
                                            <div className="text-red-600 text-2xl text-right">
                                                <MdFavoriteBorder className="relative inline-block right-2" />
                                            </div>
                                            <div className="overflow-hidden">
                                                <img src={product.image} alt={product.title} className='w-full h-60 mx-auto transform transition-transform duration-500 ease-in-out group-hover:scale-110' />
                                            </div>
                                            <div className="px-2">
                                                <p className="text-xl capitalize font-bold ">{product.title}</p>
                                                <p className="text-sm truncate py-2 ">{product.details}</p>
                                                <p className="py-2">Rs. {product.price}</p>
                                            </div>
                                            <div className="text-center relative top-4">
                                                <button className="uppercase text-sm bg-red-600 px-2 py-1 rounded-md hover:bg-white hover:text-red-600 hover:font-bold hover:border-red-600 hover:border">
                                                    + Add to Bucket
                                                </button>
                                            </div>
                                            </div>

                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </section>





                               

                            </div>
                            
                          
                            <div className='col-span-2 ml-4 sticky top-0 h-screen '  >
                                <div className='bg-[#1C1816] rounded-lg mt-10'>
                                    <div className='flex items-center px-3 py-3 text-xl justify-between' >
                                    <p>0 Items Added </p>
                                    <div className="relative overflow-hidden space-x-2 right-8 -top-3 ">
                                                <span className="border-8 border-red-600"></span>
                                                <span className="border-8 border-red-600"></span>
                                                <span className="border-8 border-red-600"></span>
                                            </div>
                                    </div>

                                    <hr className='' />


                                    <div className='py-6'>

                                        <img src='/images/meal.png' className='p-6 mx-auto ' />
                                        <p className='text-center py-4 font-bold '>
                                            You haven’t added any items in bucket yet
                                        </p>
                                    </div>


                                    <div className='bg-red-600 flex justify-between p-4 rounded-tl-xl rounded-tr-xl cursor-pointer'>
                                        <span>
                                            0 Items <span className='font-bold'>| Rs 0</span>

                                        </span>
                                        
                                        <span className='flex flex-row items-center font-bold text-xl gap-2'>View Bucket  <FaAngleLeft className='bg-white text-black rounded-full' /> </span>
                                       
                                    </div>

                                </div>
                            </div>
                            </div>

               
                </section>
            </div> */}



<div>
      <Navbar />
      <div className=' fixed z-40 w-full pt-14  md:pt-0 '>
            <nav className="flex flex-row lg:justify-center gap-4 w-full px-4 pb-6 sm:px-16 overflow-x-auto whitespace-nowrap scrollbar-none scrollbar-thin scrollbar-track-black scrollbar-thumb-zinc-900">
                {categoryOrder.map((item, index) => (
                <div key={index}>
                    <button
                    onClick={() => handleCategoryClick(index)}
                    className={`py-2 px-3 rounded-md text-sm ${activeCategory === index ? 'bg-red-600 text-white' : 'bg-[#1C1816]'}`}
                    >
                    {item}
                    </button>
                </div>
                ))}
            </nav>


            <section className='grid grid-cols-1 lg:grid-cols-3 md:mx-4 lg:mx-10'>
    <div className='lg:col-span-2 col-span-1 overflow-y-auto h-screen scrollbar-none '>
        {categoryOrder.map((categoryName, index) => (
            <div key={categoryName} className='my-6 md:my-10' ref={el => (categoryRefs.current[index] = el)}>
                <div className='py-2 px-3'>
                    <p className='relative inline-block uppercase text-lg md:text-2xl pb-1.5 text-center font-bold custom-underline-heading'>{categoryName}</p>
                </div>

                <div className="mx-3 flex flex-row justify-evenly gap-4 flex-wrap ">
                    {categorizedProducts[categoryName] && categorizedProducts[categoryName].map(product => (
                        <div key={product._id} className="bg-[#1C1816] w-64 lg:w-60 rounded-xl shrink-0 my-4 cursor-pointer group transition-all duration-300 ease-in-out">
                            <div className="text-red-600 text-xl md:text-2xl text-right">
                                <MdFavoriteBorder className="relative inline-block right-2" />
                            </div>
                            <div className="overflow-hidden">
                                <img src={product.image} alt={product.title} className='w-full h-52 md:h-60 mx-auto transform transition-transform duration-500 ease-in-out group-hover:scale-110' />
                            </div>
                            <div className="px-2">
                                <p className="text-lg md:text-xl capitalize font-bold">{product.title}</p>
                                <p className="text-xs md:text-sm truncate py-2">{product.details}</p>
                                <p className="py-2">Rs. {product.price}</p>
                            </div>
                            <div className="text-center relative top-2 md:top-4">
                                <button className="uppercase text-xs md:text-sm bg-red-600 px-2 py-1 rounded-md hover:bg-white hover:text-red-600 hover:font-bold hover:border-red-600 hover:border">
                                    + Add to Bucket
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ))}
    </div>
    
    <div className='lg:col-span-1 col-span-1 mt-6 lg:mt-10 ml-5'>
        <div className='bg-[#1C1816] rounded-lg'>
            <div className='flex items-center px-3 py-3 text-lg md:text-xl justify-between'>
                <p>0 Items Added</p>
                <div className="relative overflow-hidden space-x-2 right-6 md:right-8 -top-3">
                    <span className="border-4 md:border-8 border-red-600"></span>
                    <span className="border-4 md:border-8 border-red-600"></span>
                    <span className="border-4 md:border-8 border-red-600"></span>
                </div>
            </div>

            <hr />

            <div className='py-6'>
                {/* <img src='/images/meal.png' className='p-6 mx-auto w-32 md:w-auto' />
                <p className='text-center py-4 font-bold text-sm md:text-base'>
                    You haven’t added any items in bucket yet
                </p> */}


                


            </div>

            <div className='bg-red-600 flex justify-between p-4 rounded-tl-xl rounded-tr-xl cursor-pointer'>
                <span className='text-sm md:text-base'>
                    0 Items <span className='font-bold'>| Rs 0</span>
                </span>
                <span className='flex flex-row items-center font-bold text-base md:text-xl gap-2'>
                    View Bucket  
                    <FaAngleLeft className='bg-white text-black rounded-full' /> 
                </span>
            </div>
        </div>
    </div>
</section>

        </div>


   



        </div>
                  


        </>
    );
}

export default Menu;