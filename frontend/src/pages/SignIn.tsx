import LogButtons from "../components/LogButtons"


const SignIn = () => {
    return (
        <div className="newProjectContainer" >
            <div className="signContainer" >
                <div className="typeSign">
                    Iniciar Sesion
                </div>
                <div style={{height: '80%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <LogButtons sign={'signIn'}/>
                </div>
            </div>
        </div>
    )
}

export default SignIn