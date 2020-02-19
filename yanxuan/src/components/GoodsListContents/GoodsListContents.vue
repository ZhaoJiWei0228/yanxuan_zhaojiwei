<template>
    <div id="goodsListContents">
        <div class="wrapper" ref="wrapper">
            <ul class="content" > 
                <li v-for="(item, index) in cateLists" :key="index" class="item">{{item.name}}</li> 
            </ul>
        </div> 
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import cateLists from '../../../datas/cateLists'
    export default {
        data() {
            return {
                cateLists
            }
        },
        mounted() {
            this.$nextTick(() => { 
                this.scroll = new BScroll(this.$refs.wrapper, {}) 
            })
        },
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
#goodsListContents
    width 162px
    height 1148px
    background-color #e3e
    .wrapper
        height 1148px
        width 162px
        overflow hidden
        .content
            box-sizing border-box
            padding 20px 0 98px
            height 1334px
            .item
                width 162px
                height 50px
                margin-top 40px

</style>