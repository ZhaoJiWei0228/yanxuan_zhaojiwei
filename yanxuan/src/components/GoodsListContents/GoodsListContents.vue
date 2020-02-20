<template>
    <div id="goodsListContents" >
        <div class="wrapper" ref="wrapper">
            <ul class="content" > 
                <li v-for="(item, index) in cateLists" :key="index" :class="activeClass==index?'active':''" class="item" @click="changeList(index)">{{item.name}}</li> 
            </ul>
        </div> 
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import cateLists from '../../../datas/cateLists'  
    import { mapState } from 'vuex'
    export default {
        data() {
            return {
                cateLists,
                activeClass: 0,
                // ListId:this.$store.state.listId
            }
        },
        mounted() {
            this.$nextTick(() => { 
                this.scroll = new BScroll(this.$refs.wrapper, {click: true}) 
            })
            
        },
        computed: {
            ...mapState({
                listId: state => state.listId,
            })
        },
        methods: {
            changeList(index){
                console.log(this.cateLists[index].id)
                let listId = this.cateLists[index].id
                this.activeClass = index
                // 你定义的的函数在哪??
                this.$store.commit('changeListId',listId)
            }


        }
        
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
#goodsListContents
    display inline-block
    width 162px
    height 1148px
    background-color #fff
    .wrapper
        height 1148px
        width 162px
        overflow hidden
        .content
            box-sizing border-box
            padding 20px 0 98px
            height 1150px
            .item
                width 162px
                height 50px
                margin-top 40px
                color #333
                line-height 50px
                font-size 28px
                text-align center
                position relative
            .active
                color #ab2b2b
                &:before
                    content ""
                    display block
                    width 6px
                    height 50px
                    position absolute
                    background-color #ab2b2b

</style>