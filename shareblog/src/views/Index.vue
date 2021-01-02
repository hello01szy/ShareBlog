<template>
  <div class="header">
    <Header :childSticky="sticky" :childMenuDissipate="menuDissipate" :childDissipate="dissipate"></Header>
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
          <Card>
            <template v-slot:pic>
              <!-- <div class="scale-pic"></div> -->
              <div class="pic-frame">
                <img src="https://picsum.photos/300/200" alt="haha" class="scale-pic">
              </div>
            </template>
            <template v-slot:blog>
              <div class="article">
                <div class="article-title">
                  <h2>Just like a dog,就像一条狗</h2>
                </div>
                <div class="article-attributes">
                  <span><i class="fa fa-calendar" aria-hidden="true"> 发布时间：2020年12月27日</i> | <i class="fa fa-eye" aria-hidden="true"> 浏览次数：100</i> | <i class="fa fa-tags" aria-hidden="true"> <a href="#"> 情感专栏</a></i></span>
                </div>
                <div class="article-content">
                  曾经有一份美好的爱情摆在我面前，我没有珍惜，如果要给在这份爱加份期限，那将是1000年
                  曾经有一份美好的爱情摆在我面前，我没有珍惜，如果要给在这份爱加份期限，那将是1000年
                </div>
              </div>
            </template>
          </Card>
          <Card>
            <template v-slot:pic>
              <!-- <div class="scale-pic"></div> -->
              <div class="pic-frame">
                <img src="https://picsum.photos/300/200" alt="haha" class="scale-pic">
              </div>
            </template>
            <template v-slot:blog>
              <div class="article">
                <div class="article-title">
                  <h2>Just like a dog,就像一条狗</h2>
                </div>
                <div class="article-attributes">
                  <span><i class="fa fa-calendar" aria-hidden="true"> 发布时间：2020年12月27日</i> | <i class="fa fa-eye" aria-hidden="true"> 浏览次数：100</i> | <i class="fa fa-tags" aria-hidden="true"> <a href="#"> 情感专栏</a></i></span>
                </div>
                <div class="article-content">
                  曾经有一份美好的爱情摆在我面前，我没有珍惜，如果要给在这份爱加份期限，那将是1000年
                  曾经有一份美好的爱情摆在我面前，我没有珍惜，如果要给在这份爱加份期限，那将是1000年
                </div>
              </div>
            </template>
          </Card>
        </div>
        <!-- <div class="card"> -->
        <div class="card-container">
          <Introduction></Introduction>
        </div>
    </div>
  </div>
</template>

<script>
import Header from '@/views/components/Header'
import Card from '@/views/components/Card'
import Introduction from '@/views/components/Introduction'
export default {
  name: 'Index',
  data () {
    return {
      dissipate: false,
      menuDissipate: false,
      scrollTop: 0,
      sticky: false
    }
  },
  components: {
    Header,
    Card,
    Introduction
  },
  methods: {
    // 滚动条滚动时产生的特效，让有些元素消失，如果滚动条回到起点在让其出现
    handleScroll (event) {
      const delta = event.target.scrollTop - this.scrollTop
      this.scrollTop = event.target.scrollTop
      if (this.scrollTop !== 0) {
        this.dissipate = true
      } else {
        this.dissipate = false
      }
      if (delta < 0 && this.scrollTop !== 0) {
        this.sticky = true
        this.menuDissipate = false
      } else if (delta < 0 && this.scrollTop === 0) {
        this.sticky = false
        this.menuDissipate = false
      } else if (delta > 0) {
        this.sticky = false
        this.menuDissipate = true
      }
    },
    // 点击向下图标，让滚动条向下滚动
    dropdown () {
      // 设置让滚动条缓慢移动对应位置
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll, true)
  },
  destoryed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
<style scope>
  .header {
    width: 100vw;
    height: 100vh;
    background-image: url('~@/assets/animal.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    background-attachment: fixed;
    position: relative;
    overflow-x: hidden;
  }
  .cover{
    width:100%;
    height:100%;
    background: rgba(27, 22, 22, 0.3);
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
    width: 60%;
    font-size: 1.2em;
    color: #ffffff;
    font-family: 'Times New Roman', Times, serif;
    display: flex;
    flex-direction: row;
    border-right: 2px solid transparent;
    justify-content: flex-start;
    transition: all 0.5s linear;
  }
  #saying span{
    width: 17em;
    margin-left: 400px;
    overflow: hidden;
    white-space: nowrap;
    animation: typing 3.5s steps(17, end), blink-caret .75s step-end infinite;
  }
  .move{
    opacity: 0;
  }
  .down{
    position: absolute;
    bottom: 20px;
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
      bottom: 20px;
      opacity: 1;
    }
    50%{
      bottom: 10px;
      opacity: 0.5;
    }
    100%{
      bottom: 0px;
      opacity: 0;
    }
  }
  #content{
    width: 100%;
    height: 600px;
    background-image: url('~@/assets/bg.jpg');
    background-repeat: repeat;
    background-size: 10%;
    position: relative;
  }
  .blogs{
    width: 57%;
    position: absolute;
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
  .article-content{
    width: 92%;
    height: 7.5em;
    margin-left: 5%;
    font-size: 0.9em;
    text-align: left;
    text-overflow: ellipsis;
    overflow: hidden;
    line-height: 1.5em;
    /* 省略号展示多余内容
      display: -webkit-box;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
      overflow: hidden;
     */
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
  }
</style>
