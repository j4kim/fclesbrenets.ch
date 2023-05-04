<template>
    <p>
        <i>{{ heading }}</i>
        <Match v-for="match in matches" :match="match"/>
    </p>
</template>

<script>
import Match from './Match'

export default {
    components: { Match },

    props: {
        matches: Array,
        heading: String,
    },
}
</script>