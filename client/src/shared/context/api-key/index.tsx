import { createContext, useState, useEffect } from "react";
import { apiInstance } from "shared/api/axios";

type Context = {
  APIKey: string | null;
  setAPIKey: (str: string | null) => void;
  inputAPIKey: () => void;
  deleteAPIKey: () => void;
};
export const APIKeyContext = createContext<Context>({
  APIKey: null,
  setAPIKey: (str: string | null) => {
    str;
  },
  inputAPIKey: () => {
    0;
  },
  deleteAPIKey: () => {
    0;
  },
});

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const APIKeyProvider = ({ children }: Props) => {
  const [APIKey, setKey] = useState<string | null>(null);

  useEffect(() => {
    const key = localStorage.getItem("API_KEY");
    key && setKey(key);
  }, []);

  useEffect(() => {
    if (APIKey) {
      localStorage.setItem("API_KEY", APIKey);
      apiInstance.defaults.headers.common["authorization"] = `bearer ${APIKey}`;
    } else {
      localStorage.removeItem("API_KEY");
      apiInstance.defaults.headers.common["authorization"] = undefined;
    }
  }, [APIKey]);

  const setAPIKey = (str: string | null) => {
    setKey(str);
  };

  const inputAPIKey = () => {
    const API_KEY = prompt("API 키를 입력하십시오.");
    setAPIKey(API_KEY);
  };

  const deleteAPIKey = () => {
    alert("로그아웃합니다.");
    setAPIKey(null);
  };

  return (
    <APIKeyContext.Provider
      value={{ APIKey, setAPIKey, inputAPIKey, deleteAPIKey }}
    >
      {children}
    </APIKeyContext.Provider>
  );
};
