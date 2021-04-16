<template>
  <div class="wordboard">
    <Header></Header>
    <div class="feedback">
      <div class="message">
        <div class="info">
          <div class="word_avator"></div>
          <div class="spanInput">
            <span>昵称</span>
            <input type="text" style="width: 70%; height: 30px" placeholder="必填" />
          </div>
          <div class="spanInput">
            <span>邮箱</span>
            <input type="text" style="width: 70%; height: 30px" placeholder="必填" />
          </div>
          <div class="spanInput">
            <span>网址</span>
            <input type="text" style="width: 70%; height: 30px" placeholder="选填" />
          </div>
        </div>
      </div>
    </div>
    <div class="text">
      <div class="input">
        <textarea name="words" id="heartword" rows="5"></textarea>
      </div>
      <div class="btn-submit">
        <div class="btn-box">
          <button class="submit">提交</button>
        </div>
      </div>
    </div>
    <div class="item" v-for="(item, index) in wordsData" :key='index'>
      <div class="message">
        <div class="info">
          <div :style="{backgroundImage:'url(' + item.avatorUrl + ')'}" class="word_avator"></div>
          <div class="messagerinfo">
            <div class="nick">{{ item.nickName }}</div>
            <div class="publishTime">{{ item.publishTime }}</div>
          </div>
          <div class="admire">
            <div class="pointer"></div>
            <div class="msg"></div>
          </div>
        </div>
        <div class="inpt">
          <span>{{ item.words }}</span>
        </div>
      </div>
    </div>
    <Loading :hide='hide'></Loading>
  </div>
</template>
<script>
import Header from '@/views/components/Header'
import Loading from '@/components/Loading'
import { parseStrToDate } from '../../util'
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
        console.log(this.wordsData)
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
        item.publishTime = parseStrToDate(item.publishTime)
      })
    }
  }
}
</script>
<style scoped>
  .wordboard{
    width: 100vw;
    height: 100vh;
    min-width: 1072px;
    min-height: 560px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    background:linear-gradient(to right, #bb313e25, #bb313e25, #d7222925, #dd4a1625, #e4761525, #f5c50025, #f0e92725, #b1ce2425, #48a93525, #03944525, #157c4f25, #176a5825, #1b556325, #1d386f25, #1d386f25, #20277825, #52266325, #8a244b25);
  }
  .feedback{
    width: 90%;
    margin-top: 2%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .item{
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    margin-top: 20px;
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
    padding-left: 4%;
  }
  .txt{
    outline: none;
    border: none;
    background-color: transparent;
  }
  .word_avator{
    width: 40px;
    height: 40px;
    margin-right: 10px;
    background-image: url('~@/assets/user.png');
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 100%;
  }
  .message{
    width: 80%;
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
  }
  .info span{
    height: 30px;
    background-color: #f1f1f2;
    display: inline-block;
    text-align: center;
    width: 60px;
    border: 1px solid #dcdddf;
    border-top-left-radius: .066667rem;
    border-bottom-left-radius: .066667rem;
    line-height: 30px;
  }
  .info input{
    border: 1px solid #dcdddf;
    outline: none;
    padding-left: 4px;
    font-size: 0.8em;
    color: #1e1e1e;
    transition: all 0.2s linear;
    border-top-right-radius: .066667rem;
    border-bottom-right-radius: .066667rem;
  }
  .info input:focus{
    border: 1px solid #00a0ff;
  }
  .nick{
    font-size: 0.9em;
    font-weight: bold;
    color: gray;
  }
  .spanInput{
    width: 35%;
    height: auto;
    display: flex;
    justify-content: left;
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
  .input{
    width: 100%;
    height: 75%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  textarea{
    width: 80%;
    height: 90%;
    margin-top: 5px;
    outline: none;
    resize: none;
    border-color:gray;
    font-size: 0.8em;
    padding: 3px 3px;
    font-family: '微软雅黑';
    background-image: url(~@/assets/writeboard.png);
    /* background-attachment: fixed; */
    background-position: right;
    background-repeat: no-repeat;
    /* background-position: right top; */
    
  }
  textarea:focus{
    border-color: #00a0ff;
  }
  .submit{
    width: 60px;
    height: 30px;
    margin-top: 5px;
    outline: none;
    background-color: #00a0ff;
    border: none;
    border-radius: 2px;
    color: white;
  }
  .submit:hover{
    background-color: #22b9ff;
  }
  .text{
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .btn-submit{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .btn-box{
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 3px;
  }
  .submit:hover{
    cursor: pointer;
  }
</style>
