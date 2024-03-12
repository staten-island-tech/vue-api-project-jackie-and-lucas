<script setup>
 export async function api(){
    let link = await fetch("https://data.cityofnewyork.us/resource/jb7j-dtam.json")
    let data = await link.json();
   }
</script>
