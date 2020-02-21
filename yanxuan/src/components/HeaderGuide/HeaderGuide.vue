<template>
    <div id="headerGuide">
        <div class="wrap">
            <div class="left">
                <i class="icon iconfont icon-index" @click="goToIndex"></i>
            </div>
            <span class="center">值得买</span>
            <div class="right">
                <i class="icon iconfont icon-search1" @click="goToSearch"></i>
                <i class="icon iconfont icon-cart" @click="goToCart"></i>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        methods: {
            goToSearch(){
                // console.log(this);
                this.$router.push('/search')
            },
            goToIndex(){
                // console.log(this);
                this.$router.push('/index')
            },
            goToCart(){
                // console.log(this);
                this.$router.push('/cart')
            }
        },
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
#headerGuide
    width 100%
    height 100px
    position relative
    position fixed
    left 0
    top 0
    z-index 10
    box-sizing border-box
    .wrap
        width 100%
        height 100px
        box-sizing border-box
        padding 0px 26px 0 24px
        background-color #fff
        display flex
        .left
            width 46px
            height 100px
            line-height 100px
            i 
                font-size 50px
        .center
            transform translateX(-50%)
            display block
            font-size 36px
            text-align center
            line-height 100px
            position absolute
            left 50%
        .right
            width 141px
            height 100px
            line-height 100px
            display flex
            position absolute
            right 0
            i 
                font-size 50px
            .icon-cart
                margin-left 14px
                
            

</style>