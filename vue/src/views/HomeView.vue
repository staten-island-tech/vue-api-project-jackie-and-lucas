<template>
  <h6 class="apiName" style="color: black; ">New York City Leading Causes of Death</h6>
  <div class="container">
    <Bar class="deaths" v-if="loaded" :data="chartData" />
  </div>
</template>

<script>

import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

function year(yearNum, api) {
  const yearfilter = api.filter((num) => num.year == yearNum)
  const totaldeath = yearfilter.reduce((totalnow, deathnow) => {
    if (deathnow.deaths !== ".") {
      return totalnow + parseInt(deathnow.deaths);
    } else {
      return totalnow;
    }
  }, 0);
  console.log(totaldeath)
  return totaldeath;
}
export default {
  name: 'BarChart',
  components: { Bar },
  data: () => ({
    loaded: false,
    chartData: {
      labels: ['2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014'],
      datasets: [
        {
          label: 'Total Deaths Per Year',
          backgroundColor: ['#ff0000', '#ff4000', '#ff8000', '#ffbf00', '#ffff00', '#bfff00', '#80ff00', '#40ff00'],
          borderColor: `#000000`,
          borderWidth: 1,
          data: []
        }]
    }
  })
  ,
  async mounted() {
    this.loaded = false
    try {
      const url = await fetch('https://data.cityofnewyork.us/resource/jb7j-dtam.json')
      const data = await url.json();
      this.chartData.datasets[0].data = [
        year(2007, data),
        year(2008, data),
        year(2009, data),
        year(2010, data),
        year(2011, data),
        year(2012, data),
        year(2013, data),
        year(2014, data)
      ];

      this.loaded = true
    } catch (e) {
      console.error(e)
    }
  }
}
</script>
<style scoped>
h6 {
  font-size: 3rem;
}

.container {
  width: 39rem;
  height: auto;
  position: relative;
  place-items: center;
}
</style>