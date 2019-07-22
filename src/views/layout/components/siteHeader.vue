<template>
  <header class="siteHeader">
    <div class="left">
      <h1 class="logo-tit">
        <router-link to="/">
          三品五味
          <img :src="logo" class="logo-img">
        </router-link>
      </h1>
    </div>
    <div class="right">
      <nav class="nav">
        <router-link v-for="item in list" :key="item.text" :to="item.link" class="link">
          <span :class="{'active': current===item.name}">{{item.text}}</span>
        </router-link>
      </nav>
      <div class="hamburger-box">
        <!-- <hamburger/> -->
      </div>
    </div>
  </header>
</template>

<script>
// import Hamburger from "@/components/hamburger";

export default {
  components: {
    // Hamburger
  },
  created() {
    this.current = this.$route.name;
  },
  data() {
    return {
      logo: require("@/assets/images/pic_spww_gw_logo@2x.png"),
      current: "",
      list: [
        {
          name: "home",
          text: "首 页",
          link: "/"
        },
        {
          name: "brand",
          text: "品 牌 介 绍",
          link: "/index/brand"
        },
        {
          name: "product",
          text: "产 品 介 绍",
          link: "/index/product"
        },
        {
          name: "event",
          text: "茶 事 报 道",
          link: "/index/event"
        }
      ]
    };
  },
  watch: {
    $route(route) {
      this.current = route.name;
    }
  },
  methods: {}
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~@/styles/common";
.siteHeader {
  display: flex;
  justify-content: space-between;
  background-color: #000;
  // height: 150px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  .left {
    margin-left: px2Rem(352);
    .logo-tit {
      font-size: 0;
      position: relative;
      a {
        margin: px2Rem(50) 0;
        display: flex;
        align-items: center;
        width: px2Rem(126);
        height: px2Rem(50);
        .logo-img {
          width: px2Rem(126);
        }
      }
    }
  }
  .right {
    margin-right: px2Rem(378);
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .nav {
      display: flex;
      .link {
        padding: 0 px2Rem(30);
        font: px2Rem(18) / 1 NSimSun;
        color: #808080;
        &:hover {
          color: #fff;
        }
      }
    }
    .hamburger-box {
      .hamburger {
        position: relative;
      }
    }
  }
}
.active {
  color: #fff;
}
</style>


