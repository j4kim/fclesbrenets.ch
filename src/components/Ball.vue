<template>
    <div>
        <div class="ball-icon">⚽</div>
    </div>
</template>

<style lang="scss" scoped>
.ball{
    margin: 0 -25px;
    padding-right: 20px;
    .ball-icon{
        position: relative;
        transition: all 1s .2s;
        width: 20px;
        height: 20px;
    }
}
.ball-left .ball-icon { left:0; transform:rotate(0deg) }
.ball-right .ball-icon { left:100%; transform:rotate(360deg) }
</style>
