import LogButtons from "../components/LogButtons"


const SignIn = () => {
    return (
        <div className="newProjectContainer">
            <div className="signContainer">
                <input className="form-control" type="email" name="email" placeholder="Ingrese email"/>
                <input className="form-control" type="password" name="password" placeholder="Ingrese password"/>
                <button>Ingresar</button>
                <LogButtons />
            </div>
        </div>
    )
}

export default SignIn