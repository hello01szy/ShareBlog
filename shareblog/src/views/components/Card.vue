<template>
  <div class="blog-item" :style="{width:childWidth, height:childHeight}">
    <slot name="pic" />
    <slot name="blog" />
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    childWidth: String,
    childHeight: String
  }
}
</script>
<style>
  .blog-item {
    width: 95%;
    height: 180px;
    background: #ffffff;
    border-radius: 4px;
    margin-bottom: 20px;
    box-shadow: 0 0 9px 0 rgb(30, 30, 30, 0.2);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding-bottom: 10px;
    transition: all 0.2s linear;
  }
  .blog-item:hover{
    box-shadow: 0 0 30px 0 rgb(30, 30, 30, 0.4);
  }
</style>
