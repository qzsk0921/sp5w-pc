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
                require('@/assets/images/product/detail/souvenir/大红袍12.jpg'),
                require('@/assets/images/product/detail/souvenir/肉桂12.jpg'),
                require('@/assets/images/product/detail/souvenir/水仙12.jpg'),
            ]
        }
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>


