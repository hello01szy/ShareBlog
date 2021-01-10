<template>
  <button @click="follow" ref="mybtn" @mouseover="mouseOver" @mouseleave="mouseLeave" :style="{width:bwidth, height:bheight, backgroundColor: preBg}">
    <i :class="icon" aria-hidden="true" :style="{fontSize: iconSize, color: iconColor}"></i><slot><span :style="{fontSize:spanFontSize, color:spanFontColor}">Follow</span></slot>
  </button>
</template>

<script>
export default {
  name: 'BgExpandBtn',
  props: {
    // 按钮宽度
    bwidth: String,
    // 按钮高度
    bheight: String,
    // 按钮鼠标移入之前颜色
    preBg: {
      type: String,
      default: '#353b48'
    },
    // 按钮鼠标移入之后颜色
    afBg: String,
    // 定义按钮图标
    icon: String,
    // 定义图标和字体的大小的变量
    iconSize: String,
    // 定义字体大小
    spanFontSize: String,
    // 定义span字体颜色
    spanFontColor: String,
    // 定义icon的颜色
    iconColor: String
  },
  methods: {
    mouseOver (event) {
      this.$refs.mybtn.style.backgroundColor = this.afBg
    },
    mouseLeave (event) {
      this.$refs.mybtn.style.backgroundColor = this.preBg
    },
    follow () {
      this.$axios.get('/blog/test', {
        params: {
        }
      }).then(res => {
        console.log('success')
        console.log(res)
      }).catch(error => {
        console.log('error')
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
  button{
    height: 35px;
    width: 80%;
    background-color:#353b48;
    outline: none;
    border: none;
    transition: all 0.5s ease-in-out;
    border-radius: 3px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  button span{
    margin-left: 6px;
    font-size: 0.9em;
    color: #ffffff;
  }
  i{
    font-size: 1.5em;
    color: #ffffff;
  }
</style>
