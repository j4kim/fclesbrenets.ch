<template>
    <div>
        <h1>Nous remercions chaleureusement nos partenaires matériel:</h1>
        <div class="sponsors-grid">
            <sponsor
                v-for="s in shuffledSponsors"
                :key="s.name"
                :sponsor="s"/>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import { zipObject, shuffle } from "lodash"
import Sponsor from "@/components/Sponsor"

export default {
    components: { Sponsor },
    data(){
        return {
            sponsors: []
        }
    },
    computed:{
        url(){
            return "https://sheets.googleapis.com/v4/spreadsheets/" +
                process.env.VUE_APP_SPREADSHEET_ID + "/values/" +
                process.env.VUE_APP_SPREADSHEET_RANGE +
                "?key=" + process.env.VUE_APP_GOOGLE_API_KEY
        },
        shuffledSponsors(){
            return shuffle(this.sponsors)
        }
    },
    created(){
        axios.get(this.url).then(response => {
            var data = response.data.values
            var header = data.shift()
            data.forEach(row => {
                var sponsor = zipObject(header, row)
                if(sponsor.name){
                    this.sponsors.push(sponsor)
                }
            })
        })
    }
}
</script>

<style lang="scss" scoped>
    h1{
        color: white;
    }
    .sponsors-grid{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        grid-auto-rows: 1fr;
        grid-gap: 1rem;
    }
</style>