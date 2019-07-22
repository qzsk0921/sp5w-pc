<template>
  <div id="app">
    <loading v-show="isLoading"></loading>
    <transition name="fade">
      <router-view v-show="!isLoading"/>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Loading from "./components/loading";
import Bus from '@/utils/bus.js';

export default {
  name: "app",
  components: {
    Loading
  },
  data() {
    return {
      clientWidth: document.documentElement.clientWidth
    };
  },
  computed: {
    ...mapGetters(["isLoading"])
  },
  mounted() {
    this.init();
  },
  watch: {
    clientWidth(nv) {
      document.documentElement.style.fontSize = nv / 10 + "px";
    }
  },
  methods: {
    init() {
      //   let resizeEvt =
      //     'orientationchange' in window ? 'orientationchange' : 'resize';
      //   document.addEventListener("DOMContentLoaded", this.recalc());
      //   window.addEventListener(resizeEvt, this.recalc());

      document.documentElement.style.fontSize = this.clientWidth / 10 + "px";
      window.onresize = this.recalc;
    },
    recalc() {
      // to layout,proLayout
      Bus.$emit('sizeChange', true)
      let documentElement = document.documentElement,
          clientWidth = documentElement.clientWidth
          clientWidth = clientWidth > 768 ? clientWidth : 768
      this.clientWidth = clientWidth
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>
