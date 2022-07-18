import { useEffect } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import { getUser } from "src/services/authRequests";
import { swrConfigs } from "./swrConfigs";

export default function useAuth({ redirectTo = "", redirectIfFound = false } = {}) {
  const {
    data: user,
    mutate: mutateUser,
    isValidating,
    error,
  } = useSWR("auth_user", getUser, swrConfigs);

  const router = useRouter();

  useEffect(() => {
    // if no redirect needed, just return (example: already on /dashboard)
    // if user data not yet there (fetch in progress, logged in or not) then don't do anything yet
    if (!redirectTo && !user) return;

    if (
      // If redirectTo is set, redirect if the user was not found.
      (redirectTo && !redirectIfFound && !user) ||
      // If redirectIfFound is also set, redirect if the user was found
      (redirectIfFound && user)
    ) {
      router.push(redirectTo);
    }
  }, [user, redirectIfFound, redirectTo]);

  return { user, mutateUser, isValidating, isLoading: !user || !error || isValidating, error };
}
