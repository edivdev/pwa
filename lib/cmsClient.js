import axios from "axios";

export async function getDepartments() {
  try {
    const reqAuth = await axios.post(
      process.env.BACKEND_URL + "/api/auth/local",
      {
        identifier: process.env.WEBSITE_USER,
        password: process.env.WEBSITE_USER_PASSWORD,
      }
    );

    const res = await axios({
      method: "GET",
      baseURL: process.env.backendUrl,
      url: "/api/departments",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + reqAuth.data.jwt,
      },
    });

    const data = await res.data;

    return data;
  } catch (err) {
    console.log(err);
    return false;
  }
}
