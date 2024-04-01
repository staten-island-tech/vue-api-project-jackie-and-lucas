<template>
  <div class="container">
    <Bar v-if="loaded" :data="chartData" />
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
function year(yearNum, api){
  const yearfilter = api.filter((num) => num.year == yearNum)
  const deathnum = yearfilter.map((death) => death.deaths)
  console.log(deathnum)
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
    chartData: {labels: [ '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014'],
        datasets: [
          {
            label: 'Total Deaths Per Year',
            backgroundColor: '#f87979',
            data: []
          }]}
  })
  ,
  async mounted () {
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
