const OurService = () => {
    const services = [
      {
        title: "Therapiya",
        description:
          "Therapiya is a made-up word, so it doesn't have a standard dictionary definition.  However, we can create a description based on its sound and likely.",
        image: "https://img.freepik.com/premium-photo/prescription_1098-10541.jpg?w=740",
      },
      {
        title: "Dentistry",
        description:
          " Dentistry is a branch of medicine that focuses on the diagnosis, prevention, and treatment of diseases and conditions of the oral cavity ",
        image: "https://img.freepik.com/free-photo/business-meeting_1098-18221.jpg?t=st=1739960407~exp=1739964007~hmac=7aacae2938a1056e19c32d54ee533491f66a22d3c2d4d83a3fca1c9d47371c32&w=740",
      },
      {
        title: "Virusology",
        description:
          "Virology is the scientific study of viruses – those tiny, infectious agents that can only replicate inside the living cells of animals, plants, bacteria.",
        image: "https://img.freepik.com/free-photo/young-mother-with-toddle-pediatrician-consultation_23-2149187446.jpg?t=st=1739961743~exp=1739965343~hmac=8e12b8fbaaf6f32e750cbc50adcfcf9cdc415a38c63e21746b7bab6b8a0293ba&w=740",
      },
      
    ];
  
    return (
      <section className="py-16 bg-[#E6FCF9]">
        <div className="text-center mb-8">
          <h4 className="text-teal-600 font-semibold">What We Do</h4>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-800 my-2">Our <span className="text-[#29D9C2]">Services</span></h2>
        </div>
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 mt-2">{service.description}</p>
                  <a
                    href="#"
                    className="text-teal-600 font-medium mt-4 inline-block hover:underline"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default OurService;
  