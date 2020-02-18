<template>
  <div id="footerContainer">
    <div :class="{active: $route.path === '/index'}" @click="goPath('/index')" class="guideItem">
      <i class="icon iconfont icon-index"></i>
      <span>首页</span>
    </div>
    <div :class="{active: $route.path === '/classifyList'}" @click="goPath('/classifyList')" class="guideItem">
      <i class="icon iconfont icon-cate"></i>

      <span>分类</span>
    </div>
    <div :class="{active: $route.path === '/deserveBuy'}" @click="goPath('/deserveBuy')" class="guideItem">
      <i class="icon iconfont icon-ic_material_top_pic"></i>

      <span>值得买</span>
    </div>
    <div :class="{active: $route.path === '/cart'}" @click="goPath('/cart')" class="guideItem">
      <i class="icon iconfont icon-cart"></i>

      <span>购物车</span>
    </div>
    <div :class="{active: $route.path === '/mine'}" @click="goPath('/mine')" class="guideItem">
      <i class="icon iconfont icon-personalcenter"></i>

      <span>个人</span>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      goPath(path){
        // 跳转至指定的路由路径
        /*编程式导航： $router */
        /*
        * $route 和 $router 的区别
        *   1. $router 是路由器对象，里边包含路由跳转的方法
        *   2. $route 是路由对象，里边包含当前路径下所有路由信息(path， params， meta， query)
        * */

        path !== this.$route.path && this.$router.push(path)

      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  // @import "//at.alicdn.com/t/font_1644213_ewfp0lnikr.css"
  @import "../../common/stylus/mixins.styl"
  #footerContainer
    display flex
    top-border-1px(#eee)
    position fixed
    left 0
    bottom 0
    width 100%
    height 98px
    box-sizing border-box
    background #fff
    .guideItem
      width 20%
      height 98px
      text-align center
      display flex
      flex-direction column
      &.active
        color $red
      .iconfont
        font-size 40px
        line-height 60px
</style>
