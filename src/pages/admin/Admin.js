export default {

  data () {
    return {
      btnShow: true,
      initPage: true,
      WindowFlag: false,
      addNewFlag: true,
      pageSize: 8,
      page: 1,
      userInfo: '',
      goods: [],
      productType: '',
      productName: '',
      productImg: '',
      productPrice: '',
      productDesc: ''
    }
  },

  mounted () {
    this.getGoodList()
  },

  computed: {
    layerShow () {
      return this.addWindowFlag || this.changeWindowFlag
    }
  },

  methods: {

    async getGoodList () {
      const params = {
        pageSize: this.pageSize,
        page: this.page
      }
      try {
        const res = await this.axios.get(`${this.globalData.host}/admin/get-all-goods`, { params })
        if (res.data.status === 0) {
          let list = res.data.data
          // 格式化时间
          list.forEach(item => {
            item.created = this.getTime(item.created)
          })

          if (this.initPage) {
            this.goods = list
          } else {
            this.goods = this.goods.concat(list)
            if (res.data.data.length === 0) this.btnShow = false
          }
        }
      } catch (e) {
        console.log(e)
      }
    },

    async submit () {
      if (this.productType && this.productName && this.productImg && this.productPrice && this.productDesc) {
        switch (this.productType) {
          case '精选':
            this.productType = 1
            break
          case '女生':
            this.productType = 2
            break
          case '男生':
            this.productType = 3
            break
          case '父母':
            this.productType = 4
            break
          case '儿童':
            this.productType = 5
            break
        }
        const params = this.qs.stringify({
          productType: this.productType,
          productName: this.productName,
          productImg: this.productImg,
          productPrice: this.productPrice,
          productDesc: this.productDesc
        })
        try {
          // 新增商品
          if (this.addNewFlag) {
            const res = await this.axios.post(`${this.globalData.host}/admin/new-good`, params)
            if (res.data.status === 0) {
              this.productType = ''
              this.productName = ''
              this.productImg = ''
              this.productPrice = ''
              this.productDesc = ''
              this.WindowFlag = false
            }
          } else {
            // 更改商品
            const res = await this.axios.post(`${this.globalData.host}/admin/update-good`, params)
            if (res.data.status === 0) {
              this.productType = ''
              this.productName = ''
              this.productImg = ''
              this.productPrice = ''
              this.productDesc = ''
              this.WindowFlag = false
            }
          }
        } catch (e) {
          console.log(e)
        }
      }
    },

    async deleteProduct (productId) {
      confirm('确定要删除此产品吗？')
      const params = this.qs.stringify({ productId })
      try {
        const res = await this.axios.post(`${this.globalData.host}/admin/delete-good`, params)
        if (res.data.status === 0) {
          this.getGoodList()
        }
      } catch (e) {
        console.log(e)
      }
    },

    loadMore () {
      this.page += 1
      this.initPage = false
      this.getGoodList()
    },

    showWindow (flag, item) {
      if (flag) {
        this.addNewFlag = true
        this.WindowFlag = true
      } else {
        this.addNewFlag = false
        this.WindowFlag = true

        this.productType = item.productType
        this.productName = item.productName
        this.productImg = item.productImg
        this.productPrice = item.productPrice
        this.productDesc = item.productDesc
      }
    },

    closeWindow () {
      this.WindowFlag = false
    },

    getTime (time) {
      time = new Date(time)
      const Y = time.getFullYear()
      const M = (time.getMonth() + 1) > 10 ? (time.getMonth() + 1) : `0${time.getMonth() + 1}`
      const D = time.getDate() > 10 ? time.getDate() : `0${time.getDate()}`
      const H = time.getHours() > 10 ? time.getHours() : `0${time.getHours()}`
      const MT = time.getMinutes() > 10 ? time.getMinutes() : `0${time.getMinutes()}`

      return (`${Y}.${M}.${D} ${H}:${MT}`)
    }

  }
}
