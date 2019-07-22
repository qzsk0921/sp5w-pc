<template>
  <div class="left-nav">
    <img :src="src">
    <nav class="nav">
      <router-link
        v-for="item in list"
        :key="item.text"
        :to="item.link"
        class="link"
        @mouseenter.native="mouseenterHandle(item.page)"
        ref="link"
      >
        <div class="text-box">
          <span>{{item.text}}</span>
          <div :class="['color', {'active': fatByVal===item.page}]"></div>
        </div>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    fatByVal: Number
  },
  data() {
    return {
      src: require("@/assets/images/pic_spww_logo@2x.png"),
      leavePage: null,
      current: this.fatByVal,
      lock: false,
      list: [
        {
          text: "首页",
          link: "/",
          page: 0
        },
        {
          text: "品牌介绍",
          link: "/index/brand",
          page: 1
        },
        {
          text: "产品介绍",
          link: "/index/product",
          page: 2
        },
        {
          text: "茶事报道",
          link: "/index/event",
          page: 3
        }
      ]
    };
  },
  methods: {
    mouseenterHandle(page) {
      if (page === this.current || page === this.fatByVal) return;
      if (!this.lock) {
        this.lock = true;
        this.leavePage = this.current;
        this.current = page;
        this.$emit("childByVal", page, this.leavePage);
        this.unlock(600);
      }
    },
    unlock(milliseconds) {
      setTimeout(() => {
        this.lock = false;
      }, milliseconds);
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~@/styles/common";
.left-nav {
  position: absolute;
  top: px2Rem(112);
  left: px2Rem(88);
  z-index: 3;
  img {
    width: px2Rem(119);
  }
  .nav {
    margin-top: px2Rem(100);
    margin-left: px2Rem(26);
    .link {
      // pointer-events: auto;
      display: block;
      .text-box {
        display: inline-block;
        span {
          font: px2Rem(17) / 2.5 STZhongsong;
        }
        .color {
          transition: all 0.2s;
          height: 1px;
        }
      }
      &:not(:first-child) {
        margin-top: px2Rem(34);
      }
    }
  }
}
.active {
  background-color: #fff;
}
</style>


