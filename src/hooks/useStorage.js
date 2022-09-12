import { getCookie, setCookie, deleteCookie } from "cookies-next";
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
    setCookie("token", token);
  };

  const setUserId = (id) => {
    setCookie("user_id", id);
  };
  const setRole = (r) => {
    setCookie("role", r);
  };

  const setEmail = (email) => {
    setCookie("email", email);
  };
  const setFname = (fname) => {
    setCookie("fname", fname);
  };
  const setLname = (lname) => {
    setCookie("lname", lname);
  };
  const setUserProfile = (userProfile) => {
    setCookie("userProfile", userProfile);
  };

  const removeToken = () => {
    deleteCookie("token");
  };

  const clearAll = () => {
    deleteCookie("token");
    deleteCookie("email");
    deleteCookie("fname");
    deleteCookie("lname");
    deleteCookie("userProfile");
    deleteCookie("user_id");
    deleteCookie("role");
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
