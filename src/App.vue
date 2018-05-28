<template>
  <div id="app">
    <Headervue></Headervue>
    <Transparent></Transparent>
    <Sign></Sign>
    <router-view/>

    <div class="chat-container" v-if="chatShow">
      <div class="title-container">
        <img src="./assets/chat-icon.png" alt="chat">
        <span>正在对话</span>
        <p @click="hideChat">X</p>
      </div>
      <div class="message-container">
        <div v-for="item in messageList">
          <img v-if="!item.self" src="./assets/chat-avatar.png" alt="chat-avatar">
          <span :class="{'right': item.self}">{{item.message}}</span>
        </div>
      </div>
      <div class="input-container">
        <input type="text" v-model="inputValue">
        <p @click="send">发送</p>
      </div>
    </div>
    <img v-else @click="showChat" class="chat-icon" src="./assets/chat-icon.png" alt="chat">

    <Footervue></Footervue>
  </div>
</template>

<script>
import Headervue from '@/components/header/Header.vue'
import Footervue from '@/components/footer/Footer.vue'
import Sign from '@/components/sign/Sign.vue'
import Transparent from '@/components/transparent/Transparent.vue'

export default {
  name: 'app',
  data () {
    return {
      chatShow: false,
      messageList: [
        {
          self: true,
          message: 'hello'
        },
        {
          self: false,
          message: 'hello'
        },
        {
          self: true,
          message: 'hello'
        },
        {
          self: true,
          message: 'hello'
        }
      ],
      inputValue: ''
    }
  },
  components: {
    Headervue,
    Footervue,
    Sign,
    Transparent
  },
  mounted () {
    document.body.removeChild(document.getElementById('loading'))
  },
  methods: {
    showChat () {
      this.chatShow = true
    },
    hideChat () {
      this.chatShow = false
    },
    send () {
      console.log(this.inputValue)
    }
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
   position: relative;
   .chat-icon {
     width: 40px;
     height: 40px;
     position: fixed;
     right: 0;
     bottom: 50px;
     z-index: 999;
     cursor: pointer;
   }
   .chat-container {
     width: 250px;
     height: 350px;
     position: fixed;
     right: 0;
     bottom: 10px;
     z-index: 999;
     display: flex;
     flex-direction: column;
     justify-content: space-between;
     background-color: #eff4f3;
     border-radius: 5px;
     .title-container {
       width: 100%;
       height: 40px;
       display: flex;
       justify-content: space-between;
       align-items: center;
       background-color: #76dbbc;
       img {
         width: 20px;
         height: 20px;
         margin-left: 10px;
       }
       span {
         color: #FFFFFF;
       }
       p {
         margin-right: 10px;
         cursor: pointer;
         color: #555555;
         &:hover {
           color: #000;
         }
       }
     }
     .message-container {
       overflow-y: auto;
       div {
         height: 30px;
         width: 100%;
         padding: 0 5px;
         box-sizing: border-box;
         img {
           width: 20px;
           height: 20px;
           border-radius: 50%;
           float: left;
           margin-right: 5px;
         }
         span {
           max-width: 80%;
           height: auto;
           float: left;
           border: 1px solid #d3d3d3;
           border-radius: 5px;
           padding: 2px;
           background-color: #e1f4f0;
           &.right {
             float: right;
           }
         }
       }
     }
     .input-container {
       height: 40px;
       width: 100%;
       display: flex;
       justify-content: space-around;
       align-items: center;
       input {
         width: 80%;
         height: 25px;
       }
       p {
         color: #999999;
         cursor: pointer;
         border: 1px solid #76dbbc;
         border-radius: 2px;
         padding: 5px;
       }
     }
   }
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
