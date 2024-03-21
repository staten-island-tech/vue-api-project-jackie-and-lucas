<script>
import {ref, toRaw} from "vue";
const item = ref("");
async function api(){
 let api = await fetch("https://data.cityofnewyork.us/resource/jb7j-dtam.json");
 let data = await api.json();
item.value = data;
const base = item.value
 console.log(data)
 console.log(toRaw(item.value.year))
 console.log(base)
}
console.log(item)
export {item, api};

</script>