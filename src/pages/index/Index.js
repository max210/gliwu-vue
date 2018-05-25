import ResultWindow from '@/components/resultWindow/ResultWindow'
import {mapGetters} from 'vuex'

export default {
  data () {
    return {
      girlLineActive: false,
      girlDescActive: false,
      girlImgActive: false,
      boyImgActive: false,
      boyDescActive: false,
      boyLineActive: false,
      parentImgActive: false,
      parentDescActive: false,
      parentLineActive: false
    }
  },
  components: {
    ResultWindow
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.onScroll)
  },
  computed: {
    ...mapGetters([
      'resultWindow'
    ])
  },
  methods: {
    onScroll () {
      if (window.scrollY > 0) {
        this.girlLineActive = true
      } else {
        this.girlLineActive = false
      }
      if (window.scrollY > 200) {
        this.girlDescActive = true
        setTimeout(() => {
          this.girlImgActive = true
        }, 500)
      } else {
        this.girlDescActive = false
        this.girlImgActive = false
      }
      if (window.scrollY >= 450) {
        this.boyLineActive = true
      } else {
        this.boyLineActive = false
      }
      if (window.scrollY > 500) {
        this.boyDescActive = true
        setTimeout(() => {
          this.boyImgActive = true
        }, 500)
      } else {
        this.boyDescActive = false
        this.boyImgActive = false
      }
      if (window.scrollY >= 800) {
        this.parentLineActive = true
        this.parentDescActive = true
        this.parentImgActive = true
      } else {
        this.parentLineActive = false
        this.parentDescActive = false
        this.parentImgActive = false
      }
    }
  }
}
