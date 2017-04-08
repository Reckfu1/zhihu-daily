<template>
    <div id="news">
        <div id="news-items" v-for="(item,index) in news">
            <div class="content-text">{{item.title}}</div>
            <div class="content-img"><img :src="item.images[0]" alt=""></div>
        </div>
        <div id="old-news">
            <div id="yesterday-news">{{getYesterday}}</div>
            <div id="yesterday-news-items" v-for="(item,index) in yesterday_news">
                <div class="content-text">{{item.title}}</div>
                <div class="content-img"><img :src="item.images[0]" alt=""></div>
            </div>
        </div>
        <div class="before">
            <div class="before-btn" @click="firstLoad">更早之前</div>
<!--             <div id="before-news">
                <div class="content-text">{{item.title}}</div>
                <div class="content-img"><img :src="item.images[0]" alt=""></div>
            </div> -->
            <div class="load-btn" @click="loadMore">更多</div>
            <mu-raised-button label="更多" class="demo-raised-button" backgroundColor="#323232" fullWidth="true" />
        </div>
    </div>
</template>









<script>

export default {

    data(){
        return {
            news:[],
            yesterday_news:[],
            before_news:[]
        }
    },

    created(){
        let _this=this
        let date=new Date()
        let year,month,day
        let str=''
        year=date.getFullYear()
        month=date.getMonth()+1
        day=date.getDate()
        str=''+year+month+day
        this.$http.get('/api/4/news/latest')
            .then((res) => {
                _this.news=res.data.stories
            })
            .catch((res) => {
                if(res instanceof Error){
                    console.log('Error',res.message)
                }
            })
        if(str>='2013520'){
            if(month<10){
                month='0'+month
            }
            if(day<10){
                day='0'+day
            }
        }
        str=year+month+day
        this.$http.get('/api/4/news/before/'+str)
            .then((res) => {
                _this.yesterday_news=res.data.stories
            })
            .catch((res) => {
                if(res instanceof Error){
                    console.log('Error',res.message)
                }
            })
    },
    computed:{
        getYesterday(){
            let date= new Date()
            let month,day,what_day
            let str=''
            month=date.getMonth()+1
            day=date.getDate()-1
            what_day=date.getDay()
            switch(what_day){
                case 0:
                    str='六'
                    break
                case 1:
                    str='日'
                    break
                case 2:
                    str='一'
                    break
                case 3:
                    str='二'
                    break
                case 4:
                    str='三'
                    break
                case 5:
                    str='四'
                    break
                case 6:
                    str='五'
                    break
            }
            return month+'月'+day+'日'+' '+'星期'+str
        }
    },
    methods:{
        firstLoad(){
            console.log('frist load')
        },
        loadMore(){
            console.log('second time')
        }
    }
}

</script>



<style lang="css">
#news-items,#yesterday-news-items{
    height: 90px;
    width: 100%;
    /*background-color:gray;*/
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid rgba(0,0,0,0.1);
}
.content-text{
    height: 65px;
    width: 65%;
    /*background-color: #fff;*/
    font-weight: bolder;
    font-size: 14px;
    margin-top:-4px;
    margin-right:10px;
}
.content-img{
    height: 65px;
    width:24%;
    /*background-color: #fbb;*/
}
.content-img img{
    height: 100%;
    width: 100%;
}
/*btn*/
#yesterday-news,.load-btn,.before-btn{
    width:100%;
    height: 30px;
    background-color: #323232;
    font-size: 14px;
    color:#fff;
    text-align: center;
    line-height: 30px;
    letter-spacing: 2px;
}
</style>