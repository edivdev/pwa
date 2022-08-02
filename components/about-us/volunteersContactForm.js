import { useState } from "react";
import { Box, Grid, GridItem, Flex } from "@chakra-ui/react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Image from "next/image";
import axios from "axios";

export default function VolunteersContactForm() {
  const [sentEmail, setSentEmail] = useState(false);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setSentEmail(true);

    let data = {
      data: {
        fname,
        lname,
        email,
        phone,
        country,
        publishedAt: null,
      },
    };

    await axios.post("/api/volunteers", data).then((response) => {
      // console.log(response);
      if (response.data.status) {
        setErrorMessage(true);
        console.log(response.data.status, response.data.message);
      }
    });
  }

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
                disabled={sentEmail ? true : false}
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
          {errorMessage
            ? "An Error has ocurred, please write us an email to educaciondiversa@gmail.com with your message"
            : "Thank you! your information has been sent. Soon we will contact you!"}
        </Box>
      )}
    </>
  );
}
