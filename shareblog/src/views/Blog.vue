<template>
  <div class="blogPage">
    <div class="blogheader">
      <Header></Header>
      <div class="blogheadercover">
        <h2>{{ blog.title }}</h2>
        <span>{{ blog.tag }} | {{ blog.publish }}</span>
      </div>
    </div>
    <div class="blogbody">
      <div class="blogContainer">
        <Card :childHeight="blogCardHeight" class="blog-card">
          <template v-slot:blog>
            <div v-html="blog.content" class="mdStyle">
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
      blog: Object,
      blogCardHeight: 'auto'
    }
  },
  created () {
    this.$axios.get('/blog').then( res => {
      this.blog = res.data
    }).catch(error => {
      this.$message.info(error)
    })
  },
  watch: {
    blog (val) {
      this.blog = val
      this.blog.content = marked(this.blog.content)
    }
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
.blogheadercover h2, span{
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
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1)
}
.blogSideIntroduction{
  width: 25%;
  height: 100%;
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
