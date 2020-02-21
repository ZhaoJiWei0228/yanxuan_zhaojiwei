<template>
    <div id="classifyList">
        <div class="headerWrap">
            <div class="search">
                <div class="searchBtn" @click="goToSearch">
                    <i class="icon iconfont icon-search1" ></i>
                    <span class="placeholder" >搜索商品, 共20259款好物</span>
                </div>
            </div>        
        </div>
        <div class="bannerWrap">
            <GoodsListContents/>
            <SubCateList/>
        </div>
        
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import GoodsListContents from '../../components/GoodsListContents/GoodsListContents'
    import SubCateList from '../../components/SubCateList/SubCateList'
    export default {
        components:{
            GoodsListContents,
            SubCateList
        },
        methods: {
            goToSearch(){
                // console.log(this);
                this.$router.push('/search')
            }
        },
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
#classifyList
    overflow hidden
    width 100%
    height 1237px
    background-color #eee
    .headerWrap
        background-color #fff
        width 100%
        height 89px
        box-sizing border-box
        padding 16px 30px
        border-bottom 1px solid #d9d9d9
        .search
            width 690px
            height 56px
            float left
            .searchBtn
                margin-left 20px
                background-color #ededed
                border-radius 8px
                color #515151
                display flex
                justify-content center
                filter none
                font-size 28px
                height 56px
                line-height 42px
                .iconfont
                    color #666
                    display block
                    height 28px
                    line-height 60px
                    margin-right 10px
                    font-size 28px
                    vertical-align middle
                    width 28px
                .placeholder
                    line-height 56px
                    color #666
    .bannerWrap
        width 100%
        height 1148px
        display flex
</style>