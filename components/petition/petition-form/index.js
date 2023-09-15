import {
  Box,
  Flex,
  FormErrorMessage,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import Button from "../../ui/Button";

export default function PetitionForm({ isMobile }) {
  const [sentEmail, setSentEmail] = useState(false);
  const [first, setFirstName] = useState(undefined);
  const [lastName, setLastName] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [signture, setSignature] = useState(undefined);
  const [comments, setComments] = useState(undefined);
  const [story, setStory] = useState(undefined);
  const [displayName, setDisplayName] = useState(undefined);
  const [shareStory, setShareStory] = useState(undefined);

  return (
    <>
      <form onSubmit={() => handleSubmit(addStory)}>
        <Box bg="lightgray" p={isMobile ? 5 : 10} my={5}>
          <Box>
            <Text as="h1" fontSize={isMobile ? "2xl" : "4xl"} align="left">
              Sign to make gender equality mandatory in Australia
            </Text>

            <Flex flexWrap="wrap">
              <Box flex={2}>
                <Flex flexWrap="wrap">
                  <Box className="form-name" p={2} flex={1} minWidth={400}>
                    <Text>First name</Text>
                    <Input
                      bg={"white"}
                      placeholder="First name"
                      type="text"
                      required
                      name="firstName"
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </Box>

                  <Box className="form-name" p={2} flex={1} minWidth={400}>
                    <Text>Last name</Text>
                    <Input
                      bg={"white"}
                      placeholder="Last name"
                      type="text"
                      required
                      name="lastName"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </Box>

                  <Box className="form-name" p={2} flex={1} minWidth={400}>
                    <Text>Email</Text>
                    <Input
                      bg={"white"}
                      placeholder="Email"
                      type="text"
                      required
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Box>
                </Flex>

                <Flex flexWrap="wrap">
                  <Stack m={2} flex={1} minWidth={300}>
                    <Text>Signature*</Text>
                    <Textarea
                      onChange={(e) => setSignature(e.target.value)}
                      placeholder="Sign here"
                      size="sm"
                      bg={"white"}
                    />
                  </Stack>

                  <Stack m={2} flex={1} minWidth={300}>
                    <Text>Comments</Text>
                    <Textarea
                      onChange={(e) => setComments(e.target.value)}
                      placeholder="Comment"
                      size="sm"
                      bg={"white"}
                    />
                  </Stack>
                </Flex>
              </Box>

              <Stack mt={2} mx={isMobile ? 2 : 5} flex={1}>
                <Text fontSize="lg">Display full name?</Text>

                <RadioGroup onChange={setDisplayName} value={displayName}>
                  <Stack>
                    <Radio colorScheme="blue" value="1">
                      Yes
                    </Radio>
                    <Radio colorScheme="blue" value="0">
                      No, I want to be anonymous
                    </Radio>
                  </Stack>
                </RadioGroup>

                <Text fontSize="sm" color="gray" width={300}>
                  *Your information will be stored in our database and may be
                  shared with third parties in accordance with our privacy
                  policies.
                </Text>
                <Flex justifyContent={isMobile ? "center" : "left"}>
                  <Button colorScheme="blue" width={300}>
                    Sign only
                  </Button>
                </Flex>
              </Stack>
            </Flex>
          </Box>

          <Box mt={5}>
            <Text as="h1" fontSize={isMobile ? "2xl" : "4xl"} align="left">
              Share your story to make an impact
            </Text>

            <Box mt={2}>
              <Flex flexWrap="wrap">
                <Stack mx={2} flex={2} minWidth={400}>
                  <Text>Share story*</Text>
                  <Textarea
                    value="{data.story}"
                    onChange={(event) => handleInputChange(event, "story", 300)}
                    placeholder="Here you can tell us your story"
                    size="sm"
                    bg={"white"}
                  />
                </Stack>

                <Stack mt={isMobile && 4} mx={isMobile ? 1 : 5} flex={1}>
                  <Text fontSize="lg">
                    Do you give permission for ED to store and share your story
                    on its social print material?
                  </Text>
                  <RadioGroup onChange={setShareStory} value={shareStory}>
                    <Stack>
                      <Radio colorScheme="blue" value="1">
                        Yes
                      </Radio>
                      <Radio colorScheme="blue" value="0">
                        No
                      </Radio>
                    </Stack>
                  </RadioGroup>
                  <Flex justifyContent={isMobile ? "center" : "left"}>
                    <Button colorScheme="blue" width={300} mt={2}>
                      Sign and share your story
                    </Button>
                  </Flex>
                </Stack>
              </Flex>
            </Box>
          </Box>
        </Box>
      </form>
    </>
  );
}
