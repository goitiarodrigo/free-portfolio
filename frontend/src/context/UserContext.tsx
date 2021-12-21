import { createContext } from "react";

interface getProjectsProps {
    getProjects: () => any
}

export const UserContext = createContext<getProjectsProps>({} as getProjectsProps)