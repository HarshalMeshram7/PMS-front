import axios from "axios";
import useStorage from "src/hooks/useStorage";
import { MAIN_URL , MAIN_URL2 } from "./apiConfig";


//GET All USERS
export const getAllUser2 = async ( params) => {
  const { token } = useStorage();
  try {
    let res = await axios.get(`${MAIN_URL2}/getUserList/`, {
      params: params,
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return res.data.result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

//GET USER DETAILS
export const getUserDetails = async (params) => {
  const { token  } = useStorage();
  if (!token) {
    throw new Error("No token");
  }
  try {
    let res = await axios.get(`${MAIN_URL2}/getUser`, {
      params: params,
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);

    throw error;
  }
};

//UPDATE USER DETAILS
export const updateUser = async (id, data) => {
  const { token } = useStorage();
  if (!id || !data || !token) {
    return;
  }
  try {
    const res = await axios.put(`${MAIN_URL}/admin/${id}/update_admin/`, data, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return res.data
  } catch (error) {
    console.log(error);
    throw error;
  }
};

//UPDATE USER DETAILS
// export const addUser = async (data) => {
//   const { token } = useStorage();
//   try {
//     const res = await axios.post(`${MAIN_URL}/admin/create_admin/`, data, {
//       headers: {
//         Authorization: "Bearer " + token,
//       },
//     });
//     return res.data;
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// };

//DELETE USER
export const deleteUser = async (id) => {
  const { token } = useStorage();
  if (!id || !token) {
    return;
  }
  try {
    const res = await axios.delete(`${MAIN_URL}/admin/${id}/delete_admin/`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

//Change USER PASSWORD
export const changeUserPassword = async (id, data) => {
  const { token } = useStorage();
  try {
    const res = await axios.post(`${MAIN_URL}/admin/${id}/reset_password/`, data, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};
