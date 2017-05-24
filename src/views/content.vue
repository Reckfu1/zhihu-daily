<template>
    <div id="content" v-show="c_waiting" class="animated fadeIn">
        <div class="content_head" v-show="content_data.image">
            <span class="content_title">{{content_data.title}}</span>
            <span class="content_img_source">图片:&nbsp;&nbsp;{{content_data.image_source}}</span>
            <img :src="content_data.image" alt="">
        </div>
        <div v-html="dataBody"></div>
        <div class="content-bottom">
            <mu-paper>
                <mu-bottom-nav :value="bottomNav" @change="handleChange">
                    <mu-bottom-nav-item value="arrowback" icon="arrow_back" />
                    <mu-bottom-nav-item value="thumbup" icon="thumb_up" />
                    <mu-bottom-nav-item value="chat" icon="chat" />
                </mu-bottom-nav>
            </mu-paper>
            <span class="thumb-up">{{extra.popularity}}</span>
            <span class="chat">{{extra.short_comments}}</span>
        </div>
        <div class="shade" v-show="content_data.image"></div>
    </div>
</template>

<script>
import router from '../router'
import {fetchNewsContent,fetchStoryExtra} from '../api'
export default{

    data(){
        return {
            content_data:{},
            c_waiting:false,
            bottomNav:'',
            extra:{},
            shortComments:[],
            _id:Number,
            dataBody:'',
            fromPath:''
        }
    },
    activated(){
        this.c_waiting=false
        let id=this.$route.params.id
        this._id=id

        let path=this.$route.params.frompath
        this.fromPath=path
        
        fetchNewsContent(id).then((res) => {
            this.content_data=res.data
            this.dataBody=res.data.body.replace('<div class=\"headline\">\n\n<div class=\"img-place-holder\"></div>\n\n\n\n</div>',"")
        })

        fetchStoryExtra(id).then((res) => {
            this.extra=res.data
            this.c_waiting=true
        })
    },
    methods:{
        handleChange(val){
            this.bottomNav=val
            switch(this.bottomNav){
                case 'arrowback':
                    if(this.fromPath.indexOf('themenews')){
                        router.go(-1)
                    }
                    else{
                        router.push({name:'index'})
                    }
                    this.bottomNav=''
                    break
                case 'thumbup':
                    this.bottomNav=''
                    break
                case 'chat':
                    this.bottomNav=''
                    router.push({name:'comment'},{params:{id:this._id}})
                    break
            }
        }
    }
}
</script>


<style lang="css" scoped>
@import '../assets/css/news_qa.auto.css';
#content{
    position: relative;
}
.content-bottom{
    position: fixed;
    bottom:0;
    height: 35px;
    width:100%;
}
.thumb-up,.chat{
    display: inline-block;
    position: absolute;
    height: 15px;
    width:15px;
    color:#000;
    font-size:10px;
}
.thumb-up{
    top:0;
    left: 53%;
}
.chat{
    top: 0;
    right:8%;
}
.content_head{
    height: 200px;
}
.content_head img{
    position: relative;
    width:100%;
    margin-top:-40px;
    z-index: -1;
}
.content_title,.content_img_source{
    display:block;
    color:#fff;
    position: absolute;
}
.content_title{
    font-size: 18px;
    font-weight: bold;
    width:80%;
    margin-left: 12%;
    margin-top: 125px;
}
.content_img_source{
    font-size: 10px;
    width: 100%;
    text-align: right;
    margin-top:180px;
    padding-right: 10px;
}

.shade{
    height: 200px;
    width: 100%;
    position: absolute;
    top:0;
    background-color: rgba(7,16,27,0.1);
}
</style>