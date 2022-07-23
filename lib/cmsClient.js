import axios from "axios";

export async function getDepartments() {
  try {
    const res = await axios({
      method: "GET",
      baseURL: process.env.backendUrl,
      url: "/api/departments",
      headers: {
        Accept: "application/json",
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjU4NTIwMDM5LCJleHAiOjE2NjExMTIwMzl9.j5loBXsJTY9gKDXli2ncKSiDHu5SExtBBMqwRhU5fJk",
      },
    });

    const data = await res.data;

    return data;
  } catch (err) {
    return false;
  }
}
