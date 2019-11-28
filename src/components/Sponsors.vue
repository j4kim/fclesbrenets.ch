<template>
    <div class="sponsors">
        <div class="sponsor"
            v-for="sponsor in sponsors"
            :key="sponsor.id"
        >
            {{ sponsor.name }}
    </div>
    </div>
</template>

<script>
import axios from "axios"
import { zipObject } from "lodash"

export default {
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
        }
    },
    created(){
        axios.get(this.url).then(response => {
            var data = response.data.values
            var header = data.shift()
            data.forEach(row => {
                var sponsor = zipObject(header, row)
                this.sponsors.push(sponsor)
            })
        })
    }
}
</script>