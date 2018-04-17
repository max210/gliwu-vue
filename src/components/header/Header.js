import {mapMutations, mapGetters} from 'vuex'

export default {
  data () {
    return {
      myMenu: true
    }
  },
  computed: {
    ...mapGetters([
      'userName'
    ])
  },
  mounted () {
    this.checkLogin()
  },
  methods: {
    async checkLogin () {
      try {
        const res = await this.axios.get(`${this.globalData.host}/user/checkLogin`)
        if (res.data.status === 0) {

        } else {
          this.hideUsername()
        }
      } catch (e) {
        console.log(e)
      }
    },
    showSignin () {
      this.userInfo = ''
      this.showSignin()
      this.hideSignup()
    },
    showSignup () {
      this.showSignup()
      this.hideSignin()
    },
    signout () {
      this.$http.post('/v1/users/signout').then(res => {
        res = res.body
        location.reload()
      }, res => {})
    },
    toggleMyMenu () {
      this.myMenu = !this.myMenu
    },
    ...mapMutations({
      showSignin: 'showSignin',
      hideSignin: 'hideSignin',
      showSignup: 'showSignup',
      hideSignup: 'hideSignup',
      hideUsername: 'hideUsername'
    })
  }
}
