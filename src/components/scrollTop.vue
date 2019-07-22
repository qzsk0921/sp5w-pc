<template>
    <div class="scrollTop">
        <img :src="src" alt="">
    </div>
</template>

<script>
export default {
    data() {
        return {
            src: require('@/assets/images/icon/btn_spww_cp_xx_top@2x.png')
        }
    },
    mounted() {
        // sizeChange
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~@/styles/common";
.scrollTop {
    position: fixed;
    bottom: px2Rem(56);
    right: px2Rem(150);
    z-index: 3;
    cursor: pointer;
}
</style>


