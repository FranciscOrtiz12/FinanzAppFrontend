import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const GraficoTorta = () => {
  useEffect(() => {
    const chartDom = document.getElementById('GraficoTorta');
    const myChart = echarts.init(chartDom);

    const option = {
      legend: {
        top: 'bottom'
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      series: [
        {
          name: 'Nightingale Chart',
          type: 'pie',
          radius: [50, 250],
          center: ['50%', '50%'],
          roseType: 'area',
          itemStyle: {
            borderRadius: 8
          },
          data: [
            { value: 40, name: 'rose 1' },
            { value: 38, name: 'rose 2' },
            { value: 32, name: 'rose 3' },
            { value: 30, name: 'rose 4' },
            { value: 28, name: 'rose 5' },
            { value: 26, name: 'rose 6' },
            { value: 22, name: 'rose 7' },
            { value: 18, name: 'rose 8' }
          ]
        }
      ]
    };

    myChart.setOption(option);

    return () => {
      myChart.dispose(); // Limpia el gráfico al desmontar el componente
    };
  }, []);

  return <div id="GraficoTorta" style={{ width: '100%', height: '500px' }}></div>;
};

export default GraficoTorta;
