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