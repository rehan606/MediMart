import { useState } from "react";

const UploadPrescription = () => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileName(file ? file.name : "");
  };

  return (
    <section className="bg-[#F1FCFA] py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#063A2F] mb-4 text-center">
          Upload Your <span className="text-[#29D9C2]">Prescription</span> 
        </h2>
        <p className="text-gray-700 mb-6 text-lg text-center">
          Upload your doctor’s prescription and let us handle the rest. Fast, private and verified by professionals.
        </p>

        <ul className="space-y-3 mb-6 text-gray-800 text-base">
          <li className="flex items-center">
            <span className="bg-[#29D9C2] text-white w-6 h-6 flex items-center justify-center rounded-full mr-3 text-sm">✓</span>
            Accepts JPG, PNG, or PDF
          </li>
          <li className="flex items-center">
            <span className="bg-[#29D9C2] text-white w-6 h-6 flex items-center justify-center rounded-full mr-3 text-sm">✓</span>
            Files are securely reviewed
          </li>
          <li className="flex items-center">
            <span className="bg-[#29D9C2] text-white w-6 h-6 flex items-center justify-center rounded-full mr-3 text-sm">✓</span>
            Confidential & quick process
          </li>
        </ul>

        {/* File Upload */}
        <div className="flex flex-col items-center">
          <label htmlFor="prescription-upload" className="cursor-pointer bg-[#29D9C2] hover:bg-[#20bfae] transition text-white font-semibold py-3 px-6 rounded-xl shadow-md inline-block">
            Choose File
          </label>
          <input
            type="file"
            id="prescription-upload"
            accept="image/*,.pdf"
            className="hidden"
            onChange={handleFileChange}
          />
          {fileName && (
            <p className="mt-3 text-sm text-gray-700">📎 {fileName}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default UploadPrescription;
