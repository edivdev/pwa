import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { Box } from "@chakra-ui/react";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setSuccess(null);

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error: stripeError, paymentMethod: donationMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (stripeError) {
      setError(stripeError.message);
      return;
    }

    const response = await fetch('/api/donations/donationIntent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: 5000 }),
    });

    const donationResult = await response.json();

    if (response.ok) {
      const confirmResult = await stripe.confirmCardPayment(donationResult.clientSecret, {
        payment_method: donationMethod.id,
      });

      if (confirmResult.error) {
        setError(confirmResult.error.message);
      } else {
        setSuccess('Thanks for your help! We can change the world together!');
      }
    } else {
      setError(donationResult.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>Donate</button>
      {error && <div>{error}</div>}
      {success && <div>{success}</div>}
    </form>
  );
};

export default CheckoutForm;