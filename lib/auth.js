import axios from "axios";

let loginPromise = null;

export async function getAuthToken() {
  // Si ya existe una promesa (en curso o resuelta), devuélvela
  if (loginPromise) {
    console.log("######## HAS PROMISE ########");
    return loginPromise;
  }

  // Si no existe, creamos la promesa de login
  loginPromise = (async () => {
    try {
      // Tu lógica original de login
      const token = await login();
      return token;
    } catch (error) {
      // Si falla, reseteamos la promesa para que el siguiente intento pueda reintentar
      loginPromise = null;
      throw error;
    }
  })();

  return loginPromise;
}

async function login() {
  console.log("######## LOGIN AGAIN ########");

  const reqAuth = await axios.post(
    process.env.BACKEND_URL + "/api/auth/local",
    {
      identifier: process.env.WEBSITE_USER,
      password: process.env.WEBSITE_USER_PASSWORD,
    }
  );

  return reqAuth.data.jwt;
}