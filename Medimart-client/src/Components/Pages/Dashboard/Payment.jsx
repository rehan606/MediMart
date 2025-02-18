import { loadStripe } from '@stripe/stripe-js/dist/pure';
import { PaymentElement, Elements,useStripe, useElements,} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { Helmet } from "react-helmet-async";

const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Getway_Pk)
    
    return (
        <div>
            <Helmet>
                <title>Payment - MediMart</title>
            </Helmet>
            <div>
                
                <Elements stripe={stripePromise}>
                    <CheckoutForm> </CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;