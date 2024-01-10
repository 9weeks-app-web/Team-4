import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

import { Radar as RadarChart } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
);

const options = {
  scales: {
    r: {
      ticks: {
        stepSize: 1,
        display: false,
      },
      grid: {
        color: '#CCC',
      },
      pointLabels: {
        font: {
          size: 16,
          weight: 600,
          family: 'Pretendard',
        },
        color: '#B3B3B3',
      },
      angleLines: {
        // display: false,
      },
      suggestedMin: 0,
      suggestedMax: 5,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  // animation: {
  //   tension: {
  //     duration: 1500,
  //     easing: 'linear',
  //     from: 0.1,
  //     to: -0.1,
  //     loop: true,
  //   },
  // },
};

interface RadarProps {
  inputs?: number[];
  labels?: string[];
}

const Radar = ({
  inputs = [3, 2, 5, 4, 3, 4],
  labels = ['성실성', '참여도', '작업속도', '포용성', '의사소통', '직무경험'],
}: RadarProps) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: '선호도',
        data: inputs,
        backgroundColor: 'rgba(25, 106, 255, 0.1)',
        borderColor: 'rgba(25, 106, 255, 1)',
        borderWidth: 3,
        pointHoverBorderWidth: 10,
      },
    ],
  };

  return <RadarChart data={data} options={options} />;
};

export default Radar;
