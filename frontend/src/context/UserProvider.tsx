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
        console.log(object)
        let res = await axios.post("http://localhost:4000/api/user/signup", object)
        console.log(res.data.response)
        if (res.data.success) dispatch({type: "SIGN_UP", payload: res.data.response})
        return res.data
    }

    const signIn = async (object: newUser) => {
        console.log(object)
        let res = await axios.post("http://localhost:4000/api/user/signin", object)
        if (res.data.success) dispatch({type: "SIGN_IN", payload: res.data.response})
        return res.data
    }

    const getProjects = async () => {
        return await axios.get("http://localhost:4000/api/project/getprojects")
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
            userState
            
        }}>
            {children}
        </UserContext.Provider>
    )
    
}