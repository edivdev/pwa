import { useState } from 'react';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import Button from "../ui/Button";
import { Box } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react"

export default function CheckoutForm({ clientSecret, onConfirm }) {
  const stripe = useStripe();
  const elements = useElements();

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
      confirmParams: {},
    });

    setIsLoading(false);

    if (!(error && error.type === "validation_error")) {
      const url = new URL(window.location.href);
      url.searchParams.set('donation_intent_client_secret', clientSecret);
      window.history.pushState(null, '', url.toString());
      onConfirm(clientSecret)
    }
  };

  const paymentElementOptions = {
    layout: "accordion",
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit} >
      <Box textAlign="center">
        <PaymentElement id="payment-element" options={paymentElementOptions} />
        <Button
          disabled={isLoading || !stripe || !elements}
          id="submit"
          type="submit"
          variant="fillBlue"
          color="white"
          textTransform="uppercase"
          mt="1rem">
          <span id="button-text">
            {isLoading ? <Spinner /> : "Donate"}
          </span>
        </Button>
      </Box>
    </form>
  );
};
