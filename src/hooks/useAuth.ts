// libraries
import { useMemo } from "react";

// utils
import { hydrate, persist, remove } from "../utils/persist";

const ACCESS_TOKEN = "accessToken";

export const useAuth = () => {
  const currentToken = hydrate(ACCESS_TOKEN);

  const isLoggedIn = useMemo(() => {
    return !!currentToken;
  }, [currentToken]);

  const getAccessToken = () => {
    const data = hydrate(ACCESS_TOKEN);
    return data;
  };

  const setAccessToken = () => {
    persist(ACCESS_TOKEN, "123456789abcde");
  };

  const removeAccessToken = () => {
    remove(ACCESS_TOKEN);
  };

  return {
    currentToken,
    isLoggedIn,
    getAccessToken,
    setAccessToken,
    removeAccessToken,
  };
};
