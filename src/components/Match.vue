<template>
    <div>{{ match.teamA }} - {{ match.teamB }}</div>
</template>

<script>
export default {
    props: {
        match: Object,
    },
}
</script>