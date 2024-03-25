<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <Bar :data="chartData" />
</template>


<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { onMounted } from "vue";
import { ref} from "vue";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
let year = [], leading_cause = []
export default {
  setup(){
    async function api(){
 let URL = await fetch("https://data.cityofnewyork.us/resource/jb7j-dtam.json");
 let data = await URL.json();
 console.log(data);
 const years = data.map((item)=> item.filter((items)=> items == "2014"))
 const leading_causes = data.map((item) => item.leading_cause)
 console.log(year, leading_cause)
 year = years.length
 leading_cause = leading_causes.length
}
   api();
  },
 
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: ['2017'],
        datasets: [
          {label: 'base', backgroundColor: '#f87979', data: year},
          {label: 'Data Two', backgroundColor: '#0000FF', data: leading_cause},
          {label: 'Data Three', backgroundColor: '#FFFF00', data: [150, 95, 55]},
        ]
      }
    }
  }
}
</script>

<template>
  <div class="container">
    <Bar v-if="loaded" :data="2014chart" />
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
function year(yearNum, data){
  const yearfilter = data.filter((num) => num.year == yearNum)
  console.log(yearfilter)
  const totaldeath = yearfilter.reduce( , yearnow) => {
  const deathnum = yearnow.year;
}
}
export default {
  name: 'BarChart',
  components: { Bar },
  data: () => ({
    loaded: false,
    chartData: null
  }),
  async mounted () {
    this.loaded = false

    try {
      const url = await fetch('https://data.cityofnewyork.us/resource/jb7j-dtam.json')
      const data = await url.json();
      const year2014 = year(2014, data)
      const year2013 = year(2013, data)
      const year2012 = year(2012, data)
      const year2011 = year(2011, data)
      const year2010 = year(2010, data)
      const year2009 = year(2009, data)
      const year2008 = year(2008, data)
      const year2007 = year(2007, data)
      this.chartdata = userlist

      this.loaded = true
    } catch (e) {
      console.error(e)
    }
  }
}
</script>