<template lang="html">
  <header>
    <div class="logo">
      <router-link :to="{ name: 'GoodIndex'}"><img src="../../assets/logo.png" alt=""></router-link>
    </div>
    <div class="right-container-sign" v-if="!userName">
      <span class="signin-btn" @click="showSignin">登录</span>
      <span class="signup-btn" @click="showSignup">注册</span>
    </div>
    <div class="right-container-user" v-if="userName" @click="toggleMyMenu">
      <i class="fa fa-user-circle" aria-hidden="true"></i>
      <!-- <span>{{userName}}</span> -->
      <span v-if="!myMenu"><i class="fa fa-caret-up" aria-hidden="true"></i></span>
      <span v-if="myMenu"><i class="fa fa-caret-down" aria-hidden="true"></i></span>
      <div class="my-menu" v-if="!myMenu">
        <p><router-link class="route-link" :to="{ name: 'MyCollection'}">我的收藏<i class="fa fa-gratipay" aria-hidden="true"></i></router-link></p>
        <p @click="signout">退出<i class="fa fa-sign-out" aria-hidden="true"></i></p>
      </div>
    </div>

  </header>
</template>

<script>
  import Header from './Header'
  export default Header
</script>

<style scoped lang="scss">
  @import "./Header";
</style>
