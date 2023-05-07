<template>
    <div>
        <span class="date">{{ formattedDate }}</span>
        <span :data-win="teamAWins">{{ match.teamA }}</span>
        <span>-</span>
        <span :data-win="teamBWins">{{ match.teamB }}</span>
        <span v-if="match.goalsA"
            >: {{ match.goalsA }} - {{ match.goalsB }}</span
        >
    </div>
</template>

<script>
export default {
    props: {
        match: Object,
    },

    computed: {
        formattedDate() {
            const date = new Date(this.match.date);
            const dd = ("" + date.getDate()).padStart(2, "0");
            const mm = ("" + (date.getMonth() + 1)).padStart(2, "0");
            const time = this.match.time ? ` à ${this.match.time}` : "";
            return `${dd}.${mm}${time}`;
        },
        teamAWins() {
            return this.match.goalsA > this.match.goalsB;
        },
        teamBWins() {
            return this.match.goalsB > this.match.goalsA;
        },
    },
};
</script>

<style scoped>
div {
    display: flex;
    flex-wrap: wrap;
    font-family: "Roboto Condensed", sans-serif;
}

.date {
    opacity: 0.5;
}

span {
    white-space: nowrap;
    margin-right: 0.3em;
}

[data-win] {
    font-weight: bold;
}
</style>
