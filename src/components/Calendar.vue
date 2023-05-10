<template>
    <div v-if="loading" class="loading">
        Chargement...
    </div>
    <div v-else>
        <Matches :matches="lastMatches" heading="Derniers matchs:" />
        <Matches :matches="nextMatches" heading="Prochains matchs:" />
        <p class="time" @dblclick="load(true)">
            Données de l'ANF récupérées le {{ time }}
        </p>
    </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
import Matches from "./Matches";

const today = moment();

export default {
    components: { Matches },

    props: {
        count: {
            type: Number,
            default: 3,
        },
    },

    data: () => ({
        matches: [],
        time: null,
        loading: false,
    }),

    created() {
        this.load();
    },

    methods: {
        load(fresh = false) {
            var baseURL = process.env.VUE_APP_FOOTBALL_API;
            var path = fresh ? "matches/fresh" : "matches";
            this.loading = true;
            return axios
                .get(path, { baseURL })
                .then((result) => {
                    this.matches = result.data.matches;
                    this.time = moment(result.data.time * 1000).format("LLL");
                })
                .finally(() => (this.loading = false));
        },
    },

    computed: {
        filteredMatches() {
            return this.matches.filter((match) => match.sppStatusText === null);
        },

        pastMatches() {
            return this.filteredMatches.filter((match) =>
                moment(match.date).isBefore(today)
            );
        },

        futureMatches() {
            return this.filteredMatches.filter((match) =>
                moment(match.date).isAfter(today)
            );
        },

        lastMatches() {
            return this.pastMatches.slice(-this.count);
        },

        nextMatches() {
            return this.futureMatches.slice(0, this.count);
        },
    },
};
</script>

<style scoped>
.loading {
    height: 340px;
}
.time {
    font-size: 14px;
    font-style: italic;
    opacity: 0.5;
}
</style>
