import HeaderV1 from "../components/v1/HeaderV1"
import HeaderV2 from "../components/v2/HeaderV2"
import Nav from "../components/Nav"
import BodyV1 from "../components/v1/BodyV1"
import BodyV2 from "../components/v2/BodyV2"
import ProjectsV1 from "../components/v1/ProjectsV1"
import ProjectsV2 from "../components/v2/ProjectsV2"
import Form from "../components/v1/Form"
import Footer from "../components/Footer"

const Index = () => {
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


export default Index