<template>
    <div class="sponsors">
        <div class="sponsor"
            v-for="sponsor in $root.sponsors"
            :key="sponsor.id"
            v-html="sponsor.content.rendered"
        />
    </div>
</template>