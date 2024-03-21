<!-- <template>
  <Bar :data="chartData" />
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { item } from "@/components/getapi.vue"; // Import the item ref
import { onMounted, ref } from "vue";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  setup() {
    const chartData = ref({
      labels: [],
      datasets: []
    });

    onMounted(() => {
      if (item.value) {
        // Assuming item.value contains the fetched data
        const data = item.value;
        chartData.value.labels = data.map(item => item.year); // Assuming 'year' is a field in your data
        chartData.value.datasets = [{
          label: 'Data One',
          backgroundColor: '#f87979',
          data: data.map(item => item.deaths) // Assuming 'value' is a field in your data
        }];
      }
    });

    return { chartData };
  },
  name: 'BarChart',
  components: { Bar },
}
</script> -->


<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <Bar :data="chartData" />
</template>


<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import {item, api} from "@/components/getapi.vue"
import { onMounted } from "vue";
import { ref} from "vue";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  setup(){
    onMounted(()=>{
    api();
  });
  const Value = ref([]);
  let yearValue = 0;
  const base = item.value
  console.log()
  console.log(base, "rwe0")
    for(let i = 0; i <= 100; i++) {
      console.log(base[i].leading_cause)
      yearValue++;
  };
  console.log(yearValue, "number")
  for(let i = 0; i <= 100; i++) {
    Value.value.push(base[i]) 
  };
  console.log(Value, "ok")
  
},


  
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: ['2017'],
        datasets: [
          {label: 'base', backgroundColor: '#f87979', data: [2, 3, 12]},
          {label: 'Data Two', backgroundColor: '#0000FF', data: [80, 32, 9]},
          {label: 'Data Three', backgroundColor: '#FFFF00', data: [150, 95, 55]},
        ]
      }
    }
  }
}
</script>