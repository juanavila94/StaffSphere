/* eslint-disable react-hooks/exhaustive-deps */
import React, {useMemo} from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
  } from "chart.js";

import { Bar } from 'react-chartjs-2';

import {getIndexArea} from "../../state/redux/actions/actions"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );

  const options = {
    fill: true,
    animations: false,
    scales: {
      y: {
        min: 0,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
  };



const EmployeeRetention = () => {
    const indexArea = useSelector(state => state.indexArea)
    
    const currentEmployee = useSelector((state) => state.currentEmployee);
    const CompanyId = currentEmployee ? currentEmployee.CompanyId : null;
    
    const dispatch = useDispatch();
    useEffect(() => {
     dispatch(getIndexArea(CompanyId))
      }, [dispatch, indexArea]
  )
  console.log(indexArea)

//CONTROLAR EL CASO DONDE NO HAY AREAS EN LAS COMPANIAS
// Filtrar los objetos que tienen retentionIndex mayor a cero
const filteredData = indexArea.filter(obj => obj.retentionIndex != null);

// Obtener un array con los nombres de las áreas
const areas = filteredData.map(obj => obj.area);

// Obtener un array con los valores de retención
const retentionValues = filteredData.map(obj => obj.retentionIndex);

  function  getDataColors(opacity) {
    const colors = ['#7448c2', '#21c0d7', '#d99e2b', '#cd3a81', '#9c99cc', '#e14eca', '#ffffff', '#ff0000', '#d6ff00', '#0038ff']
    return colors.map(color => opacity ? `${color + opacity}` : color)
}

  const data = useMemo(function (){
    return {
        labels: areas,
        datasets: [
            {
                label: 'Indice de retencion',
                data: retentionValues,
                backgroundColor: getDataColors(20),
                borderColor: getDataColors(),
                borderWidth: 1,
              },
        ]
    }
  }, []);

  

  return (
    <div>
      
      <div style={{ height: '300px', width: '500px' }}>
        <Bar data={data} options={options}/>
      </div>
    </div>
  );
};

export default EmployeeRetention;