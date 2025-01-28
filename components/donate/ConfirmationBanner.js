
import { useState, useEffect } from "react";
import {
  useStripe,
} from "@stripe/react-stripe-js";
import Button from "../ui/Button";
import { FaTimes, FaCheck, FaSpinner } from "react-icons/fa";
import { Icon, Flex, Text } from "@chakra-ui/react";
import {
  TableContainer,
  Table,
  Tbody,
  Tr,
  Td,
  Link as ChakraLink
} from '@chakra-ui/react'

const STATUS_CONTENT_MAP = {
  succeeded: {
    text: "Donation succeeded",
    iconColor: "#30B130",
    icon: <FaCheck />,
  },
  processing: {
    text: "Your donation is processing.",
    iconColor: "#6D6E78",
    icon: <FaSpinner />,
  },
  requires_payment_method: {
    text: "Your donation was not successful, please try again.",
    iconColor: "#DF1B41",
    icon: <FaTimes />,
  },
};

export default function ConfirmationBanner() {
  const stripe = useStripe();

  const [donationIntent, setDonationIntent] = useState({ status: "processing" });

  async function retrieveDonationIntent(id) {
    return await fetch("/api/donations/retrieveDonationIntent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id })
    }).then((res) => res.json())
  }

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const donationIntentId = new URLSearchParams(window.location.search).get(
      "donation_intent"
    );

    if (!donationIntentId) {
      setDonationIntent({ id: "unknown", status: "requires_payment_method" })
      return;
    }

    retrieveDonationIntent(donationIntentId).then(({ donationIntent }) => {
      if (!donationIntent) {
        setDonationIntent({ id: "unknown", status: "requires_payment_method" })
        return;
      }
      setDonationIntent(donationIntent);
    })
  }, [stripe]);

  function handleRetry() {
    const url = new URL(window.location.href);
    console.log(url)
    url.searchParams.delete('donation_intent');
    console.log(url)
    window.location.replace(url)
  }

  return (
    <div id="payment-status">
      <Flex id="status-bar" as='b' p="3" borderRadius="md"
        style={{ backgroundColor: STATUS_CONTENT_MAP[donationIntent.status].iconColor }}>
        <Icon fontSize="1.5rem" color="white" me="2">
          {STATUS_CONTENT_MAP[donationIntent.status].icon}
        </Icon>
        <Text id="status-text" color="white">{STATUS_CONTENT_MAP[donationIntent.status].text}</Text>
      </Flex>
      {donationIntent &&
        <div id="details-table">
          <TableContainer>
            <Table>
              <Tbody>
                <Tr>
                  <Td>Transaction ID</Td>
                  <Td>{donationIntent.id}</Td>
                </Tr>
                <Tr>
                  <Td>Amount</Td>
                  <Td>{donationIntent.amount / 100} {donationIntent.currency?.toUpperCase()}</Td>
                </Tr>
                <Tr>
                  <Td>Date</Td>
                  <Td>{new Date(donationIntent.created * 1000).toLocaleString()}</Td>
                </Tr>
                {donationIntent.status === "requires_payment_method" &&
                  <Tr>
                    <Td>Error</Td>
                    <Td>{donationIntent.last_payment_error?.message ?? "Sever error. Please try it again or contact support."}</Td>
                  </Tr>
                }
                <Tr>
                  <Td>Details</Td>
                  <Td>
                    <Flex alignItems='center'>
                      <ChakraLink
                        href={`https://dashboard.stripe.com/payments/${donationIntent.id}`}
                        id="view-details" target="_blank"
                        textDecoration='underline'
                        color="blue.600"
                        isExternal>
                        View details
                      </ChakraLink>
                      <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ paddingLeft: '5px' }}>
                        <path fillRule="evenodd" clipRule="evenodd" d="M3.125 3.49998C2.64175 3.49998 2.25 3.89173 2.25 4.37498V11.375C2.25 11.8582 2.64175 12.25 3.125 12.25H10.125C10.6082 12.25 11 11.8582 11 11.375V9.62498C11 9.14173 11.3918 8.74998 11.875 8.74998C12.3582 8.74998 12.75 9.14173 12.75 9.62498V11.375C12.75 12.8247 11.5747 14 10.125 14H3.125C1.67525 14 0.5 12.8247 0.5 11.375V4.37498C0.5 2.92524 1.67525 1.74998 3.125 1.74998H4.875C5.35825 1.74998 5.75 2.14173 5.75 2.62498C5.75 3.10823 5.35825 3.49998 4.875 3.49998H3.125Z" fill="#0055DE" />
                        <path d="M8.66672 0C8.18347 0 7.79172 0.391751 7.79172 0.875C7.79172 1.35825 8.18347 1.75 8.66672 1.75H11.5126L4.83967 8.42295C4.49796 8.76466 4.49796 9.31868 4.83967 9.66039C5.18138 10.0021 5.7354 10.0021 6.07711 9.66039L12.7501 2.98744V5.83333C12.7501 6.31658 13.1418 6.70833 13.6251 6.70833C14.1083 6.70833 14.5001 6.31658 14.5001 5.83333V0.875C14.5001 0.391751 14.1083 0 13.6251 0H8.66672Z" fill="#0055DE" />
                      </svg>
                    </Flex>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </div>
      }
      <Flex justifyContent="center">
        <Button
          id="retry-button"
          type="button"
          variant="fillBlue"
          color="white"
          textTransform="uppercase"
          mt="1rem"
          onClick={handleRetry}
        >
          {donationIntent.status === "requires_payment_method"
            ? "Try again"
            : "Donate again"
          }
        </Button>
      </Flex>
    </div>
  );
}