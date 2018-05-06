<template lang="html">
  <div class="container">
    <p v-if="success">登录中...</p>
    <p v-else>第三方登录失败，请稍后再试</p>
  </div>
</template>

<script>
import * as R from 'ramda'
import { mapMutations } from 'vuex'

export default {
  data () {
    return {
      success: true
    }
  },

  async mounted () {
    const url = window.location.href
    const code = R.pipe(R.split('?'), R.last, R.split('='), R.last)(url)

    try {
      const res = await this.axios.post(`${this.globalData.host}/user/github/third-login`, { code })
      if (res.data.status === 0) {
        this.showUserName(res.data.name)
        this.$router.push({ name: 'GoodIndex' })
      } else {
        this.success = false
      }
    } catch (e) {
      this.success = false
    }
  },

  methods: {
    ...mapMutations({
      showUserName: 'showUserName'
    })
  }
}
</script>

<style scoped lang="scss">
.container {
  text-align: center;
  padding-top: 50px;
  font-size: 20px;
}
</style>
