<template>
    <div id="comment" class="animated fadeIn" ref="comment" v-show="commentShow">
        <div class="comment-title">
            <span>{{extraData.short_comments}}条点评</span>
            <div class="comment-back" @click="backToContent">
                <mu-icon value="arrow_back" :size="26" color="white" />
            </div>
        </div>
        <div class="user">
            <div class="user-detail" v-for="item in shortCommentsData">
                <img :src="item.avatar" alt="" class="user-avatar">
                <span class="user-name">{{item.author}}</span>
                <span class="user-rating">{{item.content}}</span>
                <span class="rating-time">{{item.time | time}}</span>
                <mu-divider inset/>
            </div>
            <mu-circular-progress :size="40" color="black" v-show="commentLoading" class="loading"/>
        </div>
    </div>
</template>





<script>
import router from '../router'
import {fetchStoryExtra,fetchShortComments,fetchBeforeComments} from '../api'
export default{
    data() {
        return {
            extraData:{},
            shortCommentsData:[],
            commentLoading:false,
            id:Number,
            commentShow:false
        }
    },
    methods:{
        backToContent(){
            router.go(-1)
        },
        handleScroll(){
            if(this.$refs.comment.offsetHeight+document.body.scrollTop >= document.body.scrollHeight){
                this.commentLoading=true
                let lastId,arr
                lastId=this.shortCommentsData[this.shortCommentsData.length-1].id

                fetchBeforeComments(this.id,lastId).then((res) => {
                    arr=this.shortCommentsData.concat(res.data.comments)
                    this.shortCommentsData=arr
                    this.commentLoading=false
                })

            }
        }
    },
    activated(){
        this.commentShow=false
        this.id=this.$route.params.id
        window.addEventListener('scroll',this.handleScroll)

        fetchStoryExtra(this.id).then((res) => {
            this.extraData=res.data
        })

        fetchShortComments(this.id).then((res) => {
            this.shortCommentsData=res.data.comments
            this.commentShow=true
        })
    },
    deactivated(){
        window.removeEventListener('scroll',this.handleScroll)
    }
}

</script>


<style lang="css" scoped>
#comment{
    position: absolute;
    top:0;
    height: 100%;
    /*overflow: auto;*/
    background-color: #fff;
}
.comment-title{
    position: fixed;
    width:100%;
    height: 33px;
    background-color: #000;
    color:#fff;
    font-size:18px;
    letter-spacing: 2px;
    text-align: center;
    z-index:100;
}
.comment-title span{
    display: block;
    margin:0 auto;
    height: 33px;
    width:50%;
    line-height: 33px;
}
.comment-back{
    position: absolute;
    top:0;
    left:2%;
}
.mu-icon{
    line-height: 33px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
/*评论内容*/
.user{
    margin:40px auto 0 auto;
}
.user-detail{
    width:95%;
    /*border-bottom:solid;*/
    margin:5px auto;
}
.user-detail img{
    height: 37px;
    width:37px;
    border-radius: 50%;
    margin-left: 2%;
    margin-top:3%;
}
.user-name{
    display: inline-block;
    vertical-align: middle;
    margin-left: 5px;
    font-weight: bold;
}
.user-rating{
    display: inline-block;
    width:235px;
    margin-left: 17%;
    margin-top: -10px;
    margin-bottom: 10px;
    font-size: 12px;
    vertical-align: bottom;
}
.rating-time{
    margin-left: 17%;
    font-size: 12px;
}
.loading{
    display: block;
    margin:0 auto;
    margin-top:5px;
    margin-bottom:5px;
}
</style>