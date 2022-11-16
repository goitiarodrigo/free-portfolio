import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import Message from "./Message"


const LastMessages = () => {

    const { userState } = useContext(UserContext)
    const { messages } = userState

    const message = {
        message: 'Buenas noches',
        email: 'prueba@prueba.com',
        fullName: 'Leo Messi',
        date: new Date().toLocaleString()
    }

    return (
        <div className="messagesContainer rounded-3">
            {/* {
                messages!.map(message => <Message message={message} />)
            } */}
            <Message message={message}/>
            <Message message={message}/>
            <Message message={message}/>
            <Message message={message}/>
            <Message message={message}/>
            <Message message={message}/>
            <Message message={message}/>
            <Message message={message}/>
            <Message message={message}/>
            <Message message={message}/>
            <Message message={message}/>
            <Message message={message}/>
            <Message message={message}/>
            <Message message={message}/>
            <Message message={message}/>
            
        </div>
    )
}

export default LastMessages