<template>
  <div class="event">
    <div class="banner">
      <div class="content">
        <span>{{banner.enText1}}</span>
        <span>{{banner.enText2}}</span>
        <span>{{banner.chText}}</span>
      </div>
      <img :src="banner.src">
      <mouse/>
    </div>
    <div class="event-list" v-for="item in event" :key="item.enText1">
      <div class="event-content">
        <span>{{item.enText1}}</span>
        <span>{{item.enText2}}</span>
        <span>{{item.chText}}</span>
        <span>{{item.chText2}}</span>
      </div>
      <img :src="item.src">
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
        require('@/assets/images/event/pic_spww_csbd_yuanshengtai@2x.png'),
        require('@/assets/images/event/pic_spww_csbd_tiyanyuan@2x.png'),
        require('@/assets/images/event/pic_spww_csbd_shouyi@2x.png'),
        require('@/assets/images/event/pic_spww_csbd_chuancheng@2x.png')
      ],
      banner: {
        enText1: 'original',
        enText2: 'tea garden',
        chText: '原生态茶园',
        chText2: '',
        src: require('@/assets/images/event/pic_spww_csbd_yuanshengtai@2x.png')
      },
      event: [
        {
          enText1: 'our tea culture',
          enText2: 'experience garden',
          chText: '我的茶文化体验园',
          chText2: '',
          src: require('@/assets/images/event/pic_spww_csbd_tiyanyuan@2x.png')
        }, {
          enText1: 'craftsmanship',
          enText2: 'spirit',
          chText: '技艺传承',
          chText2: '守艺，以造嘉质',
          src: require('@/assets/images/event/pic_spww_csbd_shouyi@2x.png')
        }, {
          enText1: 'tea culture',
          enText2: '',
          chText: '代代传承',
          chText2: '传袭，自有担当',
          src: require('@/assets/images/event/pic_spww_csbd_chuancheng@2x.png')
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
.event {
  // margin-top: 150px;
  padding-bottom: px2Rem(38);
  position: absolute;
  width: 100%;
  left: 0;
  background-color: #fff;
  will-change: transform;
  z-index: 2;
  .banner {
    position: relative;
    padding-bottom: px2Rem(92);
    .content {
      position: relative;
      z-index: 1;
      border: 1px solid transparent;
      color: #fff;
      text-align: center;
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
  .event-list {
    position: relative;
    margin-top: px2Rem(38);
    height: px2Rem(950);
    .event-content {
      position: relative;
      z-index: 1;
      border: 1px solid transparent;
      color: #fff;
      text-align: center;
      span {
        display: block;
        &:first-child {
          margin-top: px2Rem(120);
          text-transform: uppercase;
          font: bold px2Rem(100) / 1.5 TrajanPro-Regular;
        }
        &:nth-child(2) {
          text-transform: uppercase;
          font: bold px2Rem(100) / 1.5 TrajanPro-Regular;
        }
        &:nth-child(3) {
          margin-top: px2Rem(40);
          font: px2Rem(25) / 1.5 STZhongsong;
        }
        &:nth-child(4) {
          font: px2Rem(25) / 1.5 STZhongsong;
        }
      }
    }
    img {
      @include imgfit;
    }
    .mouse {
      position: static;
      margin: px2Rem(420) auto 0;
    }
  }
}
</style>
