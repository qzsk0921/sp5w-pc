<template>
  <div class="site-contation">
    <site-header ref="siteHeader"/>
    <div class="content-contation">
      <router-view ref="content"/>
    </div>
    <site-footer ref="siteFooter"/>
    <scroll-top :class="{'hidden': hiddenGoTop}" @click.native="goTop(0)"/>
  </div>
</template>

<script>
import SiteHeader from "./components/siteHeader";
import SiteFooter from "./components/siteFooter";
import Bus from "@/utils/bus";
import ScrollTop from "@/components/scrollTop";
export default {
  components: {
    SiteHeader,
    SiteFooter,
    ScrollTop
  },
  data() {
    return {
      imgSrc: [],
      el: null, //滚动内容
      elH: null, //滚动内容高
      currentScrollTop: 0,
      brandScrollTop: 0,
      productScrollTop: 0,
      eventScrollTop: 0,
      siteFooterH: null, //底部高
      siteHeaderH: null, //头部高
      screenH: window.innerHeight, //屏幕高
      maxScrollTop: null, //最多可以向上滚动的距离
      goTopActive: false,
      hiddenGoTop: true, //回到顶部按钮
      isFirefox: false,
      scroll_event: null //鼠标滚轮事件
    };
  },
  mounted() {
    if (navigator.userAgent.indexOf("Firefox") != -1) this.isFirefox = true;
    //from app
    Bus.$on("sizeChange", () => {
      this.nextTick();
    });
    this.el = this.$refs.content.$el;
    this.setCategoryScrollTop(this.el.className);
    this.nextTick();
    if (this.currentScrollTop > 0) {
      this.el.style.transform = `translate3d(0, ${-this.currentScrollTop /
        5}px, 0)`;
    } else {
      this.el.style.transform = `translate3d(0, ${this.currentScrollTop /
        5}px, 0)`;
    }

     this.scroll_event =
      "onwheel" in document
        ? "wheel"
        : "onmousewheel" in document
        ? "mousewheel"
        : "DOMMouseScroll";
    if (document.addEventListener) {
      document.addEventListener(this.scroll_event, this.mousewheel, { passive: false });
      return;
    }
    window.onwheel = document.onwheel = this.mousewheel;
  },
  updated() {
    this.el = this.$refs.content.$el;
    this.setCategoryScrollTop(this.el.className);
    this.nextTick();
    // firefox和chrome相反
    if (this.currentScrollTop > 0) {
      this.el.style.transform = `translate3d(0, ${-this.currentScrollTop /
        5}px, 0)`;
    } else {
      this.el.style.transform = `translate3d(0, ${this.currentScrollTop /
        5}px, 0)`;
    }

    if (Math.abs(this.currentScrollTop / 5) > this.screenH) {
      this.hiddenGoTop = false;
    } else {
      this.hiddenGoTop = true;
    }
  },
  beforeDestroy() {
    document.removeEventListener(this.scroll_event, this.mousewheel)
  },
  methods: {
    mousewheel(e) {
      e.stopPropagation();
      e.preventDefault();
      // const scrollTop =
      //   window.pageYOffset ||
      //   document.documentElement.scrollTop ||
      //   document.body.scrollTop ||
      //   0;
      if (e.wheelDelta) {
        this.currentScrollTop += e.wheelDelta;
        this.currentScrollTop =
          this.currentScrollTop > 0
            ? 0
            : this.currentScrollTop < -this.maxScrollTop * 5.1
            ? -this.maxScrollTop * 5.1
            : this.currentScrollTop;
      } else if (e.deltaY) {
        //firefox
        this.currentScrollTop += e.deltaY;
        this.currentScrollTop =
          this.currentScrollTop < 0
            ? 0
            : this.currentScrollTop > this.maxScrollTop * 5.1
            ? this.maxScrollTop * 5.1
            : this.currentScrollTop;
      }
      this[`${this.el.className}ScrollTop`] = this.currentScrollTop;
      if (this.currentScrollTop > 0) {
        // firefox
        this.el.style.transform = `translate3d(0, ${-this.currentScrollTop /
          5}px, 0)`;
      } else {
        this.el.style.transform = `translate3d(0, ${this.currentScrollTop /
          5}px, 0)`;
      }
      // 显示回到顶部
      if (Math.abs(this.currentScrollTop / 5) >= this.screenH) {
        this.hiddenGoTop = false;
      } else {
        this.hiddenGoTop = true;
      }
    },
    setCategoryScrollTop(className) {
      switch (className) {
        case "brand":
          this.currentScrollTop = this[`${className}ScrollTop`];
          break;
        case "product":
          this.currentScrollTop = this[`${className}ScrollTop`];
          break;
        case "event":
          this.currentScrollTop = this[`${className}ScrollTop`];
          break;
      }
    },
    countMaxScrollHandle() {
      let dVal = this.elH + this.siteFooterH - this.screenH;
      if (dVal > 0) {
        this.maxScrollTop = dVal;
      } else {
        if (dVal + this.siteHeaderH < 0) {
          this.currentScrollTop = 0;
        } else {
          this.maxScrollTop = this.siteHeaderH + dVal;
        }
      }
    },
    nextTick() {
      this.screenH = window.innerHeight;
      // setTimeout(() => {
      //   this.elH = this.el.offsetHeight;
      //   this.siteFooterH = this.$refs.siteFooter.$el.children[0].offsetHeight;
      //   this.siteHeaderH = this.$refs.siteHeader.$el.children[0].offsetHeight;
      //   this.countMaxScrollHandle();
      //   this.el.style.top = `${this.siteHeaderH}px`;
      //   // this.el.style.transitionProperty = 'top'
      //   // this.el.style.transitionDuration = '200ms'
      //   // 设置占满整屏
      //   // this.el.children[0].style.height = this.screenH - this.siteHeaderH + 'px'
      // }, 200);
      var nextTickTimer = window.setInterval(() => {
        if (
          this.el.offsetHeight &&
          this.$refs.siteHeader.$el.children[0].offsetHeight
        ) {
          window.clearInterval(nextTickTimer);
          this.el = this.$refs.content.$el;
          this.elH = this.el.offsetHeight;
          this.siteFooterH = this.$refs.siteFooter.$el.children[0].offsetHeight;
          this.siteHeaderH = this.$refs.siteHeader.$el.children[0].offsetHeight;
          this.countMaxScrollHandle();
          this.el.style.top = `${this.siteHeaderH}px`;
        }
      }, 200);
      // this.$nextTick(() => {
      //   this.elH = this.el.offsetHeight;
      //   this.siteFooterH = this.$refs.siteFooter.$el.children[0].offsetHeight;
      //   this.siteHeaderH = this.$refs.siteHeader.$el.children[0].offsetHeight;
      //   this.countMaxScrollHandle();
      //   this.el.style.top = `${this.siteHeaderH}px`;
      // });
    },
    goTop(to) {
      // 其实是translateY
      if (!this.goTopActive) {
        this.goTopActive = true;
        if (!this.isFirefox) {
          this.move(false, to);
        } else if (this.isFirefox) {
          // firefox
          this.move(true, to);
        }
      }
    },
    move(isFirefox, to) {
      if (isFirefox) {
        // firefox
        let target = this.currentScrollTop;
        let moveTimer = window.setInterval(() => {
          target -= target / 10;
          this.el.style.transform = `translate3d(0, -${target / 5}px, 0)`;
          if (target <= to + 2) {
            this.el.style.transform = `translate3d(0, -${to}px, 0)`;
            window.clearInterval(moveTimer);
            this[`${this.el.className}ScrollTop`] = this.currentScrollTop = to;
            this.goTopActive = false;
            this.hiddenGoTop = true;
          }
        }, 10);
      } else {
        let target = this.currentScrollTop;
        let moveTimer = window.setInterval(() => {
          target -= target / 10;
          this.el.style.transform = `translate3d(0, ${target / 5}px, 0)`;
          if (target >= to - 2) {
            this.el.style.transform = `translate3d(0, ${to}px, 0)`;
            window.clearInterval(moveTimer);
            this[`${this.el.className}ScrollTop`] = this.currentScrollTop = to;
            this.goTopActive = false;
            this.hiddenGoTop = true;
          }
        }, 10);
      }
    }
    // updatedData() {
    //   this.nextTick()
    // }
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.content-contation {
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: absolute;
  // z-index: 2;
  overflow: hidden;
}
.product,
.brand,
.event {
  top: 150px;
  transition: top 0.4s;
}
.hidden {
  display: none;
}
</style>

