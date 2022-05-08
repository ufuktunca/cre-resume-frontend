import axios from "axios";
import { GetCookie } from "./user";

const localURL = "http://localhost:8080";

export const CVHandler = async (email, password) => {
  console.log(email, password);

  const response = await axios.post(
    `${localURL}/cv`,
    {
      email,
      password,
    },
    {
      headers: {
        Authorization: GetCookie("auth"),
      },
    }
  );

  return response;
};
