import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import useAxiosPublic from './../../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const Discount = () => {

    const axiosPublic = useAxiosPublic()
    

    const {data: products = []} = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await axiosPublic.get('/discount')
            return res.data
        }   
    })

    return (
        <div >
            
            <div className='w-11/12 mx-auto py-5 md:py-20'>
            
                <div className='lg:w-4/12 text-lg md:text-3xl font-semibold text-white bg-red-600 p-3 mb-5 '>Flash Sale: Up to 10% OFF</div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    autoplay={{
                        delay:1500,
                    }}
                    pagination={{
                    clickable: true,
                    }}
                    breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                    }}
                    
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >

                    {
                        products.map(item => (
                            <SwiperSlide>
                                <div className="max-w-sm rounded overflow-hidden shadow-lg border p-4 bg-white relative">
                                    {/* Image Container */}
                                    <div className="h-48 w-full overflow-hidden rounded-t-lg relative">
                                        {/* Product Image */}
                                        <img
                                        src={item.image}
                                        alt=''
                                        className="object-cover h-full w-full transition-transform duration-300 hover:scale-105"
                                        />

                                        {/* Discount Badge */}
                                        {item.discount > 0 && (
                                        <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold py-1 px-2 rounded">
                                            {item.discount} % OFF
                                        </span>
                                        )}

                                        
                                        
                                    </div>

                                    {/* Product Details */}
                                    <div className="p-4">
                                        <h2 className="text-xl font-semibold text-gray-800">{item.name} <span className='text-sm text-green-400'>{item.massUnit} {item.unit}</span> </h2>
                                        <div className=" text-gray-600">
                                        
                                        <p className="text-sm  text-green-600">
                                        {item.company}
                                        </p>
                                        <p className="text-lg font-bold text-green-600">
                                        
                                        <span className="text-sm text-gray-500">${item.price}</span>
                                        </p>
                                        
                                        </div>
                                    </div>

                                    
                                </div>
                            </SwiperSlide>
                        ))
                    }
                    
                    
                    
                </Swiper>
            </div>
        </div>
    );
};

export default Discount;