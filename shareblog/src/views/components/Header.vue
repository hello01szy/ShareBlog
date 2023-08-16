<template>
  <div :class="{'menu': true, 'scroll-menu-up': up, 'scroll-menu-down': down}">
    <span class="logo">
      <a href="/" title="helloworld's blog">
        <span class="logo-text">helloworld's blog</span>
      </a>
    </span>
    <div class="menu-items">
      <div class="menu-item">
        <i class="fa fa-home"></i>
        <span class="home">主页</span>
      </div>
      <div class="menu-item">
        <i class="fa fa-html5"></i>
        <span class="home">前端</span>
      </div>
      <div class="menu-item">
        <i class="fa fa-code"></i>
        <span class="home">后端</span>
      </div>
      <div class="menu-item">
        <i class="fa fa-paper-plane-o"></i>
        <span class="home">其他技术文章</span>
      </div>
      <div class="menu-item">
        <i class="fa fa-coffee"></i>
        <span class="home">随笔</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    // 记录当前页面滚动方向，up向上滚动，menu显现；down向下滚动，menu消失
    up: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    down: {
      type: Boolean,
      default: () => {
        return false
      }
    }
  },
  methods: {
  },
  components: {
  }
}
</script>

<style scoped>
  .menu{
    position: fixed;
    top: 0;
    left: 0;
    height: 60px;
    display: flex;
    width: calc(100% - 9px);
    align-items: center;
    padding: 0 30px 0 30px;
    font-size: 1.3em;
    z-index: 3;
    transition: top 0.3s, background-color 0.3s;
  }
  .scroll-menu-up{
    position: fixed;
    width: calc(100% - 9px);
    top: 0;
    background-color: var(--transparent-dark);
  }
  .scroll-menu-down{
    position: fixed;
    width: calc(100% - 9px);
    top: -60px;
  }
  .logo{
    flex: 1;
    color: var(--light-gray);
    text-align: left;
  }
  .logo-text{
    text-shadow: 2px 2px 4px rgba(0,0,0,.15);
    font-weight: 700;
    color: var(--light-gray);
    transition: all .2s;
  }
  .logo-text:hover{
    color: var(--white);
  }
  .menu-items{
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;
  }
  .menu-item{
    font-size: 0.65em;
    color: var(--light-gray);
    cursor: pointer;
    transition: all 0.3s;
  }
  .menu-item:hover{
    color: var(--white);
  }
  .home{
    margin-left: 10px;
  }
</style>
