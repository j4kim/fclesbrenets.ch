<template>
    <div id="app" :class="$route.name + ' ball-' + $route.meta.side">
        <header>
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
header {
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

    article {
        break-inside: avoid;
        box-shadow: 0 3px 8px transparentize(black, 0.95);
        padding: 1rem;
        margin-bottom: 1rem;
        transform: translateZ(0);
        background: white;
        container-type: inline-size;

        p {
            margin: 0.6rem 0;
            line-height: 1.6;
        }

        h1 {
            margin: 0;
            line-height: 1.2;
        }

        img {
            width: auto;
            height: auto;
            max-width: 100%;
        }
    }
}

.sponsors-container {
    padding: 20px;
    min-height: 120px;
}

@media screen and (min-width: 700px) {
    main {
        max-width: 640px;
    }

    :root {
        font-size: 18px;
    }
}

@media screen and (min-width: 1000px) {
    main {
        max-width: 920px;
    }

    :root {
        font-size: 20px;
    }
}
</style>
