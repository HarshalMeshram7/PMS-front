import { getAllAcademies } from "src/services/academyRequest";
import useSWR from "swr";
import { swrConfigs } from "./swrConfigs";

export function useAllAcademies(params) {
    const { data, mutate, error } = useSWR([params, "all_Academies"], getAllAcademies, swrConfigs);

    const loading = !data && !error;

    return {
        loading,
        academies: data,
        mutate,
        error,
    };
}
