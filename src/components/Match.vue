<template>
    <div>
        <span class="date">
            {{ formattedDate }}
            <span v-if="match.time"> à {{ match.time }} </span>
        </span>
        <span :data-win="teamAWins"> {{ match.teamA }} </span>
        -
        <span :data-win="teamBWins"> {{ match.teamB }} </span>
        <span v-if="match.goalsA && match.goalsB">
            : {{ match.goalsA }} - {{ match.goalsB }}
        </span>
    </div>
</template>

<script>
export default {
    props: {
        match: Object,
    },

    computed: {
        formattedDate() {
            const date = new Date(this.match.date)
            const dd = ("" + (date.getDate())).padStart(2, "0")
            const mm = ("" + (date.getMonth() + 1)).padStart(2, "0")
            return `${dd}.${mm}`
        },
        teamAWins() { return this.match.goalsA > this.match.goalsB },
        teamBWins() { return this.match.goalsB > this.match.goalsA },
    }
}
</script>

<style scoped>
.date {
    opacity: 0.5;
}

[data-win] {
    font-weight: bold;
}
</style>
