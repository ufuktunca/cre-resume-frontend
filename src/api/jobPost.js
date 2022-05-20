import axios from "axios";
import { GetCookie } from "./user";

export const localURL = "http://localhost:8080";

export const CreateJobPostHandler = async (
  title,
  company,
  content,
  salary,
  category,
  location,
  image,
  currency,
  type
) => {
  try {
    const resp = await axios.post(
      `${localURL}/jobPost/${type}`,
      {
        title,
        company,
        content,
        salary,
        category,
        location,
        image,
        currency,
      },
      {
        headers: {
          Authorization: GetCookie("auth"),
        },
      }
    );

    return resp;
  } catch (err) {
    return err.response;
  }
};
