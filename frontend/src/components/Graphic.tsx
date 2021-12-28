import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';


const Graphic = () => {

    const { userState } = useContext(UserContext)
    const { visits } = userState
    visits?.unshift({visit: 0, _id: "1"})
      
      ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
      );
      
       const options = {
        responsive: true,
        interaction: {
          mode: 'index' as const,
          intersect: false,
        },
        stacked: false,
        plugins: {
          title: {
            display: true,
            text: 'Promedio de visitas del último mes',
          },
        },
        scales: {
          y: {
            type: 'linear' as const,
            display: true,
            position: 'left' as const,
          },
          y1: {
            type: 'linear' as const,
            display: true,
            position: 'right' as const,
            grid: {
              drawOnChartArea: false,
            },
          },
        },
      };
      
      const labels = ["0", 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
      
      const data = {
        labels,
        datasets: [
          {
            label: 'Visitas',
            data: visits?.map((CountVisit) => CountVisit.visit),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            yAxisID: 'y',
          },
          
        ],
      };

    

    return (
        <>
            <div style={{width: "60vw", height: "60vh" }}>
                <Line options={options} data={data} />;
            </div>
        </>
    )
}

export default Graphic