import axios, { AxiosRequestConfig } from "axios"
import { useReducer, useState } from "react"
import { initialState, newUser } from "../components/data"
import {userReducer} from "../components/reducer/userReducer"
import { REACT_APP_BACK_URL } from "../constants"
import { UserContext } from "./UserContext"


interface props {
    children: JSX.Element | JSX.Element[]
}


export const UserProvider = ({children}: props) => {

    const [userState, dispatch] = useReducer(userReducer, initialState)

    const signUp = async (object: newUser) => {
        
        let res = await axios.post(`${REACT_APP_BACK_URL}/user/signup`, object)
        if (res.data.success) dispatch({type: "SIGN_UP", payload: {response: res.data.response, accessToData: 'newRegisteredUser'}})
        return res.data
    }

    const signIn = async (object: newUser) => {
        
        let res = await axios.post(`${REACT_APP_BACK_URL}/user/signin`, object)
        if (res.data.success) {
            dispatch({type: "SIGN_IN", payload: {response: res.data.response, accessToData: 'userFound'}})
        }
        
        return res.data
    }

    const verifyToken = async (token: string) => {
        const requestOptions: AxiosRequestConfig<any> = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        
        try {
            const res = await axios.get(`${REACT_APP_BACK_URL}/user/verifyToken`, requestOptions)
            return res.data
        } catch (err) {
            return err
        }
    }

    const signOut = () => {
        sessionStorage.clear()
    }

    const getProjects = async (id) => {
        return  await axios.get(`${REACT_APP_BACK_URL}/project/getprojects/${id}`)
    }

    const uploadNewProject = async (project, photo, id) => {
        let res = await axios.post(`${REACT_APP_BACK_URL}/project/newproject`, {project, photo, id})
        if (res.data.success) dispatch({type: "NEW_PROJECT", payload: res.data.response})
        return res.data
    }

    const addMessage = async (message, id) => {
        return await axios.put(`${REACT_APP_BACK_URL}/user/message/${id}`, message)
    }
    
    return (
        <UserContext.Provider value={{
            getProjects,
            signUp,
            signIn,
            addMessage,
            uploadNewProject,
            userState,
            signOut,
            verifyToken
        }}>
            {children}
        </UserContext.Provider>
    )
    
}