<template>
  <div class="about">
    <Header :childSticky="sticky" :childMenuDissipate="menuDissipate" :childDissipate="dissipate"></Header>
    <div class="desc">
      <span>大家好！</span><br>
      <span id="abouut-content">本站是个人开发的一个参考Hexo风格的博客系统。一方面是为了记录自己在学习和工作过程中遇到的问题，并和大家一起分享
      ，另一方面是为了练习巩固自己所学到的知识，希望和大家一起进步！<svg t="1610894782625" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2759" width="24" height="24"><path d="M448 896h128v64H448zM576 832h64v64H576z" fill="#F7FEFF" p-id="2760"></path><path d="M448 832h128v64H448z" fill="#231E2B" p-id="2761"></path><path d="M384 832h64v64H384zM640 768h64v64h-64z" fill="#F7FEFF" p-id="2762"></path><path d="M576 768h64v64H576zM384 768h64v64H384z" fill="#231E2B" p-id="2763"></path><path d="M320 768h64v64H320zM704 704h64v64h-64z" fill="#F7FEFF" p-id="2764"></path><path d="M640 704h64v64h-64z" fill="#231E2B" p-id="2765"></path><path d="M384 704v64h64v64h128v-64h64v-64H384z" fill="#892727" p-id="2766"></path><path d="M320 704h64v64H320z" fill="#231E2B" p-id="2767"></path><path d="M256 704h64v64H256zM768 640h64v64h-64z" fill="#F7FEFF" p-id="2768"></path><path d="M704 640h64v64h-64z" fill="#231E2B" p-id="2769"></path><path d="M640 640h64v64h-64zM320 640h64v64H320z" fill="#892727" p-id="2770"></path><path d="M256 640h64v64H256z" fill="#231E2B" p-id="2771"></path><path d="M192 640h64v64H192zM832 576h64v64h-64z" fill="#F7FEFF" p-id="2772"></path><path d="M768 576h64v64h-64z" fill="#231E2B" p-id="2773"></path><path d="M704 576h64v64h-64zM256 576h64v64H256z" fill="#892727" p-id="2774"></path><path d="M192 576h64v64H192z" fill="#231E2B" p-id="2775"></path><path d="M128 576h64v64H128zM896 512h64v64h-64z" fill="#F7FEFF" p-id="2776"></path><path d="M832 512h64v64h-64z" fill="#231E2B" p-id="2777"></path><path d="M768 512h64v64h-64zM192 512h64v64H192z" fill="#892727" p-id="2778"></path><path d="M128 512h64v64H128z" fill="#231E2B" p-id="2779"></path><path d="M64 512h64v64H64z" fill="#F7FEFF" p-id="2780"></path><path d="M832 448h64v64h-64zM128 448h64v64H128z" fill="#892727" p-id="2781"></path><path d="M64 256h64v256H64zM896 256h64v256h-64z" fill="#231E2B" p-id="2782"></path><path d="M0 256h64v256H0z" fill="#F7FEFF" p-id="2783"></path><path d="M448 320h128v64H448z" fill="#CF6B55" p-id="2784"></path><path d="M960 256h64v256h-64z" fill="#F7FEFF" p-id="2785"></path><path d="M832 256h64v64h-64z" fill="#CF6B55" p-id="2786"></path><path d="M832 256h-192v64H576v64H448V320H384V256H192v64H128v128h64v64h64v64h64v64h64v64h256v-64h64V576h64V512h64V448h64V320h-64V256z" fill="#B0392E" p-id="2787"></path><path d="M576 256h64v64H576z" fill="#CF6B55" p-id="2788"></path><path d="M448 256h128v64H448z" fill="#231E2B" p-id="2789"></path><path d="M384 256h64v64H384zM128 256h64v64H128z" fill="#CF6B55" p-id="2790"></path><path d="M896 192h64v64h-64z" fill="#F7FEFF" p-id="2791"></path><path d="M832 192h64v64h-64z" fill="#231E2B" p-id="2792"></path><path d="M640 192h192v64h-192z" fill="#CF6B55" p-id="2793"></path><path d="M576 192h64v64H576z" fill="#231E2B" p-id="2794"></path><path d="M448 192h128v64H448z" fill="#F7FEFF" p-id="2795"></path><path d="M384 192h64v64H384z" fill="#231E2B" p-id="2796"></path><path d="M192 192h192v64H192z" fill="#CF6B55" p-id="2797"></path><path d="M128 192h64v64H128z" fill="#231E2B" p-id="2798"></path><path d="M64 192h64v64H64zM832 128h64v64h-64z" fill="#F7FEFF" p-id="2799"></path><path d="M640 128h192v64h-192z" fill="#231E2B" p-id="2800"></path><path d="M576 128h64v64H576zM384 128h64v64H384z" fill="#F7FEFF" p-id="2801"></path><path d="M192 128h192v64H192z" fill="#231E2B" p-id="2802"></path><path d="M128 128h64v64H128zM640 64h192v64h-192zM192 64h192v64H192z" fill="#F7FEFF" p-id="2803"></path></svg></span>
    </div>
  </div>
</template>
<script>
import Header from '@/views/components/Header'
export default {
  name: 'About',
  data () {
    return {
      dissipate: false,
      sticky: false,
      menuDissipate: false
    }
  },
  components: {
    'Header' : Header,
  },
  mounted () {
    let obj = document.getElementsByClassName('about')[0]
    obj.style.backgroundPositionX = 0 + 'px'
    obj.style.backgroundPositionY = 0 + 'px'
    window.onmousemove = (e) => {
      let x = -e.clientX / 50, y = -e.clientY / 50
      obj.style.backgroundPositionX = x + 'px'
      obj.style.backgroundPositionY = y + 'px'
    }
    window.onmouseout = (e) => {
      obj.style.backgroundPositionX = 0 + 'px'
      obj.style.backgroundPositionY = 0 + 'px'
    }
  }
}
</script>
<style>
  .about{
    width: 100vw;
    height: 100vh;
    background-image: url('~@/assets/about-bg.jpg');
    background-position: center;
    background-size: 105%;
    background-repeat: no-repeat;
    position: relative;
    overflow-x: hidden; 
    transition: all 0.2s linear;
  }
  .desc{
    position: absolute;
    top: 50%;
    left: 50%;
    text-align: left;
    line-height: 1.8em;
    transform: translateX(-50%) translateY(-50%);
    color: aliceblue;
  }
  #abouut-content{
    text-indent: 2em;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
</style>
