import { getAllFederations } from "src/services/federationRequest";
import useSWR from "swr";
import { swrConfigs } from "./swrConfigs";

export function useAllFederations(params) {
    const { data, mutate, error } = useSWR([params, "all_Federations"], getAllFederations, swrConfigs);

    const loading = !data && !error;

    return {
        loading,
        federations: data,
        mutate,
        error,
    };
}
