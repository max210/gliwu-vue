import {mapMutations, mapGetters} from 'vuex'

export default {
  data () {
    return {
      userInfo: '',
      name: '',
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
    closeSign () {
      this.hideSignin()
      this.hideSignup()
      this.userInfo = ''
    },
    signin () {
      this.userInfo = ''
      if (!this.name || !this.pass) {
        this.userInfo = '用户名或密码不能为空'
      } else {
        let param = {
          name: this.name,
          pass: this.pass
        }
        this.$http.get('/v1/users/signin', {params: param}).then(res => {
          res = res.body
          if (res.status !== 0) {
            this.userInfo = res.msg
          } else {
            this.hideSignin()
            this.showUsername()
          }
        }, res => {})
      }
    },
    signup () {
      if (!this.name || !this.pass || !this.rePass) {
        this.userInfo = '用户名或密码不能为空'
      } else if (this.pass !== this.rePass) {
        this.userInfo = '两次输入的密码不一致'
      } else {
        this.$http.post('/v1/users/signup', {
          name: this.name,
          pass: this.pass,
          rePass: this.rePass
        })
        .then(res => {
          res = res.body
          if (res.status !== 0) {
            this.userInfo = res.msg
            this.hideResult()
          } else {
            this.hideSignup()
            this.showResult()
          }
        }, res => {})
      }
    },
    hideResult () {
      this.hideResult()
    },
    showSignin1 () {
      this.userInfo = ''
      this.hideSignup()
      this.showSignin()
    },
    showSignup1 () {
      this.userInfo = ''
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
      showUsername: 'showUsername'
    })
  }
}
