export default {
  showDetailWindow (state) {
    state.detailWindow = true
  },

  hideDetailWindow (state) {
    state.detailWindow = false
  },

  showResultWindow (state) {
    state.resultWindow = true
  },

  hideResultWindow (state) {
    state.resultWindow = false
  },

  inputMsg (state, msg) {
    state.msg = msg
  },

  showSignin (state) {
    state.signinPage = true
  },

  hideSignin (state) {
    state.signinPage = false
  },

  showSignup (state) {
    state.signupPage = true
  },

  hideSignup (state) {
    state.signupPage = false
  },

  showResult (state) {
    state.resultPage = true
  },

  hideResult (state) {
    state.resultPage = false
  },

  showUserName (state, name) {
    state.userName = name
  },

  hideUserName (state) {
    state.userName = ''
  }
}
