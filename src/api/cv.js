import axios from "axios";
import { GetCookie } from "./user";

export const localURL = "https://cre-resume-backend.herokuapp.com";

export const CVHandler = async (
  nameSurname,
  cvName,
  aboutMe,
  jobTitle,
  phoneNumber,
  email,
  hobbies,
  photo,
  education,
  experience,
  github,
  linkedin,
  otherSM,
  languages,
  skills
) => {
  const response = await axios.post(
    `${localURL}/user/cv`,
    {
      nameSurname,
      cvName,
      aboutMe,
      jobTitle,
      phoneNumber,
      email,
      hobbies,
      photo,
      education,
      experience,
      github,
      linkedin,
      otherSM,
      languages,
      skills,
    },
    {
      headers: {
        Authorization: GetCookie("auth"),
      },
    }
  );

  return response;
};

export const GetUserCVsHandler = async () => {
  const resp = await axios.get(`${localURL}/user/cv`, {
    headers: {
      Authorization: GetCookie("auth"),
    },
  });

  return resp.data;
};
