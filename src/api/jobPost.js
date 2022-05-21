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

export const GetJobPostsHandler = async (postType, category, salary, sort) => {
  let query = "";
  if (category.type != "") {
    query += "&category=" + category.type;
  }

  if (salary[0] > 0 || salary[1] > 0) {
    query += "&from=" + salary[0] + "&to=" + salary[1];
  }

  if (sort.type != "") {
    query += "&sort=" + sort.type;
  }

  query = query.replace("&", "?");

  const resp = await axios.get(`${localURL}/jobPost/${postType}${query}`, {
    headers: {
      Authorization: GetCookie("auth"),
    },
  });

  return resp;
};
