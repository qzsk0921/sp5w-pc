<template>
    <div class="return">
        <img :src="src" alt="">
    </div>
</template>

<script>

export default {
    data() {
        return {
            src: require('@/assets/images/icon/btn_spww_cp_xx_back@2x.png')
        }
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~@/styles/common";
.return {
    position: fixed;
    top: px2Rem(186);
    left: px2Rem(350);
    z-index: 3;
    cursor: pointer;
}
</style>