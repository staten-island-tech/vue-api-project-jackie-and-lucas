<script>
import { ref} from "vue";
const item = ref("");
async function api(){
 let api = await fetch("https://data.cityofnewyork.us/resource/jb7j-dtam.json");
 let data = await api.json();
item.value = data;
 console.log(data)
 console.log(item)
}
console.log(item)
export {item, api};

</script>