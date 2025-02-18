import React, { useContext, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { imageUpload } from './../../../../API/utils';
import { AuthContext } from "../../../../Providers/AuthProviders";
import useAxiosSecure from './../../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2'
import { Helmet } from "react-helmet-async";

const AddMedicine = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {user} = useContext(AuthContext)
  const axiosSecure = useAxiosSecure()

  const handleAddMedicine = async (e) => {
    e.preventDefault();
    // Form submission logic goes here
    const form = e.target 
    const name = form.name.value ;
    const generic = form.generic.value ;
    const category = form.category.value ;
    const company = form.company.value ;
    const massUnit = form.massUnit.value ;
    const unit = form.unit.value ;
    const description = form.description.value ;
    const price = parseFloat(form.price.value) ;
    const quantity = parseInt(form.quantity.value) ;
    const discount = parseInt(form.discount.value) ;
    const image = form.image.files[0] ;
    const imageUrl = await imageUpload(image)

    // seller information 
    const seller = {
      name: user?.displayName,
      email: user?.email,
      image: user?.photoURL,
    }

    const medicineData = {
      name,
      generic,
      description,
      price,
      quantity,
      discount,
      image: imageUrl,
      category,
      company,
      massUnit,
      unit,
      seller,
    }

    console.log(medicineData);
    try{
      await axiosSecure.post('/medicine', medicineData)
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Medicine added successfully",
        showConfirmButton: false,
        timer: 1500
      });

    } catch (err) {

    }


    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className="w-full lg:w-10/12 lg:ml-60">
      <Helmet>
          <title>Add Medicine - MediMart</title>
      </Helmet>
      {/* Button to open modal */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center  gap-2"
      >
        <FaPlus></FaPlus> Add Medicine
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl mx-4 md:mx-auto max-h-screen overflow-y-auto">
            <div className="p-6">
              {/* Modal Header */}
              <div className="flex justify-between items-center border-b pb-4 mb-4">
                <h2 className="text-xl font-bold">Add Medicine</h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-red-500"
                >
                  &times;
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleAddMedicine} className="space-y-4">
                {/* Item Name */}
                <div>
                  <label className="block text-sm font-medium mb-1">Item Name</label>
                  <input
                    type="text"
                    name="name"
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                    placeholder="Enter item name"
                    required
                  />
                </div>

                {/* Item Generic Name */}
                <div>
                  <label className="block text-sm font-medium mb-1">Item Generic Name</label>
                  <input
                    type="text"
                    name="generic"
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                    placeholder="Enter generic name"
                    required
                  />
                </div>

                {/* Short Description */}
                <div>
                  <label className="block text-sm font-medium mb-1">Short Description</label>
                  <textarea
                    name="description"
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                    placeholder="Enter short description"
                    rows="3"
                    required
                  ></textarea>
                </div>

                {/* Image Upload */}
                <div >
                  <label className="block text-sm font-medium mb-1">Image</label>
                  <input
                  // onChange={e => setUploadButtonText(e.target.files[0].name)}
                    type="file"
                    name="image"
                    accept="image/*"
                    className="w-full px-3 py-2 border-2 border-dashed rounded focus:outline-none focus:ring focus:ring-blue-300"
                    required
                  />

                  {/* <div className="bg-sky-500" > {uploadButtonText} </div> */}
                </div>

                {/* Two fields in one row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Category Dropdown */}
                  <div>
                    <label className="block text-sm font-medium mb-1">Category</label>
                    <select
                      name="category"
                      className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                      required
                    >
                      <option value="" disabled selected>
                        Select category
                      </option>
                      <option value="Tablet">Tablet</option>
                      <option value="Syrup">Syrup</option>
                      <option value="Capsul">Capsul</option>
                      <option value="Injection">Injection</option>
                      <option value="Suspension">Suspension</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Company Dropdown */}
                  <div>
                    <label className="block text-sm font-medium mb-1">Company</label>
                    <select
                      name="company"
                      className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                      required
                    >
                      <option value="" disabled selected>
                        Select company
                      </option>
                      <option value="Squre">Square Pharmaceuticals</option>
                      <option value="Beximco">Beximco Pharmaceuticals </option>
                      <option value="Ranata">Ranata</option>
                      <option value="Astra">Astra Pharma</option>
                      <option value="Beacon">Beacon</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Two fields in one row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  

                  {/* Item Mass Unit */}
                  <div>
                    <label className="block text-sm font-medium mb-1">Item Mass Unit</label>
                    <div className="flex gap-2">
                      {/* Quantity Input */}
                      <input
                        type="number"
                        name="massUnit"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                        placeholder="Enter quantity (e.g., 10)"
                        required
                      />
                      {/* Unit Dropdown */}
                      <select
                        name="unit"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                        required
                      >
                        <option value="" disabled selected>
                          Select unit
                        </option>
                        <option value="mg">mg</option>
                        <option value="ml">ml</option>
                      </select>
                    </div>
                  </div>





                  {/* Per Unit Price */}
                  <div>
                    <label className="block text-sm font-medium mb-1">Per Unit Price</label>
                    <input
                      type="number"
                      name="price"
                      className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                      placeholder="Enter price"
                      required
                    />
                  </div>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Discount Percentage */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Discount Percentage</label>
                        <input
                            type="number"
                            name="discount"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                            placeholder="Enter discount percentage (default 0)"
                            defaultValue={0}
                        />
                    </div>

                    {/*Quantity*/}
                    <div>
                        <label className="block text-sm font-medium mb-1">Quantity</label>
                        <input
                            type="number"
                            name="quantity"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                            placeholder="0"
                            
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end space-x-2">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Add Medicine
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddMedicine;
