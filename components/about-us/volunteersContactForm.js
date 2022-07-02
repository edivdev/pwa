import { useState } from "react";
import { Box, Grid, GridItem, Flex } from "@chakra-ui/react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Image from "next/image";
import emailjs from "@emailjs/browser";

export default function VolunteersContactForm() {
  const [sentEmail, setSentEmail] = useState(false);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setSentEmail(true);

    console.log("hey!!", templateParams);

    emailjs
      .send(
        process.env.newsletterService,
        process.env.volunteersTemplate,
        templateParams,
        process.env.newsletterKey
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  }

  const templateParams = {
    first_name: fname,
    last_name: lname,
    email_address: email,
    contact_phone: phone,
    country: country,
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box id="volunteers-contact-form">
          <Grid
            templateRows="repeat(4, 1fr)"
            templateColumns="repeat(2, 1fr)"
            gap="27px"
          >
            <GridItem>
              <Input
                placeholder="First Name*"
                name="name"
                required
                type="text"
                onChange={(e) => setFname(e.target.value)}
              />
            </GridItem>

            <GridItem>
              <Input
                placeholder="Last Name*"
                required
                type="text"
                name="last-name"
                onChange={(e) => setLname(e.target.value)}
              />
            </GridItem>

            <GridItem>
              <Input
                placeholder="Phone*"
                required
                type="number"
                name="phone"
                onChange={(e) => setPhone(e.target.value)}
              />
            </GridItem>

            <GridItem>
              <Input
                placeholder="Country*"
                required
                type="text"
                name="country"
                onChange={(e) => setCountry(e.target.value)}
              />
            </GridItem>

            <GridItem colSpan={2}>
              <Input
                placeholder="Email*"
                required
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </GridItem>

            <GridItem colSpan={2}>
              <Button
                disabled={sentEmail}
                size="banner"
                variant="noButton"
                type="submit"
                color="white"
                textTransform="uppercase"
              >
                <Flex alignItems="center">
                  <Box>
                    <Image
                      src="/images/static/assets/red-right-arrow.png"
                      width="29px"
                      height="21px"
                      alt="send"
                    />
                  </Box>
                  <Box ml="10px">{sentEmail ? "Sent!" : "Send"}</Box>
                </Flex>
              </Button>
            </GridItem>
          </Grid>
        </Box>
      </form>
      {sentEmail && (
        <Box color="white">
          Thank you! your information has been sent. Soon we will contact you!
        </Box>
      )}
    </>
  );
}
