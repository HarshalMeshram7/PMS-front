import axios from "axios";
import useStorage from "src/hooks/useStorage";
import { MAIN_URL,MAIN_URL2 } from "./apiConfig";

// Add Club
export const addClub = async (data) => {
    const { token } = useStorage();
    if (!token) {
        throw "No Token";
    }
    try {
        const res = await axios.post(`${MAIN_URL}/api/club/addClub/`, data, {
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
// Get All Club
export const getAllClubs = async (params) => {
    const { token } = useStorage();
    if (!token) { 
        throw "No Token";
    }
    try {
        const res = await axios.get(`${MAIN_URL2}/getCLubListbypattern`, {
            params: params,
            headers: {
                Authorization: "Bearer " + token,
            },
        });
        return res?.data?.result;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
// Get Club
export const getClub = async (params) => {
    const { token } = useStorage();
    if (!token) {
        throw "No Token";
    }
    try {
        const res = await axios.get(`${MAIN_URL2}/getClub`, {
            params: params,
            headers: {
                Authorization: "Bearer " + token,
            },
        });
        return res?.data?.result[0];
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const deleteClub = async (email) => {
    const { token } = useStorage();
    if (!token) {
        throw "No Token";
    }
    try {

        const res = await axios.post(`${MAIN_URL}/api/club/deleteclub/`,{email:email}, {
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