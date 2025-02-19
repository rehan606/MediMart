import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Slider = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                // autoplay={{
                //     delay: 2500,
                    
                // }}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                
                <SwiperSlide>
                    <section
                        className="relative bg-cover bg-center h-screen flex  items-center justify-center  "
                        style={{ backgroundImage: "url('https://img.freepik.com/free-photo/team-young-specialist-doctors-standing-corridor-hospital_1303-21199.jpg?t=st=1739893675~exp=1739897275~hmac=c02fd6a84f74847d9761fb90d4f7fbd9324333d0fac2c79b5ff41ed78afa0729&w=740')" }}
                        >
                           
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-[#005963]  opacity-60"></div>

                        {/* Content */}
                        <div className="relative mt-20 md:mt-0 container mx-auto  ">
                            {/* Left Section */}
                            <div className="text-center md:w-6/12 mx-auto text-white space-y-6 mt-20 md:mt-0">
                                <h1 className="text-4xl lg:text-6xl  font-bold leading-tight">
                                    Your Trusted Pharmacy Hub
                                </h1>
                                <p className="text-lg lg:text-xl  md:pr-20 lg:pr-0">
                                    Shop for medicines and healthcare essentials with confidence. Trusted vendors, secure delivery, and excellent care — all in one place.
                                </p>
                                <div >
                                    <button className="bg-[#00acb1] uppercase text-white font-semibold py-3 px-6 rounded-lg hover:scale-105 transition-transform mr-4">
                                        Shop Now
                                    </button>

                                    <button className="text-[#00acb1] uppercase font-semibold bg-white  py-3 px-6 rounded-lg hover:scale-105 transition-transform">
                                        Read More +
                                    </button>
                                </div>
                            </div>

                            {/* Right Section */}
                            {/* <div className="md:w-1/2">
                            <img src="https://i.ibb.co.com/n7qkhVd/bottle-with-pills-23-2148533104.jpg" alt="Medicine" className=" max-w-full rounded-full shadow-lg" />
                            </div> */}
                        </div>
                    </section>  
                </SwiperSlide>

                <SwiperSlide>
                    <section
                        className="relative bg-cover bg-center h-screen flex items-center justify-center  "
                        style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/studying-new-together-smiling-professional-positive-doctors-enjoying-job-responsibilities-hospital-working-one-team-while-expressing-positivity_259150-15726.jpg?w=740')" }}
                        >
                           
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-[#005963]  opacity-60"></div>


                        {/* Content */}
                        <div className="relative mt-20 md:mt-0 container mx-auto ">
                            {/* Left Section */}
                            <div className="text-center md:w-6/12 mx-auto text-white space-y-6 mt-20 md:mt-0">
                            <h1 className="text-4xl lg:text-6xl  font-bold leading-tight">
                                Your health, our priority.
                            </h1>
                            <p className="text-lg lg:text-xl  md:pr-20 lg:pr-0">
                                Shop for medicines and healthcare essentials with confidence. Trusted vendors, secure delivery, and excellent care — all in one place.
                            </p>
                            <div >
                                    <button className="bg-[#00acb1]  text-white uppercase font-semibold py-3 px-6 rounded-lg hover:scale-105 transition-transform mr-4">
                                        Shop Now
                                    </button>

                                    <button className="text-[#00acb1]  bg-white uppercase font-semibold py-3 px-6 rounded-lg hover:scale-105 transition-transform">
                                        Shop Now
                                    </button>
                                </div>
                            </div>

                            {/* Right Section */}
                            {/* <div className="md:w-1/2">
                            
                            <img src="https://i.ibb.co.com/2nPw3F1/colorful-pills-syringe-23-2147983133.jpg" alt="Medicine" className="max-w-full rounded-full shadow-lg" />
                            </div> */}
                        </div>
                    </section>  
                </SwiperSlide>

                <SwiperSlide>
                    <section
                        className="relative bg-cover bg-center h-screen flex items-center justify-center"
                        style={{ backgroundImage: "url('https://img.freepik.com/free-photo/doctors-nurse-interacting-while-walking_107420-84756.jpg?t=st=1739895502~exp=1739899102~hmac=62f414be9f965d3f4661972119b7eac8115428a4cb29838389fd3b9b4b23dcf8&w=740')" }}
                        >
                           
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-[#005963]  opacity-60"></div>


                        {/* Content */}
                        <div className="relative mt-20 md:mt-0 container mx-auto ">
                            {/* Left Section */}
                            <div className="text-center md:w-6/12 mx-auto text-white space-y-6 mt-20 md:mt-0">
                            <h1 className="text-4xl lg:text-6xl  font-bold leading-tight">
                                Your Trusted Pharmacy Hub
                            </h1>
                            <p className="text-lg lg:text-xl md:pr-20 lg:pr-0">
                                Shop for medicines and healthcare essentials with confidence. Trusted vendors, secure delivery, and excellent care — all in one place.
                            </p>
                                <div >
                                    <button className="bg-[#00acb1]  text-white uppercase font-semibold py-3 px-6 rounded-lg hover:scale-105 transition-transform mr-4">
                                        Shop Now
                                    </button>

                                    <button className="text-[#00acb1]  bg-white uppercase font-semibold py-3 px-6 rounded-lg hover:scale-105 transition-transform">
                                        Shop Now
                                    </button>
                                </div>
                            </div>

                            {/* Right Section */}
                            {/* <div className="md:w-1/2">
                            
                            <img src="https://i.ibb.co.com/VTvyN44/high-angle-pill-foils-plastic-containers-23-2148533456.jpg" alt="Medicine" className="max-w-full rounded-full shadow-lg" />
                            </div> */}
                        </div>
                    </section>  
                </SwiperSlide>

                
            </Swiper>
        </div>
    );
};

export default Slider;