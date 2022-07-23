import axios from "axios";

const headers = {
  Accept: "application/json",
  Authorization:
    "Bearer " +
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjU4NTIwMDM5LCJleHAiOjE2NjExMTIwMzl9.j5loBXsJTY9gKDXli2ncKSiDHu5SExtBBMqwRhU5fJk",
};

export async function getDepartments() {
  const res = await axios({
    method: "GET",
    baseURL: process.env.backendUrl,
    url: "/api/departments",
    headers: headers,
  });

  const departments = await res.data.data;

  return departments;
}

export async function getBlogs() {
  const res = await axios({
    method: "GET",
    baseURL: process.env.backendUrl,
    url: "/api/blogs?populate=*",
    headers: headers,
  });

  const blogs = await res.data.data;

  return blogs;
}
