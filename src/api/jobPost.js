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
  type,
  cvId
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
        cvId,
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

export const ApplyJobHandler = async (jobID, cvId) => {
  try {
    const resp = await axios.post(
      `${localURL}/jobPost/${jobID}/apply`,
      {
        cvId,
      },
      {
        headers: {
          Authorization: GetCookie("auth"),
        },
      }
    );

    return resp;
  } catch (e) {
    return e.response;
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

export const GetUserJobPostsHandler = async (postType) => {
  const resp = await axios.get(`${localURL}/jobPost/user/${postType}`, {
    headers: {
      Authorization: GetCookie("auth"),
    },
  });

  return resp;
};

export const GetAppliedJobs = async () => {
  const resp = await axios.get(`${localURL}/user/jobPost/apply`, {
    headers: {
      Authorization: GetCookie("auth"),
    },
  });

  return resp;
};

export const GetJobApplies = async (jobId) => {
  const resp = await axios.get(`${localURL}/jobs/${jobId}/apply`, {
    headers: {
      Authorization: GetCookie("auth"),
    },
  });

  return resp;
};
