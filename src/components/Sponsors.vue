<template>
    <div class="sponsors">
        <div class="sponsor"
            v-for="sm in sponsorsAndMedia"
            :key="sm.sponsor.id">
            {{ sm.sponsor.name }}
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
        },
        sponsorsAndMedia(){
            var sponsorsAndMedia = []
            this.sponsors.forEach(sponsor => {
                var media = this.$root.media.find(media => {
                    return media.title.rendered === sponsor.imageTitle
                })
                sponsorsAndMedia.push({sponsor, media})
            })
            return sponsorsAndMedia
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