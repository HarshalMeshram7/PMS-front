import axios from "axios";
import useStorage from "src/hooks/useStorage";
import { MAIN_URL , MAIN_URL2 } from "./apiConfig";


//GET All STAFF 
export const getAllStaff = async ( params) => {
  const { token } = useStorage();
  try {
    let res = await axios.get(`${MAIN_URL2}/getStaffList/`, {
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

//GET STAFF DETAILS
export const getStaffDetails = async (params) => {
  const { token  } = useStorage();
  if (!token) {
    throw new Error("No token");
  }
  try {
    let res = await axios.get(`${MAIN_URL2}/getStaff`, {
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

//UPDATE STAFF DETAILS
export const updateStaff = async (id, data) => {
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

//DELETE STAFF
export const deleteStaff = async (id) => {
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

//Change STAFF PASSWORD
export const changeStaffPassword = async (id, data) => {
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
