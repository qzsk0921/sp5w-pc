<template>
  <div>
    <h2>抱歉，页面无法访问...</h2>
    <p>可能原因：网址有错误 > 请检查地址是否完整或存在多余字符；网址已失效 > 可能页面已删除，活动已下线等</p>
    <div>
      <a class="home" href="/">返回首页 > </a>
    </div>
  </div>
</template>

<script>
import imageLoad from "@/utils/imageLoad";
export default {
  data() {
    return {
      imgSrc: []
    }
  },
  mounted() {
    imageLoad(this.imgSrc)
  }
}
</script>

<style scoped>
div {
  color: #000;
}
.home {
  color: rgb(0, 193, 222);
}
</style>