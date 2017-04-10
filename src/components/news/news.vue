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
            <div class="before-tag">更早之前</div>
            <div id="before-news" v-for="(item,index) in before_news">
                <div class="content-text">{{item.title}}</div>
                <div class="content-img"><img :src="item.images[0]" alt=""></div>
            </div>
            <mu-raised-button @click="loadMore" label="点击更多" class="demo-raised-button" backgroundColor="#000" fullWidth/>
        </div>
    </div>
</template>









<script>
import {getMaxDays} from './func.js'
export default {

    data() {
            return {
                news: [],
                yesterday_news: [],
                before_news: [],
                load_str:''
            }
        },

        created() {
            let _this = this
            let date = new Date()
            let year, month, day, str, str_2
            let temp_month, temp_day
            year = date.getFullYear()
            month = date.getMonth() + 1
            day = date.getDate()
            temp_month = month
            temp_day = day
            str = '' + year + month + day
            if (str >= '2013520') {
                if (month < 10) {
                    month = '0' + month
                }
                if (day < 10) {
                    day = '0' + day
                }
            }
            str = year + month + day
            this.load_str=str
                // 获取最新消息，即当天日期
            this.$http.get('/api/4/news/latest')
                .then((res) => {
                    _this.news = res.data.stories
                })
                .catch((res) => {
                    if (res instanceof Error) {
                        console.log('Error', res.message)
                    }
                })

            // 获取昨天的消息
            this.$http.get('/api/4/news/before/' + str)
                .then((res) => {
                    _this.yesterday_news = res.data.stories
                })
                .catch((res) => {
                    if (res instanceof Error) {
                        console.log('Error', res.message)
                    }
                })
                // test
            if (temp_day == 1) {
                temp_month -= 1
                let flag = true
                if (temp_month == 2) {
                    temp_day = year % 4 == 0 ? 29 : 28
                } else if (temp_month == 1 || temp_month == 3 || temp_month == 5 || temp_month == 7 || temp_month == 8 || temp_month == 10 || temp_month == 12) {
                    temp_day = 31
                } else {
                    temp_day = 30
                }
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
            this.$http.get('/api/4/news/before/' + str_2)
                .then((res) => {
                    _this.before_news = res.data.stories
                })
                .catch((res) => {
                    if (res instanceof Error) {
                        console.log('Error', res.message)
                    }
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
                    if (month == 2) {
                        day = year % 4 == 0 ? 29 : 28
                    } else if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
                        day = 31
                    } else {
                        day = 30
                    }
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
                let _this=this
                let load_date=new Date()
                let load_year,load_month,maxdays
                load_year=load_date.getFullYear()
                load_date=load_date.getMonth()+1
                this.load_str-=1
                console.log()
                // if(this.load_str[this.load_str.length-1]==0){
                //     console.log('in')
                //     load_month-=1
                //     maxdays=getMaxDays(load_year,load_month)
                //     this.load_str=load_year+load_month+maxdays+''
                // }
                // this.$http.get('/api/4/news/before/' + str)
                //     .then((res) => {
                //         for(let i=0;i<res.data.stories.length;i++){
                //             _this.before_news.push(res.data.stories[i])
                //         }
                //     })
                //     .catch((res) => {
                //         if(res instanceof Error){
                //             console.log('Error',res.message)
                //         }
                //     })
                console.log(this.load_str)
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
#yesterday-news,.before-tag{
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