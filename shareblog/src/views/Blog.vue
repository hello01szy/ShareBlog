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
      <div class="blogSideContent">
        <Card></Card>
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
      // 在此处可以设置传过来的图片的IP地址，并通过:style="{backgroundImage: 'url(' + bgImageUrl + ')'}"设置背景
      // bgImageUrl: 'https://picsum.photos/200/300'
    }
  },
  methods: {
    // 将8位字符串转换为日期字符串
    convertToDateStr (dateStr) {
      let str = dateStr.substring(0,4) + '年' + dateStr.substring(4, 6) + '月' + dateStr.substring(6, 8) + '日'
      return str
    },
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
        });
      });
      // 对1,2级别标题进行处理
      nav = tempArr.filter(item => item.level <= 2)
      let index = 0
      return nav.map(item => {
        item.index = index++
        return item
      })
    }
  },
  created () {
    this.$axios.get('/blog').then(res => {
      this.blog = res.data
      this.blog.publish = this.convertToDateStr(this.blog.publish)
    }).catch(error => {
      this.$message.info(error)
    })
  },
  mounted () {
  },
  watch: {
    blog (val) {
      this.blog = val
      let index = 0;
      renderMd.heading = function(text, level) {
          if (level <= 2) {
              return `<h${level} id="data-${index++}">${text}</h${level}>`;
          } else {
              return `<h${level}>${text}</h${level}>`;
          }
      };
      renderMd.code = function(code, language) {  
          code = code.replace(/\r\n/g,"<br>")
          code = code.replace(/\n/g,"<br>");
          return `<div class="text">${code}</div>`;
      };
      this.blog.content = marked(this.blog.content)
      console.log(this.blog.content)
      console.log(this.getTitle(this.blog.content))
    }
  }
}
</script>

<style scoped>
.blogPage{
  width: 100%;
  height: 100vh;
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
  /* align-items: center; */
  background-color: rgba(0, 0, 0, 0.1)
}
.blogSideContent{
  width: 25%;
  height: 100%;
  padding-top: 3%;
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
</style>
