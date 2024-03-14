<template>
  <Bar :data="chartData" />
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import {item, api} from "@/components/getapi.vue"
import { onMounted } from "vue";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  setup(){
    onMounted(()=>{
    api();
});
  },
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: ['Ya'],
        datasets: [
          {label: 'item.year', backgroundColor: '#f87979', data: [40, 20, 12]},
          {label: 'Data Two', backgroundColor: '#0000FF', data: [80, 32, 9]},
          {label: 'Data Three', backgroundColor: '#FFFF00', data: [150, 95, 55]},
        ]
      }
    }
  }
}
</script>