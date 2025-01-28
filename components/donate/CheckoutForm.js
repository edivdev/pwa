import { useState, } from 'react';
import { useStripe, useElements, PaymentElement, } from '@stripe/react-stripe-js';
import Button from "../ui/Button";
import {
  Stack,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
  Spinner,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Flex,
  Text
} from "@chakra-ui/react";

export default function CheckoutForm({ clientSecret, onConfirm }) {
  const LOCALE = 'en-US'
  const CURRENCY = 'USD'

  const stripe = useStripe();
  const elements = useElements();

  const [isLoading, setIsLoading] = useState(false);
  const [estimatedChargeAmount, setEstimatedChargeAmount] = useState(0);
  const [updateDonationAmountError, setUpdateDonationAmountError] = useState(false);

  async function updateDonationAmount() {
    const UPDATE_DONATION_AMOUNT_ERROR = "donationIntentUpdateError"

    const { paymentIntent: donationIntent } = await stripe?.retrievePaymentIntent(clientSecret)

    if (!donationIntent) {
      return { error: UPDATE_DONATION_AMOUNT_ERROR }
    }
    return await fetch("/api/donations/donationIntentUpdate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: donationIntent.id, amount: estimatedChargeAmount * 100 })
    }).then((res) => res.json())
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const { error: updateIntentError, donationIntent } = await updateDonationAmount()
    if (updateIntentError) {
      setIsLoading(false);
      setUpdateDonationAmountError(true)
      return
    }

    const { error: confirmError } = updateIntentError ?
      { error: { message: "Amount reading error." } }
      : await stripe.confirmPayment({
        elements,
        redirect: "if_required",
        confirmParams: {},
      });

    setIsLoading(false);

    if (!confirmError || confirmError.type !== "validation_error") {
      const url = new URL(window.location.href);
      url.searchParams.set('donation_intent', donationIntent.id);
      window.history.pushState(null, '', url.toString());
      onConfirm(donationIntent.id)
    }
  };

  function estimateChargeAmount(rawAmount) {
    const estimatedAmount = Math.ceil((rawAmount > 0 ? rawAmount * 1.035 + .30 : 0) * 10) / 10
    setEstimatedChargeAmount(estimatedAmount)
  }

  function formatToCurrency(amount) {
    return `${new Intl.NumberFormat(LOCALE, {
      style: 'currency',
      currency: CURRENCY,
    }).format(amount)} ${CURRENCY}`
  }

  const paymentElementOptions = {
    layout: "accordion",
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit} >
      <Stack gap='1'>
        <Alert status='info'
          alignItems='start'
          flexDirection='column'
          variant='left-accent'
          justifyContent='start'
          width="20rem"
        >
          <Flex alignItems='center'>
            <AlertIcon />
            <AlertTitle>Transaction fees</AlertTitle>
          </Flex>
          <AlertDescription fontSize='sm' >
            Our provider will charge approx. +3.5% per transaction.
          </AlertDescription>
          <AlertDescription fontSize='sm' color="yellow.700">
            Estimated charge total: {formatToCurrency(estimatedChargeAmount)}
          </AlertDescription>
        </Alert>
        <InputGroup >
          <InputLeftElement
            pointerEvents='none'
            color='gray.300'
            fontSize='1.2em'
            children='$'
          />
          <Input
            placeholder="0.00"
            name="amount"
            required
            type="number"
            min="1"
            className='currency-input'
            textAlign="right"
            onChange={(e) =>
              estimateChargeAmount(e.target.value)
            }
          />
          <InputRightAddon children='USD' />
        </InputGroup>
        <PaymentElement id="payment-element" options={paymentElementOptions} />
        {updateDonationAmountError &&
          <Text color="red.500" align="center">Error while processing donation amount.</Text>
        }
        <Button
          disabled={isLoading || !stripe || !elements}
          id="submit"
          type="submit"
          variant="fillBlue"
          color="white"
          textTransform="uppercase"
        >
          <span id="button-text">
            {isLoading ? <Spinner /> : "Donate"}
          </span>
        </Button>
      </Stack>
    </form>
  );
};
