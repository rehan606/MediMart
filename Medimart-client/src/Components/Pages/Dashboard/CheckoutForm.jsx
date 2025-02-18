import React, { useContext, useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';

import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useCart from '../../../Hooks/useCart';
import { AuthContext } from '../../../Providers/AuthProviders';

const CheckoutForm = () => {
    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [transectionId, setTransectionId] = useState()
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure()
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
    const [cart, refetch] = useCart()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    


    useEffect( ()=> {
        if(totalPrice > 0 ){
            axiosSecure.post('/create-payment-intent', {price: totalPrice})
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret)
            })
        }
    },[axiosSecure, totalPrice])

    

    const handleSubmit = async(event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement)

        if(card === null){
            return;
        }

        const {error ,  paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('[Payment error]', error);
            setError(error.message)
        } else {
            console.log('[Payment Method]', paymentMethod);
            setError('')
        }

        // Confirm Payment 
        const { paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous',
                }
            }
        })

        if(confirmError){
            console.log('confirm Error');
            
        } else {
            console.log('Payment intent', paymentIntent);
            if(paymentIntent.status === 'succeeded'){
                console.log('Transection ID: ', paymentIntent.id)
                setTransectionId(paymentIntent.id)

                // Save THe Payment in database
                const payment ={
                    email: user?.email,
                    transectionId: paymentIntent.id,
                    price: totalPrice,
                    date: new Date(),
                    cartIds: cart.map(item => item._id),
                    menuItemIds: cart.map(item => item.menuId),
                    status: 'pending'
                }

                const res = await axiosSecure.post('/payments', payment)
                console.log('Payment Save', res.data);
                
                refetch()
                if(res.data?.paymentResult?.insertedId){

                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Thank you for the payment",
                        showConfirmButton: false,
                        timer: 1500
                    });

                    navigate('/dashboard/invoice')
                }
                
            }
            
        }
    }

    return (
        <div>
            <Helmet>
                <title>Check-Out | MediMart</title>
            </Helmet>
        <div className='w-full lg:w-8/12 mx-auto p-3 md:p-10 bg-white mt-5 rounded-md border border-blue-800'>
                < form onSubmit={handleSubmit}>
                    < CardElement options={{style: { base: {fontSize: '16px',color: '#424770','::placeholder': {color: '#aab7c4',},},invalid: {color: '#9e2146',},},}}></CardElement>

                    <button className='bg-blue-800 py-2 px-10 mt-5 text-white' type="submit" disabled={!stripe || !clientSecret}> Pay </button>

                    <p className='text-red-600 mt-2  '>{error}</p>
                    {
                        transectionId && <p className='text-green-500'> Your transection Id: {transectionId}</p>
                    }
                </form>
            </div>
        </div>
    );
} ;

export default CheckoutForm;