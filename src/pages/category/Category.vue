<template lang="html">
  <div class="goods-detail">

    <div class="outer-layer" @click="toHideDetailWindow" v-if="detailWindow"></div>

    <transition name="fade">
      <div class="detail-window-container" v-if="detailWindow">
        <DetailWindow :info="info"></DetailWindow>
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
          <li v-for="(item, index) in goodsMenu" @click="toggleMenu(index)" :class="{'current': currentMenuIndex === index}">
            <span>{{item}}</span>
            <div class="line-bottom"></div>
          </li>
        </ul>
      </div>
      <div class="goods-container clear">

        <div class="price-sort">
          <div :class="{'current': currentsort === index}" v-for="(item, index) in sortList" @click="sortGoods(index)">
            <span>{{item}}</span>
            <i class="fa fa-long-arrow-up" aria-hidden="true"></i>
          </div>
        </div>

        <div class="main-container">
          <div class="price-range-pc">
            <ul>
              <li :class="{'current': currentRange === index}" v-for="(item, index) in priceRange" @click="rangeGoods(index)">
                <p>{{item}}</p>
              </li>
            </ul>
          </div>

          <span class="m-filter" v-show="mRangeIcon" @click="showPriceRange"><i class="fa fa-sliders" aria-hidden="true"></i>筛选</span>
          <div class="transparent" v-show="transparent" @click="hidePriceRange"rr></div>
          <transition name="slide">
            <div class="price-range-m" v-show="!mRangeIcon">
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
              <div class="good-item" @click="showGoodInfo(item)">
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
                    <i class="fa fa-heart-o" aria-hidden="true" @click.stop="toHeart(item)"></i>
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
