<template>
    <div>
        <span class="ball-icon">⚽</span>
    </div>
</template>

<style lang="scss" scoped>
.ball{
    margin: 0 -25px;
    padding-right: 20px;
    .ball-icon{
        position: relative;
        transition: left 1s .2s;
    }
}
.news .ball-icon{ left:0; }
.infos .ball-icon{ left:100%; }
</style>
