<template>
    <div v-if="loading" class="loading">
        Chargement...
    </div>
    <table v-else>
        <tr><td colspan="3">Derniers matchs:</td></tr>
        <Match v-for="match in lastMatches" :match="match"/>
        <tr><td colspan="3">Prochains matchs:</td></tr>
        <Match v-for="match in nextMatches" :match="match"/>
    </table>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import Match from './Match'

const today = moment()

export default {
    components: { Match },

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

<style scoped>
.loading {
    height: 330px;
}
</style>