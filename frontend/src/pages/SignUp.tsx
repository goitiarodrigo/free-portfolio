import LogButtons from "../components/LogButtons"


const SignUp = () => {
    return (
        <div className="newProjectContainer">
            <div className="signContainer">
            <div className="typeSign">
                    Registrarse
                </div>
                <div style={{height: '80%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <LogButtons sign={'signUp'}/>
                </div>
            </div>
        </div>
    )
}

export default SignUp