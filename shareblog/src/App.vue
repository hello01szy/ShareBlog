<template>
  <div id="app">
    <router-view/>
    <div :class="{'back-to-top':true, 'show':isShow }" @click="scollToTop">
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
        eventTarget: Object
      }
    },
    methods : {
      outerScroll (event) {
        this.top = event.target.scrollTop
        console.log(this.top)
        this.eventTarget = event.target
        if (this.top >= 600) {
          console.log(this.isShow)
          this.isShow = true
        } else {
          console.log(this.isShow)
          this.isShow = false
        }
      },
      scollToTop () {
        let timer = setInterval(() => {
          console.log(this.top)
          const speed = Math.floor(-this.top / 5)
          this.top = this.top + speed
          if (this.top <= 0) {
            this.top = 0
            console.log(this.top)
            clearInterval(timer)
          }
          this.eventTarget.scrollTop = this.top
        }, 30)
      }
    },
    mounted () {
      window.addEventListener('scroll', this.outerScroll, true)
    },
    destroyed () {
      window.removeEventListener('scroll', this.outerScroll)
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
}
.show{
  opacity: 1;
}
</style>
