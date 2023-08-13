<template>
  <div class="menu">
    <span class="logo">
      <a href="/" title="helloworld's blog">
        <span class="logo-text">helloworld's blog</span>
      </a>
    </span>
    <div class="menu-items">
      <div>
        <i class="fa fa-camera-retro fa-lg"></i>
        <span>主页</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  methods: {
  },
  components: {
  }
}
</script>

<style scoped>
  .menu{
    position: absolute;
    top: 0;
    left: 0;
    height: 60px;
    display: flex;
    width: 100%;
    align-items: center;
    padding: 0 30px 0 30px;
    font-size: 1.3em;
    z-index: 3;
  }
  .logo{
    flex: 1;
    color: var(--light-gray);
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
  }
</style>
