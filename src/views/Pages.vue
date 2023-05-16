<template>
    <div class="pages">
        <h1>Informations générales</h1>
        <div class="articles grid">
            <!-- columns -->
            <div class="grid-col grid-col--1"></div>
            <div class="grid-col grid-col--2"></div>
            <!-- items -->
            <article-wrapper
                class="grid-item"
                v-for="article in orderedPages"
                :key="article.id"
                :content="article.content.rendered"
                :title="article.title.rendered"
                :link="'infos/' + article.slug"
            />
        </div>
    </div>
</template>

<script>
import { sortBy } from "lodash";
import Colcade from "colcade";
import ArticleWrapper from "@/components/ArticleWrapper.vue";

export default {
    name: "pages",
    components: { ArticleWrapper },
    data: () => ({ colc: undefined }),
    computed: {
        orderedPages() {
            return sortBy(this.$root.pages, "menu_order");
        },
    },
    mounted() {
        this.$router.options.updateTitle("Infos");
        this.initGrid();
    },
    updated() {
        this.initGrid();
    },
    methods: {
        initGrid() {
            if (this.colc) {
                this.colc.destroy();
            }
            this.colc = new Colcade(".grid", {
                columns: ".grid-col",
                items: ".grid-item",
            });
        },
    },
};
</script>

<style lang="scss">
.grid {
    margin: 0 -0.6rem;
}

.grid-col {
    float: left;
    width: 100%;
}

.grid:after {
    display: block;
    content: "";
    clear: both;
}

.grid-item {
    margin: 0 0.6rem 1rem;
}

/* 1 column, hide columns 2 */
.grid-col--2 {
    display: none;
}

/* 2 columns at medium size */
@media (min-width: 1000px) {
    .grid-col {
        width: 50%;
    }

    /* show column 2 */
    .grid-col--2 {
        display: block;
    }
}
</style>
