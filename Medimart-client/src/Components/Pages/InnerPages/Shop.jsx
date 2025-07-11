import { useContext, useState } from 'react';
import { FaCartPlus, FaEye } from 'react-icons/fa6';
import Navbar from '../SharedPages/Navbar';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../SharedPages/LoadingSpinner';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProviders';
import Swal from 'sweetalert2'
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useCart from '../../../Hooks/useCart';
import { Helmet } from 'react-helmet-async';

const Shop = () => {
    const [selectedMedicine, setSelectedMedicine] = useState(null);
    const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic()
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const [ , refetch] = useCart()

    
    const {data: medicines = [], isLoading} = useQuery({
        queryKey: ['medicines'],
        queryFn: async () => {
            const res = await axiosPublic.get('/medicine')
            return res.data
        }
    })

    if (isLoading) {
        return <LoadingSpinner />;
    }
    

    if(isLoading){
        return <LoadingSpinner></LoadingSpinner>
    }
    
    const handleAddToCart = medicine =>{
        if(user && user.email){
            const cartItem = {
                menuId: medicine._id, 
                email: user.email,
                name: medicine.name,
                company: medicine.company,
                image: medicine.image,
                price: medicine.price,
            };

            console.log(cartItem);
            

            axiosSecure.post('/carts', cartItem)
            .then(res => {
                console.log(res.data);
                if(res.data.insertedId){
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${medicine.name} added to your Cart`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch()
                }
            })


        }else{
            Swal.fire({
                title: "You are not logged in",
                text: "Please Login to add to the cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}})
                }
            });
        }
    }


    // view details
    const handleViewDetails = (medicine) => {
        setSelectedMedicine(medicine);
    };
    const closeModal = () => {
        setSelectedMedicine(null);
    };

    return (
        <div>
            <Helmet>
                <title> Shop - MediMart</title>
            </Helmet>
        <Navbar></Navbar>
        <div className="min-h-screen bg-gray-100">
            {/* Page Banner */}
            <div
            className="relative bg-cover bg-center text-white py-16"
            style={{ backgroundImage: "url('https://shorturl.at/WVYlv')" }}
            >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Content */}
            <div className="relative z-2 text-center">
                <h1 className="text-3xl font-bold">Medicine Shop</h1>
                <p className="mt-2">Find all your medicines in one place</p>
            </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-6 flex flex-col lg:flex-row gap-6">
            {/* Sidebar */}
            <aside className="bg-white shadow rounded-md p-4 w-full lg:w-1/4">
                <h2 className="text-lg font-semibold mb-4">Categories</h2>
                <ul className="space-y-3">
                <li>
                    <button className="w-full text-left px-4 py-2 bg-gray-200 hover:bg-blue-300 rounded">
                    Tablet
                    </button>
                </li>
                <li>
                    <button className="w-full text-left px-4 py-2 bg-gray-200 hover:bg-blue-300 rounded">
                    Capsul
                    </button>
                </li>
                <li>
                    <button className="w-full text-left px-4 py-2 bg-gray-200 hover:bg-blue-300 rounded">
                    Syrap
                    </button>
                </li>
                <li>
                    <button className="w-full text-left px-4 py-2 bg-gray-200 hover:bg-blue-300 rounded">
                    Injection
                    </button>
                </li>
                <li>
                    <button className="w-full text-left px-4 py-2 bg-gray-200 hover:bg-blue-300 rounded">
                    Suspansion
                    </button>
                </li>
                <li>
                    <button className="w-full text-left px-4 py-2 bg-gray-200 hover:bg-blue-300 rounded">
                    Others
                    </button>
                </li>
                </ul>
            </aside>

            {/* Main Content - Medicine Table */}
            <section className="flex-1 bg-white shadow rounded-md p-4">
                <h2 className="text-lg font-semibold mb-4">Total Medicine  : {medicines.length}</h2>
                <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                    <thead>
                    <tr className="bg-gray-200">
                        <th className="border border-gray-300 px-4 py-2 text-left">Image</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Medicine Name</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Category</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Company</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Price</th>
                        <th className="border border-gray-300 px-4 py-2 text-center">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {medicines.map((medicine, index , _id) => (
                        <tr key={medicine._id} className="hover:bg-gray-100 ">
                            <td className="border border-gray-300 w-20 h-8">
                                <img className='w-full' src={medicine.image} alt="" />
                            </td>
                            <td className="border border-gray-300 px-4 py-2">{medicine.name}</td>
                            <td className="border border-gray-300 px-4 py-2">{medicine.category}</td>
                            <td className="border border-gray-300 px-4 py-2">{medicine.company}</td>
                            <td className="border border-gray-300 px-4 py-2">{medicine.price}</td>
                            <td className="border border-gray-300 px-4 py-2 text-center flex items-center justify-center">
                                {/* <Link to={`/medicineDetails/${medicine._id}`} className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600 mr-2">
                                Select
                                </Link> */}

                                <button onClick={()=> handleAddToCart(medicine)} className="bg-green-500 flex items-center justify-center gap-2 text-white px-4 py-1 rounded hover:bg-green-600 mr-2">
                                <FaCartPlus></FaCartPlus>
                                Select
                                </button>
                                

                                <button
                                onClick={() => handleViewDetails(medicine)}
                                className="text-white border px-5 py-2 rounded bg-green-800 "
                                >
                                <FaEye />
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
            </section>
            </div>
        </div>


        {/*Select button  Modal */}
        


        {/*view details  Modal */}
        {selectedMedicine && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 w-full md:w-2/3">
                <h2 className="text-lg font-semibold mb-4">{selectedMedicine.name} Medicine Details</h2>

                <div className='flex flex-col lg:flex-row bg-gray-100 border rounded-md p-4 gap-6 overflow-scroll'>
                    <div className='w-full lg:w-6/12 flex items-center justify-center '>
                        <img className='w-full hover:scale-105 rounded-lg border' src={selectedMedicine.image} alt="" />
                    </div>

                    <div  className=' w-full lg:w-6/12  p-4 rounded-md space-y-2'>
                        
                        <p className="text-xl" >
                            <strong>Name:</strong> <span className="text-xl font-bold">{selectedMedicine.name}</span>
                        </p>
                        <p>
                            <strong>Generic Name:</strong> {selectedMedicine.generic}
                        </p>
                        <p>
                            <strong>Company:</strong> {selectedMedicine.company}
                        </p>
                        <p>
                            <strong>Category:</strong> {selectedMedicine.category}
                        </p>
                        <p>
                            <strong>Description:</strong> {selectedMedicine.description}
                        </p>
                        <p>
                            <strong>Discount:</strong> {selectedMedicine.discount} %
                        </p>
                        <p>
                            <strong className='text-green-600'>Price:</strong> {selectedMedicine.price} $
                        </p>
                        <p>
                            <strong >Mass Unit:</strong>  {selectedMedicine.massUnit} {selectedMedicine.unit}
                        </p>
                        <p>
                            <strong>Available:</strong> {selectedMedicine.quantity} 
                        </p>
                        
                        
                    </div>
                </div>
                
                
                <button
                onClick={closeModal}
                className="mt-4 px-4  py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                Close
                </button>
            </div>
            </div>
        )}
        </div>
    );
};

export default Shop;
