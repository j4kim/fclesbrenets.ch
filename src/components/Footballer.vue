<template>
    <svg
        class="footballer"
        :style="revert ? { transform: 'scale(-1, 1)' } : {}"
        viewBox="0 0 62 85"
    >
        <g id="jambe" :class="animate ? 'animate' : ''">
            <rect
                x="21.655"
                y="48.15"
                :fill="colorShirt"
                width="6"
                height="36"
            />
            <rect
                x="20.655"
                y="46.15"
                :fill="colorShorts"
                width="10"
                height="19"
            />
            <rect x="21.655" y="79.15" width="12" height="5" />
        </g>
        <g id="reste">
            <g>
                <rect
                    x="11.655"
                    y="48.15"
                    :fill="colorShirt"
                    width="6"
                    height="36"
                />
                <rect
                    x="9.655"
                    y="46.15"
                    :fill="colorShorts"
                    width="10"
                    height="19"
                />
                <rect x="5.655" y="79.15" width="12" height="5" />
            </g>
            <rect
                x="28.903"
                y="20.178"
                transform="matrix(0.9749 -0.2225 0.2225 0.9749 -7.1841 7.8835)"
                :fill="colorSkin"
                width="5"
                height="31.309"
            />
            <rect
                x="8.655"
                y="20.15"
                :fill="colorShirt"
                width="22"
                height="33"
            />
            <rect
                x="12.098"
                y="7.318"
                transform="matrix(0.1493 -0.9888 0.9888 0.1493 5.622 32.2639)"
                :fill="colorSkin"
                width="18.927"
                height="11.093"
            />
            <rect
                x="-6.991"
                y="34.472"
                transform="matrix(0.2572 -0.9664 0.9664 0.2572 -29.9579 34.9712)"
                :fill="colorSkin"
                width="29.518"
                height="5"
            />
        </g>
    </svg>
</template>

<script>
export default {
    props: {
        revert: Boolean,
        colorShirt: { type: String, default: "#005b97" },
        colorShorts: { type: String, default: "#ffffff" },
        colorSkin: { type: String, default: "#FFCFB5" },
    },
    data() {
        return {
            animate: false,
        };
    },
    methods: {
        kick() {
            this.animate = true;
            setTimeout(() => {
                this.animate = false;
            }, 1500);
        },
    },
};
</script>

<style lang="scss" scoped>
@keyframes kick {
    0% {
        transform: rotate(0);
    }

    10% {
        transform: rotate(20deg);
    }

    50% {
        transform: rotate(-90deg);
    }

    100% {
        transform: rotate(0);
    }
}

.footballer {
    height: 80px;
    /* IE compatibility */
    width: 58.34px;
}

.animate {
    transform-origin: 40% 60%;
    animation: kick 1s linear;
}
</style>
