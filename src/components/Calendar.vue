<template>
    <div v-if="loading" class="loading">
        Chargement...
    </div>
    <div v-else>
        <Matches :matches="lastMatches" heading="Derniers matchs:" />
        <Matches :matches="nextMatches" heading="Prochains matchs:" />
    </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import Matches from './Matches'

const today = moment()

export default {
    components: { Matches },

    props: {
        count: {
            type: Number,
            default: 3
        }
    },

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
            return this.pastMatches.slice(-this.count)
        },

        nextMatches() {
            return this.futureMatches.slice(0, this.count)
        }
    }
}
</script>

<style scoped>
.loading {
    height: 330px;
}

@container (max-width: 500px) {
    table {
        font-size: 14px;
    }
}
</style>