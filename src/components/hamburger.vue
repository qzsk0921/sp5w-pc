<template>
  <div class="hamburger" @click="openMenu">
    <span :class="{'hidden': isOpenMenu}"></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpenMenu: false
    };
  },
  methods: {
    openMenu() {
      this.isOpenMenu = !this.isOpenMenu;
    }
  }
};
</script>

<style rel="stylesheet" lang="scss" scoped>
.hamburger {
    height: 26px;
    width: 26px;
    transition: rotate .2s;
    cursor: pointer;
    span {
        width: 26px;
        height: 2px;
        display: block;
        position: absolute;
        left: 0;
        bottom: 12px;
        background-color: #fff;
        &:before, &:after {
            content: '';
            display: block;
            position: absolute;
            width: 26px;
            height: 2px;
            left: 0;
            background-color: #fff;
            transition: all .2s;
        }
        &:before {
            top: -7px;
        }
        &:after {
            top: 7px;
        }
    }
    .hidden {
        width: 0;
        &:before, &:after {
            top: 0;
        }
        &:before {
            transform:rotateZ(135deg);
        }
        &:after {
            transform:rotateZ(-135deg);
        }
    }
  }
</style>


