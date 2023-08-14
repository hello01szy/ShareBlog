<template>
  <div class="blogPage" v-if="blog">
    <div class="blogheader" :style="{ 'background-image': 'url(' + blog.cover + ')' }">
      <Header></Header>
      <div class="blogheadercover">
        <h2>{{ blog.title }}</h2>
        <span>分类：{{ blog.tag }} | 发表于：{{ blog.publishDate }}</span>
      </div>
    </div>
    <div class="blog-body">
      <div class="blogContainer">
        <div v-html="blog.content" class="content" ref="shareContent"></div>
        <div style="position: relative; height: 100px;">
          <div
            :class="{ 'heart': true, 'heartAnimation': like }"
            ref="heart"
            type='unlike'
            @click="lightHeart">
          </div>
          <span class="like-counts">{{ count }}</span>
        </div>
        <div class="footer">
          <span><a href="">上一篇文章</a></span>
          <span><a href="">下一篇文章</a></span>
        </div>
      </div>
      <div class="article-navigator">
        <ul class="share-ul">
          <li
            v-for="(item, index) in lis"
            :style="{'padding-left': item.level * 10 + 'px'}"
            :key="index" @click="jumpToId(item.id)">
            {{ item.content }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { getArticleById } from '@/http/request.js'
import Header from '@/views/components/Header'
import { parseStrToDate } from '@/util'
export default {
  name: 'Blog',
  components: {
    Header: Header
  },
  data () {
    return {
      blog: {
        author: '',
        tag: '爱情',
        content: '',
        publishDate: '',
        publishTime: '',
        cover: '',
        title: ''
      },
      like: false,
      count: 10,
      // 用来设置目录的数据源头
      lis: []
    }
  },
  created () {
  },
  methods: {
    jumpToId (id) {
      const ele = document.getElementById(id)
      ele.scrollIntoView({ behavior: 'smooth' })
    },
    lightHeart () {
      this.like = !this.like
      if (this.like) {
        this.count = this.count + 1
      } else {
        this.count = this.count - 1
      }
    },
    abstractTitle (content) {
      let arr = content.match(/<h\d+>.*?<\/h\d+>/g)
      const levels = []
      const lis = []
      arr.map(item => {
        const level = item.match(/\d.*?/)[0]
        levels.push(level)
      })
      const minLevel = Math.min(...levels)
      arr = arr.map((element, index) => {
        const item = {}
        const level = element.match(/\d.*?/)[0]
        item.content = element.replace(/<\/*h\d+>/g, '')
        item.id = 'share-blog-' + index
        item.level = level - minLevel
        lis.push(item)
      })
      return lis
    }
  },
  mounted () {
    getArticleById({
      articleId: this.$route.query.articleId
    }).then(res => {
      this.blog = res.data.data
      this.blog.publishDate = parseStrToDate(this.blog.publishDate)
      // 提取出文本中的标题
      this.lis = this.abstractTitle(this.blog.content)
    })
  },
  updated () {
    let children = Array.from(this.$refs.shareContent.children)
    const reg = /H\d+/
    children = children.filter(item => reg.test(item.nodeName))
    children.map((item, index) => {
      item.id = this.lis[index].id
    })
  }
}
</script>

<style scoped>
.article-navigator{
  width: calc(25% - 20px);
  float: right;
  margin-right: 10px;
  background-color: #ffffff;
  border-radius: 4px;
  position: sticky;
  top: 10px;
}
.footer{
  padding: 15px 5px 10px 5px;
  text-align: left;
}
.footer span{
  color: #253f50;
  font-size: 14px;
}
.footer span:nth-of-type(2) {
  float: right;
}
.blogPage{
  width: 100%;
  height: 100%;
  user-select: none;
}
.blog-body{
  background-color: #f8f8f8;
  padding-bottom: 20px;
  padding-top: 20px;
}
.blog-body::after{
  content: '';
  display: block;
  clear: both;
}
.blogheader{
  width: 100%;
  height: 60%;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  background-repeat: no-repeat;
  position: relative;
}
.blogheadercover{
  position: absolute;
  background-color: rgba(0, 0, 0, 0.4);
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 0;
  justify-content: center;
}
.blogheadercover h2, span{
  color: rgb(255, 255, 255, 0.8);
  font-family: '微软雅黑';
}
.blogheadercover h2{
  font-weight: 500;
}
.blogheadercover span{
  font-size: 0.6em;
  margin-top: 0.5%;
}
.blogContainer{
  padding-left: 40px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-top: 20px;
  margin-left: 40px;
  width: calc(75% - 40px);
  float: left;
  background-color: #ffffff;
  border-radius: 4px;
  overflow: auto;
}
.content{
  box-sizing: border-box;
  text-align: left;
  line-height: 28px;
}
.heart {
  background: url('~@/assets/web_heart_animation.png');
  background-position: left;
  background-repeat: no-repeat;
  height: 100px;
  width: 100px;
  position: absolute;
  left: 50%;
  transform: translateX(-50px);
  cursor: pointer;
  background-size:2900%;
}
.red-heart{
  background-position: right;
}
@keyframes heartBlast {
  0% {
    background-position: left;
  }
  100% {
    background-position: right;
  }
}
.heartAnimation {
  display: inline-block;
  -webkit-animation-name: heartBlast;
  animation-name: heartBlast;
  -webkit-animation-duration: .8s;
  animation-duration: .8s;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
  -webkit-animation-timing-function: steps(28);
  animation-timing-function: steps(28);
  background-position: right;
}
.like-counts{
  position: absolute;
  left: calc(50% + 30px);
  top: 50%;
  color: black;
  transform: translateY(-50%);
}
.share-ul{
  list-style: none;
  padding: 10px;
}
.share-ul li {
  text-align: left;
  font-size: 14px;
  height: 30px;
  line-height: 30px;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: all linear 0.2s;
}
.share-ul li:hover{
  background-color: #f4f4f4;
}
</style>
