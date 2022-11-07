import Footer from "./portfolios/src/components/Footer"
import BodyV1 from "./portfolios/src/components/v1/BodyV1"
import Form from "./portfolios/src/components/v1/Form"
import HeaderV1 from "./portfolios/src/components/v1/HeaderV1"
import ProjectsV1 from "./portfolios/src/components/v1/ProjectsV1"

const AppTemplate = () => {
    return (
        <>
            <HeaderV1 />
            <BodyV1 />
            <ProjectsV1 />
            <Form />
            <Footer />
        </>
    )
}

export default AppTemplate