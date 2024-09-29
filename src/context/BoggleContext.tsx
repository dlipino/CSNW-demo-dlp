import React, { PropsWithChildren } from 'react';
import { createContext, useContext, useState, ReactNode} from 'react';

interface BoggleContextType {
  letters: string[] | null; //Array of chars with length 4x4 
  solvedWords: string[] | null; //Array of all solutions
}
const BoggleContext = createContext<BoggleContextType | null>(null);

// const BoggleProvider: React.FC<PropsWithChildren> = ({ children }) => {
const BoggleProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [letters, setLetters] = useState<string[] | null>(null);
  const [solvedWords, setSolvedWords] = useState<string[] | null>(null);
  return <BoggleContext.Provider value={{ letters, solvedWords }}>{children}</BoggleContext.Provider>;
};

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