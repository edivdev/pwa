import {
  Box,
  Checkbox,
  Flex,
  FormControl,
  Input,
  Stack,
  Text,
  VStack,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";

export default function ShortPetitionForm({ isMobile }) {
  const [hasSubmit, setHasSubmit] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    isLocatedInAct: false,
    signedPetition: false,
  });

  const fieldsMaxLength = 50;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value.slice(0, fieldsMaxLength),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setIsSubmitting(true);

    if (!formData.isLocatedInAct) {
      setErrorMessage("You must be located in ACT city to sign this petition.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await axios.post("/api/petition_signing", { data: formData });

      if (response.data.status) {
        setHasSubmit(true);
        setErrorMessage('');
      } else {
        setErrorMessage(response.data.message || "An error occurred. Please contact info@educaciondiversa.com");
      }
    } catch (error) {
      setErrorMessage("Connection error. Please check your internet and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (hasSubmit) {
    return (
      <Box bg="lightgray" p={isMobile ? 5 : 10} my={5} textAlign="center" borderRadius="md">
        <Text as="h1" fontSize={isMobile ? "2xl" : "4xl"} mb={4} fontWeight="bold">
          Thanks for joining our cause!
        </Text>
        <Text>Your signature has been recorded successfully.</Text>
      </Box>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <Box bg="lightgray" p={isMobile ? 5 : 10} my={5} borderRadius="md">
        <Text as="h1" fontSize={isMobile ? "2xl" : "4xl"} mb={6} fontWeight="bold">
          Sign our petition here:
        </Text>

        <Flex flexWrap="wrap" gap={8}>
          <VStack flex={1} spacing={4} align="stretch" minW={isMobile ? "100%" : "300px"}>
            <FormControl isRequired>
              <Text mb={1} fontWeight="semibold">Full name</Text>
              <Input
                bg="white"
                name="fullName"
                placeholder="Your full name"
                value={formData.fullName}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl isRequired>
              <Text mb={1} fontWeight="semibold">Email</Text>
              <Input
                bg="white"
                name="email"
                type="email"
                placeholder="email@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </FormControl>
          </VStack>

          <VStack flex={1} spacing={6} align="stretch" minW={isMobile ? "100%" : "300px"}>
            <Stack spacing={4}>
              <Text fontSize="lg" fontWeight="semibold">Confirmations</Text>
              <Checkbox
                colorScheme="blue"
                name="signedPetition"
                isChecked={formData.signedPetition}
                onChange={handleChange}
              >
                I want to sign this petition.
              </Checkbox>

              <Checkbox
                colorScheme="blue"
                name="isLocatedInAct"
                isChecked={formData.isLocatedInAct}
                onChange={handleChange}
              >
                I live in ACT city.
              </Checkbox>
            </Stack>

            <Box pt={2}>
              {errorMessage && (
                <Text color="red.600" mb={4} fontSize="sm" fontWeight="bold" borderLeft="4px solid" pl={2}>
                  {errorMessage}
                </Text>
              )}

              <Button
                colorScheme="blue"
                width="full"
                type="submit"
                isLoading={isSubmitting}
                loadingText="Signing..."
                isDisabled={!formData.signedPetition}
              >
                Submit Signature
              </Button>
            </Box>
          </VStack>
        </Flex>
      </Box>
    </form>
  );
}