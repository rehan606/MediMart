import React, { useState } from "react";
import useCart from "../../../Hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Cart = () => {
    const axiosSecure = useAxiosSecure()

    const [cart, refetch] = useCart()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    const handleDeleteItem = (id) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              axiosSecure.delete(`/carts/${id}`)
              .then(res => {
                if(res.data.deletedCount > 0){
                    refetch()
                    
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
              })
            }
        });
    }

    

    // const clearCart = () => {
    //     setCarts([]);
    // };

    

    return (
        <div className="w-full lg:w-10/12 lg:ml-60">
           <Helmet>
                <title>Cart - MediMart</title>
            </Helmet>
            <div className=" bg-gray-100 min-h-screen mt-4">
                
                

                <div className="relative z-2 text-center mb-5">
                        <h1 className="text-3xl font-bold">Your Cart  </h1>
                        <p className="mt-2">Find all your medicines in one place</p>
                    </div>

                    <div className="w-full border p-3 rounded-md flex justify-between items-center">

                        <h1 className="text-xl font-bold">Total Items: {cart.length} </h1>
                        <h2 className="text-lg font-bold mr-10">Total: {totalPrice} </h2>
                        { cart.length ? ( <Link to='/dashboard/payment'>
                            <button  className=" bg-blue-500 text-white  py-2 px-4 rounded hover:bg-blue-600">
                                Checkout
                            </button>
                        </Link>) :
                            (<button disabled className=" bg-blue-500 text-white  py-2 px-4 rounded ">
                            Checkout
                        </button>)
                        }
                    </div>
                    <div className="w-full mx-auto bg-white rounded-lg shadow-md p-4 mt-4">
                    <table className="w-full text-left border-collapse">
                        <thead>
                        <tr className="bg-gray-200 text-gray-700">
                            <th className="p-2">#</th>
                            <th className="p-2">Name</th>
                            <th className="p-2">Company</th>
                            <th className="p-2">Price (per unit)</th>
                            <th className="p-2">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {cart.map((item, index) => (
                            <tr key={item._id} className="border-b">
                            <td className="p-2">{index + 1}</td>
                            <td className="p-2">{item.name}</td>
                            <td className="p-2">{item.company}</td>
                            <td className="p-2">$ {item.price}</td>
                            <td className="p-2">
                                <button
                                className="text-red-500 hover:underline"
                                onClick={() => handleDeleteItem(item._id)}
                                >
                                
                                Delete
                                </button>
                            </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <div className="flex justify-between items-center mt-4">
                        <button
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                        // onClick={clearCart}
                        >
                        Clear Cart
                        </button>
                        <h2 className="text-lg font-bold mr-10">Total: {totalPrice} </h2>
                    </div>
                   
                    </div>
                
            </div>
        </div>
    );
};

export default Cart;
