<template lang="html">
  <div>
    <div class="my-collection-container">
      <h4>我的收藏</h4>
      <p v-if="!collections.length">呀哈，空空如也，快去收藏吧！</p>
      <div class="product-container" v-if="collections.length">
        <div class="item" v-for="item in collections">
          <a :href="item.productLink" target="_blank">
            <img :src="item.productImg" alt="">
          </a>
          <div class="btns">
            <span class="btn1"><a :href="item.productLink" target="_blank">我要去买</a></span>
            <span class="btn2" @click="outHeart(item.productId)">取消收藏</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {

  data () {
    return {
      collections: ''
    }
  },

  mounted () {
    this.getCollections()
  },

  methods: {

    async getCollections () {
      try {
        const res = await this.axios.get(`${this.globalData.host}/user/collection`)
        if (res.data.status === 0) {
          this.collections = res.data.data
        }
      } catch (e) {
        console.log(e)
      }
    },

    async outHeart (id) {
      const params = { productId: id }
      try {
        const res = await this.axios.get(`${this.globalData.host}/user/remove-collection`, { params })
        if (res.data.status === 0) {
          this.getCollections()
        }
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .my-collection-container {
    min-height: calc(100vh - 60px);
    position: relative;
    z-index: 99;
    margin-bottom: 100px;
    box-shadow: 0 5px 5px #999;
    background-color: #fff;
    h4 {
      margin-left: 10px;
      margin-top: 20px;
    }
    p {
      width: 225px;
      display: block;
      padding-top: 70px;
      margin: 0 auto;
    }
    .product-container {
      max-width: 1200px;
      margin: 0 auto;
      .item {
        box-sizing: border-box;
        display: inline-block;
        position: relative;
        width: 25%;
        padding: 20px;
        overflow: hidden;
        border-radius: 5px;
        a {
          img {
            border-radius: 5px;
            width: 100%;
          }
          &:hover +.btns {
            transform: translateY(0px);
            opacity: 1;
          }
        }
        .btns {
          position: absolute;
          bottom: 20px;
          right: 20px;
          left: 20px;
          height: 50px;
          transform: translateY(50px);
          opacity: 0;
          background: rgba(231, 231, 231, .6);
          transition: all .5s;
          &:hover {
            transform: translateY(0px);
            opacity: 1;
          }
          span {
            width: 80px;
            padding: 1px 4px;
            position: absolute;
            border: 1px solid #1ecd97;
            text-align: center;
            transition: all .5s;
            border-radius: 3px;
            cursor: pointer;
            &.btn1 {
              left: 20px;
              bottom: 10px;
              a {
                color: #000;
                text-decoration: none;
              }
            }
            &.btn2 {
              right: 20px;
              bottom: 10px;
            }
            &:hover {
              background-color: #1ecd97;
              color: #fff!important;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    .my-collection-container {
      .product-container {
        .item {
          width: 50%;
          padding: 10px;
          .btns {
            opacity: 1;
            right: 10px;
            left: 10px;
            bottom: 10px;
            transform: translateY(0px);
            span {
              width: 65px;
              padding: 1px 2px;
              font-size: 14px;
              &.btn1 {
                left: 10px;
              }
              &.btn2 {
                right: 10px;
              }
            }
          }
        }
      }
    }
  }
</style>
