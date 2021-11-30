import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import './Checkout.css';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal);

const Checkoutform = ({paydata}) => {
    const {price,patientname,_id} = paydata
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [success,setSuccess] = useState('')
    useEffect(() => {
        fetch('https://obscure-caverns-42480.herokuapp.com/create-payment-intent',{
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify({price})
        })
        .then(res => res.json())
        .then(data => setClientSecret(data.clientSecret))
    },[price])

    const handleSubmit = async(e) => {
        e.preventDefault();
        if(!stripe || !elements)
        {
            return;
        }
        const card = elements.getElement(CardElement)
        if(card === null)
        {
            return;
        }
        setProcessing(true)
        //payment method create
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        if(error){
          setProcessing(false)
           setSuccess('')
            Swal.fire(
              `${error.message}`,
              '',
              'error'
            )
        }
        else{
            console.log(paymentMethod)
           
        }

         //payment intent
         const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
            clientSecret,
            { 
              payment_method: {
                card: card,
                billing_details: {
                  name: patientname,
                },
              },
            },
          );
          if(intentError)
          {
            setSuccess('')
            setProcessing(false)
            Swal.fire(
              `${intentError.message}`,
              '',
              'error'
            )
              
          }
          else{
            setProcessing(false)
            setSuccess('success')
            Swal.fire(
              'Payment Succesfull',
              '',
              'success'
            )
             const payment = {
                amount: paymentIntent.amount,
                transaction: paymentIntent.client_secret.slice('_secret')[0]
             }
            //saving data base
            const url = `https://obscure-caverns-42480.herokuapp.com/appointmentpayment/${_id}`;
            fetch(url,{
                method: 'PUT',
                headers: {
                    'content-type':'application/json'
                },
                body: JSON.stringify(payment)
            })
            .then(res  => res.json())
            .then(data => console.log(data))

          }

    }

    return (
        <div className="container-fluid checkouts">
          <h4 className="text-center my-4">Enter Your Cards Private Number</h4>
            <form onSubmit={handleSubmit} className="p-4">
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: 'blue',
              '::placeholder': {
                color: 'blue',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      {
          processing ? <p className="my-4 fw-bold text-primary">Processing...</p> : <button className="btn btn-info my-4" type="submit"
          disabled={!stripe || success}>
          Pay $ {paydata.price}
        </button>
      }
    
    </form>
        </div>
    );
};

export default Checkoutform;