import React from "react";

const About = () => {
  return (
    <div>
      <section className="flex flex-col md:flex-row items-center justify-between gap-6 bg-gray-50 p-6 md:py-16">
        {/* Left Section: Image */}
        <div className="md:w-1/2 flex justify-center relative">
          <img
            // src="https://i.ibb.co.com/kSqBNLY/herb-capsule-infographic-1419-2192.jpg"
            src="https://img.freepik.com/free-photo/medicine-capsules-global-health-with-geometric-pattern-digital-remix_53876-126742.jpg"
            alt="Delicious Burger"
            className="rounded-lg shadow-lg w-80 md:w-full max-w-sm md:max-w-md"
          />
          
          <div className="absolute top-4 left-8 bg-[#00ACB1] text-white font-bold py-1 px-3 rounded">
            Since 1985
          </div>
          
        </div>

        {/* Right Section: Text Content */}
        <div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0">
          <p className="text-sm text-[#00ACB1] font-bold uppercase">
            About Our Medicine
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 mt-2">
          Health Delivered to Your {" "}
            <span className="text-[#00ACB1]">Doorstep!</span>.
          </h1>
          <p className="text-gray-600 mt-4">
          "Discover a seamless online platform for purchasing medicines from trusted vendors. Enjoy fast delivery, secure transactions, and a wide selection of healthcare products."
          </p>
          <div className="flex flex-col md:flex-row mt-6 gap-4">
            <div className="flex items-center gap-2">
              <span className="bg-[#00ACB1] text-white p-2 rounded-full">
                <i className="fas fa-utensils"></i>
              </span>
              <p className="text-gray-800 font-semibold">Wide Range of Medicines </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-[#00ACB1] text-white p-2 rounded-full">
                <i className="fas fa-star"></i>
              </span>
              <p className="text-gray-800 font-semibold">Well Reputation</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-[#00ACB1] text-white p-2 rounded-full">
                <i className="fas fa-star"></i>
              </span>
              <p className="text-gray-800 font-semibold">Affordable Pricing</p>
            </div>
          </div>
          <button className="mt-6 px-6 py-3 bg-[#00ACB1] text-white font-semibold rounded-lg hover:bg-[#175658] transition">
            More About Us
          </button>
          <p className="mt-4 text-gray-500 text-sm">
            Brendon Garrey: Customer's experience is our highest priority.
          </p>
        </div>
        
      </section>
    </div>
  );
};

export default About;
