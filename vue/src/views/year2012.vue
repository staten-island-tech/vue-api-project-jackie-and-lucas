<template>
    <div class="container">
        <Pie id="leading_cause" v-if="loaded" :data="lcData" />
        <!--     <Pie id="male/female" v-if="loaded" :data="mfData" />
    <Pie id="ethnicity" v-if="loaded" :data="eData" /> -->
    </div>
</template>

<script>
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)
function lc(leadingCause, api) {
    const yearfilter = api.filter((num) => num.year == 2012)
    console.log(yearfilter, "year2014")
    const lcfilter = yearfilter.filter((num) => num.leading_cause == leadingCause)
    console.log(lcfilter, "leading cause")
    const totaldeath = lcfilter.reduce((totalnow, deathnow) => {
        if (deathnow.deaths !== ".") {
            return totalnow + parseInt(deathnow.deaths);
        } else {
            return totalnow;
        }
    }, 0);
    console.log(totaldeath)
    return totaldeath;
}

function mf(mf, api) {
    const yearfilter = api.filter((num) => num.year == 2007)
    console.log(yearfilter, "year2014")
    const lcfilter = yearfilter.filter((num) => num.leading_cause == leadingCause)
    console.log(lcfilter, "leading cause")
    const totaldeath = lcfilter.reduce((totalnow, deathnow) => {
        if (deathnow.deaths !== ".") {
            return totalnow + parseInt(deathnow.deaths);
        } else {
            return totalnow;
        }
    }, 0);
    console.log(totaldeath)
    return totaldeath;
}

export default {
    name: 'BarChart',
    components: { Pie },
    data: () => ({
        loaded: false,
        lcData: {
            labels: ["Cancer", "Accidents Except Drug Posioning", "Alzheimers", "HIV/AIDS", "Septicemia",
                "Stroke", "Influenza & Pneumonia", "Respiratory Diseases",
                "Hypertension & Renal Diseases", "Liver Disease", "Nephritis",
                "Substance Use Disorders", "Congenital Malformations", "Assault",
                "Diabetes", "Perinatal Conditions", "Heart Diseases", "Suicide",
                "Viral Hepatitis", "Other Causes"],
            datasets: [
                {
                    label: 'Deaths',
                    backgroundColor: ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#00ffff', '#0000ff', '#4b0082', '#9400d3', '#ff00ff', '#ff1493', '#ff4500', '#ffa500', '#ffd700', '#32cd32', '#00ff7f', '#00ced1', '#1e90ff', '#800080', '#8a2be2', '#ff69b4', '#ff6347'],
                    borderColor: `#000000`,
                    borderWidth: 1,
                    data: []
                }]
        },
    })
    ,
    async mounted() {
        this.loaded = false
        try {
            const url = await fetch('https://data.cityofnewyork.us/resource/jb7j-dtam.json')
            const data = await url.json();
            this.lcData.datasets[0].data = [
                lc("Malignant Neoplasms (Cancer: C00-C97)", data),
                lc("Accidents Except Drug Posioning (V01-X39, X43, X45-X59, Y85-Y86)", data),
                lc("Alzheimer's Disease (G30)", data),
                lc("Human Immunodeficiency Virus Disease (HIV: B20-B24)", data),
                lc("Septicemia (A40-A41)", data),
                lc("Cerebrovascular Disease (Stroke: I60-I69)", data),
                lc("Influenza (Flu) and Pneumonia (J09-J18)", data),
                lc("Chronic Lower Respiratory Diseases (J40-J47)", data),
                lc("Essential Hypertension and Renal Diseases (I10, I12)", data),
                lc("Chronic Liver Disease and Cirrhosis (K70, K73)", data),
                lc("Nephritis, Nephrotic Syndrome and Nephrisis (N00-N07, N17-N19, N25-N27)", data),
                lc("Mental and Behavioral Disorders due to Accidental Poisoning and Other Psychoactive Substance Use (F11-F16, F18-F19, X40-X42, X44)", data),
                lc("Congenital Malformations, Deformations, and Chromosomal Abnormalities (Q00-Q99)", data),
                lc("Assault (Homicide: Y87.1, X85-Y09)", data),
                lc("Diabetes Mellitus (E10-E14)", data),
                lc("Certain Conditions originating in the Perinatal Period (P00-P96)", data),
                lc("Diseases of Heart (I00-I09, I11, I13, I20-I51)", data),
                lc("Intentional Self-Harm (Suicide: X60-X84, Y87.0)", data),
                lc("Viral Hepatitis (B15-B19)", data),
                lc("All Other Causes", data),

            ];

            this.loaded = true
        } catch (e) {
            console.error(e)
        }
    }
}
</script>
