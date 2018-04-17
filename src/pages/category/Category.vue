<template lang="html">
  <div class="goods-detail">
    <Headervue></Headervue>

    <div class="outer-layer" @click="toHideDetailWindow" v-if="detailWindow"></div>

    <transition name="fade">
      <div class="detail-window-container" v-if="detailWindow">
        <DetailWindow :s-product-img="sProductImg" :s-product-desc="sProductDesc" :s-id="sId" :s-product-link="sProductLink"></DetailWindow>
      </div>
    </transition>

    <transition name="fade">
      <div class="result-window-container" v-if="resultWindow">
        <ResultWindow></ResultWindow>
      </div>
    </transition>

    <div class="detail-main-container">
      <div class="goods-menu">
        <ul>
          <li v-for="(iterm, index) in goodsMenu" @click="toggleMenu(index)" :class="{'current': currentMenuIndex === index}">
            <span>{{iterm}}</span>
            <div class="line-bottom"></div>
          </li>
        </ul>
      </div>
      <div class="goods-container clear">
        <div class="price-sort">
          <span :class="{currentdefault: currentdefault}" @click="sortGoodsDefault()">综合</span>
          <span :class="{currentup: currentup}" @click="sortGoods(1, 1)">升序<i class="fa fa-long-arrow-up" aria-hidden="true"></i></span>
          <span :class="{currentdown: currentdown}" @click="sortGoods(-1, 1)">降序<i class="fa fa-long-arrow-down" aria-hidden="true"></i></span>
        </div>
        <div class="main-container">
          <div class="price-range-pc">
            <ul>
              <li :class="{'current': currentRange === index}" v-for="(item, index) in priceRange" @click="rangeGoods(index)">
                <p>{{item}}</p>
              </li>
            </ul>
          </div>

          <span class="m-filter" v-if="mFilter" @click="showPriceRange"><i class="fa fa-sliders" aria-hidden="true"></i>筛选</span>
          <div class="transparent" v-show="transparent" @click="hidePriceRange"></div>
          <transition name="slide">
            <div class="price-range-m" v-if="priceRangeShow">
              <i class="fa fa-times" aria-hidden="true" @click="hidePriceRange"></i>
              <ul>
                <li :class="{'current': currentRange === index}" v-for="(item, index) in priceRange" @click="rangeGoods(index)">
                  <p>{{item}}</p>
                </li>
              </ul>
            </div>
          </transition>
          <div class="good">
            <div class="good-item-padding" v-for="item in goods">
              <div class="good-item" @click="showInfo(item.productImg, item.productDesc, item._id, item.productLink)">
                <div class="img">
                  <img :src="item.productImg" :alt="item.productName">
                </div>
                <div class="text-container">
                  <div class="title">
                    <p>{{item.productName}}</p>
                  </div>
                  <div class="price">
                    <p>¥{{item.productPrice}}</p>
                  </div>
                  <div class="icons">
                    <i class="fa fa-heart-o" aria-hidden="true" @click.stop="toHeart(item._id, item.productImg, item.productLink)"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="btn">
              <div class="shake-container" v-if="btnShow" @click="loadMore(sortModel)">
                <div class="shake">不过瘾再来点</div>
              </div>
              <i class="fa fa-meh-o" aria-hidden="true" v-if="!btnShow"></i>
              <span class="no-goods" v-if="!btnShow">不骗你真的没有更多了...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Category from './Category'
  export default Category
</script>

<style scoped lang="scss">
  @import "./Category";
</style>
