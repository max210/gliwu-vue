<template lang="html">
  <div>
    <div class="header">
      <div class="logo">
        <!-- <img src="./logo.png" alt=""> -->
      </div>
      <div class="right-container-user">
        <span>{{adminName}}</span>
      </div>
    </div>

    <div class="white-bg">
      <div class="admin-container">
        <div class="admin-signin" v-if="adminSignin">
          <h4>Log In</h4>
          <p class="user-info"><i class="fa fa-exclamation-circle" aria-hidden="true" v-show="userInfo"></i>{{userInfo}}</p>
          <div class="username">
            <span>User Name</span>
            <input type="text" class="form-control" name="" placeholder="点我输入用户名" v-model="name">
          </div>
          <div class="password">
            <span>Password</span>
            <input type="text" class="form-control" name="" placeholder="点我输入密码" v-model="pass">
          </div>
          <p class="sign-btn" @click="signin">Log In</p>
        </div>

        <div class="admin-index" v-if="adminIndex">

          <div class="outer-layer" v-if="showAddNew"></div>

          <p class="new-btn" @click="showAdd">新增项目</p>
          <div class="add-new" v-if="showAddNew">
            <i class="fa fa-times close" aria-hidden="true" @click="closeAdd"></i>
            <div class="addnew-container">
              <div class="product-input">
                <span>商品类型</span>
                <select v-model="productType">
                  <option disabled value="">选择商品类型</option>
                  <option>精选</option>
                  <option>女生</option>
                  <option>男生</option>
                  <option>父母</option>
                  <option>儿童</option>
                </select>
              </div>
              <div class="product-input">
                <span>商品名称</span>
                <input type="text" name="" value="" v-model="productName">
              </div>
              <div class="product-input">
                <span>图片地址</span>
                <input type="text" name="" value="" v-model="productImg">
              </div>
              <div class="product-input">
                <span>商品价格</span>
                <input type="text" name="" value="" v-model="productPrice">
              </div>
              <div class="product-input">
                <span>商品描述</span>
                <textarea name="name" v-model="productDesc"></textarea>
              </div>
              <p class="submit-btn" @click="submit">提交</p>
            </div>
          </div>
          <div class="product-container">
            <div class="products" v-for="item in goods">
              <div class="img">
                <img :src="item.productImg" alt="">
              </div>
              <div class="btns">
                <span class="btn1">编辑</span>
                <span class="btn2" @click="deleteProduct(item._id)">删除</span>
              </div>
            </div>
          </div>
          <div class="btn">
            <button type="button" name="button" v-show="btnShow" @click="loadMore">加载更多</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Admin from './Admin'
  export default Admin
</script>

<style scoped lang="scss">
  @import "./Admin";
</style>
