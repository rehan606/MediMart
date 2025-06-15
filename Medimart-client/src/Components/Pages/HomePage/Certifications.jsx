const certifications = [
  {
    title: "ISO 9001:2015 Certified",
    description: "International standard for quality management systems.",
    icon: "https://cdn-icons-png.flaticon.com/512/190/190411.png", // You can use any icon or logo
  },
  {
    title: "DGDA Approved",
    description: "Authorized by the Directorate General of Drug Administration.",
    icon: "https://cdn-icons-png.flaticon.com/512/906/906175.png",
  },
  {
    title: "Certified Pharmacists",
    description: "All medicines are verified by licensed professionals.",
    icon: "https://cdn-icons-png.flaticon.com/512/3771/3771602.png",
  },
  {
    title: "HIPAA Compliant",
    description: "Patient data handled securely under HIPAA regulations.",
    icon: "https://cdn-icons-png.flaticon.com/512/1828/1828640.png",
  },
];

const Certifications = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-black text-[#063A2F] mb-4">
          Our <span className="text-[#29D9C2]">Certifications</span> 
        </h2>
        <p className="text-gray-600 mb-10 text-lg">
          We ensure quality, safety, and compliance through global and local certifications.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#F1FCFA] border border-[#29D9C2]/30 rounded-xl shadow-sm p-6 hover:shadow-lg transition"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-14 h-14 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-[#063A2F] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
