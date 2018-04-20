import { mapMutations, mapGetters } from 'vuex'

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
          this.showUsername(res.data.name)
        } else {
          this.hideUsername()
        }
      } catch (e) {
        console.log(e)
      }
    },

    async signout () {
      try {
        const res = await this.axios.get(`${this.globalData.host}/user/signout`)
        if (res.data.status === 0) {
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

    toggleMyMenu () {
      this.myMenu = !this.myMenu
    },

    ...mapMutations({
      showSignin: 'showSignin',
      hideSignin: 'hideSignin',
      showSignup: 'showSignup',
      hideSignup: 'hideSignup',
      showUsername: 'showUserName',
      hideUsername: 'hideUserName'
    })
  }
}
