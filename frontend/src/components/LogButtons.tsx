import { useLinkedIn } from "react-linkedin-login-oauth2"
import LoginGithub from "react-login-github"
import { GoogleLogin } from "react-google-login"
import axios from "axios"
import { useCallback, useContext, useEffect, useState } from "react"
import { newUser } from "./data"
import { UserContext } from "../context/UserContext"
import toast, { Toaster } from "react-hot-toast"
import { useNavigate } from "react-router-dom"



const LogButtons = ({ sign }) => {

    const navigate = useNavigate()
    const { signUp, signIn, userState } = useContext(UserContext)
    

    const HOST: string = "http://localhost:4000"

    const responseGoogle = async (response: any) => {

        const { name, googleId, imageUrl, email } = response.profileObj
        let newUser = {
            fullName: name,
            email,
            photoProfile: imageUrl,
            password: googleId,
        }
        
        signUser(newUser)
        
    }

     


    const onSuccess = async (response: any): Promise<void> => {
        
        const res = await axios.post(`${HOST}/api/users/getProfileByGit`, {
            authCode: response.code,
          })
          let newUser = {...res.data.response}
          
          signUser(newUser)
          
    }
    const onFailure = (response: any): void => console.error(response);


    const { linkedInLogin } = useLinkedIn({
        scope: "r_emailaddress r_liteprofile",
        clientId: "7857y6gpeq9cr5",
        redirectUri: `${window.location.origin}/linkedin/auth`,
        onSuccess: async (authCode: string) => {
          const {
            data: { response },
          } = await axios.post(`${HOST}/api/users/getProfileByLinkedin`, {
            authCode,
          })
          let newUser = {...response}
          signUser(newUser)
          
        },
      })

     const signUser = async (newUser: newUser) => {
         try {
            let res =  sign === "signUp" ? await signUp(newUser) : await signIn(newUser)
                 if (res.success){ 
                     toast.success(`Bienvenido/a ${userState.fullName}`, {
                         duration: 800
                     })
                     navigate("/")
                 } else {
                     toast.error(res.response, {
                         duration: 800
                     })
                 }
             } catch(error: any) {
                 toast.error(error, {
                     duration: 700
                 })
             }
           
        }

    return (
        <>       
            <Toaster />     
            <GoogleLogin
                clientId="39819837167-ghabosg6m11bb1vjmcn33sj6iqsu1qgq.apps.googleusercontent.com"
                buttonText="Iniciar sesión"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
                responseType='code,token'
            />
            
            <LoginGithub
                clientId="cd6173a77b378f016cdc"
                onSuccess={onSuccess}
                onFailure={onFailure}
                buttonText={
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="white"
                    className="bi bi-github"
                    viewBox="0 0 16 16"
                >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
                }
            />

            <button
                onClick={linkedInLogin}
                className="bg-blue-600 m-2 p-1 rounded shadow-md  w-1/3 flex justify-center items-center"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="white"
                    className="bi bi-linkedin"
                    viewBox="0 0 16 16"
                >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
            </button>
        </>
    )
}

export default LogButtons