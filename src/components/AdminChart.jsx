import React, { useState,useEffect } from 'react'
import ReactApexChart from 'react-apexcharts';
import 'apexcharts/dist/apexcharts.css';
import { RANDOM_USERS, adminInstance } from '../utils/axios';

function AdminChart() {
  const [chartData, setChartData] = useState({
    series: [],
    options: {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      title: {
        text: 'User Data',
        align: 'left'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'],
          opacity: 0.5
        }
      },
      xaxis: {
        categories: []
      }
    }
  });

  const transformData = (data) => {
    const seriesData = data.map((item) => item.id);
    const categories = data.map((item) => item.name);

    setChartData((prevState) => ({
      ...prevState,
      series: [{ data: seriesData }],
      options: { ...prevState.options, xaxis: { categories } }
    }));
  };


  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await adminInstance.get(RANDOM_USERS); // Replace with your API endpoint or JSON file URL
        const data = response.data;
        transformData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
      
    
  },[])

  return (
    
    <div className="d-flex conatiner justify-content-center mt-5">
    <div className="col-lg-6">
      <div id="chart">
        <ReactApexChart options={chartData.options} series={chartData.series} type="line" height={350}  />
      </div>
    </div>
  </div>
  );
}

export default AdminChart