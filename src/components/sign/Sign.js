import { mapMutations, mapGetters } from 'vuex'

export default {

  data () {
    return {
      prompt: '',
      nameOrEmail: '',
      name: '',
      email: '',
      pass: '',
      rePass: ''
    }
  },

  computed: {
    ...mapGetters([
      'signinPage',
      'resultPage',
      'signupPage'
    ])
  },

  methods: {

    async signin () {
      this.prompt = ''
      if (!this.nameOrEmail || !this.pass) {
        this.prompt = '信息不能为空'
        return
      }

      const params = {
        nameOrEmail: this.nameOrEmail,
        pass: this.pass
      }
      try {
        const res = await this.axios.get(`${this.globalData.host}/user/signin`, { params })
        if (res.data.status === 0) {
          this.hideSignin()
          this.showUsername(res.data.name)
        } else {
          this.prompt = res.data.msg
        }
      } catch (e) {
        console.log(e)
      }
    },

    async signup () {
      if (!this.name || !this.email || !this.pass || !this.rePass) {
        this.prompt = '用户名或密码不能为空'
      } else if (this.pass !== this.rePass) {
        this.prompt = '两次输入的密码不一致'
      } else {
        const params = this.qs.stringify({
          name: this.name,
          email: this.email,
          pass: this.pass,
          rePass: this.rePass
        })
        try {
          const res = await this.axios.post(`${this.globalData.host}/user/signup`, params)
          if (res.data.status === 0) {
            this.hideSignup()
            this.showResult(res.data.msg)
          } else {
            this.prompt = res.data.msg
          }
        } catch (e) {
          console.log(e)
        }
      }
    },

    closeSign () {
      this.hideSignin()
      this.hideSignup()
      this.prompt = ''
    },

    hideResult () {
      this.hideResult()
    },

    showSignin1 () {
      this.prompt = ''
      this.hideSignup()
      this.showSignin()
    },

    showSignup1 () {
      this.prompt = ''
      this.hideSignin()
      this.showSignup()
    },

    ...mapMutations({
      hideSignin: 'hideSignin',
      showSignin: 'showSignin',
      hideResult: 'hideResult',
      showResult: 'showResult',
      hideSignup: 'hideSignup',
      showSignup: 'showSignup',
      showUsername: 'showUserName',
      showResultWindow: 'showResultWindow'
    })
  }
}
