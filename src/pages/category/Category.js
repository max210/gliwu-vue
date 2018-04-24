import DetailWindow from '@/components/detailWindow/DetailWindow.vue'
import ResultWindow from '@/components/resultWindow/ResultWindow'
import { mapMutations, mapGetters } from 'vuex'

export default {
  data () {
    return {
      goods: [],
      sortList: ['综合', '升序', '降序'],
      goodsMenu: ['精选', '女生', '男生', '父母', '儿童'],
      priceRange: ['全部', '0 ¥ - 100 ¥', '100 ¥ - 200 ¥', '200 ¥ - 500 ¥', '500 ¥ - 1000 ¥', '1000 ¥ +'],
      pageSize: 6,
      page: 1,
      productType: 1,
      maxPrice: '',
      minPrice: '',
      sortModel: '',
      initPage: true,
      btnShow: true,
      currentsort: 0,
      currentMenuIndex: 0,
      currentdefault: true,
      currentRange: 0,
      transparent: false,
      info: {},
      mRangeIcon: true
    }
  },

  components: {
    DetailWindow,
    ResultWindow
  },

  computed: {
    ...mapGetters([
      'detailWindow',
      'resultWindow',
      'msg'
    ])
  },

  mounted () {
    if (this.$route.params.productType) {
      this.currentMenuIndex = this.$route.params.currentMenuIndex
      this.productType = this.$route.params.productType
    }
    this.getGoodsList()
  },

  methods: {
    showGoodInfo (item) {
      this.info = item
      this.showDetailWindow()
    },

    async toHeart (item) {
      const params = this.qs.stringify({
        productId: item._id,
        productImg: item.productImg,
        productLink: item.productLink
      })
      try {
        const res = await this.axios.post(`${this.globalData.host}/user/addCollection`, params)
        this.inputMsg(res.data.msg)
        this.showResultWindow()
      } catch (e) {
        console.log(e)
      }
    },

    toggleMenu (index) {
      this.goods = []
      this.page = 1
      this.currentRange = 0
      this.currentsort = 0
      this.sortModel = ''
      this.minPrice = ''
      this.maxPrice = ''
      this.currentMenuIndex = index
      this.productType = index + 1
      this.btnShow = true

      this.getGoodsList()
    },

    async getGoodsList () {
      const params = {
        page: this.page,
        sort: this.sortModel,
        pageSize: this.pageSize,
        minPrice: this.minPrice,
        maxPrice: this.maxPrice,
        productType: this.productType
      }
      try {
        const res = await this.axios.get(`${this.globalData.host}/good`, { params })
        if (res.data.status === 0) {
          if (this.page === 1) {
            this.goods = res.data.data
          } else {
            this.goods = this.goods.concat(res.data.data)

            if (res.data.data.length === 0) {
              this.btnShow = false
            }
          }
        } else {
          this.goods = []
        }
      } catch (e) {
        console.log(e)
      }
    },

    sortGoods (index) {
      this.currentsort = index
      this.page = 1

      switch (this.currentsort) {
        case 0:
          this.sortModel = ''
          break
        case 1:
          this.sortModel = 1
          break
        default:
          this.sortModel = -1
      }

      this.getGoodsList()
    },

    rangeGoods (index) {
      this.currentRange = index
      this.btnShow = true
      this.page = 1

      switch (this.currentRange) {
        case 0:
          this.minPrice = ''
          this.maxPrice = ''
          break
        case 1:
          this.minPrice = 0
          this.maxPrice = 100
          break
        case 2:
          this.minPrice = 100
          this.maxPrice = 200
          break
        case 3:
          this.minPrice = 200
          this.maxPrice = 500
          break
        case 4:
          this.minPrice = 500
          this.maxPrice = 1000
          break
        case 5:
          this.minPrice = 1000
          this.maxPrice = 100000
          break
      }

      this.getGoodsList()
    },

    loadMore () {
      this.page += 1
      this.getGoodsList()
    },

    toHideDetailWindow () {
      this.hideDetailWindow()
    },

    showPriceRange () {
      this.mRangeIcon = false
      this.transparent = true
    },

    hidePriceRange () {
      this.mRangeIcon = true
      this.transparent = false
    },

    ...mapMutations({
      showDetailWindow: 'showDetailWindow',
      hideDetailWindow: 'hideDetailWindow',
      showResultWindow: 'showResultWindow',
      inputMsg: 'inputMsg'
    })
  }
}
