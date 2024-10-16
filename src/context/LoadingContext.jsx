"use client";
import React, { createContext, useState } from "react";

export const LanguageContext = createContext();

function LanguageContextProvider({ children }) {
  const [language, setLanguage] = useState("de");

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageContextProvider;
