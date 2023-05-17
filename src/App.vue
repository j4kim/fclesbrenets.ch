<template>
    <div id="app" :class="`ball-${$route.meta.side}`" :data-route="$route.name">
        <header class="app-header">
            <a href="/">
                <img alt="logo du FCB" src="./assets/logoFCB.svg" />
            </a>
        </header>
        <football-nav />
        <main>
            <router-view />
        </main>
        <div class="sponsors-container">
            <sponsors v-if="sponsors && $route.name !== 'sponsors'" />
        </div>
    </div>
</template>

<script>
import FootballNav from "@/components/FootballNav.vue";
import Sponsors from "@/components/Sponsors.vue";

export default {
    components: { FootballNav, Sponsors },

    computed: {
        sponsors() {
            return process.env.VUE_APP_SPONSORS === "true";
        },
    },
};
</script>

<style lang="scss">
header.app-header {
    text-align: center;

    img {
        height: 100px;
        margin: 10px;
    }
}

main {
    border-top: 1px solid var(--font-color);
    border-bottom: 1px solid var(--font-color);
    padding: 0.6rem;
    width: 100%;
    margin: auto;
    display: block;
}

.sponsors-container {
    padding: 20px;
    min-height: 120px;
}

@media screen and (min-width: 700px) {
    main {
        max-width: 640px;
    }
}

@media screen and (min-width: 1000px) {
    main {
        max-width: 920px;
    }
}
</style>
