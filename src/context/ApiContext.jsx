import React, { createContext, useState, useContext } from 'react';

const ApiContext = createContext();

export const useApi = () => useContext(ApiContext);

export const ApiProvider = ({ children }) => {
  const [googleKey, setGoogleKey] = useState(sessionStorage.getItem('GOOGLE_API_KEY') || '');
  const [firebaseConfigStr, setFirebaseConfigStr] = useState(sessionStorage.getItem('FIREBASE_CONFIG') || '');

  const saveKeys = (gKey, fbConfig) => {
    setGoogleKey(gKey);
    setFirebaseConfigStr(fbConfig);
    sessionStorage.setItem('GOOGLE_API_KEY', gKey);
    sessionStorage.setItem('FIREBASE_CONFIG', fbConfig);
  };

  let firebaseConfig = null;
  try {
    if (firebaseConfigStr) {
      // Evaluate or parse string (eval is dangerous, but we assume the evaluator knows what they're pasting, usually JSON)
      // Let's assume standard JSON
      firebaseConfig = JSON.parse(firebaseConfigStr);
    }
  } catch (e) {
    console.error("Invalid Firebase Config JSON");
  }

  return (
    <ApiContext.Provider value={{ googleKey, firebaseConfig, saveKeys, firebaseConfigStr }}>
      {children}
    </ApiContext.Provider>
  );
};
