import axios from "axios"
import { useReducer, useState } from "react"
import { initialState, newUser } from "../components/data"
import {userReducer} from "../components/reducer/userReducer"
import { UserContext } from "./UserContext"


interface props {
    children: JSX.Element | JSX.Element[]
}





export const UserProvider = ({children}: props) => {

    const [userState, dispatch] = useReducer(userReducer, initialState)

    const signUp = async (object: newUser) => {
        
        let res = await axios.post("http://localhost:4000/api/user/signup", object)
        if (res.data.success) dispatch({type: "SIGN_UP", payload: res.data.response})
        return res.data
    }

    const signIn = async (object: newUser) => {
        
        let res = await axios.post("http://localhost:4000/api/user/signin", object)
        if (res.data.success) {
            dispatch({type: "SIGN_IN", payload: res.data.response})
            window.sessionStorage.setItem('token', res.data.response.token)
            window.sessionStorage.setItem('userData', JSON.stringify(res.data.response.userFound))
        }
        
        return res.data
    }

    const getProjects = async (id) => {
        return  await axios.get(`http://localhost:4000/api/project/getprojects/${id}`)
    }

    const uploadNewProject = async (project, photo, id) => {
        let res = await axios.post("http://localhost:4000/api/project/newproject", {project, photo, id})
        if (res.data.success) dispatch({type: "NEW_PROJECT", payload: res.data.response})
        return res.data
    }

    const addMessage = async (message, id) => {
        return await axios.put(`http://localhost:4000/api/user/message/${id}`, message)
    }
    
    return (
        <UserContext.Provider value={{
            getProjects,
            signUp,
            signIn,
            addMessage,
            uploadNewProject,
            userState
            
        }}>
            {children}
        </UserContext.Provider>
    )
    
}