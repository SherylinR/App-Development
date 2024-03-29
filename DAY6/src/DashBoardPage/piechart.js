import {
    Chart,
    initTE,
  } from "tw-elements";
  
  initTE({ Chart });
  
  // Chart
  const dataBar = {
    type: 'bar',
    data: {
      labels: ['Monday', 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday' , 'Sunday '],
      datasets: [
        {
          label: 'Traffic',
          data: [2112, 2343, 2545, 3423, 2365, 1985, 987],
        },
      ],
    },
  };
  
  new Chart(document.getElementById('bar-chart'), dataBar);