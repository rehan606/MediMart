import { GiMedicinePills } from "react-icons/gi";
import { MdDeliveryDining } from "react-icons/md";
import { GiMedicines , } from "react-icons/gi";
import { SiCodefresh } from "react-icons/si";

const Service = () => {
    return (
      <section className="bg-gray-100 text-gray-300 py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-center text-[#80cdc3] mb-8">Our Services</h2>
          <div style={{ backgroundImage: "url('https://i.ibb.co.com/0X9R60K/clock-remember-medication-time-23-2148550937.jpg')" }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8  bg-cover bg-center p-6 rounded-lg">
            {/* Service 1 */}
            
            <div  className="bg-black opacity-60  p-6 rounded-lg shadow-lg text-left transition-transform hover:translate-x-3">
              <div className="text-green-500 text-4xl mb-4">
              <GiMedicinePills />
              </div>
              <h3 className="text-xl text-orange-500  font-semibold mb-2">Super Quality Medicine</h3>
              <p className="text-gray-400">
                Tailored solutions to meet your unique business needs with precision and excellence.
              </p>
            </div>
            
            {/* Service 2 */}
            <div className="bg-black opacity-60  border p-6 rounded-lg shadow-lg text-left transition-transform hover:translate-y-3">
              <div className="text-green-500 text-4xl mb-4">
              <GiMedicines />
                <i className="fas fa-paint-brush"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-orange-500">Original Medicine</h3>
              <p className="text-gray-400">
                Creative designs that captivate and elevate your brand identity effortlessly.
              </p>
            </div>
  
            {/* Service 3 */}
            <div className="bg-black opacity-60 p-6 rounded-lg shadow-lg text-left transition-transform hover:translate-x-3">
              <div className="text-green-500 text-4xl mb-4">
                <MdDeliveryDining />
                <i className="fas fa-chart-line"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-orange-500">Quick fast delivery</h3>
              <p className="text-gray-400">
                Boost your online presence with advanced SEO strategies and tools.
              </p>
            </div>
  
            {/* Service 4 */}
            <div className="bg-black opacity-60 p-6 rounded-lg shadow-lg text-left transition-transform hover:translate-y-3">
              <div className="text-green-500 text-4xl mb-4 ">
              <SiCodefresh />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-orange-500">100% Authentic</h3>
              <p className="text-gray-400">
                Scalable and secure cloud services tailored to your business requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
export default Service;
  