<template lang="html">
  <div>
    <div class="transparent" v-if="showTransparent" @click="hideSign"></div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'signinPage',
      'resultPage',
      'signupPage'
    ]),
    showTransparent () {
      return this.signinPage || this.resultPage || this.signupPage
    }
  },
  methods: {
    hideSign () {
      this.hideSignin()
      this.hideSignup()
    },
    ...mapMutations({
      hideSignup: 'hideSignup',
      hideSignin: 'hideSignin'
    })
  }
}
</script>

<style scoped lang="scss">
  .transparent {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    background: rgba(50, 50, 50, 0.5);
  }
</style>
