"use client";

import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type ApiKeyContextType = {
  isApiSaved: boolean;
  setIsApiSaved: React.Dispatch<React.SetStateAction<boolean>>;
};

const ApiKeyContext = createContext<ApiKeyContextType | undefined>(undefined);

export const ApiKeyProvider = ({ children }: { children: ReactNode }) => {
  const [isApiSaved, setIsApiSaved] = useState<boolean>(false);

  useEffect(() => {
    const apiExists = localStorage.getItem("GeminiAI");
    if (apiExists && apiExists?.length > 0) {
      setIsApiSaved(true);
    }
  }, []);

  return (
    <ApiKeyContext.Provider value={{ isApiSaved, setIsApiSaved }}>
      {children}
    </ApiKeyContext.Provider>
  );
};

export const useApiKey = (): ApiKeyContextType => {
  const context = useContext(ApiKeyContext) as ApiKeyContextType;

  return context;
};
