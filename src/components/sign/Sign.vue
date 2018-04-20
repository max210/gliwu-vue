<template lang="html">
  <div>
    <!-- 登录框 -->
    <div class="sign-container" v-if="signinPage">

      <i class="fa fa-times close" aria-hidden="true" @click="closeSign"></i>

      <div class="signin">
        <h3><i class="fa fa-gift"></i>登录</h3>
        <div class="prompt-container" v-if="prompt">
          <i class="fa fa-exclamation"></i>
          <span>{{prompt}}</span>
        </div>
        <div class="name-container">
          <span>用户名</span>
          <input type="text" placeholder="输入用户名或邮箱" v-model="nameOrEmail">
        </div>
        <div class="pass-container">
          <span>密码</span>
          <input type="password" placeholder="输入密码" v-model="pass">
        </div>
        <p class="sign-btn" @click="signin">登录</p>
      </div>

      <span class="go-sign" @click="showSignup1"><u>没有账号，去注册>></u></span>

    </div>

    <!-- 注册框 -->
    <div class="sign-container" v-if="signupPage">

      <i class="fa fa-times close" aria-hidden="true" @click="closeSign"></i>

      <div class="signin">
        <h3><i class="fa fa-gift"></i>注册</h3>
        <div class="prompt-container" v-if="prompt">
          <i class="fas fa-exclamation"></i>
          <span>{{prompt}}</span>
        </div>
        <div class="name-container">
          <span>用户名</span>
          <input type="text" placeholder="输入用户名" v-model="name">
        </div>
        <div class="name-container">
          <span>邮箱</span>
          <input type="text" placeholder="输入邮箱" v-model="email">
        </div>
        <div class="pass-container">
          <span>密码</span>
          <input type="password" placeholder="输入密码" v-model="pass">
        </div>
        <div class="repass-container">
          <span>确认密码</span>
          <input type="password" placeholder="确认密码" v-model="rePass">
        </div>
        <p class="sign-btn" @click="signup">注册</p>
      </div>

      <span class="go-sign" @click="showSignin1"><u>已有账号，去登录>></u></span>

    </div>

    <!-- 注册结果 -->
    <!-- <div class="sign-container" v-if="resultPage">
      <div class="result">
        <p>我们已向您的邮箱发送一个激活链接，请点击激活链接以激活您的账户</p>
        <button type="button" name="button" @click="hideResult">我知道了</button>
      </div>
    </div> -->

  </div>
</template>

<script>
import Sign from './Sign'
export default Sign
</script>

<style lang="scss">
@import './Sign'
</style>
