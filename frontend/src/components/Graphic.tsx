import { useContext, useLayoutEffect, useState } from "react"
import { UserContext } from "../context/UserContext"
import ReactApexChart, { Props } from "react-apexcharts";


const Graphic = () => {

    const { userState } = useContext(UserContext)
    const { visits } = userState
    
    const [allMonthArr, setAllMonthArr] = useState<string[]>([])

    useLayoutEffect(() => {
        let currentDate = new Date();
        const date = new Date()
        let monthArr: string[] = []

        for (let i = 0; i < 12; i++) {
            date.setMonth(currentDate.getMonth() - i)
            monthArr = [...monthArr, date.toLocaleString('es', {month: 'short'})]
        }

        setAllMonthArr(monthArr.reverse())

    }, [])
    
    const state: Props = {
        series: [{
            name: 'Visitas',
            data: [15, 10 , 12, 2, 9, 1, null]
        }],
    
        options: {
            chart: {
                type: 'line',
                toolbar:{
                    show: false,
                }
            },
            xaxis: {
                categories: allMonthArr,
              }
        }
    }

    
    

    return (
        <>
            <div style={{width: "60vw", height: "60vh" }}>
              <ReactApexChart options={state.options} series={state.series} type="line" width={'1000'} height={'500'} />
            </div>
        </>
    )
}

export default Graphic