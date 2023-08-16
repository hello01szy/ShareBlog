<template>
  <div :class="{ 'blog-item': true, 'card': true, 'flex-reverse': flag }">
    <div class="pic-frame">
      <img :src="blog.picSrc" alt="lost..." class="scale-pic">
    </div>
    <div class="article">
      <div class="article-title">
        <a class="title">{{ blog.title }}</a>
      </div>
      <div class="article-attributes">
        <span>
          <i class="fa fa-calendar" aria-hidden="true">
            发布时间：{{ blog.publishDate }}
          </i> |
          <i class="fa fa-eye" aria-hidden="true">
            浏览次数：{{ blog.exposeTimes }}
          </i> |
          <i class="fa fa-tags" aria-hidden="true">
            <a> {{ blog.type }}</a>
          </i>
        </span>
      </div>
      <div class="article-summary too-long-multi-line" v-html="blog.summary">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogIntroduce',
  props: {
    blog: {
      type: Object,
      default: () => {
        return {}
      }
    },
    flag: {
      type: Boolean,
      default: () => {
        return false
      }
    }
  }
}
</script>
<style scoped>
  .blog-item {
    height: 180px;
    background: #ffffff;
    border-radius: 4px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .flex-reverse{
    flex-direction: row-reverse;
  }
  .pic-frame{
    flex: 1;
    overflow: hidden;
    height: 180px;
  }
   .scale-pic{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px 0px 0px 4px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    transition: all 0.5s ease;
  }
  .scale-pic:hover{
    transform: scale(1.2);
  }
  .blog-item:hover{
    box-shadow: 0 0 30px 0 rgb(30, 30, 30, 0.4);
  }
  .article{
    flex: 2;
    height: 180px;
    background: #ffffff;
    padding: 15px;
    border-radius: 0px 4px 4px 0px;
  }
  .article-title{
    text-align: left;
  }
  .title{
    font-size: 1.2em;
    line-height: 1.4;
    transition: all 0.3s linear;
  }
  /* .title:hover{
    color: var(--a-hover);
  } */
  .article-attributes{
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 0.7em;
    text-align: left;
  }
  .article-summary{
    height: 4.5em;
    font-size: 0.9em;
    text-align: left;
    line-height: 1.5em;
    padding-bottom: 10px;
    letter-spacing: 2px;
    user-select: none;
  }
</style>
