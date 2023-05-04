<template>
    <div>
        <span class="date">
            {{ formattedDate }}
            <span v-if="match.time">à {{ match.time }}</span>
        </span>
        {{ match.teamA }} - {{ match.teamB }}
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
            const mm = ("" + (date.getMonth() + 1)).padStart(2, "0")
            const dd = ("" + (date.getDay() + 1)).padStart(2, "0")
            return `${dd}.${mm}`
        },
    }
}
</script>

<style scoped>
.date {
    opacity: 0.5;
}
</style>
