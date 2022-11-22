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


    const signOut = () => {
        sessionStorage.clear()
    }


    const verifyToken = async (token: string) => {
        const requestOptions: AxiosRequestConfig<any> = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        try {
            const res = await axios.get(`${REACT_APP_BACK_URL}/user/verifyToken`, requestOptions)
            if (res.data.success) {
                dispatch({type: "UPDATE_DATA", payload: {response: res.data, accessToData: 'userFound'}})
            }
            return res.data
        } catch (err) {
            return err
        }
    }


    const updateProfileUser = async (id: string, token: string, dataToUpdate: any) => {
        const requestConfig: AxiosRequestConfig<any> = {
            headers: {
                Authorization: `Bearer ${token}`
            },
            method: 'PUT',
        }
        try {
            const response = await axios.put(`${REACT_APP_BACK_URL}/user/editProfile/${id}`, dataToUpdate, requestConfig)
            if (!response.data.success) throw new Error('Ha ocurrido un error')
            dispatch({type: "UPDATE_DATA", payload: {response: response.data, accessToData: 'userFound'}})

            return response.data
        } catch (error) {
            return error
        }
    }


    const getProjects = async (id: string) => {
        return  await axios.get(`${REACT_APP_BACK_URL}/project/getprojects/${id}`)
    }

    const uploadNewProject = async (project, photo: string, id: string, token: string) => {
        const requestConfig: AxiosRequestConfig<any> = {
            headers: {
                Authorization: `Bearer ${token}`
            },
        }
        const res = await axios.post(`${REACT_APP_BACK_URL}/project/newproject`, {project, photo, id}, requestConfig)
        if (!res.data.success) return console.log('ERROR!!')
        return res.data
    }

    const editProject = async (id: string, token: string, dataToUpdate: any) => {
        try {
            const requestConfig: AxiosRequestConfig<any> = {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                method: 'PUT',
            }
            const res = await axios.put(`${REACT_APP_BACK_URL}/project/editproject/${id}`, dataToUpdate, requestConfig)
            return res
        } catch (error) {
            return error
        }
    }

    const deleteProject = async (id: string, token: string) => {
        try {
            const requestConfig: AxiosRequestConfig<any> = {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                method: 'DELETE',
            }
            const res = await axios.delete(`${REACT_APP_BACK_URL}/project/deleteproject/${id}`, requestConfig)
            return res
        } catch (error) {
            return error
        }
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
            verifyToken,
            updateProfileUser,
            deleteProject
        }}>
            {children}
        </UserContext.Provider>
    )
    
}