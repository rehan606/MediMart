import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Helmet } from "react-helmet-async";

const Invoice = () => {
  const invoiceRef = useRef();

  // Handle print functionality
  const handlePrint = useReactToPrint({
    content: () => invoiceRef.current,
    documentTitle: "Invoice",
  });

  return (
    <div>
      <Helmet>
          <title>Invoice - MediMart</title>
      </Helmet>
        <div className="lg:w-7/12 mx-auto ">
        <button
        onClick={handlePrint}
        className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md shadow-md"
      >
        Print / Download PDF
      </button>
        </div>

        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-5">
        {/* Print Button */}
      
      <div
        ref={invoiceRef}
        className="bg-white shadow-lg rounded-md max-w-3xl w-full p-6"
      >
        {/* Website Logo */}
        <div className="flex items-center justify-between border-b pb-4 mb-4">
          <div className='flex gap-2 items-center'>
            <img
                src="https://cdn-icons-png.flaticon.com/512/9098/9098442.png" 
                alt="Website Logo"
                className="w-16"
            />
            <h2 className="text-2xl font-semibold text-green-600">
                MediMart
            </h2>
          </div>
          <h2 className="text-xl font-semibold text-gray-800">
            Invoice #{Math.floor(Math.random() * 10000)}
          </h2>
        </div>

        {/* User Information */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800">Customer Details</h3>
          <p className="text-gray-600">Name: John Doe</p>
          <p className="text-gray-600">Email: john.doe@example.com</p>
          <p className="text-gray-600">Address: 123 Main Street, Cityville</p>
        </div>

        {/* Purchase Information */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Purchase Details
          </h3>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-3 text-gray-600 font-medium">Item</th>
                <th className="p-3 text-gray-600 font-medium">Qty</th>
                <th className="p-3 text-gray-600 font-medium">Price</th>
                <th className="p-3 text-gray-600 font-medium">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3 text-gray-800">Product A</td>
                <td className="p-3 text-gray-800">1</td>
                <td className="p-3 text-gray-800">$50</td>
                <td className="p-3 text-gray-800">$50</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 text-gray-800">Product B</td>
                <td className="p-3 text-gray-800">2</td>
                <td className="p-3 text-gray-800">$30</td>
                <td className="p-3 text-gray-800">$60</td>
              </tr>
              <tr className="border-t">
                <td colSpan="3" className="p-3 text-right font-semibold">
                  Subtotal:
                </td>
                <td className="p-3 text-gray-800">$110</td>
              </tr>
              <tr>
                <td colSpan="3" className="p-3 text-right font-semibold">
                  Tax (10%):
                </td>
                <td className="p-3 text-gray-800">$11</td>
              </tr>
              <tr>
                <td colSpan="3" className="p-3 text-right font-semibold">
                  Grand Total:
                </td>
                <td className="p-3 text-gray-800 font-bold">$121</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      
    </div>
    </div>
  );
};

export default Invoice;
