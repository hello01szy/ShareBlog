<template>
  <div :class="{ menu:true, sticky: childSticky, hide: childMenuDissipate, menumove: !childDissipate}">
    <div class="menuItem"><i class="fa fa-search" aria-hidden="true"> 搜索</i></div>
    <div class="menuItem"><router-link to="/"><i style="font: size 1.2em;" class="fa fa-home" aria-hidden="true"> 首页</i></router-link></div>
    <div class="menuItem"><i class="fa fa-file-text" aria-hidden="true"> 文章</i></div>
    <div class="menuItem"><i class="fa fa-wrench" aria-hidden="true"> 工具</i></div>
    <div class="menuItem"><i class="fa fa-link" aria-hidden="true"> 链接</i></div>
    <div class="menuItem"><i class="fa fa-comments-o" aria-hidden="true"> 留言板</i> </div>
    <div class="menuItem"><router-link to="/about"><i class="fa fa-info" aria-hidden="true"> 关于</i></router-link></div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    childSticky: Boolean,
    childMenuDissipate: Boolean,
    childDissipate: Boolean
  }
}
</script>

<style>
  .menu{
    position: relative;
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
  .sticky{
    position: sticky;
    opacity: 1;
  }
  .menuItem{
    margin-right: 30px;
    color: #d4cfcf;
    /* opacity: 0.8; */
    font-size: 0.9em;
    cursor: pointer;
  }
  .menuItem a {
    color: #d4cfcf
  }
  .menuItem :hover{
    color: #ffffff;
    transition: all 0.4s ease;
  }
  .hide{
    opacity: 0;
  }
  .menumove{
    animation: show-then-hide 0.5s linear;
  }
  @keyframes show-then-hide{
    from{
      background-color: rgb(30, 30, 30);
    }
    to{
      background-color:  transparent;
    }
  }
</style>
