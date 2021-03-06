import React, { useEffect } from 'react';
import { Column } from '@antv/g2plot';
import uuid from 'react-uuid'
const ColChart = (propsMaster) => {
  const ref = React.useRef(null)
  let id = uuid()
  let data = [
    { day: '1/1', like: 275 },
    { day: '2/1', like: 115 },
    { day: '3/1', like: 120 },
    { day: '4/1', like: 350 },
    { day: '5/1', like: 150 },
  ];
  let title = propsMaster.title?propsMaster.title:"Reaction chart"
  if (propsMaster.data){
    data = propsMaster.data
  }
  let des = propsMaster.description?propsMaster.description:""


  useEffect(() => {
    const columnPlot = new Column(document.getElementById(id), {
      title: {
        visible: true,
        text: title,
      },
      description: {
        visible: true,
        text: des,
      },
      forceFit: true,
      width:480,
      height:480,
      data,
      renderer:'svg',
      padding: 'auto',
      xField: Object.keys(data[0])[0],
      xAxis: {
        visible: true,
        label: {
          visible: true,
          autoHide: true,
        },
      },
      yAxis: {
        visible: true,
        formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
      },
      yField: Object.keys(data[0])[1],
      // interactions: [
      //   {
      //     type: 'slider',
      //     cfg: {
      //       start: 0.4,
      //       end: 0.45,
      //     },
      //   },
      // ],
    });
    columnPlot.render();

  }, [])
  return (
    <>
    <div id={id}>
    </div>
    </>
  );
}

export default ColChart