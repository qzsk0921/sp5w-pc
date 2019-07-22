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
                require('@/assets/images/product/detail/top/慧苑百年老枞.jpg'),
                require('@/assets/images/product/detail/top/慧苑老君眉.jpg'),
                require('@/assets/images/product/detail/top/九龙窠大红袍.jpg'),
                require('@/assets/images/product/detail/top/马头岩肉桂.jpg'),
                require('@/assets/images/product/detail/top/牛栏坑肉桂.jpg'),
                require('@/assets/images/product/detail/top/悟源涧水仙.jpg'),
            ]
        }
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>


