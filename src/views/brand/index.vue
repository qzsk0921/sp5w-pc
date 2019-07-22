<template>
  <div class="brand">
    <div class="banner">
      <div class="content">
        <span>{{banner.enText1}}</span>
        <span>{{banner.enText2}}</span>
        <span>{{banner.chText}}</span>
      </div>
      <img :src="banner.src">
      <mouse/>
    </div>
    <div :class="['brand-list', 'brand-list'+item.ind]" v-for="item in brand" :key="item.keyword">
      <div class="img-box">
        <div class="content">
          <p>{{item.enText}}</p>
          <p>{{item.chText}}</p>
        </div>
        <img :src="item.src">
      </div>
      <div class="text-box">
        <span class="keyword">{{item.keyword}}</span>
        <p>{{item.des1}}</p>
        <p>{{item.des2}}</p>
        <div class="baike" v-if="item.baike">
          <p v-for="it in item.baike" :key="it.cnt">{{it.cnt}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import imageLoad from "@/utils/imageLoad";
import Mouse from "@/components/mouse";
export default {
  components: {
    Mouse
  },
  created() {
    imageLoad(this.imgSrc);
  },
  data() {
    return {
      imgSrc: [
        require("@/assets/images/brand/pic_spww_ppjs_guanyu@2x.png"),
        require("@/assets/images/brand/pic_spww_ppjs_pinpai@2x.png"),
        require("@/assets/images/brand/pic_spww_ppjs_yuanjing@2x.png"),
        require("@/assets/images/brand/pic_spww_ppjs_shiming@2x.png")
      ],
      banner: {
        enText1: "about",
        enText2: "san pin wu wei",
        chText: "匠心，让茶叶更有温度",
        src: require("@/assets/images/brand/pic_spww_ppjs_guanyu@2x.png")
      },
      brand: [
        {
          ind: 1,
          enText: "explore the brand",
          chText: "探索品牌",
          src: require("@/assets/images/brand/pic_spww_ppjs_pinpai@2x.png"),
          keyword: "关于三品五味",
          des1: "三品五味定位为中国茶的年轻派的同时坚持中华文化中的工匠精神，",
          des2: "是一个提倡年轻化、时尚化与弘扬“匠心”精神的茶文化品牌。",
          baike: [
            { cnt: "三品五味有限公司创立于2018年，" },
            { cnt: "是一家以互联网思维为导向、专注于茶叶品质严选的现代茶商。" },
            { cnt: "打破茶行业沉闷的传统的经营模式，" },
            { cnt: "将健康、环保、时尚、年轻等元素注入到茶行业之中。" },
            {
              cnt:
                "通过茶叶严选的坚持、科学的分量配比、时尚的包装设计、有机茶的原料来源，"
            },
            { cnt: "打造属于年轻人自己的茶叶品牌。" },
            { cnt: "也希望通过这样的方式，让喝茶成为一种生活方式。" }
          ]
        },
        {
          ind: 2,
          enText: "",
          chText: "",
          src: require("@/assets/images/brand/pic_spww_ppjs_yuanjing@2x.png"),
          keyword: "品牌愿景",
          des1: "怀匠心 践匠行 做匠茶",
          des2: "",
          baike: ""
        },
        {
          ind: 3,
          enText: "",
          chText: "",
          src: require("@/assets/images/brand/pic_spww_ppjs_shiming@2x.png"),
          keyword: "使命",
          des1: "让喝茶成为一种生活方式",
          des2: "",
          baike: ""
        }
      ]
    };
  },
  mounted() {
    // imageLoad(this.imgSrc);
  },
  methods: {
    // imgSrc2store() {
    //   this.$store.commit("UPDATE_IMG_SRC", this.imgSrc);
    // }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~@/styles/common";
@import "~@/styles/mixin";
.brand {
  // margin-top: 150px;
  position: absolute;
  width: 100%;
  left: 0;
  z-index: 2;
  background-color: #fff;
  will-change: transform;
  .banner {
    position: relative;
    padding-bottom: px2Rem(64);
    // border: 1px solid transparent;
    overflow: hidden; //外边距塌陷 触发BFC
    .content {
      position: relative;
      z-index: 1;
      color: #fff;
      text-align: center;
      margin-top: px2Rem(324);
      span {
        display: block;
        &:not(:last-child) {
          text-transform: uppercase;
          font: bold px2Rem(100) / 1.5 TrajanPro-Regular;
        }
        &:last-child {
          margin-top: px2Rem(100);
          font: px2Rem(25) / 1 STZhongsong;
        }
      }
    }
    img {
      @include imgfit;
    }
    .mouse {
      position: static;
      margin: px2Rem(140) auto px2Rem(64);
    }
  }
  .brand-list {
    width: px2Rem(1174);
    margin: auto;
    position: relative;
    .img-box {
      border: 1px solid transparent;
      position: relative;
      height: px2Rem(710);
      .content {
        position: relative;
        z-index: 1;
        p {
          display: block;
          text-align: center;
          &:first-child {
            margin-top: px2Rem(112);
            font: px2Rem(50) / 1 TrajanPro-Regular;
            text-transform: uppercase;
          }
          &:nth-child(2) {
            margin-top: px2Rem(40);
            font: px2Rem(35) / 1 STSong;
          }
        }
      }
      img {
        @include imgfit;
      }
    }
    .text-box {
      margin-top: px2Rem(62);
      color: #000;
      text-align: center;
      .keyword {
        display: block;
        font: bold px2Rem(35) / 1 NSimSun;
      }
      p {
        font: px2Rem(22) / 1 NSimSun;
        line-height: 2;
        &:nth-child(2) {
          margin-top: px2Rem(30);
        }
        &:last-child {
          margin-bottom: px2Rem(66);
        }
      }
    }
  }
  .brand-list1 {
    margin-top: px2Rem(138);
    .text-box {
      .baike {
        margin: px2Rem(66) 0;
        p {
          margin: 0!important;
        }
      }
    }
  }
  .brand-list2 {
    .text-box {
      margin-top: px2Rem(90);
      margin-bottom: px2Rem(84);
    }
    p {
      &:last-child {
        font-size: 0;
      }
    }
  }
  .brand-list3 {
    .text-box {
      margin-bottom: px2Rem(114);
    }
    p {
      &:last-child {
        font-size: 0;
      }
    }
  }
}
</style>


