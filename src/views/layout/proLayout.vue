<template>
  <div class="pro-container">
    <site-header ref="siteHeader"/>
    <div class="content-container">
      <router-view ref="content"/>
    </div>
    <back ref="back" @click.native="back"/>
    <scroll-top :class="{'hidden': hiddenGoTop}" @click.native="goTop(0)"/>
  </div>
</template>

<script>
import Bus from "@/utils/bus";
import SiteHeader from "./components/siteHeader";
import ScrollTop from "@/components/scrollTop";
import Back from "@/components/back";

import { scrollTo } from "@/utils/scrollTo";
export default {
  components: {
    SiteHeader,
    ScrollTop,
    Back
  },
  data() {
    return {
      el: "",
      siteHeaderH: null, //头部高
      goTopActive: false,
      hiddenGoTop: true, //回到顶部按钮
      screenH: window.innerHeight, //屏幕高
      setIntervalActive: false,
      currentScrollTop: 0,
      maxScrollTop: null, //最多可以向上滚动的距离
    };
  },
  mounted() {
    Bus.$on("sizeChange", () => {
      this.nextTick();
    });
    this.el = this.$refs.content.$el;
    this.nextTick();

    window.onscroll = () => {
      let scrollH =
        window.pageYOffset ||
        document.body.scrollTop ||
        document.documentElement.scrollTop;
      if (scrollH > this.screenH) {
        this.hiddenGoTop = false;
      } else {
        this.hiddenGoTop = true;
      }
    };
  },
  methods: {
    goTop(to) {
      // 这里是滚动
      if (!this.goTopActive) {
        this.goTopActive = true;
        this.move(to);
      }
    },
    move(to) {
      scrollTo(to);
      this.goTopActive = false;
      this.hiddenGoTop = true;
      // const scrollToptimer = setInterval(() => {
      //   let top = document.body.scrollTop || document.documentElement.scrollTop;
      //   let speed = top / 6;
      //   if (document.body.scrollTop != 0) {
      //     document.body.scrollTop -= speed;
      //   } else {
      //     document.documentElement.scrollTop -= speed;
      //   }
      //   if (top == to) {
      //     clearInterval(scrollToptimer);
      //     this.goTopActive = false;
      //     this.hiddenGoTop = true;
      //   }
      // }, 30);
    },
    nextTick() {
      if (!this.setIntervalActive) {
        this.setIntervalActive = true;
        var timer = setInterval(() => {
          if (
            this.$refs.siteHeader &&
            this.$refs.siteHeader.$el.children[0].offsetHeight
          ) {
            clearInterval(timer);
            this.siteHeaderH = this.$refs.siteHeader.$el.children[0].offsetHeight;
            // this.el.style.paddingTop = `${this.siteHeaderH}px`;
            document.getElementsByClassName(
              "content-container"
            )[0].style.paddingTop = `${this.siteHeaderH}px`;
            this.setIntervalActive = false;
          }
        }, 200);
      }
    },
    back() {
      this.$router.push("/index/product");
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.content-container {
  transition: padding 0.2s;
}
.hidden {
  display: none;
}
</style>

