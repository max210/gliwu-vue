<template lang="html">
  <footer>
    <div class="container">
      <div class="child-container present-type">
        <ul>
          <li class="bold">礼物类型</li>
          <li><router-link class="to-link" :to="{name: 'Category', params: {currentMenuIndex: 0, productType: 1} }">精选礼物</router-link></li>
          <li><router-link class="to-link" :to="{name: 'Category', params: {currentMenuIndex: 1, productType: 2} }">送给女生</router-link></li>
          <li><router-link class="to-link" :to="{name: 'Category', params: {currentMenuIndex: 2, productType: 3} }">送给男生</router-link></li>
          <li><router-link class="to-link" :to="{name: 'Category', params: {currentMenuIndex: 3, productType: 4} }">送给父母</router-link></li>
          <li><router-link class="to-link" :to="{name: 'Category', params: {currentMenuIndex: 4, productType: 5} }">送给儿童</router-link></li>
        </ul>
      </div>
      <div class="child-container contact-us">
        <ul>
          <li class="bold">意见反馈</li>
          <li @click="showInfo">联系邮箱</li>
          <li @click="showInfo">联系微信</li>
          <li @click="showInfo">联系电话</li>
        </ul>
      </div>
      <div class="child-container about-us">
        <ul>
          <li class="bold">关于我们</li>
          <li @click="showInfo">产品介绍</li>
          <li @click="showInfo">合作伙伴</li>
        </ul>
      </div>
      <div class="child-container logo-icons">
        <div class="img">
          <img src="../../assets/logo.png" alt="">
        </div>
        <div class="icons">
          <a class="icon1" @click="showInfo"></a>
          <a class="icon2" @click="showInfo"></a>
          <a class="icon3" @click="showInfo"></a>
          <a class="icon4" @click="showInfo"></a>
        </div>
      </div>
    </div>
    <div class="copy-right-pc">
      <span>Copyright (c) 2018 Copyright Holder All Rights Reserved.</span>
      <br />
      <p>Designed by Maximilian</p>
    </div>
  </footer>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'resultWindow',
      'msg'
    ])
  },
  methods: {
    showInfo () {
      this.inputMsg('陆续开放中，敬请期待！')
      this.showResultWindow()
    },
    ...mapMutations({
      showResultWindow: 'showResultWindow',
      inputMsg: 'inputMsg'
    })
  }
}
</script>

<style scoped lang="scss">
  @import './Footer';
</style>
