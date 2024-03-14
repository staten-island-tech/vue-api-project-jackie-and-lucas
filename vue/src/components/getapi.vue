<script>
import { ref} from "vue";
const item = ref("");
async function api(){
 let api = await fetch("https://data.cityofnewyork.us/resource/jb7j-dtam.json");
 let data = await api.json();
 console.log(data[0])
 item.value = data;
 console.log(item.value)
}

export {item, api};
</script>