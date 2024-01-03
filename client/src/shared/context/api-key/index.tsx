import { createContext, useState, useEffect } from "react";
import { apiInstance } from "shared/api/axios";

type Context = {
  APIKey: string | null;
  setAPIKey: (str: string | null) => void;
};
export const APIKeyContext = createContext<Context>({
  APIKey: null,
  setAPIKey: (str: string | null) => {
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
  });

  useEffect(() => {
    if (APIKey) {
      localStorage.setItem("API_KEY", APIKey);
      apiInstance.defaults.headers.common["authorization"] = `bearer ${APIKey}`;
    } else {
      apiInstance.defaults.headers.common["authorization"] = undefined;
    }
  }, [APIKey]);

  const setAPIKey = (str: string | null) => {
    setKey(str);
  };

  return (
    <APIKeyContext.Provider value={{ APIKey, setAPIKey }}>
      {children}
    </APIKeyContext.Provider>
  );
};
