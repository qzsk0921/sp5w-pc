<template>
  <div class="product">
    <div class="banner">
      <div class="content">
        <span>{{banner.enText1}}</span>
        <span>{{banner.enText2}}</span>
        <span>{{banner.chText}}</span>
      </div>
      <img :src="banner.src">
      <mouse/>
    </div>
    <div class="pro-bags-container">
      <div class="bags">
        <div class="content">
          <span>{{bags.chText}}</span>
          <span>{{bags.enText}}</span>
          <span>{{bags.des}}</span>
        </div>
        <img :src="bags.src">
      </div>
      <p class="bags-advantage">{{bags.p1}}</p>
      <p class="bags-advantage">{{bags.p2}}</p>
      <router-link
        v-for="item in bags.children"
        :key="item.chText1"
        :to="{path: item.link}"
        class="bags-list"
      >
        <div class="content">
          <span>{{item.chText1}}</span>
          <span>{{item.tip}}</span>
        </div>
        <img :src="item.src">
      </router-link>
      <div class="bags-category-box">
        <h3 class="bags-category-title">{{bags.category.title}}</h3>
        <p class="bags-category">
          <strong>{{bags.category.category1.tit}}</strong>
          <span>{{bags.category.category1.p}}</span>
        </p>
        <p class="bags-category">
          <strong>{{bags.category.category2.tit}}</strong>
          <span>{{bags.category.category2.p}}</span>
        </p>
        <p class="bags-category">
          <strong>{{bags.category.category3.tit}}</strong>
          <span>{{bags.category.category3.p}}</span>
        </p>
        <p class="bags-category">
          <strong>{{bags.category.category4.tit}}</strong>
          <span>{{bags.category.category4.p}}</span>
        </p>
        <p class="bags-category">
          <strong>{{bags.category.category5.tit}}</strong>
          <span>{{bags.category.category5.p}}</span>
        </p>
      </div>
    </div>
    <div class="pro-gift-container">
      <div class="gift">
        <div class="content">
          <span>{{gift.chText}}</span>
          <span>{{gift.enText}}</span>
          <span>{{gift.des}}</span>
        </div>
        <img :src="gift.src">
      </div>
      <router-link
        class="gift-list"
        v-for="item in gift.children"
        :key="item.chText1"
        :to="{path: item.link}"
      >
        <div class="content">
          <span>{{item.chText1}}</span>
          <span>{{item.chText2}}</span>
          <span>{{item.tip}}</span>
        </div>
        <img :src="item.src">
      </router-link>
    </div>
    <div class="pro-dynasty-container">
      <div class="dynasty">
        <div class="content">
          <span>{{dynasty.chText}}</span>
          <span>{{dynasty.enText1}}</span>
          <span>{{dynasty.enText2}}</span>
          <span>{{dynasty.des}}</span>
        </div>
        <img :src="dynasty.src">
      </div>
      <router-link
        class="dynasty-list"
        v-for="item in dynasty.children"
        :key="item.key"
        :to="{path: item.link}"
        ref="dynastyList"
      >
        <div class="content">
          <span v-if="item.chText1">{{item.chText1}}</span>
          <span v-if="item.chText2">{{item.chText2}}</span>
          <span>{{item.tip}}</span>
        </div>
        <img :src="item.src">
      </router-link>
    </div>
    <div class="baike">
      <div class="content" v-for="item in baike" :key="item.key">
        <div class="row" v-for="it in item.content" :key="it.key">
          <span :class="{'hide': it.extra==1}">{{it.tit}}</span>
          <span>{{it.cnt}}</span>
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
        require("@/assets/images/product/pic_spww_gw_chanpin_tansuo@2x.png"),
        require("@/assets/images/product/pic_spww_gw_chanpin_dpcxl@2x.png"),
        require("@/assets/images/product/pic_spww_gw_chanpin_lihe@2x.png"),
        require("@/assets/images/product/pic_spww_gw_chanpin_zuhe@2x.png"),
        require("@/assets/images/product/pic_spww_gw_chanpin_jianzhuang@2x.png"),
        require("@/assets/images/product/pic_spww_gw_chanpin_tiyan@2x.png"),
        require("@/assets/images/product/pic_spww_gw_chanpin_lhxl@2x.png"),
        require("@/assets/images/product/pic_spww_gw_chanpin_kengjiancha@2x.png"),
        require("@/assets/images/product/pic_spww_gw_chanpin_zhengyancha@2x.png"),
        require("@/assets/images/product/pic_spww_gw_chanpin_ruyunxl@2x.png"),
        require("@/assets/images/product/pic_spww_gw_chanpin_yanguan@2x.png"),
        require("@/assets/images/product/pic_spww_gw_chanpin_ruyun@2x.png"),
        require("@/assets/images/product/pic_spww_gw_chanpin_laocong@2x.png")
      ],
      banner: {
        enText1: "explore",
        enText2: "the product",
        chText: "探索产品",
        src: require("@/assets/images/product/pic_spww_gw_chanpin_tansuo@2x.png")
      },
      bags: {
        chText: "袋泡茶系列",
        enText: "tea bags",
        des: "闲时泡茶 忙时袋泡茶",
        src: require("@/assets/images/product/pic_spww_gw_chanpin_dpcxl@2x.png"),
        p1:
          "精选有机茶叶，通过专业茶师科学配比，味道清香，纯茶无添加、更放心，",
        p2:
          "采用日本食品级玉米纤维三角包装。更加环保健康，使得茶叶充分舒展，一泡一袋、密封袋装、携带方便",
        category: {
          title: "袋泡茶种类",
          category1: {
            tit: "大红袍：",
            p:
              "严选武夷山生态管茶园所产大红袍，外形匀整洁净，香气馥郁似花香，茶汤醇厚不苦涩"
          },
          category2: {
            tit: "正山小种：",
            p:
              "选用“世界第一款红茶”正山小种，香气甜醇带蜜香，茶汤醇和爽口，内质丰富耐冲泡"
          },
          category3: {
            tit: "清香铁观音：",
            p:
              "选用福建安溪所产清香型秋茶铁观音，干茶颗粒匀整洁净，茶香清新高扬似兰花，入口清爽甘甜"
          },
          category4: {
            tit: "白茶：",
            p:
              "严选3年自然散陈老白茶，微带青草香气，茶汤醇和甘甜，饮后回甘生津不绝"
          },
          category5: {
            tit: "绿茶毛峰：",
            p:
              "选用有机茶园所产毛峰绿茶，茶香清新悦人，茶汤甘甜鲜爽，饮后唇齿留香"
          }
        },
        children: [
          {
            chText1: "礼盒装",
            chText2: "",
            tip: "一盒20泡",
            src: require("@/assets/images/product/pic_spww_gw_chanpin_lihe@2x.png"),
            link: "/product/bags-gift"
          },
          {
            chText1: "组合装",
            chText2: "",
            tip: "一份100泡/五种口味",
            src: require("@/assets/images/product/pic_spww_gw_chanpin_zuhe@2x.png"),
            link: "/product/bags-group"
          },
          {
            chText1: "大份简装",
            chText2: "",
            tip: "一盒50泡",
            src: require("@/assets/images/product/pic_spww_gw_chanpin_jianzhuang@2x.png"),
            link: "/product/bags-max"
          },
          {
            chText1: "体验装",
            chText2: "",
            tip: "一盒10泡",
            src: require("@/assets/images/product/pic_spww_gw_chanpin_tiyan@2x.png"),
            link: "/product/bags-taste"
          }
        ]
      },
      gift: {
        chText: "礼盒系列",
        enText: "gift items",
        des: "让喝茶成为一种生活方式",
        src: require("@/assets/images/product/pic_spww_gw_chanpin_lhxl@2x.png"),
        children: [
          {
            chText1: "高档伴手礼",
            chText2: "武夷岩茶坑涧茶",
            tip: "一盒12罐",
            src: require("@/assets/images/product/pic_spww_gw_chanpin_kengjiancha@2x.png"),
            link: "/product/gift-souvenir"
          },
          {
            chText1: "轻奢礼盒装",
            chText2: "武夷岩茶正岩茶",
            tip: "一盒6罐",
            src: require("@/assets/images/product/pic_spww_gw_chanpin_zhengyancha@2x.png"),
            link: "/product/gift-light"
          }
        ]
      },
      dynasty: {
        chText: "宋风·儒韵",
        enText1: "culture of",
        enText2: "the song dynasty",
        des: "顶级岩茶|大师建盏",
        src: require("@/assets/images/product/pic_spww_gw_chanpin_ruyunxl@2x.png"),
        children: [
          {
            chText1: "",
            chText2: "",
            src: require("@/assets/images/product/pic_spww_gw_chanpin_yanguan@2x.png"),
            link: ""
          },
          {
            chText1: "宋风·儒韵",
            chText2: "顶级岩茶|大师建盏",
            src: require("@/assets/images/product/pic_spww_gw_chanpin_ruyun@2x.png"),
            link: "/product/style-top"
          },
          {
            chText1: "古井百年老枞",
            chText2: "顶级岩茶|大师建盏",
            src: require("@/assets/images/product/pic_spww_gw_chanpin_laocong@2x.png"),
            link: "/product/style-year"
          }
        ]
      },
      baike: [
        { 
          key: "left",
          content: [
            { "tit": "中文名称：", "cnt": "三品五味", "key": "1"},
            { "tit": "主要原料：", "cnt": "有机茶叶", "key": "2"},
            { "tit": "储存方法：", "cnt": "密封避光、防异味", "key": "3"},
            { "tit": "是否含有防腐剂：", "cnt": "否", "key": "4"},
            { "tit": "是否含有香精：", "cnt": "否", "key": "5"}
          ]
        }, {
          key: "right",
          content: [
            { "tit": "所属产业 ", "cnt": "高端消费品（食品/饮料/烟酒/日化）", "key": "1"},
            { "tit": "成立时间 ", "cnt": "2018年", "key": "2"},
            { "tit": "主要产品 ", "cnt": "纯茶袋泡茶：尝鲜装、礼盒装、超值装", "key": "3"},
            { "tit": "&nbps;", "cnt": "武夷岩茶：口粮茶、简单伴手礼、高档伴手礼", "extra": 1, "key": "4"},
            { "tit": "&nbps;", "cnt": "国礼级品鉴茶：岩冠系列等", "extra": 1, "key": "5" }
          ]
        }
      ]
    };
  },
  mounted() {
    this.$refs.dynastyList[0].$el.style.cursor = "default"
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

.product {
  // margin-top: 150px;
  position: absolute;
  width: 100%;
  left: 0;
  background-color: #fff;
  will-change: transform;
  z-index: 2;
  .banner {
    position: relative;
    padding-bottom: px2Rem(64);
    .content {
      position: relative;
      border: 1px solid transparent;
      color: #fff;
      text-align: center;
      z-index: 1;
      span {
        display: block;
        &:first-child {
          margin-top: px2Rem(120);
        }
        &:not(:last-child) {
          text-transform: uppercase;
          font: bold px2Rem(100) / 1.5 TrajanPro-Regular;
        }
        &:last-child {
          margin-top: px2Rem(38);
          font: px2Rem(25) / 1 STZhongsong;
        }
      }
    }
    img {
      @include imgfit;
    }
    .mouse {
      position: static;
      margin: px2Rem(410) auto px2Rem(64);
    }
  }
  .pro-bags-container {
    .bags {
      height: px2Rem(900);
      position: relative;
      z-index: 1;
      // border: 1px solid transparent;
      overflow: hidden;
      .content {
        position: relative;
        z-index: 1;
        margin-top: px2Rem(348);
        span {
          display: block;
          margin-left: px2Rem(462);
          &:first-child {
            font: bold px2Rem(50) / 1 STZhongsong;
            color: #000;
          }
          &:nth-child(2) {
            margin-top: px2Rem(20);
            font: bold px2Rem(48) / 1 TrajanPro-Regular;
            color: #000;
            text-transform: uppercase;
          }
          &:nth-child(3) {
            margin-top: px2Rem(86);
            font: px2Rem(25) / 1 STSong;
            color: #494848;
          }
        }
      }
      img {
        @include imgfit;
      }
    }
    .bags-advantage {
      font: px2Rem(22) / 1 NSimSun;
      color: #808080;
      text-align: center;
      &:nth-child(2) {
        margin-top: px2Rem(84);
      }
      &:nth-child(3) {
        margin-top: px2Rem(40);
      }
    }
    .bags-list {
      display: block;
      margin-top: px2Rem(100);
      position: relative;
      border: 1px solid transparent;
      width: px2Rem(1136);
      height: px2Rem(644);
      margin: auto;
      cursor: pointer;
      .content {
        position: relative;
        z-index: 1;
        margin-top: px2Rem(512);
        span {
          padding-right: px2Rem(88);
          text-align: right;
          display: block;
          &:first-child {
            font: px2Rem(50) / 1 STZhongsong;
            color: #000;
          }
          &:nth-child(2) {
            margin-top: px2Rem(14);
            font: px2Rem(25) / 1 STZhongsong;
            color: #494848;
          }
        }
      }
      &:nth-of-type(1) {
        margin-top: px2Rem(56);
      }
      &:nth-of-type(2) {
        margin-top: px2Rem(34);
      }
      &:nth-of-type(3) {
        margin-top: px2Rem(34);
        .content {
          margin-top: px2Rem(402);
        }
      }
      &:nth-of-type(4) {
        margin-top: px2Rem(34);
      }
      img {
        @include imgfit;
      }
    }
    .bags-category-box {
      margin: px2Rem(50) 0 px2Rem(160);
      text-align: center;
      .bags-category-title {
        font: bold px2Rem(25) / 1 NSimSun;
        color: #2e2e2e;
      }
      .bags-category {
        &:nth-child(2) {
          margin-top: px2Rem(50);
        }
        strong {
          font: px2Rem(18) / 1 NSimSun;
          color: #808080;  
          font-weight: 700;        
        }
        span {
          font: px2Rem(18) / 1 NSimSun;
          color: #808080;
        }
        &:nth-of-type(n + 2) {
          margin-top: px2Rem(25);
        }
      }
    }
  }
  .pro-gift-container {
    margin-top: px2Rem(70);
    .gift {
      height: px2Rem(900);
      position: relative;
      // border: 1px solid transparent;
      overflow: hidden;
      .content {
        position: relative;
        z-index: 1;
        margin-top: px2Rem(348);
        span {
          display: block;
          margin-left: px2Rem(392);
          &:first-child {
            font: bold px2Rem(50) / 1 STZhongsong;
            color: #fff;
          }
          &:nth-child(2) {
            margin-top: px2Rem(20);
            font: bold px2Rem(48) / 1 TrajanPro-Regular;
            color: #fff;
            text-transform: uppercase;
          }
          &:nth-child(3) {
            margin-top: px2Rem(86);
            font: px2Rem(25) / 1 STSong;
            color: #b3b3b3;
          }
        }
      }
      img {
        @include imgfit;
      }
    }
    .gift-list {
      display: block;
      margin-top: px2Rem(56);
      position: relative;
      border: 1px solid transparent;
      width: px2Rem(1136);
      height: px2Rem(644);
      margin: auto;
      cursor: pointer;
      &:nth-child(2) {
        margin-top: px2Rem(56);
      }
      &:nth-child(3) {
        margin-top: px2Rem(34);
      }
      .content {
        position: relative;
        z-index: 1;
        margin-top: px2Rem(412);
        span {
          padding-right: px2Rem(88);
          text-align: right;
          display: block;
          &:first-child {
            font: px2Rem(50) / 1 STZhongsong;
          }
          &:nth-child(2) {
            margin-top: px2Rem(16);
            font: px2Rem(50) / 1 STZhongsong;
          }
          &:nth-child(3) {
            margin: px2Rem(34) 0 px2Rem(46);
            font: px2Rem(25) / 1 STZhongsong;
            color: #b3b3b3;
          }
        }
      }
      img {
        @include imgfit;
      }
    }
  }
  .pro-dynasty-container {
    margin-top: px2Rem(70);
    padding-bottom: px2Rem(34);
    .dynasty {
      height: px2Rem(900);
      position: relative;
      // border: 1px solid transparent;
      overflow: hidden;
      .content {
        position: relative;
        z-index: 1;
        span {
          display: block;
          margin-left: px2Rem(454);
          &:first-child {
            margin-top: px2Rem(348);
            font: bold px2Rem(50) / 1 STZhongsong;
            color: #fff;
          }
          &:nth-child(2) {
            margin-top: px2Rem(18);
            font: bold px2Rem(48) / 1.5 TrajanPro-Regular;
            color: #fff;
            text-transform: uppercase;
          }
          &:nth-child(3) {
            font: bold px2Rem(48) / 1.5 TrajanPro-Regular;
            color: #fff;
            text-transform: uppercase;
          }
          &:nth-child(4) {
            margin-top: px2Rem(74);
            font: px2Rem(25) / 1 STSong;
            color: #b3b3b3;
          }
        }
      }
      img {
        @include imgfit;
      }
    }
    .dynasty-list {
      display: block;
      margin-top: px2Rem(56);
      position: relative;
      border: 1px solid transparent;
      width: px2Rem(1136);
      height: px2Rem(644);
      margin: auto;
      cursor: pointer;
      &:nth-child(2) {
        margin-top: px2Rem(56);
      }
      &:nth-child(3) {
        margin-top: px2Rem(34);
        .content {
          position: relative;
          z-index: 1;
          span {
            padding-right: px2Rem(88);
            text-align: right;
            display: block;
            &:first-child {
              margin-top: px2Rem(347);
              font: bold px2Rem(50) / 1 STZhongsong;
              color: #000;
            }
            &:nth-child(2) {
              margin-top: px2Rem(20);
              font: px2Rem(25) / 1 STZhongsong;
              color: #444;
            }
          }
        }
      }
      &:nth-child(4) {
        margin-top: px2Rem(34);
        .content {
          position: relative;
          z-index: 1;
          span {
            padding-right: px2Rem(88);
            text-align: right;
            display: block;
            &:first-child {
              margin-top: px2Rem(347);
              font: bold px2Rem(50) / 1 STZhongsong;
            }
            &:nth-child(2) {
              margin-top: px2Rem(20);
              font: px2Rem(25) / 1 STZhongsong;
              color: #b3b3b3;
            }
          }
        }
      }
      img {
        @include imgfit;
      }
    }
  }
  .baike {
    padding-bottom: px2Rem(48);
    display: flex;
    justify-content: space-between;
    .content {
      .row {
        color: #808080;
        font: px2Rem(14) / 2 NSimSun;
      }
      &:first-child {
        margin-left: px2Rem(470);
      }
      &:last-child {
        margin-right: px2Rem(612);
        .hide {
          color: transparent;
        }
        .row {
          &:nth-child(4), &:nth-child(5) {
            span {
              &:first-child {
                margin-left: 1em;
              }
            }
          }
        }
      }
    }
  }
}
</style>
