import { createContext } from "react";
import { newUser } from "../components/data";

interface getProjectsProps {
    getProjects: (id: any) => any
    signUp: (newUser: newUser) => any
    signIn: (newUser: newUser) => any
    addMessage: (message: any, id: string) => any
    uploadNewProject: (project: any, photo: string, id: any) => any
    userState: newUser
    signOut: () => void
    verifyToken: (value: string) => Promise<any>,
    updateProfileUser: (id: string, token: string, dataToUpdate: any) => Promise<any>
}

export const UserContext = createContext<getProjectsProps>({} as getProjectsProps)