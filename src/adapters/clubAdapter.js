import { getAllClubs } from "src/services/clubRequest";
import useSWR from "swr";
import { swrConfigs } from "./swrConfigs";

export function useAllClubs(params) {
    const { data, mutate, error } = useSWR([params, "all_Clubs"], getAllClubs, swrConfigs);

    const loading = !data && !error;

    return {
        loading,
        clubs: data,
        mutate,
        error,
    };
}
