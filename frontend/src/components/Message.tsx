

type props = {
    message: any
}

//#269ffb

const Message = ({message}: props) => {
    return (
        <div className="message">
            <span>{message.fullName} ({message.email ?? '-'})</span>
            <span className="bodyMessage">{message.message}</span>
            <span>{message.date}</span>
        </div>
    )
}

export default Message