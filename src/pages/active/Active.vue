<template lang="html">
  <div>
    <div class="success" v-if="success">
      <span>恭喜您！激活成功！</span><router-link :to="{ name: 'GoodIndex'}">返回首页</router-link>
    </div>
    <div class="fail" v-else>
      <p>很抱歉，注册失败</p>
    </div>
  </div>
</template>

<script>
import * as R from 'ramda'

export default {

  data () {
    return {
      success: false
    }
  },

  async mounted () {
    const url = decodeURIComponent(window.location.href)
    const urlParams = R.pipe(R.split('?'), R.last, R.split('&'))(url)
    const name = R.pipe(R.head, R.split('='), R.last)(urlParams)
    const email = R.pipe(R.take(2), R.last, R.split('='), R.last)(urlParams)
    const token = R.pipe(R.last, R.split('='), R.last)(urlParams)
    const params = this.qs.stringify({ name, email, token })

    try {
      const res = await this.axios.post(`${this.globalData.host}/user/active`, params)
      if (res.data.status === 0) {
        this.success = true
      } else {
        this.success = false
      }
    } catch (e) {}
  }
}
</script>

<style scoped lang="scss">
  div {
    width: 150px;
    margin: 100px auto;
    span {
      text-align: center;
    }
  }
</style>
