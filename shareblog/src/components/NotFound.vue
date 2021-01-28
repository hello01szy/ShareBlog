<template>
  <div class="container404">
    <div class="space404">
      <img src="~@/assets/space.png" class="img404" speed="3" alt="">    
    </div>
    <div class="top404">
      <div class="title">404 NOT FOUND</div>
      <span id="desc">您想找的页面丢失了......</span>
      <img src="~@/assets/human.png" class="img404" speed="2" alt="">
      <div class="backToHome">
        <span @click="backToHome404">返回首页</span>
        <span @click="refresh404">刷新页面</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Lost',
  inject: ['reload'],
  methods: {
    move (e) {
      document.getElementsByClassName('img404').forEach(element => {
        const speed = element.getAttribute('speed')
        const x  = (window.innerWidth - e.pageX * speed) / 400
        const y = (window.innerHeight - e.pageY * speed) / 400
        element.style.transform = `translateX(${x}px) translateY(${y}px)`
      })
    },
    // 返回至首页
    backToHome404 () {
      this.$router.push('/')
    },
    // 刷新页面
    refresh404 () {
      this.reload()
    }
  },
  created () {
    window.addEventListener('mousemove', this.move, true)
  },
  destroyed () {
    window.removeEventListener('mousemove', this.move)
  }
}
</script>

<style>
.container404{
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
}
.space404{
  display: flex;
  justify-content: center;
  align-items: center;
}
.space404 img{
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-top: -1%;
}
.top404 .title{
  position: absolute;
  top: 10%;
  color: aliceblue;
  font-size: 2em;
  font-weight: bolder;
  letter-spacing: 3px;
}
#desc{
  position: absolute;
  top: 20%;
  color: aliceblue;
  font-size: 0.8em;
  letter-spacing: 4px;
}
.top404 img{
  position: absolute;
  bottom: 30%;
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
}
.top404{
  position: absolute;
  width: 100%;  
  height: 80%;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.backToHome{
  width: 60%;
  position: absolute;
  bottom: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.backToHome span{
  width: 15%;
  color: antiquewhite;
  border: 1px solid wheat;
  padding: 8px;
  margin: 10px;
  font-size: 0.8em;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.2s linear;
}
.backToHome span:hover{
  background-color: #1e1e1e;
}
</style>