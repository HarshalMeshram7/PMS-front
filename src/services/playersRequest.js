import axios from "axios";
import useStorage from "src/hooks/useStorage";
import { MAIN_URL2 } from "./apiConfig";

// Add Players
export const addPlayers = async (data) => {
    const { token } = useStorage();
    if (!token) {
        throw "No Token";
    }
    try {
        const res = await axios.post(`${MAIN_URL2}/SavePlayer`, data, {
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

// Update Players
export const updatePlayers = async (data) => {
    const { token } = useStorage();
    if (!token) {
        throw "No Token";
    }
    try {
        const res = await axios.post(`${MAIN_URL2}/UpdatePlayer`, data, {
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

// Get All Players
export const getAllPlayers = async (params) => {
    const { token } = useStorage();
    if (!token) {
        throw "No Token";
    }
    try {
        const res = await axios.get(`${MAIN_URL2}/getPlayersbypattern`, {
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

// // Get Academy Details
// export const getAcademy = async (params) => {
//     const { token } = useStorage();
//     if (!token) {
//         throw "No Token";
//     }
//     try {
//         const res = await axios.get(`${MAIN_URL2}/getAcademy`, {
//             params: params,
//             headers: {
//                 Authorization: "Bearer " + token,
//             },
//         });
//         return res?.data?.result[0];
//     } catch (error) {
//         console.log(error);
//         throw error;
//     }
// };

export const deletePlayer = async (data) => {
    const { token } = useStorage();
    if (!token) {
        throw "No Token";
    }
    try {

        const res = await axios.delete(`${MAIN_URL2}/deleteplayer/`, {
            headers: {
                Authorization: "Bearer " + token,
            },
            data
        });
        console.log(res);
        return res.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};