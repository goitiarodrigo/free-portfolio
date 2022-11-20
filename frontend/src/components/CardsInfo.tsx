import { useContext } from "react"
import { UserContext } from "../context/UserContext"


const CardsInfo = () => {

    const { userState } = useContext(UserContext)
    const { messages, visits, downloadedCv, allScores } = userState

    let totalVisits = 0
    visits?.forEach(countVisit => totalVisits += countVisit.visit)
    let totalScore = 0
    allScores?.forEach(countVisit => totalScore += countVisit.score)
    totalScore = totalScore/allScores?.length!

    return (
        <div className="cardsContainer">
            <div className="cardInfo">
                <h3>Mensajes recibidos: {messages?.length}</h3>
            </div>
            <div className="cardInfo">
                <h3>Visitas: {totalVisits}</h3>
            </div>
            <div className="cardInfo">
                <h3>CV descargados: {!downloadedCv ? 0 : downloadedCv}</h3>
            </div>
            <div className="cardInfo">
                <h3>Puntuación: {!totalScore ? 0 : totalScore}</h3>
            </div>
            <div className="cardInfo">
                <h3>Amigos</h3>
            </div>
        </div>
    )
}

export default CardsInfo