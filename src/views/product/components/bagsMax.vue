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
                require('@/assets/images/product/detail/max/白茶50.jpg'),
                require('@/assets/images/product/detail/max/大红袍50.jpg'),
                require('@/assets/images/product/detail/max/绿茶50.jpg'),
                require('@/assets/images/product/detail/max/铁观音50.jpg'),
                require('@/assets/images/product/detail/max/小种50.jpg'),
            ]
        }
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>


