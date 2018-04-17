<template lang="html">
  <div class="result-window" v-if="resultWindow">
    <p><i class="fa fa-gift"></i>{{msg}}</p>
    <span @click="hideSelf">OK</span>
  </div>
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
    hideSelf () {
      this.hideResultWindow()
    },
    ...mapMutations({
      hideResultWindow: 'hideResultWindow'
    })
  }
}
</script>

<style scoped lang="scss">
  .result-window {
    position: relative;
    height: 70px;
    border: 1px solid #e66e52;
    border-radius: 5px;
    padding: 20px;
    background-color: #fff;
    z-index: 999999;
    p {
      i {
        margin-right: 5px;
        color: #e66e52;
      }
    }
    span {
      width: 70px;
      height: 30px;
      line-height: 30px;
      position: absolute;
      right: 30px;
      bottom: 15px;
      text-align: center;
      border-radius: 5px;
      border: 1px solid #e66e52;
      cursor: pointer;
      &:hover {
        background-color: #e66e52;
      }
    }
  }
</style>
