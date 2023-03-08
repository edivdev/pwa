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
    // console.log(err);
    return false;
  }
}

export async function getBlogs() {
  try {
    const token = await login();

    const res = await axios({
      method: "GET",
      baseURL: process.env.backendUrl,
      url: "/api/blogs?populate=*",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token,
      },
    });

    const blogs = await res.data.data;

    return blogs;
  } catch (err) {
    //console.log(err);
    return false;
  }
}

// export async function getProjects() {
//   console.log("me voy a logear en proyectos");

//   try {
//     const token = await login();

//     const res = await axios({
//       method: "GET",
//       baseURL: process.env.backendUrl,
//       url: "/api/projects?populate=*,mainPicture,project_category,department.picture,project_template,campaignPicture,pictures,sustainable_dev_goals.picture,resources,contentDownload",
//       headers: {
//         Accept: "application/json",
//         Authorization: "Bearer " + token,
//       },
//     });

//     const projects = await res.data.data;

//     return projects;
//   } catch (err) {
//     // console.log("algo anda mal");
//     return false;
//   }
// }

const featuredUrl =
  "https://cms.educaciondiversa.com/api/projects?populate=*,mainPicture,project_category,department.picture,project_template,campaignPicture,pictures,sustainable_dev_goals.picture,resources,contentDownload&pagination[start]=0&pagination[limit]=8&sort[1]=order";

export const getFeaturedProjects = async () => {
  const reqAuth = await axios.post(
    process.env.BACKEND_URL + "/api/auth/local",
    {
      identifier: process.env.WEBSITE_USER,
      password: process.env.WEBSITE_USER_PASSWORD,
    }
  );

  try {
    const res = await axios({
      method: "GET",
      baseURL: process.env.backendUrl,
      url: featuredUrl,
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + reqAuth.data.jwt,
      },
    });

    const projects = await res.data.data;
    return projects;
  } catch (err) {
    console.log("algo anda mal");
    return false;
  }
};

// export const getProjects = async () => {
//   try {
//     const res = await axios({
//       method: "GET",
//       baseURL: process.env.backendUrl,
//       url: `https://cms.educaciondiversa.com/api/projects?populate=*,mainPicture,project_category,department.picture,project_template,campaignPicture,pictures,sustainable_dev_goals.picture,resources,contentDownload`,
//       headers: {
//         Accept: "application/json",
//       },
//     });

//     const projects = await res.data.data;
//     return projects;
//   } catch (err) {
//     console.log("algo anda mal");
//     return false;
//   }
// };

export const getProjects = async () => {
  try {
    let token = await login();
    let projects = await axios({
      method: "GET",
      url: "https://cms.educaciondiversa.com/api/projects?populate=*,mainPicture,project_category,department.picture,project_template,campaignPicture,pictures,sustainable_dev_goals.picture,resources,contentDownload",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token,
      },
    });

    return projects.data;
  } catch (err) {
    console.log("algo anda mal", err);
    return false;
  }
};
