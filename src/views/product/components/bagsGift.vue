<template>
    <div>
        <img :src="item" v-for="item of imgSrc" :key="item">
    </div>
</template>

<script>
import imageLoad from "@/utils/imageLoad";
export default {
    created() {
        imageLoad(this.imgSrc);
    },
    data() {
        return {
            imgSrc: [
                require('@/assets/images/product/detail/gift/bc.jpg'),
                require('@/assets/images/product/detail/gift/dhp.jpg'),
                require('@/assets/images/product/detail/gift/lc.jpg'),
                require('@/assets/images/product/detail/gift/tgy.jpg'),
                require('@/assets/images/product/detail/gift/xz.jpg')
            ]
        }
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>


