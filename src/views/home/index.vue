<template>
  <div class="container">
    <left-nav :fatByVal="page" @childByVal="childByVal"/>
    <!-- <hamburger/> -->
    <div class="scene">
      <div class="scene-container">
        <!-- <transition-group name="list"> -->
        <div
          v-for="(item, index) in carouselObj"
          :class="['section'+(index+1), 'section', {'active': leavePage===index}]"
          :key="item.index"
          v-show="page===index"
        >
          <div class="content">
            <router-link :to="item.link" style="display:inline-block;">
              <p>{{item.enText1}}</p>
              <p>{{item.enText2}}</p>
              <p>{{item.chText}}</p>
            </router-link>
          </div>
          <img :src="item.src">
        </div>
        <!-- </transition-group> -->
      </div>
    </div>
    <mouse/>
  </div>
</template>

<script>
import LeftNav from "./components/leftNav";
// import Hamburger from "@/components/hamburger";
import Mouse from "@/components/mouse";
import imageLoad from "@/utils/imageLoad";
export default {
  name: "Home",
  components: {
    LeftNav,
    // Hamburger,
    Mouse
  },
  created() {
    imageLoad(this.imgSrc);
  },
  data() {
    return {
      imgSrc: [
        require("@/assets/images/pic_spww_sy_shouye@2x.png"),
        require("@/assets/images/pic_spww_sy_pinpai@2x.png"),
        require("@//assets/images/pic_spww_sy_chanpin@2x.png"),
        require("@//assets/images/pic_spww_sy_chashi@2x.png")
      ],
      carouselObj: [
        {
          index: 0,
          enText1: "",
          enText2: "",
          chText: "",
          src: require("@/assets/images/pic_spww_sy_shouye@2x.png"),
          link: "/"
        },
        {
          index: 1,
          enText1: "about",
          enText2: "san pin wu wei",
          chText: "关于三品五味",
          src: require("@/assets/images/pic_spww_sy_pinpai@2x.png"),
          link: "/index/brand"
        },
        {
          index: 2,
          enText1: "explore",
          enText2: "the product",
          chText: "探索产品",
          src: require("@//assets/images/pic_spww_sy_chanpin@2x.png"),
          link: "/index/product"
        },
        {
          index: 3,
          enText1: "tea report",
          enText2: "",
          chText: "茶事报道",
          src: require("@//assets/images/pic_spww_sy_chashi@2x.png"),
          link: "/index/event"
        }
      ],
      page: 0, //页
      lock: false, //锁
      leavePage: null, //即将消失页
      scroll_event: null
    };
  },
  mounted() {
    // if (window.addEventListener) {
    //   if (navigator.userAgent.indexOf("Firefox") != -1) {
    //     // firefox
    //     window.addEventListener("DOMMouseScroll", this.mousewheel, false);
    //   } else {
    //     // chrome and ie
    //     window.addEventListener("wheel", this.mousewheel, false);
    //   }
    //   return;
    // }
    // window.onwheel = document.onwheel = this.mousewheel;
    this.scroll_event = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
    if (document.addEventListener) {
      document.addEventListener(this.scroll_event, this.mousewheel)
      return
    }
    window.onwheel = document.onwheel = this.mousewheel;
  },
  beforeDestroy() {
    document.removeEventListener(this.scroll_event, this.mousewheel)
  },
  watch: {
    // page(nv, ov) {
      // console.log(ov)
      // this.leavePage = ov
    // }
  },
  methods: {
    mousewheel(e) {
      if (!this.lock) {
        this.lock = true;
        e = e || window.event;
        if (e.wheelDelta) {
          this.detect(0, e.wheelDelta);
        } else if (e.deltaY) {
          //firefox
          this.detect(1, e.deltaY);
        }
      }
    },
    detect(browser, val) {
      //0代表大部分，1代表火狐
      if (browser == 0) {
        if (val >= 3) {
          this.count(-1);
        } else if (val <= -3) {
          this.count(1);
        }
      } else if (browser == 1) {
        //firefox
        if (val <= -1) {
          this.count(-1);
        } else if (val >= 1) {
          this.count(1);
        }
      }
    },
    count(step) {
      this.leavePage = this.page;
      setTimeout(() => {
        if (this.page + step > 3) {
          this.page = 0;
        } else if (this.page + step < 0) {
          this.page = 3;
        } else {
          this.page += step;
        }
      }, 500);
      this.setTimeout(1500);
    },
    setTimeout(milliseconds) {
      setTimeout(() => {
        this.lock = false;
      }, milliseconds);
    },
    childByVal(page, leavePage) {
      this.leavePage = leavePage;
      setTimeout(() => {
        this.page = page;
      }, 500);
    }
    // imgSrc2store() {
    //   this.$store.commit('UPDATE_IMG_SRC', this.imgSrc)
    // }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~@//styles/common";
@import "~@/styles/mixin";
.container {
  height: 100%;
  position: relative;
  top: 0;
  .hamburger {
    position: absolute;
    left: px2Rem(114);
    bottom: px2Rem(120);
    z-index: 2;
  }
  .scene {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    .scene-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      .section {
        position: relative;
        height: 100%;
        .content {
          position: absolute;
          z-index: 2;
          width: 70%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          // margin-top: -140px;
          text-align: center;
          text-transform: uppercase;
          p {
            opacity: 0;
            &:not(:last-child) {
              font: bold px2Rem(120) / 1 "TrajanPro-Regular";
              animation: enTxtAnimate 1.1s 0.5s;
              animation-fill-mode: forwards;
            }
            &:last-child {
              margin-top: 100px;
              font-size: px2Rem(32);
              animation: chTxtAnimate 1.1s 0.5s;
              animation-fill-mode: forwards;
            }
          }
        }
        img {
          @include imgfit;
        }
      }
    }
  }
}
.active {
  animation: mytransition 0.5s cubic-bezier(0, 0, 0.25, 1);
}
@keyframes mytransition {
  0% {
    filter: blur(0px);
    box-shadow: 0 0 0 0 #000;
  }
  50% {
    filter: blur(15px);
    box-shadow: 0 0 30px 30px #000;
  }
  100% {
    filter: blur(30px);
    box-shadow: 0 0 60px 60px #000;
  }
}
@keyframes enTxtAnimate {
  0% {
    opacity: 0;
    margin-top: 20px;
  }
  100% {
    opacity: 1;
    margin-top: 0;
  }
}
@keyframes chTxtAnimate {
  0% {
    opacity: 0;
    margin-top: 20px;
  }
  100% {
    opacity: 1;
    margin-top: 100px;
  }
}
</style>