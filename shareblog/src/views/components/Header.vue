<template>
  <div class="menu">
    <div class="menuItem"><SearchBtn></SearchBtn></div>
    <div class="menuItem"><router-link to="/"><i style="font: size 1.2em;" class="fa fa-home" aria-hidden="true"> 首页</i></router-link></div>
    <div class="menuItem" id="head-article">
      <i class="fa fa-file-text" aria-hidden="true"> 文章</i>
      <ul class="dropdown">
        <li>
          <a>前端</a>
        </li>
        <li>
          <a>后端</a>
        </li>
        <li>
          <a>运维</a>
        </li>
      </ul>
    </div>
    <div class="menuItem"><i class="fa fa-wrench" aria-hidden="true"> 工具</i></div>
    <div class="menuItem"><router-link to="/links"><i class="fa fa-link" aria-hidden="true"> 链接</i></router-link></div>
    <div class="menuItem"><router-link to="/words"><i class="fa fa-comments-o" aria-hidden="true"> 留言板</i></router-link></div>
    <div class="menuItem"><router-link to="/about"><i class="fa fa-info" aria-hidden="true"> 关于</i></router-link></div>
  </div>
</template>

<script>
import SearchBtn from '@/components/Search'
export default {
  name: 'Header',
  methods: {
    leaveWords () {
      this.$emit('leaveWords')
    }
  },
  components: {
    'SearchBtn': SearchBtn
  }
}
</script>

<style>
  .menu{
    position: sticky;
    opacity: 1;
    top: 0px;
    left: 0px;
    z-index: 200;
    width: 100%;
    height: 35px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    transition: all 0.5s linear;
  }
  .menuItem{
    margin-right: 30px;
    height: 35px;
    color: #d4cfcf;
    font-size: 0.9em;
    cursor: pointer;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .menuItem a {
    color: #d4cfcf
  }
  .menuItem :hover{
    color: #ffffff;
    transition: all 0.4s ease;
  }
  
  .dropdown{
    position: absolute;
    width: 160%;
    top: 35px;
    transition: all 0.2s linear;
    text-decoration: none;
    list-style: none;
    background-color: rgba(50, 50, 50, 0.5);
    box-sizing: border-box;
    border-radius: 2px;
    transform: translateY(-10%);
    height: 0px;
    overflow: hidden;
  }
  .dropdown li{
    width: 100%;
    letter-spacing: 3px;
    text-align: center;
    line-height: 25px;
  }
  .dropdown li:hover{
    background-color: #2880b0;
  }
  #head-article:hover ul.dropdown{
    height: auto;
    transform: translateY(0);
  }
</style>
