import { getCookie, setCookies, removeCookies } from "cookies-next";
const EXPIRY_TIME = 86400;
const useStorage = () => {
  const token = getCookie("token");
  const user_id = getCookie("user_id");
  const role = getCookie("role");
  const email = getCookie("email");
  const fname = getCookie("fname");
  const lname = getCookie("lname");
  const userProfile = getCookie("userProfile");

  const setToken = (token) => {
    setCookies("token", token);
  };

  const setUserId = (id) => {
    setCookies("user_id", id);
  };
  const setRole = (r) => {
    setCookies("role", r);
  };

  const setEmail = (email) => {
    setCookies("email", email);
  };
  const setFname = (fname) => {
    setCookies("fname", fname);
  };
  const setLname = (lname) => {
    setCookies("lname", lname);
  };
  const setUserProfile = (userProfile) => {
    setCookies("userProfile", userProfile);
  };

  const removeToken = () => {
    removeCookies("token");
  };

  const clearAll = () => {
    removeCookies("token");
    removeCookies("email");
    removeCookies("fname");
    removeCookies("lname");
    removeCookies("userProfile");
    removeCookies("user_id");
    removeCookies("role");
  };

  return {
    token,
    user_id,
    email,
    fname,
    lname,
    userProfile,
    role,
    setUserId,
    setEmail,
    setToken,
    setRole,
    setFname,
    setLname,
    setUserProfile,
    removeToken,
    clearAll,
  };
};

export default useStorage;
