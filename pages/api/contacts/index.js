import axios from "axios";

export default async function handler(req, res) {
  try {
    const reqAuth = await axios.post(
      process.env.BACKEND_URL + "/api/auth/local",
      {
        identifier: process.env.WEBSITE_USER,
        password: process.env.WEBSITE_USER_PASSWORD,
      }
    );

    const data = await axios.post(
      process.env.BACKEND_URL + "/api/contacts",
      req.body,
      {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + reqAuth.data.jwt,
        },
      }
    );
    return res.status(200).json(data);
  } catch (error) {
    res.json(error);
  }
}
