import axios from "axios";

const headers = {
  Accept: "application/json",
  Authorization:
    "Bearer " +
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjU4NTIwMDM5LCJleHAiOjE2NjExMTIwMzl9.j5loBXsJTY9gKDXli2ncKSiDHu5SExtBBMqwRhU5fJk",
};

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

    const blogs = await res.data.data;

    return data;
  } catch (err) {
    console.log(err);
    return false;
  }
}
