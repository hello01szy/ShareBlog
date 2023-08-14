<template>
  <div class="header" ref="header">
    <Menu :up='scrollUp' :down='scrollDown'></Menu>
    <div class="cover">
      <span id="title">欢迎来到helloworld的博客世界</span>
      <div id="saying">
        <span>流光容易把人抛，红了樱桃，绿了芭蕉</span>
      </div>
      <div class="down">
        <span>
          <svg t="1608967625889" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5425" width="48" height="48"><path d="M217.428767 62.593887L279.922664 0.09999l232.177326 232.177327L744.277317 0.09999l62.493897 62.493897-294.671224 294.671224L217.428767 62.593887z" fill="#ffffff" p-id="5426"></path><path d="M217.428767 729.328776l62.493897-62.493897 232.177326 232.177327 232.177327-232.177327 62.493897 62.493897-294.671224 294.671224-294.671223-294.671224z" fill="#ffffff" p-id="5427"></path><path d="M217.428767 395.961332l62.493897-62.493897 232.177326 232.177326 232.177327-232.177326 62.493897 62.493897-294.671224 294.671223L217.428767 395.961332z" fill="#ffffff" p-id="5428"></path></svg>
        </span>
      </div>
    </div>
    <div id="content">
        <div class="blogs">
          <Card v-for="(item, key) in showBlogs" :key="key">
            <template v-slot:pic>
              <div class="pic-frame">
                <img :src="item.cover" alt="haha" class="scale-pic">
              </div>
            </template>
            <template v-slot:blog>
              <div class="article">
                <div class="article-title">
                  <h2 @click="doClick(item.id)">{{ item.title }}</h2>
                </div>
                <div class="article-attributes">
                  <span>
                    <i class="fa fa-calendar" aria-hidden="true">
                      发布时间：{{ item.publishDate }}
                    </i> |
                    <i class="fa fa-eye" aria-hidden="true">
                      浏览次数：100
                    </i> |
                    <i class="fa fa-tags" aria-hidden="true">
                      <a href="#"> 情感专栏</a>
                    </i>
                  </span>
                </div>
                <div class="article-content" v-html="item.summary">
                </div>
              </div>
            </template>
          </Card>
          <Page :total="total" @dopage="paging"></Page>
        </div>
        <div class="card-container">
          <Introduction @goToGitHub="goToGitHub"></Introduction>
        </div>
    </div>
    <Loading :hide="loadingShow"></Loading>
  </div>
</template>

<script>
import Card from '@/views/components/Card'
import Introduction from '@/views/components/Introduction'
import Page from '@/components/Page'
import Loading from '@/components/Loading.vue'
import { getAllArticles } from '@/http/request.js'
import { parseStrToDate, throttle } from '@/util.js'
import Menu from './components/Header.vue'
export default {
  name: 'Index',
  data () {
    return {
      // 定义博客列表
      blogs: [],
      // 定义分类卡片的宽度
      classifyCardW: '100%',
      classifyCardH: '100px',
      // 定义滚动条距离顶部的距离
      top: 0,
      // 定义总共有多少个元素
      total: -1,
      // 定义要展示的blog内容，是从blogs中获取的
      showBlogs: [],
      // 用来控制加载界面是否隐藏
      loadingShow: true,
      scrollUp: false,
      scrollDown: false,
      scrollTop: 0
    }
  },
  computed: {
  },
  components: {
    Card,
    Introduction,
    Page,
    Loading,
    Menu
  },
  methods: {
    doClick (id) {
      this.$router.push({
        path: '/blog',
        query: {
          articleId: id
        }
      })
    },
    paging (currentPage, pageSize) {
      const startIndex = (currentPage - 1) * pageSize
      let endIndex = startIndex + pageSize
      if (endIndex > this.blogs.length) {
        endIndex = this.blogs.length
      }
    },
    goToGitHub () {
    },
    getBlogs () {
      getAllArticles().then(res => {
        this.showBlogs = res.data.data
        this.showBlogs.map(item => {
          item.publishDate = parseStrToDate(item.publishDate)
        })
        this.total = 3
      }).catch(err => {
        this.$message.error('请求所有文章出错')
        console.log(err)
      })
    },
    scrollEvent (e) {
      if (e.target.scrollTop > this.scrollTop) {
        this.scrollDown = true
        this.scrollUp = false
      } else if (e.target.scrollTop < this.scrollTop) {
        if (e.target.scrollTop !== 0) {
          this.scrollUp = true
          this.scrollDown = false
        } else {
          this.scrollUp = false
          this.scrollDown = false
        }
      }
      this.scrollTop = e.target.scrollTop
    }
  },
  created () {
    // this.getBlogs()
    // console.log('created:' + this.total)
  },
  mounted () {
    this.$refs.header.addEventListener('scroll', throttle(this.scrollEvent, 20))
  },
  destoryed () {
    this.$refs.header.removeEventListener('scroll', throttle(this.scrollEvent, 20))
  }
}
</script>
<style scoped>
  .header {
    width: 100vw;
    height: 100vh;
    background-image: url('~@/assets/header.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    position: relative;
    overflow-x: hidden;
  }
  .cover{
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  #title{
    font-family:'Times New Roman', Times, serif;
    color:#ffffff;
    font-size: 2em;
    white-space: nowrap;
  }
  #saying{
    margin-top: 10px;
    width: 100%;
    font-size: 1.2em;
    color: #ffffff;
    font-family: 'Times New Roman', Times, serif;
    display: flex;
    flex-direction: row;
    border-right: 2px solid transparent;
    justify-content: flex-start;
    transition: all 0.5s linear;
    position: relative;
  }
  #saying span{
    position: relative;
    width: 17em;
    /* margin-left: 400px; */
    overflow: hidden;
    left: 50%;
    padding-right: 5px;
    white-space: nowrap;
    animation: typing 3.5s steps(17, end), blink-caret .75s step-end infinite;
  }
  .move{
    opacity: 0;
  }
  .down{
    position: absolute;
    bottom: 40px;
    transform: scale(0.4);
    animation: up-then-down 1s linear infinite;
    cursor: pointer;
  }
  @keyframes typing {
    from { width: 0em; }
    to { width: 17em; }
  }
  @keyframes blink-caret {
    from, to { box-shadow: 2px 0 0 0 transparent; }
    50% { box-shadow: 2px 0 0 0; }
  }
  @keyframes up-then-down {
    0%{
      bottom: 50px;
      opacity: 1;
    }
    50%{
      bottom: 40px;
      opacity: 0.5;
    }
    100%{
      bottom: 30px;
      opacity: 0;
    }
  }
  #content{
    width: 100%;
    height: auto;
    background-image: url('~@/assets/bg.jpg');
    background-repeat: repeat;
    background-size: 10%;
    position: relative;
    overflow: hidden;
    min-height: 950px;
  }
  .blogs{
    width: 57%;
    position: relative;
    top: 15px;
    left: 10%;
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .scale-pic{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px 0px 0px 4px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    transition: all 1s ease;
  }
  .scale-pic:hover{
    transform: scale(1.5);
  }
  .pic-frame{
    width: 36%;
    overflow: hidden;
    height: 180px;
  }
  .article{
    width: 64%;
    height: 180px;
    background: #ffffff;
    border-radius: 0px 4px 4px 0px;
  }
  .card-container{
    width: 20%;
    margin-left: 3%;
    position: absolute;
    top: 15px;
    right: 10%;
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .article-title{
    width: 95%;
    margin-left: 5%;
    margin-top: 10px;
    display: flex;
    justify-content: left;
  }
  .article-attributes{
    width: 95%;
    margin-left: 5%;
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    font-size: 0.4em;
    justify-content: left;
  }
  .article-attributes a{
      color: rgb(37, 63, 80);
  }
  .blogs a:hover{
    text-decoration: underline;
    color: blue;
  }
  h2{
    cursor: pointer;
  }
  .headHide{
    opacity: 0;
  }
  .article-content{
    width: 92%;
    height: 4.5em;
    margin-left: 5%;
    font-size: 0.9em;
    text-align: left;
    text-overflow: ellipsis;
    overflow: hidden;
    line-height: 1.5em;
    padding-bottom: 10px;
    letter-spacing: 2px;
    user-select: none;
    /* 省略号展示多余内容
      display: -webkit-box;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
      overflow: hidden;
     */
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
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
