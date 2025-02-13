import { Box, Center, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import MembershipPlan from "../../components/donate/MembershipPlan";
import PagesHeader from "../../components/ui/PagesHeader";
import Image from "next/image";
import Text from "../../components/ui/Text";
import useViewport from "../../hooks/useViewport";
import { donateDepartments2 } from "../../components/data/initialState";
import Link from "next/link";
import BankDetails from "../../components/donate/BankDetails";
import Head from "next/head";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from "../../components/donate/CheckoutForm";
import ConfirmationBanner from "../../components/donate/ConfirmationBanner";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function DonatePage(props) {
  const qrdata = `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`;

  const { projs } = props;

  const viewport = useViewport();
  const [isMobile, setIsMobile] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    setIsMobile(viewport[0]);
  }, [isMobile, viewport]);

  useEffect(() => {
    handleConfirmUpdate()
  });

  useEffect(() => {
    fetchClientSecret()
  }, []);

  function handleConfirmUpdate() {
    setConfirmed(new URLSearchParams(window.location.search).get(
      "donation_intent"
    ));
  }

  function fetchClientSecret() {
    fetch("/api/donations/donationIntent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: 100 }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }

  const appearance = {
    theme: 'stripe',
  };

  const options = {
    clientSecret,
    appearance,
  };

  return (
    <>
      <Head>
        <title>Donate</title>
      </Head>
      <Box>
        <PagesHeader
          background="/images/static/backgrounds/BLUE_BACKGROUND.jpg"
          text0="Educación Diversa"
          text1="DONATE"
        />
        <Box
          w={isMobile ? "auto" : "1000"}
          position="relative"
          mt={isMobile ? "30px" : "-150px"}
        >
          <Box display="flex" justifyContent="space-evenly" >
            <Center bgColor="white" p="1rem" borderTopRadius="md" minH="16rem" minW="10rem">
              {clientSecret ? (
                <Elements options={options} stripe={stripePromise}>
                  {confirmed
                    ? <ConfirmationBanner />
                    : <CheckoutForm clientSecret={clientSecret} onConfirm={handleConfirmUpdate} />}
                </Elements>
              )
                : <Spinner color="blue.500" />}
            </Center>
          </Box>

        </Box>

        {/* TODO: Trensform all the process of donation in a simple component not depending on the "Donation section",
should be movable to the new website.  */}

        <Box display="flex" justifyContent="space-evenly">
          <Box mt="2em" w={isMobile ? "90%" : "41%"}>
            <Text fontSize="22px" textAlign="center" fontWeight="600">
              Or you can contact us using the contact form on{" "}
              <Link href="/contact">
                <a>
                  <span style={{ color: "#658AC8", fontWeight: "900" }}>
                    Contact Page
                  </span>
                </a>
              </Link>{" "}
              {""}
              and select the option &quot;Want to make a donation&quot;.
            </Text>
          </Box>
        </Box>

        <Box>
          <BankDetails isMobile={isMobile} />
        </Box>

        <MembershipPlan isMobile={isMobile} />
      </Box>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      projs: donateDepartments2,
    },
  };
}
