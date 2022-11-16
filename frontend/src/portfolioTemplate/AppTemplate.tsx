import { useEffect } from "react"
import { useParams } from "react-router-dom"
import Footer from "./portfolios/src/components/Footer"
import BodyV1 from "./portfolios/src/components/v1/BodyV1"
import Form from "./portfolios/src/components/v1/Form"
import HeaderV1 from "./portfolios/src/components/v1/HeaderV1"
import ProjectsV1 from "./portfolios/src/components/v1/ProjectsV1"
import { REACT_APP_BACK_URL } from '../constants'
import moment from 'moment'
import axios from "axios"

moment.locale('es')

const AppTemplate = () => {

    const abortController = new AbortController()
    const signal = abortController
    const { param } = useParams()

    const addNewVisit = async () => {
        try {
            let monthFiltered: any[] | undefined = undefined
            const { data } = await axios.get(`${REACT_APP_BACK_URL}/user/getUser/${param}`)
            if (!data.success) {
                return console.log(data.response)       
            }
            const { visits } = data.response
            const date = new Date()
            date.setMonth(date.getMonth())
            const month = date.toLocaleString('es', {month: 'short'})
            
            if (visits.length > 0) {
                monthFiltered = visits.filter(element => element.month === month)
                if (monthFiltered!.length > 0) {
                    monthFiltered![0].visit = monthFiltered![0].visit + 1
                    monthFiltered = [...monthFiltered!, {_id: visits._id}]
                } else monthFiltered = undefined
            }
            
            await axios.put(`${REACT_APP_BACK_URL}/user/visit/${param}`, monthFiltered ? monthFiltered[0] :{
                visit: 1,
                month: date.toLocaleString('es', {month: 'short'}),
                newMonth: true
            })
        } catch (error: any) {
            console.log(error.message)
            alert('Ha ocurrido un error')
        }    
    }

    useEffect(() => {
        addNewVisit()
    }, [])

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