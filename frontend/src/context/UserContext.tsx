import { createContext } from "react";
import { newUser } from "../components/data";

interface getProjectsProps {
    getProjects: () => any
    signUp: (newUser: newUser) => any
    signIn: (newUser: newUser) => any
    addMessage: (message: any, id: string) => any
    uploadNewProject: (project: any, photo: any) => any
    userState: newUser
}

export const UserContext = createContext<getProjectsProps>({} as getProjectsProps)