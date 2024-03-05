<template>
    <Bar :data="TestData" />
  </template>
  
  <script>
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  
  export default {
    name: 'Test Data',
    components: { Bar },
    data() {
      return {
        TestData: {
          labels: [ 'CAr1', 'CAr2', 'CAr3'],
          datasets: [
            {
              label: 'CARS',
              backgroundColor: '#f87979',
              data: [160, 75, 22]
            }
          ]
        }
      }
    }
  }
  </script>