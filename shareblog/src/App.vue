<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="refresh"/>
    </keep-alive>
    <div :class="{'back-to-top':true, 'show':(isShow && this.$store.state.upToTop) }" @click="scollToTop">
      <i id="up" class="fa fa-angle-double-up" aria-hidden="true"></i>
    </div>
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
    outerScroll (event) {
      const delta = event.target.scrollTop - this.top
      this.top = event.target.scrollTop
      this.eventTarget = event.target
      const scrollData = {
        delta: delta,
        top: this.top
      }
      this.$store.commit('changeScrollTop', scrollData)
      if (this.top >= 600) {
        this.$store.commit('changeupToTop', true)
        if (this.$store.state.upToTop) {
          this.isShow = true
        }
      } else {
        this.isShow = false
      }
    },
    scollToTop () {
      const timer = setInterval(() => {
        const speed = Math.floor(-this.top / 5)
        this.top = this.top + speed
        if (this.top <= 0) {
          this.top = 0
          clearInterval(timer)
        }
        this.eventTarget.scrollTop = this.top
      }, 30)
    },
    // 页面刷新方法
    reload () {
      console.log('reload')
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
  },
  computed: {
    getUpToTop () {
      return this.$store.state.upToTop
    }
  },
  mounted () {
    window.addEventListener('scroll', this.outerScroll, true)
  },
  destroyed () {
    window.removeEventListener('scroll', this.outerScroll)
  },
  watch: {
    getUpToTop () {
      this.top = 0
      if (this.top >= 600) {
        this.isShow = true
      } else {
        this.isShow = false
      }
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
  height: 100%;
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
