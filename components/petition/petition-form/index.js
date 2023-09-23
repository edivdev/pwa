import {
  Box,
  Checkbox,
  Flex,
  FormControl,
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
import axios from "axios";

export default function PetitionForm({ isMobile }) {
  const [sentEmail, setSentEmail] = useState("");
  const [hasSubmit, setHasSubmit] = useState(false);
  const [triedToSubmit, setTriedToSubmit] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [submitWithStory, setSubmitWithStory] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [signature, setSignature] = useState("");
  const [comments, setComments] = useState("");
  const [story, setStory] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [isOver18, setIsOver18] = useState("");
  const [hasAdultPermission, setHasAdultPermission] = useState(false);
  const [shareStory, setShareStory] = useState("");
  const fieldsMaxLength = 50;
  const testAreasMaxLength = 300;
  let formIsValid = false;

  const data = {
    firstName,
    lastName,
    email,
    signature,
    comments,
    story,
    displayName,
    shareStory,
    isOver18,
    hasAdultPermission
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateData();
    setTriedToSubmit(true);
    formIsValid && setHasSubmit(true);
    formIsValid && sendEmails();
  };

  const validateData = () => {
    const requiredFields = validateRequieredFields();
    const emailPattern = validateEmailPattern();
    const validPermission = validatePermission();
    if (requiredFields && emailPattern && validPermission) {
      setErrorMessage("");
      formIsValid = true;
    }
  };

  const validateRequieredFields = () => {
    const dataKeys = Object.keys(data);
    const dataValues = Object.values(data);
    const validate = submitWithStory
      ? ["displayName", "shareStory"]
      : ["displayName"];
    let confirmValidation = true;
    dataKeys.forEach((element, index) => {
      if (validate.includes(element)) {
        const emptyMessage = "Required fields should not be empty.";
        const filedIsEmpty = dataValues[index] === "";
        if (filedIsEmpty) {
          setErrorMessage(emptyMessage);
          confirmValidation = false;
        }
      }
    });
    return confirmValidation;
  };

  const validateEmailPattern = () => {
    const regEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const emailIsValid = hasValidPattern(email, regEx);
    if (!emailIsValid) {
      const emailErrorMessage = "Email is invalid";
      setErrorMessage(emailErrorMessage);
      return false;
    }
    return true;
  };

  const hasValidPattern = (element, pattern) => {
    return pattern.test(element);
  };

  const setWithMaxLength = (value, maxLength, setStateCb) => {
    const isValid = value.length <= maxLength;
    isValid && setStateCb(value);
  };

  const sendEmails = () => {
    setSentEmail(true);
    axios.post("/api/petition_signing", { data }).then((response) => {
      // console.log(response);
      if (response.data.status) {
        setErrorMessage(true);
        console.log(response.data.status, response.data.message);
      }
    });
  };

  const validatePermission = () => {
    console.log({ isOver18, hasAdultPermission });
    const isValid = Number(isOver18) || hasAdultPermission;
    if (!isValid) {
      setErrorMessage(
        "You should be over 18 years old or have signed consent of an adult to submit the petition"
      );
    }
    return isValid;
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box bg="lightgray" p={isMobile ? 5 : 10} my={5}>
          {hasSubmit ? (
            <Box>
              <Text as="h1" fontSize={isMobile ? "2xl" : "4xl"} align="center">
                Thanks for joining our cause
              </Text>
              <Box color="black" align="center">
                {errorMessage &&
                  "An Error has ocurred, please write us an email to educaciondiversa@gmail.com with your message"}
              </Box>
            </Box>
          ) : (
            <>
              <Box>
                <Text as="h1" fontSize={isMobile ? "2xl" : "4xl"} align="left">
                  Sign to make gender equality mandatory in Australia
                </Text>

                <Flex flexWrap="wrap">
                  <Box flex={2}>
                    <Flex flexWrap="wrap">
                      <Box
                        className="form-name"
                        p={2}
                        flex={1}
                        minWidth={isMobile ? 300 : 400}
                      >
                        <Text>First name*</Text>
                        <Input
                          bg={"white"}
                          placeholder="First name"
                          type="text"
                          required
                          name="firstName"
                          value={firstName}
                          onChange={(e) =>
                            setWithMaxLength(
                              e.target.value,
                              fieldsMaxLength,
                              setFirstName
                            )
                          }
                        />
                      </Box>

                      <Box
                        className="form-name"
                        p={2}
                        flex={1}
                        minWidth={isMobile ? 300 : 400}
                      >
                        <Text>Last name*</Text>
                        <Input
                          bg={"white"}
                          placeholder="Last name"
                          type="text"
                          required
                          name="lastName"
                          onChange={(e) =>
                            setWithMaxLength(
                              e.target.value,
                              fieldsMaxLength,
                              setLastName
                            )
                          }
                        />
                      </Box>

                      <Box
                        className="form-name"
                        p={2}
                        flex={1}
                        minWidth={isMobile ? 300 : 400}
                      >
                        <Text>Email*</Text>
                        <Input
                          bg={"white"}
                          placeholder="Email"
                          type="text"
                          required
                          name="email"
                          onChange={(e) =>
                            setWithMaxLength(
                              e.target.value,
                              fieldsMaxLength,
                              setEmail
                            )
                          }
                        />
                      </Box>
                    </Flex>

                    <Flex flexWrap="wrap">
                      <Stack m={2} flex={1} minWidth={isMobile ? 300 : 400}>
                        <Text>Signature*</Text>
                        <Textarea
                          onChange={(e) => setSignature(e.target.value)}
                          placeholder="Sign here"
                          required
                          size="sm"
                          bg={"white"}
                        />
                      </Stack>

                      <Stack m={2} flex={1} minWidth={isMobile ? 300 : 400}>
                        <Text>Comments</Text>
                        <Textarea
                          placeholder="Comment"
                          size="sm"
                          bg={"white"}
                          onChange={(e) =>
                            setWithMaxLength(
                              e.target.value,
                              testAreasMaxLength,
                              setComments
                            )
                          }
                        />
                      </Stack>
                    </Flex>
                  </Box>

                  <Stack mt={2} mx={isMobile ? 2 : 5} flex={1}>
                    <Text fontSize="lg">Display full name?*</Text>

                    <FormControl
                      isInvalid={triedToSubmit && displayName === ""}
                    >
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
                    </FormControl>

                    <Text fontSize="lg" pt={2}>
                      Are you over 18 years old?*
                    </Text>
                    <FormControl
                      isInvalid={triedToSubmit && Number(isOver18) === ""}
                    >
                      <RadioGroup onChange={setIsOver18} value={isOver18}>
                        <Stack>
                          <Radio colorScheme="blue" value="1">
                            Yes
                          </Radio>
                          <Radio colorScheme="blue" value="0">
                            No
                          </Radio>
                        </Stack>
                      </RadioGroup>
                    </FormControl>

                    <Checkbox
                      py={2}
                      visibility={
                        !Number(isOver18) && isOver18 !== ""
                          ? "visible"
                          : "hidden"
                      }
                      onChange={(e) =>
                        setHasAdultPermission([e.target.checked])
                      }
                      isInvalid={
                        triedToSubmit && !Number(isOver18) && !hasAdultPermission
                      }
                    >
                      I have a permission from my tutor or responsable adult to
                      sumbit
                    </Checkbox>

                    <Flex justifyContent={isMobile ? "center" : "left"}>
                      <Button
                        colorScheme="blue"
                        width={300}
                        type="submit"
                        disabled={hasSubmit}
                        onClick={() => {
                          setSubmitWithStory(false);
                        }}
                      >
                        Sign only
                      </Button>
                    </Flex>
                    <FormErrorMessage>Rerasads</FormErrorMessage>
                    {errorMessage && !submitWithStory && (
                      <Text color="red">{errorMessage}</Text>
                    )}
                  </Stack>
                </Flex>

                <Text fontSize="sm" color="gray">
                  *Your information will be stored in our database and may be
                  shared with third parties in accordance with our privacy
                  policies.
                </Text>
              </Box>

              <Box mt={5}>
                <Text as="h1" fontSize={isMobile ? "2xl" : "4xl"} align="left">
                  Share your story to make an impact
                </Text>

                <Box mt={2}>
                  <Flex flexWrap="wrap">
                    <Flex
                      direction={"column"}
                      mx={2}
                      flex={2}
                      minWidth={isMobile ? 300 : 400}
                    >
                      <Text flex={0}>Share story*</Text>
                      <Textarea
                        placeholder="Here you can tell us your story"
                        size="sm"
                        bg={"white"}
                        flex={1}
                        required={submitWithStory}
                        onChange={(e) =>
                          setWithMaxLength(
                            e.target.value,
                            testAreasMaxLength,
                            setStory
                          )
                        }
                      />
                    </Flex>

                    <Stack mt={isMobile && 4} mx={isMobile ? 1 : 5} flex={1}>
                      <Text fontSize="lg">
                        Do you give permission for ED to store and share your
                        story on its social print material?*
                      </Text>
                      <FormControl
                        isInvalid={
                          triedToSubmit && submitWithStory && shareStory === ""
                        }
                      >
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
                      </FormControl>
                      <Flex justifyContent={isMobile ? "center" : "left"}>
                        <Button
                          colorScheme="blue"
                          width={300}
                          mt={2}
                          type="submit"
                          disabled={hasSubmit}
                          onClick={() => {
                            setSubmitWithStory(true);
                          }}
                        >
                          Sign and share your story
                        </Button>
                      </Flex>
                      {errorMessage && submitWithStory && (
                        <Text color="red">{errorMessage}</Text>
                      )}
                    </Stack>
                  </Flex>
                </Box>
              </Box>
            </>
          )}
        </Box>
      </form>
    </>
  );
}
