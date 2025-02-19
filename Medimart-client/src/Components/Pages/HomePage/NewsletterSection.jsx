// import { RiMailUnreadLine } from "react-icons/ri";
import { SiMinutemailer } from "react-icons/si";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
const NewsletterSection = () => {
    const logos = [
      "https://img.freepik.com/premium-vector/health-care-logo-design-template_145155-1477.jpg?w=740",
      "https://img.freepik.com/premium-vector/logo-sport-tournament-championship-organization-design-template_737924-1966.jpg?w=740",
      "https://img.freepik.com/premium-vector/medical-logo-with-blue-cross-plus-symbol_608024-1091.jpg?w=740",
      "https://img.freepik.com/premium-vector/logo-hospital-design-template-collection_737924-2118.jpg?w=740",
    ];
  
    return (
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Newsletter Subscription Card */}
            <div className="bg-teal-600 text-white p-6 rounded-lg shadow-lg flex flex-col items-center">
              <div className="flex items-center gap-3">
                
                {/* <RiMailUnreadLine /> */}
                <MdOutlineMarkEmailUnread />
                <h3 className="text-xl font-bold">Subscribe Our Email <br /> For Newsletter</h3>
              </div>
              <p className="mt-2 text-sm">
                It is a long established fact that a reader will be distracted by 
                the readable content of a page when looking at its layout.
              </p>
              <div className="mt-4 flex items-center bg-white rounded-md overflow-hidden">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="flex-1 px-4 py-2 text-gray-700 focus:outline-none"
                />
                <button className="bg-teal-700 text-white px-4 py-2 flex items-center gap-2">
                <SiMinutemailer />
                  SUBSCRIBE
                </button>
              </div>
            </div>
  
            {/* Partner Logos */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="grid grid-cols-2 gap-4">
                {logos.map((logo, index) => (
                  <div key={index} className="border p-4 flex justify-center items-center rounded-lg">
                    <img src={logo} alt="Partner Logo" className="w-full h-20 border object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default NewsletterSection;
  