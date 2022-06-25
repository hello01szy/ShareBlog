<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="refresh"/>
    </keep-alive>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isShow: false,
      top: 0,
      eventTarget: Object,
      refresh: true
    }
  },
  methods: {
    // 页面刷新方法
    reload () {
      this.refresh = false
      this.$nextTick(function () {
        this.refresh = true
      })
    }
  },
  provide () {
    return {
      reload: this.reload
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  position: relative;
}
#up{
  font-size: 2em;
  transition: all 0.2s linear;
}
#up:hover{
  color:royalblue
}
.back-to-top{
  width: 40px;
  height: 40px;
  position: absolute;
  bottom: 5%;
  right: 5%;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s linear;
  pointer-events: none;
}
.show{
  opacity: 1;
  pointer-events: all;
}
</style>
