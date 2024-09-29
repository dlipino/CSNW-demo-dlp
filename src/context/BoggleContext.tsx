import React, { PropsWithChildren } from 'react';
import { createContext, useContext, useState, ReactNode} from 'react';

interface BoggleContextType {
  letters: string[]; //Array of chars with length 4x4 or 0
  solvedWords: string[] | null; //Array of all solutions
  updateLetters: (letters: string[] | null) => void;
  updateSolvedWords: (solvedWords: string[] | null) => void;
}
const BoggleContext = createContext<BoggleContextType | null>(null);

// const BoggleProvider: React.FC<PropsWithChildren> = ({ children }) => {
const BoggleProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [letters, setLetters] = useState<string[]>(Array(16).fill(null));
  const [solvedWords, setSolvedWords] = useState<string[] | null>(null);


  function updateLetters(letters: string[] | null) {
    if (letters === null) {
      setLetters(Array(16).fill(null))
      return;
    }
    //TODO Check to verify correct size, for now assume it works
    setLetters(letters)
  }

  function updateSolvedWords(solvedWords: string[] | null) {
    setSolvedWords(solvedWords)
  }

  return <BoggleContext.Provider value={{ letters, solvedWords, updateLetters, updateSolvedWords}}>{children}</BoggleContext.Provider>;
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