<template>
    <div id="subCateListContainer">
        <div class="wrapper" ref="wrapper" >
            <div class="content">
                <div class="item" >
                    <div class="banner">
                        <img :src="picUrl" alt="">
                    </div>
                    <div class="cateList">
                        <ul class="list">
                            <li class="cateItem" v-for="(item, index) in newArray" :key="index">
                                <div class="cateImgWrapper">
                                    <img :src="item.wapBannerUrl" alt="">
                                </div>
                                <div class="name">
                                    {{item.name}}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import { mapState } from 'vuex'
    import cateLists from '../../../datas/cateLists'  
    
    export default {
        data() {
            return {
                newArray:[],
                picUrl:''
            }
        },
        mounted() {
            this.$nextTick(() => { 
                this.scroll = new BScroll(this.$refs.wrapper, {click: true}) 
            })
            this.$nextTick(() => { 
                for (const item in cateLists) {
                    if (cateLists.hasOwnProperty(item)) {
                        const element = cateLists[item];
                        if (element.id == this.listId) {
                            this.newArray = element.categoryList?element.categoryList:element.subCateList
                            this.picUrl = element.picUrl
                        }
                    }
                }

            })
        },
        methods: {
            changeArray(){
                for (const item in cateLists) {
                    if (cateLists.hasOwnProperty(item)) {
                        const element = cateLists[item];
                        if (element.id == this.listId) {
                            this.newArray = element.categoryList?element.categoryList:element.subCateList
                            this.picUrl = element.picUrl
                        }
                    }
                }
            }
        },
        computed: {
            ...mapState({
                listId: state => state.listId,
            })
        },
        watch: {
            '$store.state.listId'(){
                console.log('vuex发生改变');
                this.changeArray()
            }
        },
        
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
#subCateListContainer
    width 587px
    height 1148px
    background-color #fff
    box-sizing border-box
    padding 30px 30px 21px
    margin-left 1px
    display inline-block
    float right
    .wrapper
        height 1118px
        width 528px
        overflow hidden
        background-color #fff
        .content
            box-sizing border-box
            // height 1148px
            width 528px
            .item
                width 528px
                .banner
                    width 528px
                    height 192px
                    img 
                        width 528px
                        height 192px
                .cateList
                    width 528px
                    .list
                        width 528px
                        clearFix()
                        .cateItem
                            width 144px
                            height 216px
                            margin-right 32px
                            float left

                            .cateImgWrapper
                                width 144px
                                height 144px
                                img
                                    width 144px
                                    height 144px 
                                    background-color #fff
                            .name
                                width 144px
                                font-size 24px  
                                line-height 36px
                                color #333
                                text-align center
</style>