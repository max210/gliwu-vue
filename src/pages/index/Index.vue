<template lang="html">
  <div class="index-container">
    <div class="img"><router-link class="to-link" :to="{name: 'Category', params: {currentMenuIndex: 0, productType: 1} }"></router-link></div>

    <transition name="fade">
      <div class="result-window-container" v-if="resultWindow">
        <ResultWindow></ResultWindow>
      </div>
    </transition>

    <div class="title">
      <span class="line"></span>
      <i class="fa fa-gift"></i>
      <p>为他（她）挑选不一样的礼物</p>
      <i class="fa fa-gift"></i>
      <span class="line"></span>
    </div>
    <div class="container">
      <div class="girl-part">
        <div class="left">
          <div class="desc">
            <div class="p" :class="{active: girlDescActive}">
              携一件精致的礼物<br />跟她一起看世界<br />两颗甜蜜的心相互碰撞<br />就像你刚好碰到她<br />
              <span class="btn"><router-link class="router-link" :to="{name: 'Category', params: {currentMenuIndex: 1, productType: 2} }">开启探索之门</router-link></span>
            </div>
            <div class="right-bottom" :class="{active: girlLineActive}"></div>
            <div class="left-top" :class="{active: girlLineActive}"></div>
          </div>
        </div>
        <div class="right">
          <div class="img" :class="{active: girlImgActive}">
            <img src="http://p3o8h1g6m.bkt.clouddn.com/box-2953722_640.jpg" alt="">
          </div>
        </div>
      </div>
      <div class="boy-part">
        <div class="left">
          <div class="img" :class="{active: boyImgActive}">
            <img src="http://p3o8h1g6m.bkt.clouddn.com/season-1985856_640.jpg" alt="">
          </div>
        </div>
        <div class="right">
          <div class="desc">
            <div class="p" :class="{active: boyDescActive}">
              体贴随心温暖随行<br />跟他一起去看的世界<br />风景才更美<br />为他挑选一份特殊的礼物<br />
              <span class="btn"><router-link class="router-link" :to="{name: 'Category', params: {currentMenuIndex: 2, productType: 3} }">开启探索之门</router-link></span>
            </div>
            <div class="right-bottom" :class="{active: boyLineActive}"></div>
            <div class="left-top" :class="{active: boyLineActive}"></div>
          </div>
        </div>
      </div>
      <div class="parent-part">
        <div class="left">
          <div class="desc">
            <div class="p" :class="{active: parentDescActive}">
              对父母<br />你是否也会脾气大过耐心<br />借一个肩膀给老人靠着<br />送一个礼物让老人暖着<br />
              <span class="btn"><router-link class="router-link" :to="{name: 'Category', params: {currentMenuIndex: 3, productType: 4} }">开启探索之门</router-link></span>
            </div>
            <div class="right-bottom" :class="{active: parentLineActive}"></div>
            <div class="left-top" :class="{active: parentLineActive}"></div>
          </div>
        </div>
        <div class="right">
          <div class="img" :class="{active: parentImgActive}">
            <img src="https://ws1.sinaimg.cn/large/006tNc79ly1fomqcus99kj30go0cit9m.jpg" alt="">
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import index from './Index'
  export default index
</script>

<style scoped lang="scss">
  @import "./Index";
</style>
