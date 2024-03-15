<template>
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
</script>
