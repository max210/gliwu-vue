<template lang="html">
  <div>
    <div class="sign-container" v-if="signinPage">
      <div class="signin">
        <h3><i class="fa fa-gift"></i>登录</h3>
        <i class="fa fa-times close" aria-hidden="true" @click="closeSign"></i>
        <p class="user-info"><i class="fa fa-exclamation-circle" aria-hidden="true" v-show="userInfo"></i>{{userInfo}}</p>
        <div class="login-info">
          <span>用户名</span>
          <span>密码</span>
        </div>
        <div class="inputs">
          <input type="text" placeholder="点我输入邮箱" v-model="name">
          <input type="password" placeholder="点我输入密码" v-model="pass">
        </div>
        <p class="sign-btn" @click="signin">登录</p>
        <span class="go-sign" @click="showSignup1"><u>没有账号，去注册>></u></span>
      </div>
    </div>

    <!-- 注册结果 -->
    <div class="sign-container" v-if="resultPage">
      <div class="result">
        <p>我们已向您的邮箱发送一个激活链接，请点击激活链接以激活您的账户</p>
        <button type="button" name="button" @click="hideResult">我知道了</button>
      </div>
    </div>

    <div class="sign-container" v-if="signupPage">
      <div class="signup">
        <h3><i class="fa fa-gift"></i>注册</h3>
        <i class="fa fa-times close" aria-hidden="true" @click="closeSign"></i>
        <p class="user-info"><i class="fa fa-exclamation-circle" aria-hidden="true" v-show="userInfo"></i>{{userInfo}}</p>
        <!-- <div class="username">
          <span>用户名</span>
          <input type="text" placeholder="点我输入邮箱" v-model="name">
        </div> 
        <div class="password">
          <span>密码</span>
          <input type="password" placeholder="点我输入密码" v-model="pass">
        </div>
        <div class="password">
          <span>确认密码</span>
          <input type="password" placeholder="点我重复输入密码" v-model="rePass">
        </div> -->
        <div class="login-info">
          <span>用户名</span>
          <span>密码</span>
          <span>确认密码</span>
        </div>
        <div class="inputs">
          <input type="text" placeholder="点我输入邮箱" v-model="name">
          <input type="password" placeholder="点我输入密码" v-model="pass">
          <input type="password" placeholder="点我重复输入密码" v-model="rePass">
        </div>

        <p class="sign-btn" @click="signup">注册</p>
        <span class="go-sign" @click="showSignin1"><u>已有账号，去登录>></u></span>
      </div>
    </div>

  </div>
</template>

<script>
import Sign from './Sign'
export default Sign
</script>

<style lang="scss">
@import './Sign'
</style>
