import DetailWindow from '@/components/detailWindow/DetailWindow.vue'
import ResultWindow from '@/components/result-window/ResultWindow'
import { mapMutations, mapGetters } from 'vuex'

export default {
  data () {
    return {
      goods: [],
      goodsMenu: ['精选', '女生', '男生', '父母', '儿童'],
      priceRange: ['全部', '0 ¥ - 100 ¥', '100 ¥ - 200 ¥', '200 ¥ - 500 ¥', '500 ¥ - 1000 ¥', '1000 ¥ +'],
      pageSize: 6,
      sortModel: '',
      page: 1,
      productType: 1,
      initPage: true,
      btnShow: true,
      priceRangeShow: false,
      mFilter: true,
      maxPrice: '',
      minPrice: '',
      sProductImg: '',
      sProductDesc: '',
      sId: '',
      sProductLink: '',
      rangeFlag: false,
      rangeIndex: '',
      currentMenuIndex: 0,
      currentdown: false,
      currentup: false,
      currentdefault: true,
      currentRange: 0,
      transparent: false
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
    showInfo (img, desc, id, link) {
      this.sProductImg = img
      this.sProductDesc = desc
      this.sId = id
      this.sProductLink = link
      this.showDetailWindow()
    },

    async toHeart (id, img, link) {
      const params = {
        productId: id,
        productImg: img,
        productLink: link
      }
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
      this.currentMenuIndex = index
      this.productType = index + 1
      this.getGoodsList()
      this.btnShow = true
    },

    async getGoodsList () {
      const params = {
        page: this.page,
        pageSize: this.pageSize,
        productType: this.productType
      }
      try {
        const res = await this.axios.get(`${this.globalData.host}/good`, { params })
        if (res.data.status === 0) {
          if (!this.initPage) {
            this.goods = this.goods.concat(res.data.data)

            if (res.data.data.length === 0) {
              this.btnShow = false
            }
          } else {
            this.goods = res.data.data
          }
        } else {
          this.goods = []
        }
      } catch (e) {
        console.log(e)
      }
    },

    sortGoods (sortModel, sortFlag) {
      this.sortModel = sortModel
      if (sortModel === -1) {
        this.currentdown = true
        this.currentup = false
        this.currentdefault = false
      }

      if (sortModel === 1) {
        this.currentdown = false
        this.currentup = true
        this.currentdefault = false
      }

      if (sortFlag) {
        this.page = 1
        this.initPage = true
        this.btnShow = true
      }

      /* 有range时 */
      if (this.rangeFlag) {
        let param = {
          page: this.page,
          pageSize: this.pageSize,
          sort: this.sortModel,
          minPrice: this.minPrice,
          maxPrice: this.maxPrice,
          productType: this.productType
        }

        this.$http.get('/api/goods/getGoods', {params: param}).then(res => {
          res = res.body
          if (res.status === 0) {
            if (!this.initPage) {
              this.goods = this.goods.concat(res.result.list)

              if (res.result.count === 0) {
                this.btnShow = false
              }
            } else {
              this.goods = res.result.list
            }
          } else {
            this.goods = []
          }
        }, res => {
          /* 错误 */
        })
      } else {
        /* 没有range */
        let param = {
          page: this.page,
          pageSize: this.pageSize,
          sort: this.sortModel,
          productType: this.productType
        }
        this.$http.get('/api/good/getGoods', {params: param}).then(res => {
          res = res.body
          if (res.status === 0) {
            if (!this.initPage) {
              this.goods = this.goods.concat(res.result.list)

              if (res.result.count === 0) {
                this.btnShow = false
              }
            } else {
              this.goods = res.result.list
            }
          } else {
            this.goods = []
          }
        }, res => {
          /* 错误 */
        })
      }
    },

    sortGoodsDefault () {
      this.page = 1
      this.initPage = true
      this.btnShow = true
      this.currentdown = false
      this.currentup = false
      this.currentdefault = true

      if (this.rangeFlag) {
        this.rangeGoods(this.rangeIndex, 1)
      } else {
        this.getGoodsList()
      }
    },

    rangeGoods (index, clickLoad) {
      this.currentRange = index
      this.priceRangeShow = false
      this.transparent = false
      this.mFilter = true
      if (!clickLoad) {
        this.page = 1
        this.btnShow = true
      }
      if (index === 0) {
        this.rangeFlag = false
        this.btnShow = true
        this.getGoodsList()
      } else {
        this.rangeFlag = true
        this.rangeIndex = index
        switch (this.rangeIndex) {
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

        let param = {
          page: this.page,
          pageSize: this.pageSize,
          minPrice: this.minPrice,
          maxPrice: this.maxPrice,
          productType: this.productType
        }
        this.$http.get('/api/good/getGoods', {params: param}).then(res => {
          res = res.body
          if (res.status === 0) {
            if (!this.initPage && clickLoad) {
              this.goods = this.goods.concat(res.result.list.reverse())

              if (res.result.count === 0) {
                this.btnShow = false
              }
            } else {
              this.goods = res.result.list.reverse()
            }
          } else {
            this.goods = []
          }
        }, res => {
          /* 错误 */
        })
      }
    },

    loadMore (sortModel, rangeFlag) {
      this.initPage = false
      this.page ++
      if (sortModel) {
        this.sortGoods(sortModel)
      } else if (this.rangeFlag) {
        this.rangeGoods(this.rangeIndex, 1)
      } else {
        this.getGoodsList()
      }
    },

    cancelRange () {
      this.rangeFlag = false
      this.btnShow = true
      this.getGoodsList()
    },

    toHideDetailWindow () {
      this.hideDetailWindow()
    },

    showPriceRange () {
      this.mFilter = false
      this.priceRangeShow = true
      this.transparent = true
    },

    hidePriceRange () {
      this.priceRangeShow = false
      this.mFilter = true
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
