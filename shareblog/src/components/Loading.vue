<template>
  <div :class="{loading:true, loadingHide:hide}">
    <div class="loadCircle1"></div>
    <div class="loadCircle2"></div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  props: {
    hide: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
  .loading{
    width: 100vw;
    height: 100vh;
    background-color: #f5f6fa;
    opacity: 0.8;
    position: absolute;
    display: flex;
    top: 0px;
    left: 0px;
    justify-content: center;
    align-items: center;
  }
  .loadCircle1, .loadCircle2{
    width: 60px;
    height: 60px;
    position: absolute;
    border-radius: 50%;
    background-color: #487eb0;
    opacity: 0.7;
    animation: bounce 2.0s infinite ease-in-out;
  }
  .loadingHide{
    display: none;
  }
  .loadCircle2{
    animation-delay: -1.0s;
  }
  @keyframes bounce {
    0%, 100% {
      transform: scale(0.0);
    } 50% {
      transform: scale(1.0);
    }
  }
</style>