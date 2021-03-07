<template>
  <div class="blogPage">
    <div class="blogheader">
      <Header></Header>
      <div class="blogheadercover">
        <h2>{{ blog.title }}</h2>
        <span>分类：{{ blog.tag }} | 发表于：{{ blog.publish }}</span>
      </div>
    </div>
    <div class="blogbody">
      <div class="blogContainer">
        <Card :childHeight="blogCardHeight">
          <template v-slot:blog>
            <div v-html="blog.content" class="mdStyle">
            </div>
          </template>
        </Card>
      </div>
      <div class="blogSideContent" ref="blogContent">
        <Card :childHeight="blogCardHeight" class="cardStyle">
          <template v-slot:blog>
            <div class="topTitle">
              <span>目录</span>
            </div>
            <div v-for="(item, index) in navList" :key="index" class="content">
              <span class="content-title" @click="clickContentSpan(index, 0)">{{ item.title }}</span>
              <ul>
                <li v-for="(ele, eleIndex) in item.children" :key="eleIndex" @click="clickContentLi(index, eleIndex)">{{ ele.title }}</li>
              </ul>
            </div>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/views/components/Header'
import Card from '@/views/components/Card'
import marked from 'marked'
let renderMd = new marked.Renderer()
marked.setOptions({
  renderer: renderMd,
  gfm: true, // 默认为true。 允许 Git Hub标准的markdown.
  tables: true, // 默认为true。 允许支持表格语法。该选项要求 gfm 为true。
  breaks: false, // 默认为false。 允许回车换行。该选项要求 gfm 为true。
  pedantic: false, // 默认为false。 尽可能地兼容 markdown.pl的晦涩部分。不纠正原始模型任何的不良行为和错误。
  sanitize: false, // 对输出进行过滤（清理）
  smartLists: true,
  smartypants: false // 使用更为时髦的标点，比如在引用语法中加入破折号。
})
export default {
  name: 'Blog',
  components: {
    Header: Header,
    Card: Card
  },
  data () {
    return {
      blog: Object,
      blogCardHeight: 'auto',
      mdStr: String,
      navList: []
      // 在此处可以设置传过来的图片的IP地址，并通过:style="{backgroundImage: 'url(' + bgImageUrl + ')'}"设置背景
      // bgImageUrl: 'https://picsum.photos/200/300'
    }
  },
  methods: {
    clickContentLi (index, eleIndex) {
      // 用来计算自己是第几个li
      // let items = 0
      // for (let i = 0; i < index; i++) {
      //   items = items + this.navList[i].children.length
      // }
      // 将父级标题算在内
      // items = items + index
      // 将自己算进来
      // items = items + eleIndex + 1
      // this.$message(`data-${items}`)
      // this.triggerScroll(items)
    },
    // 处理点击事件
    clickContentSpan (index) {
      // let dataIndex = 0
      // if (index > 0) {
      //   dataIndex = this.navList[index - 1].children.length + 1
      // }
      // this.triggerScroll(dataIndex)
    },
    // 滚动条滚动方法
    triggerScroll (index) {
      // 页面的总高度
      const totalHeight = document.getElementsByClassName('blogPage')[0].scrollHeight
      // 视图高度
      const viewHeight = document.body.scrollHeight
      // 获取占比
      const ratio = (totalHeight / viewHeight).toFixed(2)
      // 要滚动的高度
      const scrollH = document.getElementById(`data-${index}`).offsetTop + document.getElementsByClassName('blogheader')[0].scrollHeight
      // 本身的scrollTop
      let top = document.getElementsByClassName('blogPage')[0].scrollTop
      //滚动条要滚动的高度
      let scrollBar = parseInt(scrollH / ratio)
      
      // 如果需要滚动的高度 < scrollTop
      if (scrollBar < top) {
        let timer = setInterval(() => {
          if (document.getElementsByClassName('blogPage')[0].scrollTop - 50 <= scrollBar) {
            document.getElementsByClassName('blogPage')[0].scrollTop = scrollBar
            clearInterval(timer)
          } else {
            document.getElementsByClassName('blogPage')[0].scrollTop = document.getElementsByClassName('blogPage')[0].scrollTop - 50
          }
        }, 30) 
      }  else {
        let timer = setInterval(() => {
          if (document.getElementsByClassName('blogPage')[0].scrollTop + 50 >= scrollBar) {
            document.getElementsByClassName('blogPage')[0].scrollTop = scrollBar
            clearInterval(timer)
          } else {
            document.getElementsByClassName('blogPage')[0].scrollTop = document.getElementsByClassName('blogPage')[0].scrollTop + 50
          }
        }, 30) 
      }
    },
    // 将8位字符串转换为日期字符串
    convertToDateStr (dateStr) {
      let str = dateStr.substring(0,4) + '年' + dateStr.substring(4, 6) + '月' + dateStr.substring(6, 8) + '日'
      return str
    },
    // 从marddown字符串中获取到h1和h2的标题
    getTitle(content) {
      let nav = [];
      let tempArr = [];
      content.replace(/(#+)[^#][^\n]*?(?:\n)/g, function(match, m1) {
        let title = match.replace('\n', '');
        let level = m1.length;
        tempArr.push({
            title: title.replace(/^#+/, '').replace(/\([^)]*?\)/, ''),
            level: level,
            children: [],
        })
      })
      // 对1,2级别标题进行处理
      nav = tempArr.filter(item => item.level <= 2)
      let index = 0
      return nav.map(item => {
        item.index = index++
        return item
      })
    },
    // 将1,2级标题处理为树状结构
    handleNavTree () {
      let navs = this.getTitle(this.mdStr)
      let navLevel = [1, 2]
      let retNavs = []
      let toAppendNavList
      navLevel.forEach(level => {
        toAppendNavList = this.find(navs, {
          level: level
        })
        if (retNavs.length === 0) {
          retNavs = retNavs.concat(toAppendNavList)
          console.log(retNavs)
        } else {
          toAppendNavList.forEach(item => {
            let parentNavIndex = this.getParentIndex(navs, item.index)
            this.appendToParentNav(retNavs, parentNavIndex, item)
          })
        }
      })
      return retNavs
    },
    appendToParentNav (nav, parentIndex, newNav) {
      let index = this.findIndex(nav, parentIndex)
      nav[index].children = nav[index].children.concat(newNav)
    },
    findIndex (attr, parentIndex) {
      let ret
      attr.forEach((item, index) => {
        if (item.index === parentIndex) {
          ret = index
        }
      })
      return ret
    },
    find (attr, condition) {
      return attr.filter(item => {
        for (let key in condition) {
          if (condition[key] !== item[key]) {
            // 如果level不同则返回false
            return false
          }
        }
        return true
      })
    },
    getParentIndex (nav, endIndex) {
      for (let i = endIndex - 1; i >= 0; i--) {
        if (nav[endIndex].level > nav[i].level) {
          console.log(nav[i].index)
          return nav[i].index
        }
      }
    }
  },
  created () {
    this.$axios.get('/blog').then(res => {
      this.blog = res.data
      this.blog.publish = this.convertToDateStr(this.blog.publish)
      this.mdStr = this.blog.content
      let index = 0
      renderMd.heading = function (text, level) {
        if (level <= 2) {
          return `<h${level} id="data-${index++}">${text}</h${level}>`
        } else {
          return `<h${level}>${text}</h${level}>`
        }
      }
      renderMd.code = function (code, language) {
        code = code.replace(/\r\n/g, '<br>')
        code = code.replace(/\n/g, '<br>')
        return `<div class='text'>${code}</div>`
      }
      this.blog.content = marked(this.blog.content)
      this.navList = this.handleNavTree()
    }).catch(error => {
      this.$message(error + '')
    })
  },
  mounted () {
  }
}
</script>

<style scoped>
.blogPage{
  width: 100%;
  height: 100vh;
  overflow: scroll;
  -webkit-user-select: none;
}
.blogheader{
  width: 100%;
  height: 45%;
  background-image: url('~@/assets/duty.jpg');
  background-size: cover;
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
  width: 75%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 3%;
}
.blogbody{
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  position: relative;
  /* align-items: center; */
  background-color: rgba(0, 0, 0, 0.1)
}
.blogSideContent{
  width: 25%;
  height: 100%;
  padding-top: 3%;
  top: 0%;
  position: sticky;
}
.mdStyle{
  width: 100%;
  line-height: 30px;
  font-size: 0.8em;
  word-wrap: break-word;
  text-align: left;
  padding-top: 3%;
  padding-right: 3%;
  padding-left: 3%;
}
.child{
  padding-left: 5px;
}
.content{
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
}
.content:first-child{
  margin-top: 5px;
}
.content ul{
  list-style: none;
  text-align: left;
  box-sizing: border-box;
  padding-left: 2em;
  width: 100%;
}
.content ul li{
  width: 90%;
  height: 1.8em;
  line-height: 1.8em;
  font-size: 0.9em;
  cursor: pointer;
  transition: all 0.2s linear;
}
.content ul li:hover{
  background-color: cornflowerblue;
  color: aliceblue;
}
.cardStyle{
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
}
.content-title{
  width: 95%;
  color: #253f50;
  text-align: left;
  padding-left: 10px;
  line-height: 2.0em;
  font-weight: 540;
  transition: all 0.3s linear;
}
.content-title:hover{
  background-color: cornflowerblue;
  color: white;
}
.topTitle{
  width: 100%;
  height: 40px;
  margin-top: 5px;
  margin-left: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.topTitle span{
  color: #253f50;
  line-height: 40px;
  margin-left: 4px;
  font-size: 1.4em;
}
</style>
