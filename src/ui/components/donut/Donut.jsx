import React, { Component } from 'react';
import Chart from 'react-apexcharts'
import { useViewport } from '../../../hooks/useViewport';

import './donut.scss'

const options = {
  labels: ["intelligence","strength","speed","durability","power","combat"],
  colors: ['#4a59db', '#4add78', '#ddc64b','#dd4a59','#c74ade','#4ba0df'],
  plotOptions: {
      pie: {
          donut: {
              labels: {
                  show: true,
                  total: {
                      show:true,
                      fontSize: 30,
                      color: '#23262f'
                  }
              }
          }
      }
  },
  dataLabels: {
      enabled: true,
      formatter: function (val, opts) {
          return opts.w.config.series[opts.seriesIndex]
      },
  },
  legend: {
    position: 'bottom',
    horizontalAlign: 'center', 
    floating: false,
    fontSize: '14px',
  },
}

export const Donut = ({series = [10,10,10,10,10,10]}) => {

  const {width} = useViewport()

  let widthDonut = width > 500 ?
                    500 
                    : 
                    width<350 ? 
                        260 
                        : 
                        width - 50
  return (
    <>

    <Chart 
      type="donut"  
      width={width<975 ? widthDonut : "450"} 
      options={options} 
      series={series}/>
    </>
  )
}
