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
                require('@/assets/images/product/detail/light/大红袍6.jpg'),
                require('@/assets/images/product/detail/light/肉桂6.jpg'),
                require('@/assets/images/product/detail/light/水仙6.jpg'),
            ]
        }
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>


