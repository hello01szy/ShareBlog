<template>
  <div class="container">
    <Header></Header>
    <div class="cards">
    </div>
  </div>
</template>
<script>
import Header from '@/views/components/Header'
import Card from '@/views/components/Card'
export default {
  name: 'Links',
  components: {
    Header: Header,
    Card: Card
  }
}
</script>
<style scoped>
  .container{
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-image: url('~@/assets/itach.jpg');
  }
  .cards{
    
  }
</style>