import CardsInfo from "../components/CardsInfo"
import Graphic from "../components/Graphic"
import LastMessages from "../components/LastsMessages"
import PanelAdmin from "../components/PanelAdmin"


const Home = () => {
    return (
        <>
            <CardsInfo />
            <div className="d-flex justify-content-around">
                <Graphic />
                <LastMessages />
            </div>
        </>
    )
}

export default Home