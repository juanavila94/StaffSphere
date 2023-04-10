/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo } from "react";

import {
    Chart as ChartJS,
    ArcElement,
    Legend,
    Tooltip
   } from "chart.js"
  
  import { Doughnut } from 'react-chartjs-2';
  import {getDoughnu} from "../../state/redux/actions/actions"
  import { useEffect } from "react";
  import { useDispatch, useSelector } from "react-redux";
  
  ChartJS.register(
      ArcElement,
      Legend,
      Tooltip,
  ) 


export default function DoughnuChart(){

    const doughnut = useSelector(state => state.doughnut)

    const currentEmployee = useSelector((state) => state.currentEmployee);
    const CompanyId = currentEmployee ? currentEmployee.CompanyId : null;
    
    console.log("COMPANY IDDDDDD ", CompanyId)

    const dispatch = useDispatch();
    
    useEffect(() => {
     dispatch(getDoughnu(CompanyId))
      }, [dispatch]
  )
       const options = {

        plugins: {
            legend: {position: "left"}
        },
         parsing: {
           key: "nested.value"
         },
         responsive: false,
       }

       

    const data = useMemo(function(){

        const empleadosPorArea = doughnut.reduce((acumulador, empleado) => {
            const {area} = empleado;
            if (!acumulador[area]){
                acumulador[area] = 0;
            } 
            acumulador[area]++;
            return acumulador;
        }, {});
        const resultado = Object.keys(empleadosPorArea).map((area)=>{
            return{area, cantidad: empleadosPorArea[area]};
        })
        console.log(resultado);

        return{
            labels: resultado.map(empleado => empleado.area),
            datasets: [
                {
                    data: resultado.map(empleado => empleado.cantidad),
                    backgroundColor: getDataColors(20),
                    borderColor: getDataColors(),
              }
            ],
        }  
    },[ doughnut])

  return (
    <div className=" -translate-x-16 bg-white rounded shadow-2xl border p-5">
      <h2 className="mb-5 font-medium">Current Employees</h2>
      <Doughnut data={data} options={options} />
    </div>
  );
}



function  getDataColors(opacity) {
    const colors = ['#7448c2', '#21c0d7', '#d99e2b', '#cd3a81', '#9c99cc', '#e14eca', '#ffffff', '#ff0000', '#d6ff00', '#0038ff']
    return colors.map(color => opacity ? `${color + opacity}` : color)
}


