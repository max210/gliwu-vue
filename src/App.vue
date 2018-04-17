<template>
  <div id="app">
    <Transparent></Transparent>
    <Sign></Sign>
    <router-view/>
    <Footervue></Footervue>
  </div>
</template>

<script>
import Footervue from '@/components/footer/Footer.vue'
import Sign from '@/components/sign/Sign.vue'
import Transparent from '@/components/transparent/Transparent.vue'

export default {
  name: 'app',
  components: {
    Footervue,
    Sign,
    Transparent
  },
  mounted () {
    document.body.removeChild(document.getElementById('loading'))
  }
}
</script>

<style lang="scss">
li {
  list-style: none;
}
a {
  text-decoration: none;
}
.to-link {
  color: #000;
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
}
#app {
   -webkit-font-smoothing: antialiased;
   box-sizing: border-box;
  .clear::after {
    clear: both;
    height: 0;
    width: 100%;
    content: '';
    display: block;
  }
  @keyframes shake {
    0% {transform: rotate(10deg);}
    10% {transform: rotate(0deg);}
    20% {transform: rotate(-10deg);}
    30% {transform: rotate(0deg);}
    35% {transform: rotate(5deg);}
    40% {transform: rotate(0deg);}
    45% {transform: rotate(-5deg);}
    50% {transform: rotate(0deg);}
  }
  @keyframes scale {
    0% {transform: scale(1);}
    50% {transform: scale(1.2);}
    100% {transform: scale(1);}
  }
}
</style>
