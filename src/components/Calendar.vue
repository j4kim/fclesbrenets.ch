<template>
    <div v-if="loading">
        Chargement...
    </div>
    <div v-else>
        <Matches :matches="lastMatches" heading="3 derniers matchs"/>
        <Matches :matches="nextMatches" heading="3 prochains matchs"/>
    </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import Matches from './Matches'

const today = moment()

export default {
    components: { Matches },

    data: () => ({
        matches: [],
        loading: false
    }),

    created() {
        var baseURL = process.env.VUE_APP_FOOTBALL_API
        this.loading = true
        return axios.get("matches", { baseURL }).then(result => {
            this.matches = result.data
        }).finally(() => (this.loading = false))
    },

    computed: {
        filteredMatches() {
            return this.matches.filter(match => match.sppStatusText === null)
        },

        pastMatches() {
            return this.filteredMatches.filter(match => moment(match.date).isBefore(today))
        },

        futureMatches() {
            return this.filteredMatches.filter(match => moment(match.date).isAfter(today))
        },

        lastMatches() {
            return this.pastMatches.slice(-3)
        },

        nextMatches() {
            return this.futureMatches.slice(0, 3)
        }
    }
}
</script>