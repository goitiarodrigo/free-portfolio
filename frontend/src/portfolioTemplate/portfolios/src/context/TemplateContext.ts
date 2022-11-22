import { createContext } from "react";
import { newUser } from "../../../../components/data";

interface IContextProps {
    userData: newUser | undefined
}

export const TemplateContext = createContext<IContextProps>({} as IContextProps)