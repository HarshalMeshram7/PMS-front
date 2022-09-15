import axios from "axios";
import useStorage from "src/hooks/useStorage";
import { MAIN_URL , MAIN_URL2 } from "./apiConfig";

// Add Federation
export const addFederation = async (data) => {
    const { token } = useStorage();
    if (!token) {
        throw "No Token";
    }
    try {
        const res = await axios.post(`${MAIN_URL}/api/federation/addFederation/`, data, {
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
// Get All Federation
export const getAllFederations = async (params) => {
    const { token } = useStorage();
    if (!token) {
        throw "No Token";
    }
    try {
        const res = await axios.get(`${MAIN_URL2}/getfederationbypattern`, {
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
// Get Federation Detailsgit 
export const getFederation = async (params) => {
    const { token } = useStorage();
    if (!token) {
        throw "No Token";
    }
    try {
        const res = await axios.get(`${MAIN_URL2}/getfederation`, {
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

export const deleteFederation = async (email) => {
    const { token } = useStorage();
    if (!token) {
        throw "No Token";
    }
    try {

        const res = await axios.post(`${MAIN_URL}/api/federation/deletefederation/`,{email:email}, {
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