<template>
  <div class="blogPage">
    <div class="blogheader">
      <Header></Header>
      <div class="blogheadercover">
        <h1>Hello My Blog</h1>
        <h4>This is his first blog</h4>
      </div>
    </div>
    <div class="blogbody">
      <div class="blogContainer">
        <Card>
          <template v-slot:blog>
            <div v-html="convertToHtml" style="width: 90%; height: 90%;">
            </div>
          </template>
        </Card>
      </div>
      <div class="blogSideIntroduction">
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/views/components/Header'
import Card from '@/views/components/Card'
import marked from 'marked'
export default {
  name: 'Blog',
  components: {
    Header: Header,
    Card: Card
  },
  data () {
    return {
      'blog': '### Hello How are **you**'
    }
  },
  computed: {
    convertToHtml () {
      this.blog = marked(this.blog)
      console.log(this.blog)
      return this.blog
    }
  },
  mounted () {
    const link = document.createElement('link')
    link.type = 'text/css'
    link.rel = 'stylesheet'
    link.href = 'https://cdn.bootcss.com/github-markdown-css/2.10.0/github-markdown.min.css'
    document.head.appendChild(link)
  }
}
</script>

<style>
.blogPage{
  width: 100%;
  height: 100vh;
}
.blogheader{
  width: 100%;
  height: 45%;
  background-image: url('~@/assets/family.jpg');
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
.blogheadercover h1, h4{
  color: white;
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
  height: 55%;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.blogSideIntroduction{
  width: 25%;
  height: 100%;
}
</style>