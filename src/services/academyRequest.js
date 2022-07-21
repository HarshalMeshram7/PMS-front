import axios from "axios";
import useStorage from "src/hooks/useStorage";
import { MAIN_URL } from "./apiConfig";

// add academy
export const addAcademy = async (data) => {
    const { token, user_id } = useStorage();
    if (!token) {
        throw "No Token";
    }
    if (!user_id) {
        throw "No User Id";
    }
    try {
        const res = await axios.post(`${MAIN_URL}/addAcademy/`, data, {
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