<template>
    <div :class="['match', match.goalsA ? 'played' : '']">
        <span class="date">{{ formattedDate }}</span>
        <span class="team-a" :data-win="teamAWins">{{ match.teamA }}</span>
        <span class="hyphen-1 punctuation">-</span>
        <span class="team-b" :data-win="teamBWins">{{ match.teamB }}</span>
        <template v-if="match.goalsA">
            <span class="colon punctuation">:</span>
            <span class="goals goals-a">{{ match.goalsA }}</span>
            <span class="hyphen-2 punctuation">-</span>
            <span class="goals goals-b">{{ match.goalsB }}</span>
        </template>
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

<style lang="scss">
.match {
    display: flex;
    gap: 0.3em;

    .date {
        opacity: 0.5;
    }

    span {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    [data-win] {
        font-weight: bold;
    }
}

article {
    &.size-xs,
    &.size-s,
    &.size-m {
        .match {
            flex-wrap: wrap;
            line-height: 1.1;
            margin-top: 0.5em;
            margin-bottom: 0.5em;
            gap: 0.2em;
            .date {
                width: 100%;
            }
        }
    }

    &.size-xs {
        .match {
            display: grid;
            grid-template-columns: 90% 10%;

            .punctuation {
                display: none;
            }

            .date {
                grid-column: 1 / 3;
            }

            .team-b {
                grid-row: 3;
            }
        }
    }
}
</style>
