const Doctors = () => {
  return (
    <section className="bg-[#E6FCF9] py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Content – Left on md+ */}
        <div className="order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl lg:text-6xl  text-[#063A2F] mb-4 font-black">
            Consult a Pharmacist or Doctor <span className="text-[#29D9C2]">Anytime</span> 
          </h2>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            Have questions about your prescription or health concerns? Talk to our licensed experts for real-time support. Safe, private, and hassle-free.
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center">
              <span className="bg-[#29D9C2] text-white w-6 h-6 flex items-center justify-center rounded-full mr-3 text-sm">✓</span>
              Certified Pharmacists & Doctors
            </li>
            <li className="flex items-center">
              <span className="bg-[#29D9C2] text-white w-6 h-6 flex items-center justify-center rounded-full mr-3 text-sm">✓</span>
              Live Chat & Video Call Options
            </li>
            <li className="flex items-center">
              <span className="bg-[#29D9C2] text-white w-6 h-6 flex items-center justify-center rounded-full mr-3 text-sm">✓</span>
              100% Private & Secure Conversations
            </li>
          </ul>
          <button className="bg-[#29D9C2] hover:bg-[#20bfae] transition text-white font-semibold py-3 px-6 rounded-xl shadow-md">
            Start Consultation
          </button>
        </div>

        {/* Image – Right on md+ */}
        <div className="order-1 md:order-2 relative w-full h-80 md:h-full">
          <img
            src="https://mysihatpal.com.my/bigpharmacy/asthma_assessment/static/three-doctors.png"
            alt="Consult a Doctor"
            className="rounded-3xl shadow-xl object-cover w-full h-full"
          />
          <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-lg shadow text-sm font-medium text-gray-700">
            24/7 Online Support
          </div>
        </div>
      </div>
    </section>
  );
};

export default Doctors;
