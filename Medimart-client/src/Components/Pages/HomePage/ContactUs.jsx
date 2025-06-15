const ContactUs = () => {
  return (
    <section className="bg-[#F1FCFA] py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-black text-[#063A2F] mb-4">
          Contact <span className="text-[#29D9C2]">Us</span> 
        </h2>
          <p className="text-gray-600 mb-6 text-lg">
            We'd love to hear from you. Please fill out the form or contact us directly.
          </p>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-[#29D9C2]">Address</h4>
              <p className="text-gray-700">123 MediMart Avenue, Dhaka, Bangladesh</p>
            </div>
            <div>
              <h4 className="font-semibold text-[#29D9C2]">Phone</h4>
              <p className="text-gray-700">+880 1822 1822 07</p>
            </div>
            <div>
              <h4 className="font-semibold text-[#29D9C2]">Email</h4>
              <p className="text-gray-700">support@medimart.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-white p-6 rounded-2xl shadow-md space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#29D9C2]"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#29D9C2]"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              rows="4"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#29D9C2]"
              placeholder="Your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#29D9C2] text-white font-medium py-2 px-6 rounded-md hover:bg-[#24c5b0] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
