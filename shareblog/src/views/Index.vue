<template>
  <div class="header" ref="header">
    <el-backtop target='.header' :bottom='50'></el-backtop>
    <Header :class="{headHide:isHeadHide, menumove: indexMenuMove}" @leaveWords = "showLoading"></Header>
    <div class="cover">
      <span id="title" :class="{ move: dissipate}">欢迎来到我的博客</span>
      <div id="saying" :class="{ move: dissipate}">
        <span>流光容易把人抛，红了樱桃，绿了芭蕉</span>
      </div>
      <div @click="dropdown" :class="{move: dissipate, down:!dissipate}">
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
import Header from '@/views/components/Header'
import Card from '@/views/components/Card'
import Introduction from '@/views/components/Introduction'
import Page from '@/components/Page'
import Loading from '@/components/Loading.vue'
import { getAllArticles } from '@/http/request.js'
import { parseStrToDate } from '../../util.js'
export default {
  name: 'Index',
  data () {
    return {
      dissipate: false,
      // menuDissipate: false,
      scrollTop: 0,
      sticky: true,
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
      // 元素content的高度
      contenetHeight: 0,
      // 用来控制加载界面是否隐藏
      loadingShow: true,
      // 控制head是否隐藏
      isHeadHide: false,
      // 是否给header添加到顶部的特效
      indexMenuMove: false
    }
  },
  computed: {
    getVuexScrollTop () {
      return this.$store.state.scrollTop
    }
  },
  components: {
    Header,
    Card,
    Introduction,
    Page,
    Loading
  },
  watch: {
    getVuexScrollTop () {
      this.handleScroll()
    }
  },
  methods: {
    // 滚动条滚动时产生的特效，让有些元素消失，如果滚动条回到起点在让其出现
    handleScroll () {
      const delta = this.$store.state.delta
      this.scrollTop = this.$store.state.scrollTop
      if (this.scrollTop !== 0) {
        this.dissipate = true
      } else {
        this.dissipate = false
      }
      if (delta <= 0) {
        this.isHeadHide = false
        this.indexMenuMove = false
        if (this.scrollTop === 0) {
          this.indexMenuMove = true
        }
      } else if (delta > 0) {
        this.isHeadHide = true
        this.indexMenuMove = false
      }
    },
    // 点击向下图标，让滚动条向下滚动
    dropdown () {
      console.log('dropdown')
      // 设置让滚动条缓慢移动对应位置
      // eslint-disable-next-line
      const height = this.$refs['header'].offsetHeight + 35
      // eslint-disable-next-line
      this.top = this.$refs['header'].scrollTop
      const timer = setInterval(() => {
        const speed = (height - this.top) / 3
        if (this.top >= (height - 2)) {
          this.top = height
          clearInterval(timer)
        }
        this.top = this.top + speed
        // eslint-disable-next-line
        this.$refs['header'].scrollTop = this.top
      }, 30)
    },
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
      // this.showBlogs = this.blogs.slice(startIndex, endIndex)
    },
    showLoading () {
      this.loadingShow = false
      // 设置窗口不能滚动
      const head = document.getElementsByClassName('header')[0]
      head.style.overflowY = 'hidden'
      setTimeout(() => {
        this.loadingShow = true
        head.style.overflowY = 'scroll'
      }, 3000)
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
    }
  },
  created () {
    this.getBlogs()
    console.log('created:' + this.total)
  },
  mounted () {
    // window.addEventListener('scroll', this.handleScroll, true)
  },
  activated () {
    this.dissipate = false
    this.isHeadHide = false
  },
  destoryed () {
    // window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
<style scoped>
  .header {
    width: 100vw;
    height: 100vh;
    min-width: 1072px;
    min-height: 560px;
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
