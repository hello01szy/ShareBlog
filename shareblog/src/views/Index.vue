<template>
  <div class="header">
    <div id="menu">
      <div class="menuItem"><i class="fa fa-search" aria-hidden="true"></i> 搜索</div>
      <div class="menuItem"><i class="fa fa-home" aria-hidden="true"></i> 首页</div>
      <div class="menuItem"><i class="fa fa-file-text" aria-hidden="true"></i> 文章</div>
      <div class="menuItem">工具</div>
      <div class="menuItem">链接</div>
      <div class="menuItem">留言板</div>
      <div class="menuItem">关于</div>
    </div>
    <div class="cover">
      <span id="title" :class="{ move: dissipate}">欢迎来到我的博客</span>
      <div id="saying">
        <span>流光容易把人抛，红了樱桃，绿了芭蕉</span>
      </div>
    </div>
    <div id="content">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      dissipate: false
    }
  },
  methods: {
    handleScroll () {
      this.dissipate = true
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll, true)
  },
  destoryed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
<style>
  .header {
    width: 100vw;
    height: 100vh;
    background-image: url('~@/assets/love.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    background-attachment: fixed;
    position: relative;
    overflow-x: hidden;
  }
  #menu{
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 200;
    width: 100%;
    height: 35px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }
  .menuItem{
    opacity: 0.8;
    margin-right: 30px;
    color: #ffffff;
    font-size: 0.9em;
    cursor: pointer;
  }
  .cover{
    width:100%;
    height:100%;
    background: rgba(27, 22, 22, 0.3);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  #title{
    width: 8em;
    font-family:'Times New Roman', Times, serif;
    color:#ffffff;
    font-size: 2em;
    white-space: nowrap;
    border-right: 2px solid transparent;
    overflow: hidden;
    transition: all 0.5s linear;
  }
  #saying{
    margin-top: 10px;
    width: 60%;
    font-size: 1.2em;
    color: #ffffff;
    font-family: 'Times New Roman', Times, serif;
    display: flex;
    flex-direction: row;
    border-right: 2px solid transparent;
    justify-content: flex-start;
  }
  #saying span{
    width: 17em;
    margin-left: 400px;
    overflow: hidden;
    white-space: nowrap;
    animation: typing 3.5s steps(17, end), blink-caret .75s step-end infinite;
  }
  .move{
    opacity: 0;
  }
  @keyframes typing {
    from { width: 0em; }
    to { width: 17em; }
  }
  @keyframes blink-caret {
    from, to { box-shadow: 2px 0 0 0 transparent; }
    50% { box-shadow: 2px 0 0 0; }
  }
  #content{
    width: 100%;
    height: 300px;
    background: #ffffff;
  }
</style>
