<template>
    <div class="mouse"></div>
</template>

<style rel="stylesheet/scss" lang="scss" scoped>
.mouse {
    position: absolute;
    z-index: 2;
    left: 50%;
    bottom: 8em;
    width: 1.7em;
    height: 2.8em;
    margin-left: -0.8125em;
    border-radius: 6.25em;
    animation: nudgeMouse 5s ease-out infinite;
    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
    }
    &:before {
      width: 1.5em;
      height: 2.6em;
      border: 1px solid rgba(215, 215, 215, 0.7);
      border-radius: 6.25em;
    }
    &:after {
      background-color: #ffffff;
      width: 0.3125em;
      height: 0.3125em;
      border-radius: 100%;
      animation: trackBallSlide 5s linear infinite;
    }
  }
  @keyframes nudgeMouse {
  0% {
    transform: translateY(0);
  }
  20% {
    transform: translateY(0.5em);
  }
  30% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(0.5em);
  }
  60% {
    transform: translateY(0);
  }
  80% {
    transform: translateY(0.5em);
  }
  90% {
    transform: translateY(0);
  }
}
@keyframes trackBallSlide {
  0% {
    opacity: 1;
    transform: scale(1) translateY(-0.625em);
  }
  6% {
    opacity: 1;
    transform: scale(0.9) translateY(0.3125em);
  }
  14% {
    opacity: 0;
    transform: scale(0.4) translateY(1.25em);
  }
  15%,
  19% {
    opacity: 0;
    transform: scale(0.4) translateY(-0.625em);
  }

  28%,
  29.99% {
    opacity: 1;
    transform: scale(1) translateY(-0.625em);
  }
  30% {
    opacity: 1;
    transform: scale(1) translateY(-10px);
  }
  36% {
    opacity: 1;
    transform: scale(0.9) translateY(0.3125em);
  }
  44% {
    opacity: 0;
    transform: scale(0.4) translateY(1.25em);
  }
  45%,
  49% {
    opacity: 0;
    transform: scale(0.4) translateY(-0.625em);
  }
  58%,
  59.99% {
    opacity: 1;
    transform: scale(1) translateY(-0.625em);
  }
  60% {
    opacity: 1;
    transform: scale(1) translateY(-0.625em);
  }
  66% {
    opacity: 1;
    transform: scale(0.9) translateY(0.3125em);
  }
  74% {
    opacity: 0;
    transform: scale(0.4) translateY(1.25em);
  }
  75%,
  79% {
    opacity: 0;
    transform: scale(0.4) translateY(-0.625em);
  }
  88%,
  100% {
    opacity: 1;
    transform: scale(1) translateY(-0.625em);
  }
}
</style>

