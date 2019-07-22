<template>
  <footer class="siteFooter" ref="siteFooter">
    <div class="content">
      <div class="row">
        <div class="company-info">
          <div class="des">
            <p>{{des1}}</p>
            <p>{{des2}}</p>
            <p>{{des3}}</p>
          </div>
          <div class="tel">
            <span>联系我们</span>
            <span>{{tel}}</span>
          </div>
        </div>
        <div class="ewm-box">
          <div class="item" v-for="item in ewm" :key="item.text">
            <img :src="item.src">
            <span>{{item.text}}</span>
          </div>
        </div>
      </div>
      <div class="row">
        <router-link
          class="about"
          v-for="item in about"
          :key="item.text"
          :to="item.link"
        >{{item.text}}</router-link>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      height: null,
      des1: "厦门三品五味茶业有限公司",
      des2: "运营中心| 厦门市思明区 软件园二期 观日路42号",
      des3: "福建武夷山下梅历史文化名村|武夷山市风景名胜区",
      tel: "1803 0204 747",
      ewm: [
        {
          src: require("@/assets/images/pic_spww_wx_ewm@2x.png"),
          text: "微信小程序"
        },
        {
          src: require("@/assets/images/pic_spww_tb_ewm@2x.png"),
          text: "淘宝企业店铺"
        }
      ],
      about: [
        {
          link: "#",
          text: "关于我们"
        },
        {
          link: "#",
          text: "加入我们"
        },
        {
          link: "#",
          text: "官方商铺"
        }
      ]
    };
  },
  mounted() {
    this.height = this.$refs.siteFooter.offsetHeight;
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~@/styles/common";
@import "~@/styles/mixin";

.siteFooter {
  color: #808080;
  width: 100%;
  position: relative;
  z-index: 1;
  .content {
    width: 100%;
    padding: px2Rem(127) 0 px2Rem(44);
    position: fixed;
    bottom: 0;
    background-color: #000;
    .row {
      &:first-child {
        display: flex;
        justify-content: space-between;
        margin: 0 px2Rem(464) 0 px2Rem(474);
        .company-info {
          .des {
            font: px2Rem(22) / 2 NSimSun;
          }
          .tel {
            margin-top: 50px;
            border-top: 1px solid #808080;
            border-bottom: 1px solid #808080;
            display: flex;
            span {
              &:first-child {
                margin: px2Rem(56) 0 px2Rem(28);
                font: px2Rem(23) / 1 NSimSun;
              }
              &:last-child {
                margin: px2Rem(34) 0 0 px2Rem(28);
                font: px2Rem(56) / 1 NSimSun;
                color: #cfa972;
              }
            }
          }
        }
        .ewm-box {
          margin-top: px2Rem(76);
          display: flex;
          justify-content: flex-end;
          .item {
            display: flex;
            flex-direction: column;
            align-items: center;
            img {
              width: px2Rem(128);
            }
            span {
              margin-top: px2Rem(28);
              font: px2Rem(25) / 1 NSimSun;
              letter-spacing: px2Rem(2);
            }
            &:last-child {
              margin-left: px2Rem(48);
            }
          }
        }
      }
      &:nth-child(2) {
        margin-top: px2Rem(126);
        margin-left: px2Rem(781);
        .about {
          font-size: px2Rem(20);
          &:not(:first-child) {
            margin-left: px2Rem(90);
          }
        }
      }
    }
  }
}
</style>
