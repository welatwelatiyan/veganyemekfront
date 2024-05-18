<script setup lang="ts">
//import { ref } from 'vue';
import { onMounted, ref } from 'vue';
import L from 'leaflet';
const long=ref(0);
const lat=ref(0);
const map =ref();
const mapContainer = ref();
onMounted(()=>{
    map.value =L.map(mapContainer.value).setView([51.505, -0.09], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'

}).addTo(map.value);
getlocalate();
})
function  getlocalate(){
    if(navigator.geolocation)
    {
        navigator.geolocation.watchPosition((position)=>{
            long.value=position.coords.longitude;
            lat.value=position.coords.latitude;
            map.value.setView([lat.value, long.value], 13)
            L.marker([lat.value, long.value]).addTo(map.value);
        })

    }

}
</script>

<template>
    <v-row class="d-flex mb-3">
        <v-col cols="12"
        md="6"
        >
            <v-label class="font-weight-bold mb-1">Name</v-label>
            <v-text-field variant="outlined" density="compact" hide-details color="primary"></v-text-field>
        </v-col>
        <v-col cols="12"
        md="6"
        >
            <v-label class="font-weight-bold mb-1">Description</v-label>
            <v-text-field variant="outlined" density="compact" type="email" hide-details color="primary"></v-text-field>
        </v-col>
        <v-col cols="12"
        md="6"
        >
            <v-label class="font-weight-bold mb-1">TaxNumber</v-label>
            <v-text-field variant="outlined" type="password" density="compact"  hide-details color="primary"></v-text-field>
        </v-col>

        <v-col cols="12"
        md="6"
        >
            <v-label class="font-weight-bold mb-1">TaxBranchName</v-label>
            <v-text-field variant="outlined" density="compact" hide-details color="primary"></v-text-field>
        </v-col>
        <v-col cols="12"
        md="6"
        >
            <v-label class="font-weight-bold mb-1">MinOrderPrice</v-label>
            <v-text-field variant="outlined" density="compact" type="email" hide-details color="primary"></v-text-field>
        </v-col>
        <v-col cols="12"
        md="6"
        >
            <v-label class="font-weight-bold mb-1">Password</v-label>
            <v-text-field variant="outlined" type="password" density="compact"  hide-details color="primary"></v-text-field>
        </v-col>
        
        <v-col cols="12"
        md="6"
        >
            <v-btn to="/" color="primary" size="large" block   flat>Sign up</v-btn>
        </v-col>

        <v-col cols="12"
        md="6">
            <div ref="mapContainer" style="width : 400px; height : 400px">
              zzx
            </div>
        </v-col>
    </v-row>
    
</template>