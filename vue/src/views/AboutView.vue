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
  console.log(yearfilter)
  let startnum = 0;
  const totaldeath = yearfilter.reduce((totalnow, deathnow) => (totalnow + deathnow, startnum))
return totaldeath}

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
            data: [year2014, year2013, year2012, year2011]
          }]}
  }),
  async mounted () {
    this.loaded = false

    try {
      const url = await fetch('https://data.cityofnewyork.us/resource/jb7j-dtam.json')
      const data = await url.json();
      const year2014 = year(2007, data)
      const year2013 = year(2008, data)
      const year2012 = year(2009, data)
      const year2011 = year(2010, data)
      const year2010 = year(2011, data)
      const year2009 = year(2012, data)
      const year2008 = year(2013, data)
      const year2007 = year(2014, data)
      this.chartdata = userlist

      this.loaded = true
    } catch (e) {
      console.error(e)
    }
  }
}
</script>
