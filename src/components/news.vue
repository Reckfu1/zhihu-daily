<template>
    <div id="news" v-show="n_show">
        <div id="news-items" @click="getNewsContent(item.id)" v-for="(item,index) in news">
            <div class="content-text">{{item.title}}</div>
            <div class="content-img"><img :src="item.images[0]" alt=""></div>
        </div>
        <div id="old-news">
            <div class="yesterday-news">{{getYesterday}}</div>
            <div id="yesterday-news-items" @click="getNewsContent(item.id)" v-for="(item,index) in yesterday_news">
                <div class="content-text">{{item.title}}</div>
                <div class="content-img"><img :src="item.images[0]" alt=""></div>
            </div>
        </div>
        <div class="before">
            <div class="before-tag">更早之前</div>
            <div id="before-news" @click="getNewsContent(item.id)" v-for="(item,index) in before_news">
                <div class="content-text">{{item.title}}</div>
                <div class="content-img"><img :src="item.images[0]" alt=""></div>
            </div>
            <mu-raised-button @click="loadMore" label="点击更多" class="demo-raised-button" backgroundColor="#000" fullWidth/>
        </div>
    </div>
</template>




<script>
import {getMaxDays} from '../func.js'
import router from '../router'
import {fetchLastestNews,fetchBeforeNews} from '../api'
export default {

    data() {
            return {
                news: [],
                yesterday_news: [],
                before_news: [],
                load_str:'',
                load_month:0,
                n_show:false
            }
        },

        created() {
            let date = new Date()
            let year, month, day, str, str_2
            let temp_month, temp_day
            year = date.getFullYear()
            month = date.getMonth() + 1
            day = date.getDate()
            temp_month = month
            temp_day = day
            str = '' + year + month + day
            this.n_show=false

            if (month < 10) {
                month = '0' + month
            }
            if (day < 10) {
                day = '0' + day
            }
            str = year + month + day
            // 初始化加载所需要用到的变量
            this.load_str=str
            this.load_month=date.getMonth()+1
            // 获取最新消息，即当天日期
            fetchLastestNews().then((res) => {
                this.news = res.data.stories
            })

            // 获取昨天的消息
            fetchBeforeNews(str).then((res) => {
                this.yesterday_news = res.data.stories
            })

            // 获取前天的消息，先判断前天是否回到了上个月
            // 如果为true，月份减一并获取上个月最大天数，重新构造url
            // 如果为false，只需天数减一
            if (temp_day == 1) {
                temp_month -= 1
                let flag = true
                temp_day=getMaxDays(year,temp_month)
                while (flag) {
                    if (temp_month < 10) {
                        temp_month = '0' + temp_month
                    }
                    if (temp_day < 10) {
                        temp_day = '0' + temp_day
                    }
                    str_2 = '' + year + temp_month + temp_day
                    flag = false
                }
            } else {
                str_2 = str - 1
            }
            
            // 获取前天的消息
            fetchBeforeNews(str_2).then((res) => {
                this.before_news = res.data.stories
                this.n_show=true
            })
        },
        computed: {
            getYesterday() {
                let date = new Date()
                let year, month, day, what_day, str
                year = date.getFullYear()
                month = date.getMonth() + 1
                day = date.getDate() - 1
                what_day = date.getDay()
                if (day == 0) {
                    month -= 1
                    day=getMaxDays(year,month)
                }
                switch (what_day) {
                    case 0:
                        str = '六'
                        break
                    case 1:
                        str = '日'
                        break
                    case 2:
                        str = '一'
                        break
                    case 3:
                        str = '二'
                        break
                    case 4:
                        str = '三'
                        break
                    case 5:
                        str = '四'
                        break
                    case 6:
                        str = '五'
                        break
                }
                return month + '月' + day + '日' + ' ' + '星期' + str
            }
        },
        methods: {
            loadMore() {
                let load_date=new Date()
                let load_year,maxdays
                load_year=load_date.getFullYear()

                this.load_str-=1
                this.load_str+=''

                // 判断是否到了当前月份的第一天
                if(this.load_str[6]==0&&this.load_str[7]==0){
                    // foo用来保存number类型的load_month，因为当月份少于10时
                    // load_month+‘0’变为string，当再次倒退月份的时候减一失效
                    let foo
                    this.load_month-=1
                    foo=this.load_month
                    maxdays=getMaxDays(load_year,this.load_month)
                    if(this.load_month<10){
                        this.load_month='0'+this.load_month
                    }
                    this.load_str=''+load_year+this.load_month+maxdays
                    this.load_month=foo
                }

                fetchBeforeNews((this.load_str-1+'')).then((res) => {
                    for(let i=0;i<res.data.stories.length;i++){
                        this.before_news.push(res.data.stories[i])
                    }
                })

            },
            getNewsContent(id){
                router.push({name:'content',params:{id:id,frompath:'daily_news'} })
            }
        }

}
</script>


<style lang="css">
#news-items,#yesterday-news-items,#before-news{
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
.yesterday-news,.before-tag{
    width:100%;
    height: 35px;
    background-color: #000;
    font-size: 14px;
    color:#fff;
    text-align: center;
    line-height: 35px;
    letter-spacing: 2px;
}
.demo-raised-button{
    border-radius: 0 !important;
    letter-spacing: 2px;
}
</style>