<template lang="html">
  <div class="detail-window">
    <div class="img">
      <img :src="info.productImg" alt="">
    </div>
    <div class="line"></div>
    <div class="desc">
      {{info.productDesc}}
    </div>
    <div class="line"></div>
    <div class="btn">
      <span @click="hideSelf">继续看看</span>
      <span><a :href="info.productLink" target="_blank">我要去买</a></span>
    </div>
    <div class="icon">
      <i class="fa fa-heart-o" aria-hidden="true" @click="toHeart"></i>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {

  props: ['info'],

  computed: {
    ...mapGetters([
      'resultWindow'
    ])
  },

  methods: {

    hideSelf () {
      this.hideDetailWindow()
    },

    async toHeart (id, img, link) {
      const params = this.qs.stringify({
        productId: this.info._id,
        productImg: this.info.productImg,
        productLink: this.info.productLink
      })
      try {
        const res = await this.axios.post(`${this.globalData.host}/user/addCollection`, params)
        this.inputMsg(res.data.msg)
        this.showResultWindow()
      } catch (e) {
        console.log(e)
      }
    },

    ...mapMutations({
      hideDetailWindow: 'hideDetailWindow',
      showResultWindow: 'showResultWindow',
      inputMsg: 'inputMsg'
    })
  }
}
</script>

<style scoped lang="scss">
  .detail-window {
    overflow: hidden;
    position: relative;
    width: 350px;
    background-color: #f5f5f5;
    padding-bottom: 20px;
    border-radius: 5px;
    z-index: 9999;
    .line {
      width: 90%;
      margin: 30px auto;
      border-bottom: 1px solid #99d8c4;
      height: 0;
      content: '';
    }
    .img {
      width: 350px;
      height: 200px;
      overflow: hidden;
      border-top-right-radius: 5px;
      border-top-left-radius: 5px;
      img {
        width: 100%;
      }
    }
    .desc {
      padding: 0 20px;
      line-height: 30px;
    }
    .btn {
      margin-left: 20px;
      float: left;
      span {
        width: 80px;
        padding: 5px 4px;
        border: 1px solid #1ecd97;
        text-align: center;
        border-radius: 3px;
        transition: all .5s;
        margin-right: 20px;
        cursor: pointer;
        a {
          text-decoration: none;
          color: #000;
        }
        &:hover {
          background-color: #1ecd97;
        }
      }
    }
    .icon {
      float: right;
      margin-right: 20px;
      span {
      }
      i {
        vertical-align: middle;
        margin-right: 10px;
        font-size: 20px;
        cursor: pointer;
        &:hover {
          color: #e66e52;
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    .detail-window {
      width: 80vw;
      .img {
        width: 80vw;
        height: auto;
      }
    }
  }
</style>
