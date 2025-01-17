import { useState } from "react";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import axios from "axios";

export default function MemberForm() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [sentEmail, setSentEmail] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setSentEmail(true);

    let data = {
      data: {
        fname,
        lname,
        email,
      },
    };

    await axios.post("/api/subscribers", data).then((response) => {
      // console.log(response);
      if (response.data.status) {
        setErrorMessage(true);
        console.log(response.data.status, response.data.message);
      }
    });
  }

  if (sentEmail) {
    if (errorMessage) {
      return (
        <p>
          An error has ocurred, please write a message to
          info@educaciondiversa.com to request your Newsletter subscription.
        </p>
      );
    }
    return (
      <p>
        Thanks for your registration, your data has been submited sucesfully,
        now you will receive our montly Newsletter!
      </p>
    );
  }

  return (
    <form id="footer-form" onSubmit={handleSubmit}>
      <Input
        my="3%"
        placeholder="First Name"
        required
        type="text"
        name="name"
        onChange={(e) => setFname(e.target.value)}
      />
      <Input
        my="3%"
        placeholder="Last Name"
        required
        type="text"
        name="last-name"
        onChange={(e) => setLname(e.target.value)}
      />
      <Input
        my="3%"
        placeholder="Email"
        required
        type="email"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button type="submit" variant="SignUp">
        REGISTER
      </Button>
    </form>
  );
}
