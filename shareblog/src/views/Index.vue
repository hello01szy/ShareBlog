<template>
  <div class="header" ref="header">
    <Menu :up='scrollUp' :down='scrollDown'></Menu>
    <div class="cover">
      <span id="title">欢迎来到helloworld的博客世界</span>
      <div id="saying">
        <span>{{ words }}</span>
        <span class="cursor">|</span>
      </div>
      <div class="down">
        <span>
          <svg t="1608967625889" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5425" width="48" height="48"><path d="M217.428767 62.593887L279.922664 0.09999l232.177326 232.177327L744.277317 0.09999l62.493897 62.493897-294.671224 294.671224L217.428767 62.593887z" fill="#ffffff" p-id="5426"></path><path d="M217.428767 729.328776l62.493897-62.493897 232.177326 232.177327 232.177327-232.177327 62.493897 62.493897-294.671224 294.671224-294.671223-294.671224z" fill="#ffffff" p-id="5427"></path><path d="M217.428767 395.961332l62.493897-62.493897 232.177326 232.177326 232.177327-232.177326 62.493897 62.493897-294.671224 294.671223L217.428767 395.961332z" fill="#ffffff" p-id="5428"></path></svg>
        </span>
      </div>
    </div>
    <div id="content">
        <div class="blogs">
          <blog-item v-for="(item, key) in showBlogs" :key="key" :blog='item' :flag='key % 2 !== 0'>
          </blog-item>
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
import BlogItem from '@/views/components/BlogIntroduce'
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
      meto: '流光容易把人抛，红了樱桃，绿了芭蕉',
      words: '',
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
      showBlogs: [{
        picSrc: 'https://jsd.012700.xyz/gh/jerryc127/CDN/img/when-set-the-top-img-to-false.png',
        title: '当设置学习强国时',
        publishDate: '2023-08-17',
        exposeTimes: '230',
        type: '情感专栏',
        summary: '以下文章只是教程 如果部署之后，并没有出现 aplayer , 请确认是否跟足步骤操作或者更换音乐源，多试试。 如果遇到使用問題，请仔细查看插件文档，或者到插件那裏反饋。 前言如果你想使用 aplayer，很多人都會推薦安裝 hexo-tag-aplayer 這款插件。這款插件通過 Hexo 獨有的標籤外掛，我們可以很方便的寫入一些參數，插件就會幫我們生成對應的 html。如果你只是使用一些簡單的功能，其實無需使用到這個插件，只需以 html 格式書寫就行，不用插件去轉換。 例如： 如果使用插件，在 markdown 中要這樣寫 1{% meting "000PeZCQ1i4XVs" "tencent" "artist" "theme:#3F51B5" "mutex:true" "preload:auto" %} 其會被插件渲染為 1<div id="aplayer-uxAIfEUs" class="apl ...'
      }, {
        picSrc: 'https://jsd.012700.xyz/gh/jerryc127/CDN/img/when-set-the-top-img-to-false.png',
        title: '当设置学习强国时',
        publishDate: '2023-08-17',
        exposeTimes: '230',
        type: '情感专栏',
        summary: '以下文章只是教程 如果部署之后，并没有出现 aplayer , 请确认是否跟足步骤操作或者更换音乐源，多试试。 如果遇到使用問題，请仔细查看插件文档，或者到插件那裏反饋。 前言如果你想使用 aplayer，很多人都會推薦安裝 hexo-tag-aplayer 這款插件。這款插件通過 Hexo 獨有的標籤外掛，我們可以很方便的寫入一些參數，插件就會幫我們生成對應的 html。如果你只是使用一些簡單的功能，其實無需使用到這個插件，只需以 html 格式書寫就行，不用插件去轉換。 例如： 如果使用插件，在 markdown 中要這樣寫 1{% meting "000PeZCQ1i4XVs" "tencent" "artist" "theme:#3F51B5" "mutex:true" "preload:auto" %} 其會被插件渲染為 1<div id="aplayer-uxAIfEUs" class="apl ...'
      }, {
        picSrc: 'https://jsd.012700.xyz/gh/jerryc127/CDN/img/when-set-the-top-img-to-false.png',
        title: '当设置学习强国时',
        publishDate: '2023-08-17',
        exposeTimes: '230',
        type: '情感专栏',
        summary: '以下文章只是教程 如果部署之后，并没有出现 aplayer , 请确认是否跟足步骤操作或者更换音乐源，多试试。 如果遇到使用問題，请仔细查看插件文档，或者到插件那裏反饋。 前言如果你想使用 aplayer，很多人都會推薦安裝 hexo-tag-aplayer 這款插件。這款插件通過 Hexo 獨有的標籤外掛，我們可以很方便的寫入一些參數，插件就會幫我們生成對應的 html。如果你只是使用一些簡單的功能，其實無需使用到這個插件，只需以 html 格式書寫就行，不用插件去轉換。 例如： 如果使用插件，在 markdown 中要這樣寫 1{% meting "000PeZCQ1i4XVs" "tencent" "artist" "theme:#3F51B5" "mutex:true" "preload:auto" %} 其會被插件渲染為 1<div id="aplayer-uxAIfEUs" class="apl ...'
      }, {
        picSrc: 'https://jsd.012700.xyz/gh/jerryc127/CDN/img/when-set-the-top-img-to-false.png',
        title: '当设置学习强国时',
        publishDate: '2023-08-17',
        exposeTimes: '230',
        type: '情感专栏',
        summary: '以下文章只是教程 如果部署之后，并没有出现 aplayer , 请确认是否跟足步骤操作或者更换音乐源，多试试。 如果遇到使用問題，请仔细查看插件文档，或者到插件那裏反饋。 前言如果你想使用 aplayer，很多人都會推薦安裝 hexo-tag-aplayer 這款插件。這款插件通過 Hexo 獨有的標籤外掛，我們可以很方便的寫入一些參數，插件就會幫我們生成對應的 html。如果你只是使用一些簡單的功能，其實無需使用到這個插件，只需以 html 格式書寫就行，不用插件去轉換。 例如： 如果使用插件，在 markdown 中要這樣寫 1{% meting "000PeZCQ1i4XVs" "tencent" "artist" "theme:#3F51B5" "mutex:true" "preload:auto" %} 其會被插件渲染為 1<div id="aplayer-uxAIfEUs" class="apl ...'
      }],
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
    BlogItem,
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
    /**
     * @description 展示格言
     */
    showMeto () {
      for (let i = 0; i < this.meto.length; i++) {
        setTimeout(() => {
          this.words = this.words + this.meto[i]
        }, 150 * i)
      }
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
  },
  mounted () {
    this.showMeto()
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
    font-size: 1.2em;
    color: var(--white);
    font-family: 'Times New Roman', Times, serif;
    position: relative;
  }
  #saying span{
    position: relative;
    overflow: hidden;
    left: 50%;
    padding-right: 5px;
    white-space: nowrap;
  }
  #saying .cursor{
    font-size: 1.2em;
    animation: blink 0.8s linear infinite;
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
  @keyframes blink {
    0%{
      opacity: 1;
    }
    50%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
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
    display: flex;
    gap: 20px;
    padding-left: 15%;
    padding-right: 15%;
  }
  .blogs{
    padding-top: 10px;
    padding-bottom: 10px;
    flex: 2;
  }
  .card-container{
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
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
