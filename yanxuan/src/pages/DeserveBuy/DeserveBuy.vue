<template>
    <div id="deserveBuy">
        <HeaderGuide/>
        <div class="swiperTab">
            <div class="swiperTabContainer">
                <div class="title">
                    <img class="buy" src="https://m.you.163.com/topic/index/img/topic_logo.c2284970.png" alt="">
                    <div class="text">严选好物 用心生活</div>
                    <img class="bg" src="https://m.you.163.com/topic/index/img/topic_title_bg.2373a140.png" alt="">
                </div>
                <div class="content">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="(item, index) in newArray" :key="index">
                                <div class="group" >
                                    <div class="top" v-for="(item1, index1) in item" :key="index1">
                                        <div class="topImg">
                                            <img :src="item1.picUrl" alt="">
                                        </div>
                                        <div class="detail">
                                            <div class="line1">
                                                {{item1.mainTitle}}
                                            </div>
                                            <div class="line2">
                                                {{item1.viceTitle}}
                                            </div>
                                        </div>
                                    </div>
                                    <!-- <div class="bottom" >
                                        <div class="topImg">
                                            <img :src="item1.picUrl" alt="">
                                        </div>
                                        <div class="detail">
                                            <div class="line1">
                                                {{item1.mainTitle}}
                                            </div>
                                            <div class="line2">
                                                {{item1.viceTitle}}
                                            </div>
                                        </div>
                                    </div> -->
                                </div>
                            </div>
                        </div>
                        <div class="swiper-pagination"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Swiper from 'swiper' 
    import 'swiper/css/swiper.min.css';
    import axios from 'axios'
    import HeaderGuide from '../../components/HeaderGuide/HeaderGuide'
    export default {
        data() {
            return {
                goodsList:[],
                newArray:[]
            }
        },
        components:{
            HeaderGuide
        },
        methods: {
            getInfo(){
                let url = "/api/topic/v1/know/navWap.json"
                axios.get(url).then((res)=>{
                    this.goodsList = res.data.data.navList
                    console.log(res.data.data.navList);
                    this.newArray = [this.goodsList.slice(0,2),this.goodsList.slice(2,4),this.goodsList.slice(4,6),this.goodsList.slice(6,8),this.goodsList.slice(8,10),this.goodsList.slice(10,12),this.goodsList.slice(12,14),this.goodsList.slice(14,16),]
                    console.log(this.newArray);
                })
            }    
        },
        mounted() {
            this.$nextTick(() => {
                let mySwiper = new Swiper('.swiper-container', {
                    autoplay:true,
                    slidesPerView:4,
                    slidesPerGroup:4,
                    loop:true,
                    pagination: {
                        el: '.swiper-pagination',
                    },
                })
            })
            
            
            // let mySwiper = new Swiper('.swiper-container', {
            //     scrollbar: '.swiper-scrollbar',
            //     scrollbarHide: false,
            //     centeredSlides: true,
            //     spaceBetween: 30,
            //     grabCursor: true
            // });
    
            this.getInfo()
        },
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
#deserveBuy
    background-color #eee
    height 10000px
    .swiperTab
        width 100%
        height 685px
        .swiperTabContainer
            width 100%
            height 685px
            position relative
            .title
                width 100%
                height 524px
                position relative
                .buy
                    width 130px
                    height 69px
                    position absolute
                    top 60px
                    left 12px
                .text
                    color #ffffff
                    font-size 30px
                    line-height 44px
                    position absolute
                    top 79px
                    left 146px
                .bg
                    width 100%
                    height 518px
            .content
                width 710px
                height 540px
                background-color #fff
                margin 0 20px
                position absolute
                top 145px
                border-radius 16px
                .swiper-container
                    .swiper-pagination-bullet
                        background-color #d9d9d9
                        border-radius 0
                        width 40px
                        height 4px
                        border none
                    .swiper-pagination
                        bottom 30px
                    .swiper-pagination-bullet-active
                        background-color #dd1a21
                    .swiper-wrapper
                        width 100%
                        .swiper-slide
                            width 25%
                            height 540px
                            .group
                                width 180px
                                height 470px
                                box-sizing border-box
                                padding 36px 6px 6px
                                
                                .top
                                    width 168px
                                    height 201px
                                    margin-bottom 28px
                                    // float left
                                    .topImg
                                        width 120px
                                        height 120px
                                        margin 0 24px
                                        img 
                                            width 120px
                                            height 120px
                                    .detail
                                        text-align center
                                        .line1
                                            width 168px
                                            height 40px
                                            font-size 28px
                                            font-weight 700
                                            line-height 40px
                                            color #333333
                                        .line2
                                            font-size 24px
                                            line-height 15px
                                            color #999
                                
                            
                                    
</style>