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
    </div>
  </div>
</template>

<script>
import Header from '@/views/components/Header'
import Card from '@/views/components/Card'
export default {
  name: 'Blog',
  components: {
    Header: Header,
    Card: Card
  },
  data () {
    return {
    }
  },
  methods: {
  },
  created () {
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
