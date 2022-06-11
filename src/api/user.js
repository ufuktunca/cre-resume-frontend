import axios from "axios";

export const localURL = "https://cre-resume-backend.herokuapp.com";

export const LoginHandler = async (email, password, loginType) => {
  try {
    const resp = await axios.post(`${localURL}/login?type=${loginType}`, {
      email,
      password,
    });

    return resp;
  } catch (err) {
    return err.response;
  }
};

export const ReSendHandler = async (email) => {
  try {
    const resp = await axios.post(`${localURL}/reSend`, {
      email,
    });
    return resp;
  } catch (err) {
    return err.response;
  }
};

export const RegisterHandler = async (
  name,
  surname,
  email,
  password,
  type,
  birthDate
) => {
  try {
    const resp = await axios.post(`${localURL}/register`, {
      name,
      surname,
      email,
      password,
      type,
      birthDate,
    });
    return resp;
  } catch (err) {
    return err.response;
  }
};

export const ActivationHandler = async (userID) => {
  try {
    const resp = await axios.get(`${localURL}/activation?userID=${userID}`, {});
    return resp;
  } catch (err) {
    return err.response;
  }
};

export const GetCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
};

export const SetCookie = (cname, cvalue, expiresTime) => {
  document.cookie =
    cname + "=" + cvalue + ";" + "expires=" + expiresTime + ";path=/";
};
