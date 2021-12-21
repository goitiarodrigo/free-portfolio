import axios from "axios"
import { useState } from "react"
import { UserContext } from "./UserContext"


interface props {
    children: JSX.Element | JSX.Element[]
}

const getProjects = async () => {
    return await axios.get("http://localhost:4000/api/project/getprojects")
    
}






export const UserProvider = ({children}: props) => {
    
    return (
        <UserContext.Provider value={{
            getProjects
        }}>
            {children}
        </UserContext.Provider>
    )
    
}