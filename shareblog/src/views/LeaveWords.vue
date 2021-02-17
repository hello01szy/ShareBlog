<template>
  <div class="wordboard">
    <Header></Header>
    <div class="item" v-for="(item, index) in wordsData" :key='index'>
      <div :style="{backgroundImage:'url(' + item.avatorUrl + ')'}" class="word_avator"></div>
      <div class="message">
        <div class="info">
          <div class="messagerinfo">
            <div class="nick">{{ item.nickName }}</div>
            <div class="publishTime">2021年2月16日</div>
          </div>
          <div class="admire">
            <div class="pointer"></div>
            <div class="msg"></div>
          </div>
        </div>
        <div class="inpt">
          <span>多年未见，希望归来仍是少年</span>
        </div>
      </div>
    </div>
    <Loading :hide='hide'></Loading>
  </div>
</template>
<script>
import Header from '@/views/components/Header'
import Loading from '@/components/Loading'
export default {
  name: 'words',
  components: {
    Header: Header,
    Loading: Loading
  },
  data () {
    return {
      wordsData: [],
      hide: true,
      bgImg: ''
    }
  },
  created () {
    this.getWords()
  },
  mounted () {
  },
  methods: {
    getWords () {
      this.hide = false
      this.$axios.get('/getWords', {}).then(res => {
        this.wordsData = res.data
        this.getQQ(this.wordsData)
        this.hide = true
      }).catch(error => {
        this.hide = true
        this.$message(error)
      })
    },
    getQQ (data) {
      data.map(item => {
        const qq = item.email.split('@')[0]
        item.avatorUrl = 'http://q2.qlogo.cn/headimg_dl?dst_uin=' + qq + '&spec=2'
      })
    }
  }
}
</script>
<style scoped>
  .wordboard{
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    background:linear-gradient(to right, #bb313e25, #bb313e25, #d7222925, #dd4a1625, #e4761525, #f5c50025, #f0e92725, #b1ce2425, #48a93525, #03944525, #157c4f25, #176a5825, #1b556325, #1d386f25, #1d386f25, #20277825, #52266325, #8a244b25);
  }
  .item{
    width: 80%;
    height: 20%;
    box-sizing: border-box;
    padding: 5px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    margin-top: 10px;
  }
  .inpt{
    width: 100%;
    height: auto;
    box-sizing: border-box;
    padding-right: 5px;
    text-align: left;
    font-size: 0.6em;
    overflow: auto;
    margin-top: 2%;
  }
  .txt{
    outline: none;
    border: none;
    background-color: transparent;
  }
  .word_avator{
    width: 40px;
    height: 40px;
    background-image: url('http://q2.qlogo.cn/headimg_dl?dst_uin=2856039370&spec=2');
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 100%;
  }
  .message{
    width: 80%;
    height: 95%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 5px;
  }
  .info{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 25%;
  }
  .nick{
    font-size: 0.9em;
    font-weight: bold;
    color: gray;
  }
  .publishTime{
    font-size: 0.8em;
    color: gray;
    margin-left: 2%;
    margin-top: 1%;
  }
  .messagerinfo{
    width: 50%;
    height: 80%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
  .admire{
    width: 50%;
    height: 80%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
</style>