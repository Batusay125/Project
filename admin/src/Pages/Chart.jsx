import React, {Component, useState} from "react"
import Sidebar from "../Components/Sidebar";
import "./Style.css";
import Header from "../Components/Header";
import Charts from "react-apexcharts";


function Chart() {
    const [value, setValue] = useState([]);
    const [daysOfYear, setDaysOfYear] = useState([]);
    for (var i = 0; i < 10; i++) {
        daysOfYear.push(i * 10);
    }
    
    for(var i = 0; i < 10; i++){
        value[i] = Math.floor(Math.random() * 10);
    }

    const series = [ //data on the y-axis
    {
        name: "Temperature in Celsius",
        data: value
    }
    ];

    const options = { //data on the x-axis
        chart: { id: 'bar-chart'},
        xaxis: {
          categories: daysOfYear
        }
    };
    
  return (
    <div className="main-div">
      <Sidebar />
      <div className="delivery-div">
        <Header />
        <br />
        <h1>Chart</h1>

        
      </div>

      <div className="rabbitList">
        <Charts
            options={options}
            series={series}
            type="line"
            width="100%"
        />
      </div>
    </div>
  );
}

export default Chart;