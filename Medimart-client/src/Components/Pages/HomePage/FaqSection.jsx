import { useState } from "react";

const faqs = [
  {
    question: "How can I upload my prescription?",
    answer: "You can upload your prescription using the upload button on our homepage. We accept JPG, PNG, and PDF formats.",
  },
  {
    question: "Is my medical data safe with you?",
    answer: "Yes, we prioritize your privacy. All prescriptions and information are handled securely and confidentially.",
  },
  {
    question: "How long does it take to process an order?",
    answer: "Typically, orders are processed within 24 hours of receiving a valid prescription.",
  },
  {
    question: "Do I need a prescription for all medicines?",
    answer: "Some medicines require a prescription by law. Others, such as general wellness products, do not.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center text-[#063A2F] mb-8">
          Frequently Asked <span className="text-[#29D9C2]">Questions</span> 
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl shadow-sm transition"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex justify-between items-center px-6 py-4 focus:outline-none"
              >
                <span className="font-medium text-gray-800 text-lg">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
