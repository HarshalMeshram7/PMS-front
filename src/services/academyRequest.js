import axios from "axios";
import useStorage from "src/hooks/useStorage";
import { MAIN_URL } from "./apiConfig";

// Add Academy
export const addAcademy = async (data) => {
    const { token} = useStorage();
    if (!token) {
        throw "No Token";
    }
    try {
        const res = await axios.post(`${MAIN_URL}/api/academy/addAcademy/`, data, {
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
// Get All Academy
export const getAllacademy = async (data) => {
    const { token} = useStorage();
    if (!token) {
        throw "No Token";
    }
    try {
        const res = await axios.get(`${MAIN_URL}/api/academy/getallacademy/`, {
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