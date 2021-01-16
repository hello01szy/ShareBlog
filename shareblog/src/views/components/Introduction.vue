<template>
  <div class="outer">
    <Card :childWidth=childWidth :childHeight=childHeight>
      <template v-slot:blog>
        <div class="introduction">
          <div class="avator"></div>
          <div class="slagon">
            <h4>hello01szy</h4>
            <span>不忘初心，牢记使命</span>
          </div>
          <div class="blog-attributes">
            <table border="0" style="width: 90%">
              <tr>
                <th>文章</th>
                <th>标签</th>
                <th>分类</th>
              </tr>
              <tr>
                <td><a href="#">100</a></td>
                <td><a href="#">100</a></td>
                <td><a href="#">100</a></td>
              </tr>
            </table>
          </div>
          <div class="follow-btn">
            <!-- <button><i class="fa fa-github" aria-hidden="true"></i> <span>Follow</span></button> -->
            <BgExpandBtn :icon="childIcon" :iconColor="iconColor" :afBg="afBg"></BgExpandBtn>
          </div>
          <div class="recommand">
            <div class="recommand-icon"><a href=""><svg t="1609566163544" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5278" width="25" height="25"><path d="M828.35662439 337.92656377c0 169.48044375-137.88239531 305.92656374-308.79911342 305.92656465S210.75839657 505.97073312 210.75839657 337.92656377C210.75839657 169.88239531 348.64079187 32.00000001 519.55751093 32.00000001s308.79911438 137.88239531 308.79911344 305.92656376" fill="#1296db" p-id="5279"></path><path d="M272.51821903 448.51973562c0 37.34314875-18.67157438 66.06864749-41.65197277 66.06864749-22.98039937 0-41.65197375-30.16177405-41.65197375-66.06864749 0-37.34314875 18.67157438-66.06864749 41.65197375-66.06864843 22.98039937-1.4362753 41.65197375 28.72549875 41.65197282 66.06864844M189.21427251 925.36301844c7.18137469 45.96079875 83.3039475 74.6862975 170.91671905 64.63237218 87.61277156-10.05392437 153.68142-54.5784478 147.9363197-99.10297125-7.18137469-45.96079875-83.3039475-74.6862975-170.91671906-64.6323722-89.04904688 8.61765001-155.1176944 53.14217345-147.93631969 99.10297127M867.13604842 448.51973562c0 37.34314875-18.67157438 66.06864749-41.65197373 66.06864749-22.98039937 0-41.65197375-30.16177405-41.65197372-66.06864749 0-37.34314875 18.67157438-66.06864749 41.65197372-66.06864843 22.98039937-1.4362753 41.65197375 28.72549875 41.65197378 66.06864844M839.84682406 925.36301844c-5.74509937 45.96079875-78.9951225 73.25002219-165.17161875 61.7598225-84.74022188-11.4901997-149.372595-56.01472313-143.6274947-101.97552094 5.74509937-45.96079875 78.9951225-73.25002219 165.17161876-61.75982342 84.74022188 10.05392437 149.372595 56.01472313 143.62749469 101.97552186" fill="#1296db" p-id="5280"></path><path d="M812.55760062 678.3237275c0 136.44612001-133.57357031 248.47556625-298.74519001 248.47556626-163.73534436 0-297.30891469-112.02944626-297.30891374-248.47556626S350.07706625 429.84816126 513.81241061 429.84816126c165.17161875 0 298.74518906 110.59317094 298.74519001 248.47556624" fill="#1296db" p-id="5281"></path><path d="M265.33684436 628.05410372c-43.08824812 87.61277156-112.02944626 142.1912203-132.13729498 132.13729503-27.28922439-14.36274939-33.03432375-101.97552094 10.05392438-189.5882925 44.52452342-87.61277156 114.90199596-143.62749469 147.93631968-126.39219563 34.47059906 17.23529906 18.67157438 97.66669687-25.85294905 183.84319315M769.46935157 639.54430345c40.21569844 78.9951225 97.66669687 140.75494498 122.08337057 135.00984563 20.1078497-4.30882501 34.47059906-97.66669687-2.87254964-186.71574375-37.34314875-90.4853222-104.84807156-155.1176944-137.88239531-137.88239534-33.03432375 17.23529906-25.85294905 101.97552094 18.67157438 189.58829342" fill="#1296db" p-id="5282"></path></svg></a></div>
            <div class="recommand-center"><a href=""><svg t="1609566226252" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6155" width="25" height="25"><path d="M1024 619.52c0-143.36-138.24-256-307.2-256s-307.2 112.64-307.2 256 138.24 256 307.2 256c30.72 0 61.44-5.12 92.16-10.24l97.28 51.2-25.6-76.8c87.04-51.2 143.36-128 143.36-220.16z m-414.72-40.96c-30.72 0-51.2-20.48-51.2-51.2s20.48-51.2 51.2-51.2 51.2 20.48 51.2 51.2c0 25.6-25.6 51.2-51.2 51.2z m209.92 0c-30.72 0-51.2-20.48-51.2-51.2s20.48-51.2 51.2-51.2 51.2 20.48 51.2 51.2c0 25.6-25.6 51.2-51.2 51.2z" fill="#4CBF00" p-id="6156"></path><path d="M358.4 609.28c0-158.72 153.6-286.72 348.16-286.72h15.36C680.96 189.44 542.72 87.04 368.64 87.04 163.84 87.04 0 225.28 0 394.24c0 107.52 66.56 204.8 168.96 256l-30.72 92.16L256 686.08c35.84 10.24 71.68 15.36 112.64 15.36h10.24c-15.36-30.72-20.48-61.44-20.48-92.16z m138.24-414.72c35.84 0 66.56 30.72 66.56 66.56s-30.72 66.56-66.56 66.56c-35.84-5.12-66.56-35.84-66.56-71.68s30.72-61.44 66.56-61.44z m-250.88 128c-35.84 0-61.44-30.72-61.44-66.56s30.72-66.56 66.56-66.56 61.44 30.72 61.44 66.56-30.72 66.56-66.56 66.56z" fill="#4CBF00" p-id="6157"></path></svg></a></div>
            <div class="recommand-right"><a href=""><svg t="1609566825941" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7031" width="30" height="30"><path d="M350.375 62h323.25C774.5 62 812 72.5 846.875 92A204.375 204.375 0 0 1 932 177.125c19.5 34.875 30 72.375 30 173.25v323.25c0 100.125-10.5 136.5-30 173.25A204.375 204.375 0 0 1 846.875 932c-37.5 19.5-73.125 30-173.25 30h-323.25C249.5 962 212 951.5 177.125 932A204.375 204.375 0 0 1 92 846.875C72.5 812 62 774.5 62 673.625v-323.25C62 249.5 72.5 212 92 177.125A204.375 204.375 0 0 1 177.125 92C212 72.5 249.5 62 350.375 62z" fill="#FFFFFF" p-id="7032"></path><path d="M645.125 177.875a156.75 156.75 0 0 1 58.875 28.5 43.875 43.875 0 0 1 15 18.375 37.5 37.5 0 0 1-3.375 34.875 37.5 37.5 0 0 1-51.375 11.625c-4.125-2.625-7.125-6.375-11.25-8.625a67.875 67.875 0 0 0-37.5-12.375 37.5 37.5 0 0 0-24 12.375 26.625 26.625 0 0 0-7.125 24l13.875 52.125a201 201 0 0 1 94.5 27.75 269.625 269.625 0 0 1 72.375 64.875 225 225 0 0 1 37.5 75A249.375 249.375 0 0 1 812 593a275.25 275.25 0 0 1-15 72 282 282 0 0 1-112.5 138 300 300 0 0 1-124.125 43.5 310.5 310.5 0 0 1-91.125 0 300 300 0 0 1-164.25-87 322.5 322.5 0 0 1-85.125-297.375 316.5 316.5 0 0 1 189.75-225 50.25 50.25 0 0 1 42 2.25A37.5 37.5 0 0 1 467 274.625a37.5 37.5 0 0 1-24 30.75 241.5 241.5 0 0 0-153.375 193.5 246 246 0 0 0 13.5 119.25 242.25 242.25 0 0 0 112.5 129.75A219.375 219.375 0 0 0 518 772.625a255.75 255.75 0 0 0 85.875-15.375 203.625 203.625 0 0 0 111-95.25 166.5 166.5 0 0 0 14.25-33.75 187.5 187.5 0 0 0 0-104.25 158.25 158.25 0 0 0-47.625-73.125A208.5 208.5 0 0 0 650 428a120.375 120.375 0 0 0-31.5-12c7.5 30 15.75 60 23.625 90.375l3.75 21.75a127.875 127.875 0 0 1-103.125 129.75 122.625 122.625 0 0 1-90-16.875 135.375 135.375 0 0 1-53.25-69 163.875 163.875 0 0 1-9-49.125 169.5 169.5 0 0 1 28.5-103.5 187.5 187.5 0 0 1 104.25-72l-9-34.875a103.5 103.5 0 0 1 5.625-75 108.375 108.375 0 0 1 27-34.125A110.25 110.25 0 0 1 587 178.625a112.5 112.5 0 0 1 58.125-0.75z" fill="#D81E06" p-id="7033"></path><path d="M490.25 451.625a87.75 87.75 0 0 0-22.125 42 112.5 112.5 0 0 0 0 43.5 64.875 64.875 0 0 0 24.75 40.5 47.625 47.625 0 0 0 37.5 7.125A52.5 52.5 0 0 0 572.75 536a135 135 0 0 0-3.375-17.25L543.5 420.875a119.625 119.625 0 0 0-53.25 30.75z" fill="#FFFFFF" p-id="7034"></path></svg></a></div>
            <div class="recommand-icon"><a href="https://space.bilibili.com/433192526"><svg t="1609565959234" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3552" width="25" height="25"><path d="M926.72 380.3136c-0.4096-72.8576-61.44-132.5056-131.0208-131.1232-47.0016 0.9216-91.2896 0-144.64 0 22.784-23.9616 44.1856-44.6464 63.8464-64.6144 12.2368-12.4416 10.8032-24.4736-0.3584-35.84s-22.4256-18.3808-36.7616-2.9184-96.8704 103.2704-96.8704 103.2704H470.0672s-75.2128-73.0624-103.7824-102.4c-13.824-14.1824-25.6-16.9472-40.3456-1.6896s-11.9808 27.1872 2.1504 41.2672c18.9952 18.8928 36.3008 39.5264 57.0368 62.4128h-158.72a85.504 85.504 0 0 0-39.2192 8.96c-49.5104 24.4736-73.5744 65.4848-74.1888 118.8352C111.7696 486.4 112.64 596.5824 112.64 706.56c0 98.0992 47.4624 148.48 145.1008 153.2416 8.6016 0.4608 20.48 0 20.48 0s4.5056 43.6736 43.7248 43.7248c36.352 0 43.4688-44.3904 43.4688-44.3904l318.5664 1.6896s8.2944 43.7248 40.96 43.7248c51.2 0 46.8992-43.7248 46.8992-43.7248s67.072 6.0928 101.5296-25.6c32.9728-30.3616 51.5584-66.56 52.2752-109.312 2.304-115.2 1.536-230.4 1.0752-345.6z m-84.8896 358.4c0 30.72-8.4992 38.2976-40.448 38.2976H245.9648c-31.488 0-40.704-9.1648-40.96-40.96V375.2448c0-29.7984 9.8816-40.0896 39.6288-40.1408q278.9376-0.3072 558.08 0c30.3104 0 38.8608 8.0384 38.9632 37.7344q0.4608 183.1424-0.0512 366.1312z" fill="#ff6892" p-id="3553"></path><path d="M605.7984 634.88s-29.1328 27.8528-49.2544 15.36c-15.36-9.216-22.784-24.7296-31.5392-41.5744l-0.3072 0.512-0.3072-0.512c-8.8064 16.8448-16.4352 32.3584-31.5392 41.5744-20.1216 12.288-49.2544-15.36-49.2544-15.36l-24.1664 16.6912s-0.5632 0.4096 3.0208 5.12c23.0912 30.3616 63.1296 42.9568 93.0304 22.784a26.0608 26.0608 0 0 1 9.2672-4.5568 26.0608 26.0608 0 0 1 9.2672 4.5568c29.9008 20.224 70.2464 6.656 93.0304-22.784 3.6352-4.7104 3.0208-5.12 3.0208-5.12zM264.68352 473.6512l170.68544-32.06656 12.41088 66.06848-170.68544 32.06656zM780.30848 539.648l-170.68544-32.06656 12.41088-66.06848 170.68544 32.06656z" fill="#ff6892" p-id="3554"></path></svg></a></div>
          </div>
        </div>
      </template>
    </Card>
    <Card :childWidth="childWidth" :childHeight="classifyCardHeight">
      <template v-slot:blog>
        <div class="classify">
          <div class="head">
            <div class="head-classify-icon">
              <svg t="1610294619341" class="icon" viewBox="0 0 1092 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3477" width="18" height="18"><path d="M0 89.271795a89.271795 89.271795 0 1 0 178.54359 0 89.271795 89.271795 0 1 0-178.54359 0Z" fill="#253f50" p-id="3478"></path><path d="M343.958974 60.389744h703.671795c26.25641 0 44.635897 21.005128 44.635898 44.635897 0 26.25641-21.005128 44.635897-44.635898 44.635897H343.958974c-26.25641 0-44.635897-21.005128-44.635897-44.635897 0-23.630769 18.379487-44.635897 44.635897-44.635897z" fill="#253f50" p-id="3479"></path><path d="M0 512a89.271795 89.271795 0 1 0 178.54359 0 89.271795 89.271795 0 1 0-178.54359 0Z" fill="#253f50" p-id="3480"></path><path d="M343.958974 483.117949h703.671795c26.25641 0 44.635897 21.005128 44.635898 44.635897 0 26.25641-21.005128 44.635897-44.635898 44.635898H343.958974c-26.25641 0-44.635897-21.005128-44.635897-44.635898 0-26.25641 18.379487-44.635897 44.635897-44.635897z" fill="#253f50" p-id="3481"></path><path d="M0 934.728205a89.271795 89.271795 0 1 0 178.54359 0 89.271795 89.271795 0 1 0-178.54359 0Z" fill="#253f50" p-id="3482"></path><path d="M343.958974 903.220513h703.671795c26.25641 0 44.635897 21.005128 44.635898 44.635897 0 26.25641-21.005128 44.635897-44.635898 44.635898H343.958974c-26.25641 0-44.635897-21.005128-44.635897-44.635898 0-23.630769 18.379487-44.635897 44.635897-44.635897z" fill="#253f50" p-id="3483"></path></svg>
            </div>
            <div class="head-classify-title">分类</div>
          </div>
          <div class="bodylist">
            <div class="tree-item" v-for="(tag, index) in tagData" :key="index">
              <div class="tree-item-tag" @click="dropdown(index)"><span>{{ tag.tag }}({{ tag.counts }})</span><span class="arrow"><svg t="1610729395777" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="61160" width="28" height="28"><path d="M401.152 527.744l203.093333 186.154667a21.333333 21.333333 0 0 0 35.754667-15.744V325.845333a21.333333 21.333333 0 0 0-35.754667-15.744l-203.093333 186.154667a21.333333 21.333333 0 0 0 0 31.488z" fill="#253f50" fill-opacity=".86" p-id="61161"></path></svg></span></div>
              <ul class="tree-item-ul">
                <li v-for="(data, i) in tag.childs" :key="i">{{ data.tag }}({{ data.counts }})</li>
              </ul>
            </div>
          </div>
        </div>
      </template>
    </Card>
    <Card :childWidth="childWidth" :childHeight="childHeight">
      <template v-slot:blog>
        <div class="classify">
          <div class="head">
            <div class="head-classify-icon">
              <svg t="1610457691365" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4049" width="28" height="28"><path d="M512.213333 64.213333c247.424 0 448 200.576 448 448s-200.576 448-448 448-448-200.576-448-448a32 32 0 1 1 64 0c0 212.096 171.946667 384 384 384 212.096 0 384-171.904 384-384 0-212.053333-171.904-384-384-384a383.338667 383.338667 0 0 0-309.077333 156.096c-12.8 17.301333-24.106667 35.648-33.792 54.826667a32 32 0 0 1-57.109333-28.864 448.064 448.064 0 0 1 39.424-63.978667A447.317333 447.317333 0 0 1 512.213333 64.213333z" fill="#253f50" p-id="4050"></path><path d="M117.333333 170.666667A32 32 0 0 1 149.333333 202.666667v128a32 32 0 0 1-64 0v-128A32 32 0 0 1 117.333333 170.666667zM480 298.666667a32 32 0 0 1 32 32v234.666666a32 32 0 0 1-64 0v-234.666666a32 32 0 0 1 32-32z" fill="#253f50" p-id="4051"></path><path d="M277.333333 330.666667a32 32 0 0 1-32 32h-128a32 32 0 0 1 0-64h128a32 32 0 0 1 32 32zM682.666667 565.333333a32 32 0 0 1-32 32h-170.666667a32 32 0 0 1 0-64h170.666667a32 32 0 0 1 32 32z" fill="#253f50" p-id="4052"></path></svg>
            </div>
            <div class="head-classify-title">最新文章</div>
          </div>
          <div class="bodylist">
            <div class="bodyitem">
              <Card :childWidth="sideChildWidth" :childHeight="sideChildHeight" class="item-card">
                <template v-slot:pic>
                  <img src="@/assets/me.jpg" alt="me">
                </template>
                <template v-slot:blog>
                  <div class="side-article">
                    <span><a href="#">如何使用NFS如何使用NFS如何使用NFS</a></span>
                  </div>
                </template>
              </Card>
            </div>
            <div class="bodyitem">
              <Card :childWidth=sideChildWidth :childHeight=sideChildHeight class="item-card">
                <template v-slot:pic>
                  <img src="@/assets/me.jpg" alt="me">
                </template>
                <template v-slot:blog>
                  <div class="side-article">
                    <span>如何使用NFS如何使用NFS如何使用NFS</span>
                  </div>
                </template>
              </Card>
            </div>
            <div class="bodyitem">
              <Card :childWidth=sideChildWidth :childHeight=sideChildHeight class="item-card">
                <template v-slot:pic>
                  <img src="@/assets/me.jpg" alt="me">
                </template>
                <template v-slot:blog>
                  <div class="side-article">
                    <span>如何使用NFS如何使用NFS如何使用NFS</span>
                  </div>
                </template>
              </Card>
            </div>
            <div class="bodyitem">
              <Card :childWidth=sideChildWidth :childHeight=sideChildHeight class="item-card">
                <template v-slot:pic>
                  <img src="@/assets/me.jpg" alt="me">
                </template>
                <template v-slot:blog>
                  <div class="side-article">
                    <span>如何使用NFS如何使用NFS如何使用NFS</span>
                  </div>
                </template>
              </Card>
            </div>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>
<script>
import Card from '@/views/components/Card'
import BgExpandBtn from '@/components/BgExpandBtn'
export default {
  name: 'Introduction',
  data () {
    return {
      childWidth: '100%',
      childHeight: '280px',
      sideChildWidth: '95%',
      sideChildHeight: '100%',
      classifyCardHeight: 'auto',
      tableData: [
        { articleNum: 100, tag: 100, classify: 100 }
      ],
      childIcon: 'fa fa-github',
      iconColor: '#ffffff',
      afBg: '#487eb0',
      tagData: []
    }
  },
  components: {
    Card,
    BgExpandBtn
  },
  methods: {
    dropdown (key, event) {
      const obj = document.getElementsByClassName('tree-item-ul')[key]
      const arrow = document.getElementsByClassName('arrow')[key]
      if (obj.classList.contains('show')) {
        obj.classList.remove('show')
        arrow.classList.remove('rotate')
      } else {
        obj.classList.add('show')
        arrow.classList.add('rotate')
      }
    }
  },
  created () {
    this.$axios.get('/tag').then(res => {
      this.tagData = res.data
    }).catch(error => {
      console.log(error.data)
    })
  }
}
</script>

<style>
  .blog-attributes{
    width: 95%;
    padding-bottom: 10px;
    display: flex;
    justify-content: center;
  }
  th{
    font-size: 0.8em;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  td{
    padding-top: 10px;
  }
  td a{
    color: rgb(37, 63, 80);
  }
  .follow-btn{
    width: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .introduction{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
  }
  .avator{
    width: 60px;
    height: 60px;
    background-image: url('~@/assets/me.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 50%;
    box-shadow: 0 0 4px 0 rgb(30, 30, 30, 0.2);
  }
  .slagon{
    width: 95%;
    height: 45px;
    padding-top: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .slagon span{
    margin-top: 4px;
    font-size:0.8em;
    line-height:1.5em;
  }
  .recommand{
    width: 76%;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .outer{
    width: 100%;
  }
  .classify{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .classify .head{
    width: 100%;
    display: flex;
    flex: row;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 10%;
    margin-top: 5%;
  }
  .head-classify-icon{
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .head-classify-title{
    width: 79%;
    height: 100%;
    line-height: 10%;
    margin-left: 1%;
    font-size: 1.2em;
    font-weight: 500;
    display: flex;
    justify-content: left;
    align-items: center;
  }
  .bodylist{
    width: 100%;
    height: 85%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
  }
  .bodylist li{
    list-style: none;
  }
  .classifyS-select{
    background-color: transparent;
    width: 90%;
    outline: none;
  }
  /* 布局介绍中的最新文章 */
  .bodyitem{
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 3%;
  }
  .item-card{
    margin-bottom: 0px;
    box-shadow: none;
    border-radius: 0px;
    box-sizing: border-box;
    padding: 2px;
  }
  .item-card:hover{
    box-shadow: none;
  }
  .item-card img{
    width: 25%;
    height: 100%;
    background-size: cover;
  }
  .side-article{
    width: 75%;
    height: 100%;
    text-align: left;
  }
  .side-article span{
    word-wrap: normal;
    overflow: hidden;
    font-size: 0.8em;
    transition: all 0.1s linear;
  }
  .side-article span:hover{
    color: #00b4f6;
  }
  .tree-item{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 0.9em;
  }
  .tree-item-tag{
    width: 85%;
    height: 28px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    box-sizing: border-box;
    transition: all 0.2s linear;
    margin-left: 4%;
    overflow: hidden;
    word-wrap: none;
  }
  .tree-item-tag:hover{
    padding-left: 10px;
    padding-right: 10px;
    background-color: #00b4f6;
  }
  .tree-item-ul{
    display: none;
  }
  .tree-item-ul li{
    width: 100%;
    height: 28px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    transition: all 0.3s linear;
    box-sizing: border-box;
    padding-left: 10%;
    font-size: 0.8em;
  }
  .tree-item-ul li:hover{
    background-color: #eeeeee;
  }
  .show{
    display: block;
  }
  .rotate{
    transform: rotate(-90deg);
  }
  .arrow{
    display: flex;
    flex-direction: row;
    justify-content: center;
    transition: all 0.1s linear;
  }
</style>
