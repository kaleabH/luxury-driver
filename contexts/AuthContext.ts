import { createContext } from "react";
export interface User {

}
export interface ContextType {
    user: User| undefined;
    setUser:  React.Dispatch<React.SetStateAction<User | undefined>>
}
export default createContext<ContextType| null>(null);