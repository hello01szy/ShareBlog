<template>
  <div class="page">
    <div class="skipDiv">
      <span id="pageSumLabel">共 {{ totalPage }} 页</span>
      <span id="pageInput">跳转至<input class="skip" autocomplete="off" @keydown="doEnter" />页</span>
    </div>
    <ul class="page-ul">
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Page',
  data () {
    return {
      totalPage: this.total,
      pageSize: this.size,
      currentPageIndex: this.currentPage
    }
  },
  props: {
    total: {
      type: Number,
      default: 21
    },
    size: {
      type: Number,
      default: 5
    },
    currentPage: {
      type: Number,
      default: 1
    }
  },
  watch: {
    total (newTotal, oldTotal) {
      this.totalPage = newTotal
      this.paging(this.currentPageIndex, this.pageSize, this.totalPage)
    }
    // immediate: true
  },
  methods: {
    paging (currentPage, pageSize, total) {
      const pageElement = document.getElementsByClassName('page-ul')[0]
      pageElement.innerHTML = ''
      const backBtn = document.createElement('li')
      backBtn.innerHTML = '<i class="fa fa-angle-double-left" aria-hidden="true"></i>'
      backBtn.setAttribute('action', 'back')
      backBtn.addEventListener('click', () => {
        currentPage = currentPage - 1
        this.paging(currentPage, pageSize, total)
      })
      if (currentPage === 1) {
        backBtn.classList.add('disabled')
      }
      pageElement.appendChild(backBtn)
      // 用来记录当页展示的个数是不是大于一页应显示的数据，如果大于则直接创建pagesize数量的页码，否则则要根据currentPage来创建第一个页码
      let startPage = Math.floor((currentPage - 1) / pageSize) * pageSize + 1
      const count = total + 1 - startPage
      let endPage = 0
      if (count <= pageSize) {
        startPage = total - pageSize + 1
        if (startPage <= 0) {
          startPage = 1
        }
        endPage = total + 1
      } else {
        endPage = startPage + pageSize
      }
      for (let i = startPage; i < endPage; i++) {
        const li = document.createElement('li')
        li.innerText = i
        if (currentPage === i) {
          li.classList.add('selected')
        }
        li.setAttribute('action', i)
        // 为每个li添加事件响应
        li.addEventListener('click', () => {
          currentPage = parseInt(li.getAttribute('action'))
          this.paging(currentPage, pageSize, total)
        })
        pageElement.appendChild(li)
      }
      const forwardBtn = document.createElement('li')
      if (currentPage === total) {
        forwardBtn.classList.add('disabled')
      }
      forwardBtn.innerHTML = '<i class="fa fa-angle-double-right" aria-hidden="true"></i>'
      forwardBtn.addEventListener('click', () => {
        currentPage = currentPage + 1
        this.paging(currentPage, pageSize, total)
      })
      pageElement.appendChild(forwardBtn)
      this.currentPageIndex = currentPage
      this.$emit('dopage', this.currentPageIndex, this.pageSize)
    },
    doEnter (event) {
      if (event.keyCode === 13) {
        const obj = document.getElementsByClassName('skip')[0]
        const value = parseInt(document.getElementsByClassName('skip')[0].value)
        if (value > this.totalPage) {
          // 如果输入值过大，添加提示样式
          obj.classList.add('validValue')
          this.currentPageIndex = this.totalPage
        } else if (value <= 0) {
          obj.classList.add('validValue')
          this.currentPageIndex = 1
        } else {
          if (obj.classList.contains('validValue')) {
            obj.classList.remove(['validValue'])
          }
          this.currentPageIndex = value
        }
        this.paging(this.currentPageIndex, this.pageSize, this.totalPage)
      }
    }
  },
  mounted () {
    this.paging(this.currentPageIndex, this.pageSize, this.totalPage)
  }
}
</script>

<style>
  .page{
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* -moz-user-select: none; */
  }
  .page-ul{
    display: flex;
    width: 50%;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    list-style: none;
    -webkit-user-select: none;
    /* -moz-user-select: none; */
  }
  .page-ul li{
    list-style: none;
    width: 6%;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: red; */
    transition: all 0.2s linear;
  }
  .page-ul li:hover{
    background-color: #353b48;
    cursor: pointer;
    color: #ffffff;
  }
  .disabled{
    pointer-events: none;
  }
  .selected{
    background-color: #353b48;
    color: #ffffff;
  }
  .skipDiv{
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    line-height: 25px;
  }
  .skip{
    outline: none;
    border: 1px solid #253f50;
    height: 25px;
    width: 30px;
    padding-left: 4px;
    border-radius: 2px;
    margin-left: 4px;
    margin-right: 4px;
    color: #253f50;
  }
  #skip:focus{
    border: 1px solid #00a0ff;
    transition: all 0.2s linear;
  }
  #pageSumLabel{
    margin-right: 15px;
  }
  #pageInput{
    margin-right: 10px;
  }
  .validValue{
    border: 1px solid #e74c3c;
    color: #e74c3c;
  }
</style>
