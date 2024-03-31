import { createContext } from "react";


interface UserContextType {
  geral: string;
  setGeral: React.Dispatch<React.SetStateAction<string>>;
 
}

export const UserContext = createContext<UserContextType>({
  geral: "",
  setGeral:() => {}
});
