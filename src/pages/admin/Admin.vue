<template lang="html">
  <div class="white-bg">
    <div class="admin-container">

      <span class="new-btn" @click="showWindow(true)">新增项目</span>

      <div class="product-container">
        <div class="product-item" v-for="item in goods">
          <div class="img-name-container">
            <img :src="item.productImg" :alt="item.productName">
            <p>{{item.productName}}</p>
          </div>
          <div class="btn-time-container">
            <span class="time">更新时间：{{item.created}}</span>
            <span class="change-btn" @click="showWindow(false, item)">编辑</span>
            <span class="delete-btn" @click="deleteProduct(item._id)">删除</span>
          </div>
        </div>
      </div>

      <div class="btn">
        <button type="button" name="button" v-show="btnShow" @click="loadMore">加载更多</button>
      </div>

      <div class="outer-layer" v-if="WindowFlag"></div>

      <div class="add-window" v-if="WindowFlag">
        <i class="fa fa-times close" aria-hidden="true" @click="closeWindow"></i>
        <div class="addnew-container">
          <div class="product-input">
            <span>商品类型</span>
            <select v-model="productType">
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
