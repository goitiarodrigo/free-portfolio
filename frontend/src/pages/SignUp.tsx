import LogButtons from "../components/LogButtons"


const SignUp = () => {
    return (
        <div className="newProjectContainer">
            <div className="signContainer">
                <input className="form-control" type="email" name="email" placeholder="Ingrese email"/>
                <input className="form-control" type="text" name="fullName" placeholder="Ingrese nombre y apellido"/>
                <input className="form-control" type="password" name="password" placeholder="Ingrese password"/>
                <input className="form-control" type="file" name="photo" />
                <button>Ingresar</button>
                <LogButtons />
            </div>
        </div>
    )
}

export default SignUp