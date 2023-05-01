<template>
    <tr class="match">
        <td>
            {{ match.fdate }}
        </td>
        <td>
            {{ match.teamA }}
        </td>
        <td>
            {{ match.teamB }}
        </td>
    </tr>
</template>

<script>
export default {
    props: {
        match: Object,
    },
}
</script>

<style>
tr.match td:not(:last-child) {
    padding-right: 0.5em;
}
</style>