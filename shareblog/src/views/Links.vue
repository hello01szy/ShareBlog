<template>
  <div class="container">
    <Header></Header>
    <div class="cards">
      <div class="card" v-for="(item, index) in linksData" :key="index">
        <span v-html="item.svg"></span>
        <span><a :href='item.url'>{{ item.title }}</a></span>
      </div>
    </div>
    <Loading :hide='loading'></Loading>
  </div>
</template>
<script>
import Header from '@/views/components/Header'
import Loading from '@/components/Loading'
export default {
  name: 'Links',
  data () {
    return {
      linksData: [],
      loading: true
    }
  },
  components: {
    Header: Header,
    Loading: Loading
  },
  created () {
    this.loading = false
    this.$axios.get('/getLinks', {}).then(res => {
      this.linksData = res.data
      this.loading = true
    }).catch(error => {
      this.$message(error)
      this.loading = true
    })
  }
}
</script>
<style scoped>
  .container{
    width: 100vw;
    height: 100vh;
    min-width: 1072px;
    min-height: 560px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-image: url('~@/assets/itach.jpg');
  }
  .cards{
    width: 95%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 20px;
  }
  .card{
    background-color: rgba(255, 255, 255, 0.6);
    width: 18%;
    margin-top: 8px;
    height: 100px;
    border-radius: 3px;
    transition: all 0.4s linear;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding-left: 10px;
    padding-right: 10px;
    cursor: pointer;
    margin-right: 5px;
  }
  .card span{
    z-index: 10;
    font-size: 0.8em;
  }
  .card a{
    color: #333333;
    text-decoration: none;
  }
  .card::after{
    content: '';
    position: absolute;
    top: 0%;
    left: 0%;
    height: 100%;
    width: 100%;
    border-radius: 3px;
    background-color: #95afc0;
    transform-origin: left;
    transform: scaleX(0);
    transition: all 0.3s ease;
  }
  .card:hover::after{
    transform: scaleX(1);
  }
</style>
