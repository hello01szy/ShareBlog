<template>
  <div class="container">
    <div class="search-box">
      <input :class="{typer:true, hide:hide}" type="text" placeholder="请输入关键字，回车搜索" @blur="typeBlur" v-model="keywords" @keyup.enter="searchFromNet()">
      <i class="fa fa-search" aria-hidden="true" @click="search"> 搜文章</i>
    </div>
    <div :class="{searchresult:true, novisiable:novisible}">
      <ul>
        <li v-for="(item, index) in results" :key="index">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBtn',
  data () {
    return {
      hide: true,
      keywords: '',
      results: [],
      novisible: false
    }
  },
  methods: {
    search () {
      this.hide = false
      document.getElementsByClassName('typer')[0].focus()
    },
    typeBlur () {
      this.hide = true
      this.novisible = true
    },
    searchFromNet () {
      this.$axios.post('/search', {
        'keywords': this.keywords
      }).then(res => {
        this.results = res.data
        this.novisible = false
      }).catch(error => {
          this.$message({
          showClose: true,
          message: error
        })
      })
    }
  }
}
</script>

<style scoped>
  .searchresult{
    width: 80%;
    height: auto;
    position: absolute;
    top: 35px;
    left: 2%;
    list-style: none;
    color: aliceblue;
    transition: all 0.2s linear;
    background-color: rgba(50, 50, 50, 0.5);
    overflow: auto;
  }
  .novisiable{
    display: none;
  }
  .searchresult ul{
    list-style: none;
    border-radius: 3px;
  }
  .searchresult li{
    height: 30px;
    line-height: 30px;
    font-size: 0.8em;
  }
  .searchresult li:hover{
    background-color: rgba(20, 20, 20, 0.5);
    color: white;
  }
  .container{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    height: auto;
  }
  .search-box{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: auto;
    border-radius: 3px;
    color: #d5cfcf;
    font-size: 0.9em;
  }
  .search-box i{
    cursor: pointer;
  }
  .search-box input{
    color: #d5cfcf;
  }
  .typer{
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid gray;
    background-color: transparent;
    outline: none;
    width: 70%;
    height: 20px;
    margin-right: 5px;
    transition: all 0.4s ease;
  }
  .typer:focus{
    border-bottom: 1px solid #00a8ff;
  }
  .hide{
    width: 0px;
  }
</style>