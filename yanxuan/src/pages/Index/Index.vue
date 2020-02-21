<template>
    <div id="indexContainer">
        <div class="header">
            <div class="top">
                <div class="logoContainer">
                    <a href="" class="logo"></a>
                </div>
                <div class="search" @click="goToSearch">
                    <div class="searchBtn">
                        <i class="icon iconfont icon-search1" ></i>
                        <span class="placeholder" >搜索商品, 共20259款好物</span>
                    </div>
                </div>
                <div class="login">登录</div>
            </div>
            <div class="tab">
                <div class="wrapper" ref="wrapper">
                    <ul class="content" ref="content">
                        <li class="item">
                            <span class="text">
                                推荐
                            </span>
                        </li>
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
                        <i class="icon iconfont icon-iconcontrolarrowdown"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item, index) in indexCateModule" :key="index">
                    <img :src="item.imgUrl" alt="">
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
        <div class="log">
            <ul class="grow">
                <li class="item">
                    <a class="ziying">
                        <i></i>
                        <span>
                            网易自营品牌
                        </span>
                    </a>
                </li>
                <li class="item">
                    <a class="wuyou">
                        <i></i>
                        <span>
                            30天无退货
                        </span>
                    </a>
                </li>
                <li class="item">
                    <a class="tuikuan">
                        <i></i>
                        <span>
                            48小时极速退款
                        </span>
                    </a>
                </li>
            </ul>
            
            
            
        </div>
        <div class="classifyListContainer">
            <div class="classifyList">
                <ul class="list">
                    <li class="item" v-for="(item, index) in indexData.kingKongModule.kingKongList" :key="index">
                        <div class="icon">
                            <img :src="item.picUrl" class="img">
                        </div>
                        <div class="text">
                            {{item.text}}
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="indexBigContainer">
            <div class="floorTop">
                <a href="" class="promItem">
                    <div class="promGood">
                        <img src="https://yanxuan-item.nosdn.127.net/58b7b4a5277dddbfd9b99b07f38b6c20.png?imageView&thumbnail=168x0&quality=75" alt="" class="img">
                        <div class="price">
                            <span>￥29.9</span>
                        </div>
                    </div>
                </a>
            </div>
            <div class="floorFist">
                <a href=""></a>
            </div>
            <div class="floor">
                <a href="" class="left"></a>
                <a href="" class="right"></a>
            </div>
            <div class="floor">
                <a href="" class="left1"></a>
                <a href="" class="right1"></a>
            </div>
        </div>
        <div class="newPerson">
            <div class="title">
                <span class="txt">
                    新人专享礼
                </span>
            </div>
            <div class="content">
                <a href="" class="left">
                    <div class="name">新人专享礼包</div>
                    <div class="imgWrap">
                        <img src="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="">
                    </div>
                </a>
                <div class="right">
                    <div class="module1">
                        <a href="">
                            <div class="picWrap">
                                <div class="pic">
                                    <img src="https://yanxuan-item.nosdn.127.net/0fd9f9e40f287ecfe3b54aaafda914f6.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="" class="img">
                                </div>
                                <div class="price">
                                    <div class="line1">￥59</div>
                                    <div class="line2">￥69</div>
                                </div>
                            </div>
                            <div class="cnt">
                                <div class="title">
                                    福利社
                                </div>
                                <div class="subTitle">
                                    今日特价
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="module2">
                        <a href="">
                            <div class="cnt">
                                <div class="title">
                                    新人拼团
                                </div>
                                <div class="subTitle1">
                                    1元起包邮
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="hotList">
            <div class="hotTitle">
                类目热销榜
            </div>
            <div class="content">
                <div class="line1">
                    <div class="bigItem" v-for="(item, index) in indexData.categoryHotSellModule.categoryList.slice(0,2)" :key="index">
                        <div class="name">
                            <span class="txt">
                                {{item.categoryName}}
                            </span>
                        </div>
                        <div class="imgWrap">
                            <img :src="item.picUrl" alt="">
                        </div>
                    </div>
                </div>
                <div class="line2">
                    <div class="item" v-for="(item, index) in indexData.categoryHotSellModule.categoryList.slice(2,10)" :key="index">
                        <div class="name">
                            {{item.categoryName}}
                        </div>
                        <div class="imgWrap">
                            <img :src="item.picUrl" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="countTimeBuy">
            <div class="title">
                <div class="left">
                    <span>限时购</span>
                    <CountTime/>
                </div>
                <div class="right">
                    <span>更多</span>
                    <i class="icon iconfont icon-iconcontrolarrowright"></i>
                </div>
            </div>
            <div class="cnt">
                <div class="item" v-for="(item, index) in indexData.flashSaleModule.itemList" :key="index">
                    <div class="imgWrap">
                        <img :src="item.picUrl" alt="">
                    </div>
                    <div class="price">
                        <span class="new">￥{{item.activityPrice}}</span>
                        <span class="old">￥{{item.originPrice}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="newArrival">
            <div class="title">
                <div class="left">
                    <span>新品首发</span>
                </div>
                <div class="right">
                    <span>更多</span>
                    <i class="icon iconfont icon-iconcontrolarrowright"></i>
                </div>
            </div>
            <div class="listContainer">
                <ul class="list" >
                    <li class="item" v-for="(item, index) in indexData.flashSaleModule.itemList" :key="index">
                        <div class="good">
                            <div class="picWrap">
                                <img :src="item.picUrl" alt="">
                            </div>
                            <div class="name">新品首发暂无数据,新品首发暂无数据</div>
                            <div class="price">￥{{item.activityPrice}}</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="bottomLightShopping">
            <ul class="list" v-for="(item, index) in indexData.sceneLightShoppingGuideModule" :key="index">
                <li class="item">
                    <div class="title">{{item.styleItem.title}}</div>
                    <div class="desc">{{item.styleItem.desc}}</div>
                    <div class="picList">
                        <img :src="item.styleItem.picUrlList[0]" alt="">
                        <img :src="item.styleItem.picUrlList[1]" alt="">
                    </div>
                    
                </li>
            </ul>
        </div>
        <div class="footBar">
            <div class="footWrap">
                <div class="bd">
                    <a href="" class="downLoad">
                        下载APP
                    </a>
                    <a href="" class="computer">
                        电脑版
                    </a>
                </div>
                <p class="copyRight">
                    <span>网易公司版权所有©1997-2020</span>
                    <span>视频经营许可证:JY13301080111719</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import Swiper from 'swiper' 
    import 'swiper/css/swiper.min.css';
    import indexCateModule from '../../../datas/indexCateModule'
    import indexData from '../../../datas/index'
    import CountTime from '../../components/CountTime/CountTime'
    export default {
        name: 'tabList',
        components: {
            CountTime
        },
        data () {
            return {
                indexCateModule,
                indexData
            }
        },
        methods: {
             	initScroll(){
                    // 给内层盒子设置宽度，不设置宽度的话无法滚动
                    let width = this.indexCateModule.length * 172
                    this.$refs.content.style.width = width + 'px'
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
                },
                goToSearch(){
                // console.log(this);
                this.$router.push('/search')
                }
        },
        mounted () {
            this.initScroll()
            let mySwiper = new Swiper('.swiper-container', {
                autoplay:true,
                loop:true,
                pagination: {
                    el: '.swiper-pagination',
                },
            })
        },
        computed: {
            // let bigItemArr = indexData.categoryHotSellModule.categoryList.slice(0,3)
            bigItemArr : () => {
                indexData.categoryHotSellModule.categoryList.slice(0,3)
            }
        },
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
#indexContainer
    // height 9999px
    padding-bottom 98px
    background-color #eee
    .top
        background-color #fff
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
                background-size 100%
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
        background-color #fff
        width 100%
        height 60px
        .wrapper
            width 650px
            overflow hidden
            float left
            .content
                white-space nowrap
                .item
                    float left
                    white-space nowrap
                    .text
                        font-size 28px
                        line-height 60px
                        text-align center
                        padding 0 16px
        .toggleWrap
            width 100px
            height 60px
            float left 

            .liner
                background-image linear-gradient(to right,rgba(255,255,255,0) 0,#fff 100%)
                height 60px
                width 60px
                box-sizing border-box
                display block
                filter none
                position absolute
                right 100px
            .toggle
                float right
                width 100px
                height 60px
                font-size 24px
                .iconfont
                    font-size 60px
                    line-height 60px
                    height 60px
                    text-align center
                    margin 0 20px
    .swiper-container
        width 100%
        height 370px
        .swiper-pagination-bullet
            background-color #fff
            border-radius 0
            width 40px
            height 4px
            border none
        .swiper-pagination
            bottom 30px
        .swiper-pagination-bullet-active
            background-color #fff
    .log
        background-color #fff
        width 100%
        padding 0 30px
        height 72px
        box-sizing border-box
        .grow
            display flex
            line-height 72px
            .item
                width 228px
                span
                    margin-left 40px
        .ziying
            position relative
            i
                background-size 100%
                width 32px
                height 32px
                display inline-block
                position absolute
                left 0
                top 0
                background-image url(https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png)
        .wuyou
            position relative
            i
                background-size 100%
                width 32px
                height 32px
                display inline-block
                position absolute
                left 0
                top 0
                background-image url(https://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png)
        .tuikuan
            position relative
            i
                background-size 100%
                width 32px
                display inline-block
                height 32px
                position absolute
                left 0
                top 0
                background-image url(https://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png)
    .classifyListContainer
        background-color #fff
        width 100%
        height 372px
        .classifyList
            width 100%
            height 341px
            padding 0 0 32px 0
            .list
                width 100%
                height 341px
                .item
                    width 110px
                    height 156px
                    margin 10px 20px 9px
                    float left
                    box-sizing border-box
                    .icon
                        width 110px
                        height 110px
                        .img
                            width 110px
                            height 110px
                            display block
                    .text
                        float left
                        width 110px
                        height 36px
                        color #333333
                        font-size 24px
                        line-height 36px
                        margin-top 10px
    .indexBigContainer
        width 100%
        height 828px
        background-color #1674e3
        .floorTop
            width 100%
            height 240px
            .promItem
                display block
                background-image url(https://yanxuan.nosdn.127.net/5db28c137605ea7576c986e9c285e1c6.png?quality=75&type=webp&imageView&thumbnail=750x0)
                background-size 100% 100%
                width 100%
                height 240px
                position relative
                .promGood
                    width 168px
                    height 168px
                    position absolute
                    top 33px
                    left 75px
                    background-color #fff
                    position relative
                    .price
                        width 138px
                        height 32px
                        padding 0 7px
                        position absolute
                        top 128px
                        left 8px
                        background-color rgb(244,143,24)
                        border-radius 16px
                        text-align center
                        line-height 34px
                        font-size 24px
                        span
                            color #ffffff
        .floorFist
            width 710px
            height 160px
            margin 20px 20px 8px
            a
                display block
                width 710px
                height 160px
                background-image url(https://yanxuan.nosdn.127.net/a4187bffa2a0431ec5d6e2dd1070d6c5.gif?imageView&quality=75)
                background-size 100% 100%
        .floor
            display flex
            justify-content space-between
            margin 0 20px 8px
            a
                display block
                width 351px
                height 186px
                background-size 100% 100%
            .left
                background-image url(https://yanxuan.nosdn.127.net/28244c6ae7ef78424ea5317a0d72dd6a.png)
            .right
                background-image url(https://yanxuan.nosdn.127.net/15b56691109bba3adf6156fd44f14073.png)
            .left1
                background-image url(https://yanxuan.nosdn.127.net/83b35324b02e31aa202a12971fa7f8c3.png)
            .right1
                background-image url(https://yanxuan.nosdn.127.net/2c98b2002572ec4cd0824bc810d7d31f.png)
    .newPerson
        width 100%
        height 558px
        background-color #fff
        margin 20px 0
        .title
            width 100%
            height 90px
            padding 0 30px
            text-align center
            box-sizing border-box
            .txt
                width 160px
                height 90px
                line-height 90px
                font-size 32px
                position relative

                &:before
                    content ""
                    display block
                    width 24px
                    height 3px
                    background-color #000
                    position absolute
                    left -40px
                    top 25px
                &:after
                    content ""
                    display block
                    width 24px
                    height 3px
                    background-color #000
                    position absolute
                    right -40px
                    top 25px
        .content
            width 100%
            height 438px
            padding-left 30px
            box-sizing border-box
            display flex
            .left
                display block
                width 343px
                height 434px
                box-sizing border-box
                background-color #F9E9CF
                margin-right 4px
                border-radius 4px
                .name
                    width 343px
                    height 78px
                    box-sizing border-box
                    padding 30px 0 0 30px
                    font-size 32px
                    line-height 48px
                .imgWrap
                    width 258px
                    height 257px
                    box-sizing border-box
                    margin-left 42px
                    margin-top 37px
            .right
                width 343px
                height 438px
                .module1
                    width 343px
                    height 215px
                    box-sizing border-box
                    margin-bottom 4px
                    background-color #FBE2D3
                    border-radius 4px
                    position relative
                    a
                        display block
                        width 343px
                        height 215px
                        box-sizing border-box
                        padding 20px 0 0 30px
                        .picWrap
                            position absolute
                            top 15px
                            left 143px
                            .pic
                                width 200px
                                height 200px
                                img
                                    width 200px
                                    height 200px
                            .price
                                width 80px
                                height 80px
                                box-sizing border-box
                                background-color #F59524
                                position absolute
                                top 0
                                left 90px
                                border-radius 40px
                                opacity .8
                                color #ffffff
                                text-align center
                                padding-top 10px
                                .line1
                                    width 80px
                                    height 36px
                                    font-size 24px
                                    line-height 36px
                                .line2
                                    width 80px
                                    height 30px
                                    font-size 20px
                                    line-height 30px
                                    margin-top -7px
                                    cursor pointer
                                    text-decoration-line line-through
                        .cnt
                            width 313px
                            height 84px
                            .title
                                width 313px
                                height 48px
                                text-align left
                                padding 0
                                color #333
                                font-size 32px
                                line-height 48px
                            .subTitle
                                width 313px
                                height 36px
                .module2
                    width 343px
                    height 215px
                    box-sizing border-box
                    background-color #FFECC2
                    border-radius 4px
                    a
                        width 343px
                        height 215px
                        box-sizing border-box
                        padding 20px 0 0 30px
                        display block
                        .cnt
                            width 313px
                            height 84px
                            .title
                                width 313px
                                height 48px
                                text-align left
                                padding 0
                                color #333
                                font-size 32px
                                line-height 48px
                            .subTitle1
                                width 121px
                                height 32px
                                padding 0 10px
                                box-sizing border-box
                                text-align center
                                background-color #CBB693
                                border-radius 4px
                                font-size 22px
                                line-height 32px
                                color #fff
    .hotList 
        background-color #ffffff
        width 100%
        height 710px
        margin-bottom 20px
        .hotTitle
            box-sizing border-box
            padding 0 30px
            width 100%
            height 100px
            font-size 32px
            line-height 90px
            background-color #fff
        .content
            width 100%
            height 610px
            box-sizing border-box
            padding 0 20px 20px 30px
            .line1
                display block
                display flex
                .bigItem
                    width 340px
                    height 200px
                    margin 0 10px 10px 0
                    float left
                    background-color #F9F3E4
                    border-radius 4px
                    .name
                        float left
                        margin-top 66px
                        padding-left 24px
                        box-sizing border-box
                        .txt
                            color #333
                            font-size 28px
                            position relative
                            &:before
                                content ""
                                display block
                                width 48px
                                height 4px
                                background-color #333
                                position absolute
                                left 0
                                top 54px
                    .imgWrap
                        width 200px
                        height 200px
                        float right
                        img
                            width 200px
                            height 200px
            .line2
                background-color #fff
                width 700px
                .item
                    width 165px
                    height 180px
                    margin 0 10px 10px 0
                    background-color #f5f5f5
                    border-radius 4px
                    text-align center
                    float left
                    .name
                        width 165px
                        height 36px
                        margin-top 10px
                    .imgWrap
                        width 120px
                        height 120px
                        margin 2px 0 0 23px
                        img
                            width 120px
                            height 120px
    .countTimeBuy
        width 100%
        height 700px
        margin-bottom 20px
        .title
            width 100%
            height 100px
            box-sizing border-box
            padding 34px 30px
            background-color #fff
            position relative
            .left
                display flex
                span
                    font-size 32px
                    line-height 33px
                    margin-right 10px
            .right
                position absolute
                width 120px
                height 99px
                right 0
                top 0
                span
                    font-size 28px
                    line-height 100px
                i
                    font-size 32px
                    line-height 100px
        .cnt
            width 100%
            height 600px
            box-sizing border-box
            padding 0 10px 0 30px
            background-color #fff
            .item
                width 216px
                height 300px
                box-sizing border-box
                padding-bottom 30px
                margin-right 20px
                float left
                .imgWrap
                    width 216px
                    height 216px
                    margin-bottom 12px
                    img 
                        width 216px
                        height 216px
                .price
                    width 216px
                    height 42px
                    padding-left 20px
                    .new
                        color #dd1a21
                        margin-right 12px
                        font-size 28px
                        line-height 42px
                    .old
                        font-size 24px
                        line-height 36px
                        color #7f7f7f
                        text-decoration-line line-through
    .newArrival
        width 100%
        height 922px
        background-color #fff
        box-sizing border-box
        padding-bottom 26px
        margin-bottom 20px
        .title
            width 100%
            height 100px
            box-sizing border-box
            padding 34px 30px
            background-color #fff
            position relative
            .left
                display flex
                span
                    font-size 32px
                    line-height 33px
                    margin-right 10px
            .right
                position absolute
                width 120px
                height 99px
                right 0
                top 0
                span
                    font-size 28px
                    line-height 100px
                i
                    font-size 32px
                    line-height 100px
        .listContainer
            width 100%
            height 796px
            box-sizing border-box
            padding-left 10px
            .list
                width 740px
                height 796px
                .item
                    width 216px
                    height 398px
                    padding-bottom 13px
                    margin-left 20px
                    float left
                    .good
                        width 216px
                        height 381px
                        .picWrap
                            width 216px
                            height 216px
                            margin-bottom 12px
                            img
                                width 216px
                                height 216px
                        .name
                            width 216px
                            height 72px
                        .price
                            width 216px
                            height 48px
                            color #dd1a21
                            font-size 32px
                            line-height 48px
                        .active
                            width 216px
                            height 33px
    .bottomLightShopping
        width 100%
        height 576px
        box-sizing border-box
        padding 10px 30px 30px 26px
        margin-bottom 20px
        background-color #fff
        .list
            .item
                width 343px
                height 264px
                box-sizing border-box
                padding 20px 0 0 20px
                margin  4px 0 0 4px
                background-color #f5f5f5
                float left
                .title
                    width 323px
                    height 48px
                    box-sizing border-box
                    padding-left 10px
                    color #333  
                    font-size 32px
                    line-height 48px
                .desc
                    width 323px
                    height 36px
                    box-sizing border-box
                    padding-left 10px
                    color #7f7f7f 
                    font-size 24px
                    line-height 36px
                .picList
                    img
                        width 150px
                        height 150px
                        margin-right 4px
    .footBar
        width 100%
        height 245px
        background-color #414141
        text-align center
        .footWrap
            width 100%
            height 244px
            box-sizing border-box
            padding 54px 20px 28px
            text-align center
            .bd
                width 710px
                height 62px
                margin-bottom 36px
                display flex
                text-align center
                padding 0 158px
                box-sizing border-box
                a   
                    display block
                    box-sizing border-box
                    width 172px
                    height 62px
                    border 1px solid #999
                    color #fff
                    text-align center
                    line-height 62px
                    border-radius 4px
                .downLoad
                    margin-right 50px
            .copyRight
                text-align center
                span
                    color #999
                    display block
                    font-size 24px
                    line-height 32px


</style>