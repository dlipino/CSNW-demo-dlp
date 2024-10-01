import React, { createContext, useContext, useState } from 'react';

interface BoggleContextType {
  letters: (string | null )[][]; //Array of chars with length 4x4 or 0
  solvedWords: string[]; //Array of all solutions
  validWords: string[]
  updateLetters: (letters: string[][]) => void;
  updateSolvedWords: (solvedWords: string[] | null) => void;
  updateValidWords: (wordLibrary: string[]) => void;
}

const BoggleContext = createContext<BoggleContextType | null>(null);

// const BoggleProvider: React.FC<PropsWithChildren> = ({ children }) => {
const BoggleProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const w = 4;
  const h = 4;
  const [letters, setLetters] = useState<(string|null)[][]>(Array.from({ length: w }, () => Array.from({ length: h }, () => null)));
  const [solvedWords, setSolvedWords] = useState<string[]>([]);
  const [validWords, setValidWords] = useState<string[]>([])

  function updateLetters(inputTiles: string[][]) {
    if (inputTiles.length !== h) {
      throw new Error("New Tiles have incorrect row size");
    }
    for (let i = 0; i < inputTiles.length; i++) {
      if (inputTiles[i].length !== w) {
        throw new Error(`New Tiles have incorrect column size at row ${i}`);
      }
      //TODO check for correct letter type, probably
    }
    setLetters(inputTiles)
  }

  function updateSolvedWords(solvedWords: string[] | null) {
    if (solvedWords === null) {
      setSolvedWords([])
    } else {
      setSolvedWords(solvedWords)
    }
  }
  function updateValidWords(validWords: string[]) {
    setValidWords(validWords)
  }

  return <BoggleContext.Provider value={
    { letters, solvedWords, validWords, updateLetters, updateSolvedWords, updateValidWords}}>{children}</BoggleContext.Provider>;
};

function useBoggle() : BoggleContextType {
  const context = useContext(BoggleContext);
  if (context === undefined)
    throw new Error("BoggleContext is used outside of BoggleProvider");
  return context as BoggleContextType;
}

export { BoggleProvider, useBoggle, BoggleContext };

// import React, { PropsWithChildren, useCallback, useContext, useState, createContext, ReactNode } from 'react';

// interface TUser {
//   name: string;
//   profile: string;
// }

// interface AuthContextData {
//   isLoggedIn: boolean;
//   user: TUser | null;
//   login: (username: string, password: string) => void;
//   logout: () => void;
// }

// const AuthContext = createContext<AuthContextData>({
//   isLoggedIn: false,
//   user: null,
//   login: () => {},
//   logout: () => {},
// });

// function AuthProvider({ children }: { children: ReactNode }) {
//   const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
//   const [user, setUser] = useState<TUser | null>(null);

//   function login(name: string, password: string) {}

//   function logout() {}

//   return (
//     <AuthContext.Provider
//       value={{
//         login,
//         logout,
//         user,
//         isLoggedIn,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// }

// function useAuth() {
//   const context = useContext(AuthContext);
//   if (context === undefined)
//     throw new Error("AuthContext is used outside of AuthProvider");
//   return context;
// }
// export { AuthProvider, useAuth };