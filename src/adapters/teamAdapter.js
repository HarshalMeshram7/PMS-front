import { getAllTeams } from "src/services/teamRequest";
import useSWR from "swr";
import { swrConfigs } from "./swrConfigs";

export function useAllTeams(params) {
    const { data, mutate, error } = useSWR([params, "all_Teams"], getAllTeams, swrConfigs);

    const loading = !data && !error;

    return {
        loading,
        teams: data,
        mutate,
        error,
    };
}
