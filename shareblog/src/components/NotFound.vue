<template>
  <div class="container404">
    <div class="space404">
      <img src="~@/assets/space.png" alt="">    
    </div>
    <div class="top404">
      <div class="title">404 NOT FOUND</div>
      <img src="~@/assets/human.png" alt="">
      <div class="backToHome">
        <span>返回首页</span>
        <span>刷新页面</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Lost'
}
</script>

<style>
.container404{
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
}
.space404 img{
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.top404 .title{
  position: absolute;
  top: 10%;
  color: aliceblue;
  font-size: 2em;
  font-weight: bolder;

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