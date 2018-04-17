export default {
  data () {
    return {
      adminSignin: false,
      adminIndex: false,
      btnShow: true,
      initPage: true,
      showAddNew: false,
      pageSize: 8,
      page: 1,
      selected: '',
      adminName: '',
      userInfo: '',
      name: '',
      pass: '',
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
    this.checkLogin()
  },
  methods: {
    signin () {
      let param = {
        name: this.name,
        pass: this.pass
      }
      this.$http.get('/v1/admin/signin', {params: param}).then(res => {
        res = res.body
        if (res.status === 0) {
          this.adminSignin = false
          this.adminIndex = true
        } else {
        }
      }, res => {})
    },
    submit () {
      if (!this.productType || !this.productName || !this.productImg || !this.productPrice || !this.productDesc) {

      } else {
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
        this.$http.post('v1/admin/addnew', {
          productType: this.productType,
          productName: this.productName,
          productImg: this.productImg,
          productPrice: this.productPrice,
          productDesc: this.productDesc
        }).then(res => {
          res = res.body
          if (res.status === 0) {
            this.productType = ''
            this.productName = ''
            this.productImg = ''
            this.productPrice = ''
            this.productDesc = ''
            this.showAddNew = false
          }
        }, res => {})
      }
    },
    getGoodList () {
      let param = {
        pageSize: this.pageSize,
        page: this.page
      }
      this.$http.get('/v1/goods', {params: param}).then(res => {
        res = res.body
        if (res.status === 0) {
          this.adminName = res.msg

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
      })
    },
    loadMore () {
      this.page ++
      this.initPage = false
      this.getGoodList()
    },
    checkLogin () {
      this.$http.get('/v1/admin/checkLogin').then(res => {
        res = res.body
        if (res.status === 0) {
          this.adminName = res.msg
          this.adminSignin = false
          this.adminIndex = true
        } else {
          this.adminSignin = true
        }
      })
    },
    showAdd () {
      this.showAddNew = true
    },
    closeAdd () {
      this.showAddNew = false
    },
    deleteProduct (id) {
      confirm('确定要删除此产品吗？')
      this.$http.post('v1/admin/delete', {
        productId: id
      }).then(res => {
        res = res.body
        if (res.status === 0) {
          this.getGoodList()
        }
      }, res => {})
    }
  }
}
