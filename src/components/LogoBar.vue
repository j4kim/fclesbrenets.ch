<template>
    <aside>
        <div
            v-for="sponsor in $root.sponsors"
            :key="sponsor.id"
            v-html="sponsor.content.rendered"
        />
    </aside>
</template>