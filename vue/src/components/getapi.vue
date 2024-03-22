<script>
async function api(){
 let URL = await fetch("https://data.cityofnewyork.us/resource/jb7j-dtam.json");
 let data = await URL.json();
 console.log(data);
}
export {api};
</script>