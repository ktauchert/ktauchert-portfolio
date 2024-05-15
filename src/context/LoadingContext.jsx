'use client';
import React, { createContext,  useState } from 'react'

export const LoadingContext = createContext()

function LoadingContextProvider({children}) {
    const [loaded, setLoaded] = useState(false);
    const [progress, setProgress] = useState(0);

  return (
    <LoadingContext.Provider>
        {children}
    </LoadingContext.Provider>
  )
}

export default LoadingContextProvider