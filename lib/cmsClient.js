import axios from "axios";

async function login() {
  const reqAuth = await axios.post(
    process.env.BACKEND_URL + "/api/auth/local",
    {
      identifier: process.env.WEBSITE_USER,
      password: process.env.WEBSITE_USER_PASSWORD,
    }
  );
  return reqAuth.data.jwt;
}

export async function loginOnClient() {
  const reqAuth = await axios.post(process.env.backendUrl + "/api/auth/local", {
    identifier: process.env.web_user,
    password: process.env.web_code,
  });
  return reqAuth.data.jwt;
}

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
      url: "/api/departments?populate=*",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + reqAuth.data.jwt,
      },
    });

    const departments = await res.data.data;

    return departments;
  } catch (err) {
    console.log(err);
    return false;
  }
}

export async function getBlogs() {
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
      url: "/api/blogs?populate=*",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + reqAuth.data.jwt,
      },
    });

    const blogs = await res.data.data;

    return blogs;
  } catch (err) {
    console.log(err);
    return false;
  }
}

export async function getProjects() {
  try {
    const token = await login();

    const res = await axios({
      method: "GET",
      baseURL: process.env.backendUrl,
      url: "/api/projects?populate=*,mainPicture,project_category,department.picture,project_template,campaignPicture,pictures,sustainable_dev_goals.picture,resources,contentDownload",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token,
      },
    });

    const projects = await res.data.data;

    return projects;
  } catch (err) {
    console.log(err);
    return false;
  }
}
