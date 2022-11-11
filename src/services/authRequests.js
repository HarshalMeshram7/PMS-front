import axios from "axios";
import useStorage from "src/hooks/useStorage";
import jwtDecode from "src/utils/jwt-decode";
import { MAIN_URL, MAIN_URL2 } from "./apiConfig";

//ADMIN LOGIN
export const login = async ({ email, password }) => {
  try {
    // const res = await axios.post(`${MAIN_URL}/api/user/login`, {
    //   email,
    //   password,
    // });
    let res;
    if (email == "Federation@pixonix.tech" && password == "Federation@1234") {
      res = {
        message: "Login Success",
        status: "success",
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmQ2NTllYTcxNTM5ZTA1ZTMyYjc5YTQiLCJlbWFpbCI6IkZlZGVyYXRpb25AcGl4b25peC50ZWNoIiwicm9sZSI6IkZlZGVyYXRpb24iLCJpYXQiOjE2NjgxNDY1MDcsImV4cCI6MTY2ODU3ODUwN30.9YvBlqbhhcvqov5DQ--sTSKCEsm32JFCIs8lOikmDfA",
      };
      const { setToken, setUserId, setEmail, setRole } = useStorage();
      const authData = jwtDecode(res?.token);
      const tokenExp = authData?.exp;

      setToken(res?.token);
      setRole(authData?.role);
      setUserId(authData?.userId);
      setEmail(authData?.email);
    } else {
      res = {
        message: "Login Failed",
        status: "failed",
      };
    }

    return res;
  } catch (error) {
    throw error;
  }
};

//GET USER DETAILS
export const getUser = async () => {
  const { token } = useStorage();
  if (!token) {
    throw new Error("No token");
  }
  try {
    // let res = await axios.get(`${MAIN_URL}/api/user/loggeduser`, {
    //   headers: {
    //     Authorization: "Bearer " + token,
    //   },
    // });

    let res = {
      user: {
        _id: "62d659ea71539e05e32b79a4",
        name: "Federation",
        email: "Federation@pixonix.tech",
        role: "Federation",
        tc: true,
        __v: 0,
      },
    };

    return res.user;
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
