import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Dr. Arif Hossain",
    title: "Medical Officer",
    comment:
      "This pharmacy service is outstanding. Uploading prescriptions is easy, and medicine delivery is fast.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXSAt2UguS2Rjut9738K3fuq9_mxliS66aUg&s",
  },
  {
    name: "Ayesha Akter",
    title: "Customer",
    comment:
      "Very professional and secure service. I got my medicine the next day. Highly recommended! buy medicine from here",
    image: "https://uhlbd.com/unitedhospitalapi/public/DoctorProfileImg/202412221222Parisa%20Marjan%20copy.jpg",
  },
  {
    name: "Sazzad Rahman",
    title: "Customer",
    comment:
      "Loved how fast and confidential everything was. Excellent service and support team! Thank You",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_xVKeWGvB2T_6T-egm83T2d7HtVwRIT_3Hg&s",
  },
  {
    name: "Ayesha Akter",
    title: "Customer",
    comment:
      "Very professional and secure service. I got my medicine the next day. Highly recommended! buy medicine from here",
    image: "https://uhlbd.com/unitedhospitalapi/public/DoctorProfileImg/202412221222Parisa%20Marjan%20copy.jpg",
  },
];

const TestimonialsSwiper = () => {
  return (
    <section className="bg-[#F1FCFA] py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-black text-[#063A2F] mb-4">
          What Our <span className="text-[#29D9C2]" >Customers Say</span>
        </h2>
        <p className="text-gray-600 mb-10 text-lg">
          Trusted by patients, doctors, and families across the country.
        </p>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2000 }}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-md px-6 py-8 text-left max-w-xl mx-auto">
                <div className="flex items-center mb-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-[#29D9C2]"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">
                      {t.name}
                    </h4>
                    <p className="text-sm text-[#29D9C2]">{t.title}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-base mb-4">“{t.comment}”</p>
                <div className="flex text-yellow-400 space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09L5.5 12.18 1 8.91l6.06-.88L10 2.5l2.94 5.53 6.06.88-4.5 3.27 1.378 5.91z" />
                    </svg>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSwiper;
