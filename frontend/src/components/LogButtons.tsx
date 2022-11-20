import "../styles/LogButton.css"
import { useLinkedIn } from "react-linkedin-login-oauth2"
import LoginGithub from "react-login-github"
import { GoogleLogin } from "react-google-login"
import axios from "axios"
import { useContext, useState } from "react"
import { newUser } from "./data"
import { UserContext } from "../context/UserContext"
import toast, { Toaster } from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { REACT_APP_BACK_URL, REACT_APP_GITHUB_CLIENT_ID, REACT_APP_GOOGLE_CLIENT_ID, REACT_APP_LINKEDIN_CLIENT_ID } from "../constants"

const LogButtons = ({ sign }) => {

    const navigate = useNavigate()
    const { signUp, signIn, userState } = useContext(UserContext)

    const [loader, setLoader] = useState(false)

    const responseGoogle = async (response: any) => {
        setLoader(true)
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
        setLoader(true)
        const res = await axios.post(`${REACT_APP_BACK_URL}/users/getProfileByGit`, {
            authCode: response.code,
          })
          let newUser = {...res.data.response}
          
          signUser(newUser)
          
    }
    const onFailure = (response: any): void => {
        setLoader(false)
        console.error(response)
    };

    const { linkedInLogin } = useLinkedIn({
        scope: "r_emailaddress r_liteprofile",
        clientId: REACT_APP_LINKEDIN_CLIENT_ID!,
        redirectUri: `${window.location.origin}/linkedin/auth`,
        onSuccess: async (authCode: string) => {
            setLoader(true)
            const {
                data: { response },
            } = await axios.post(`${REACT_APP_BACK_URL}/users/getProfileByLinkedin`, { authCode })
            let newUser = {...response}
            signUser(newUser)
          
        },
    })

     const signUser = async (newUser: newUser) => {
        try {
            let res =  sign === "signUp" ? await signUp(newUser) : await signIn(newUser)
            if (res.success){ 
                toast.success(`Bienvenido/a ${userState.fullName}`, {
                    duration: 1000
                })
                setLoader(false)
                navigate("/home")
            } else {
                setLoader(false)
                    toast.error(res.response, {
                        duration: 1300
                    })
            }
        } catch(error: any) {
            setLoader(false)
            toast.error(error.message, {
                duration: 850
            })
        }
           
    }


    return (
        <div className="logButtonsContainer">       
            <Toaster />     
            <GoogleLogin
                clientId={REACT_APP_GOOGLE_CLIENT_ID!}
                buttonText={loader ? 'Iniciado sesión' : "Con Google"}
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
                responseType='code,token'
            />
            
            <LoginGithub
                clientId={REACT_APP_GITHUB_CLIENT_ID!}
                onSuccess={onSuccess}
                onFailure={onFailure}
                className={"buttonGit"}
                buttonText={
                    <a href="#"
                    style={{display: "inline-flex", alignItems: "center", minHeight: "40px", width: '100%', backgroundColor:"#24292e", fontFamily: 'Roboto',
                        fontSize: "14px", color: "white", textDecoration: "none",
                        padding: "8px 12px 8px 0px", borderRadius: '3px'}}
                        >
                        <svg height="18" viewBox="0 0 16 16" width="40px" fill="white">
                            <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38
                            0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01
                            1.08.58 1.23.82.72 1.21 1.87.87
                            2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12
                            0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08
                            2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0
                            .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                            {loader ? 'Iniciado sesión' : 'Con GitHub'}
                        </a>
                }
            />

            <img
                onClick={linkedInLogin}
                src={`../../assets/${loader ? 'linkedinLoader' : 'linkedin'}.png`}
                alt="Con LinkedIn"
                style={{ maxWidth: '180px', cursor: 'pointer' }}
            />
        </div>
    )
}

export default LogButtons