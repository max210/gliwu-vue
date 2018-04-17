<template lang="html">
  <div>
    <span>恭喜您！激活成功！</span><router-link :to="{ name: 'GoodIndex'}">返回首页</router-link>
  </div>
</template>

<script>
export default {
  mounted () {
    let url = window.location.href
    console.log(url)
    let paramList = url.split('?')[1].split('&')
    let token = paramList[0].split('=')[1]
    let name = paramList[1].split('=')[1]
    this.$http.post('/v1/active', {
      name: name,
      token: token
    }).then(res => {
      res = res.body
      if (res.status === 0) {
        console.log('dd')
      }
    }, res => {})
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
