<template>
    <div id="indexContainer">
        <div class="header">
            <div class="top">
                <div class="logoContainer">
                    <a href="" class="logo"></a>
                </div>
                <div class="search">
                    <div class="searchBtn">
                        <i class="icon iconfont icon-search1" ></i>
                        <span class="placeholder" >搜索商品, 共20259款好物</span>
                    </div>
                </div>
                <div class="login">登录</div>
            </div>
            <div class="tab">
                <div class="wrapper" ref="wrapper">
                    <ul ref="content">
                        <li class="item" v-for="(item, index) in indexCateModule" :key="index">
                            <span class="text">
                                {{item.name}}
                            </span>
                        </li>
                    </ul>
                </div>
                <div class="toggleWrap">
                    <div class="liner">

                    </div>
                    <div class="toggle">

                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import Swiper from 'swiper' 
    import 'swiper/css/swiper.min.css';
    import indexCateModule from '../../../datas/indexCateModule'
    export default {
        name: 'tabList',
        components: {

        },
        data () {
            return {
                indexCateModule
            }
        },
        methods: {
             	initScroll(){
                    // 给内层盒子设置宽度，不设置宽度的话无法滚动
                    // let width = this.indexCateModule.length * 144
                    // 如果有外边距，可以这样写。需要去掉最后一个元素的外边距，在后面减一下
                    // let width = this.goodslength * (60 + 10) - 10
                    // this.$refs.content.style.width = width + 'px'
                    this.$nextTick(()=>{
                        if(!this.Scroll) {
                        this.Scroll = new BScroll(this.$refs.wrapper,{
                            click: true,      // 配置允许点击事件
                            scrollX: true,    // 开启横向滚动
                            eventPassthrough: 'vertical'  // 当设置 eventPassthrough 为 'vertical' 的时候，scrollY 无效
                        })
                        } else {
                            this.Scroll.refresh()     // 重新计算 better-scroll，当 DOM 结构发生变化的时确保滚动效果正常
                        }
                    })
                }            
        },
        mounted () {
            this.initScroll()
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
#indexContainer

    .top
        width 100%
        height 88px
        padding 16px 30px
        box-sizing border-box
        .logoContainer
            width 138px
            height 40px
            float left
            .logo
                display inline-block
                width 138px
                height 40px
                margin-top 8px
                margin-right 20px
                background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png?imageView&type=webp)    
        .search
            width 460px
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
        .login
            width 74px
            height 40px
            float left
            color #dd1a21
            border-radius 8px
            border 1px solid #dd1a21
            text-align center
            line-height 40px
            margin-left 16px
            margin-top 7px
    .tab
        width 100%
        height 60px
        background-color #e3e
        .wrapper
            width 100%
            overflow hidden
            .content
                display flex
                white-space nowrap
                .item
                    // float left
                    width 60px
                    .text
                        color red

</style>