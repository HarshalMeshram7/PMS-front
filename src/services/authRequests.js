import axios from "axios";
import useStorage from "src/hooks/useStorage";
import jwtDecode from "src/utils/jwt-decode";
import { MAIN_URL } from "./apiConfig";

//ADMIN LOGIN
export const login = async ({ email, password }) => {
  try {
    const res = await axios.post(`${MAIN_URL}/login/`, {
      email,
      password,
    });
    const { setToken, setUserId, setEmail, setRole } = useStorage();

    const authData = jwtDecode(res.data?.access_token);
    const tokenExp = authData?.exp;
    const userRole = authData?.role;

    setToken(res.data?.access_token);
    setRole(userRole);
    setUserId(res.data?.admin_id);
    setEmail(res.data?.email);

    return res.data;
  } catch (error) {
    throw error;
  }
};

//GET ADMIN DETAILS
export const getAdmin = async () => {
  const { token, user_id } = useStorage();
  if (!token) {
    throw new Error("No token");
  }
  try {
    let res = await axios.get(`${MAIN_URL}/profile`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);

    throw error;
  }
};

//USER LOGOUT
export const logout = async () => {
  const { clearAll } = useStorage();
  try {
    clearAll();
  } catch (error) {}
};

//UPDATE USER DETAILS
export const updateAdmin = async (data) => {
  const { token, user_id } = useStorage();
  if (!token) {
    throw "No Token";
  }
  if (!user_id) {
    throw "No User Id";
  }
  try {
    const res = await axios.put(`${MAIN_URL}/admin/${user_id}/update_admin/`, data, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};
