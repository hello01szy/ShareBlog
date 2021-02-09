<template>
  <div class="container">
    <div class="search-box">
      <input :class="{typer:true, hide:hide}" type="text" placeholder="请输入关键字，回车搜索" @blur="typeBlur" v-model="keywords" @keyup.enter="searchFromNet()">
      <i class="fa fa-search" aria-hidden="true" @click="search"> 搜文章</i>
    </div>
    <div :class="{searchresult:true, hide: searchResultHide}">
      <ul>
        <li>
          张三
        </li>
        <li>
          里斯
        </li>
        <li>
          王五
        </li>
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
      searchResultHide: true,
      keywords: '',
      results: []
    }
  },
  methods: {
    search () {
      this.hide =  false
      document.getElementsByClassName('typer')[0].focus()
    },
    typeBlur () {
      this.hide = true
    },
    searchFromNet () {
      console.log(this.keywords)
      this.$axios.post('/search', {
        'keywords': this.keywords
      }).then(res => {
        this.results = res.data
        console.log(this.results)
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
    width: 200px;
    background-color: blue;
    display: none;
  }
  .container{
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: flex-start;
  }
  .search-box{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 300px;
    border-radius: 3px;
  }
  .typer{
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid gray;
    background-color: transparent;
    outline: none;
    width: 60%;
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