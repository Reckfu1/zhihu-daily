webpackJsonp([0],[,,function(t,e,s){"use strict";var a=s(4),n=s(61),i=s(40),o=s.n(i),r=s(41),c=s.n(r),d=s(39),l=s.n(d),u=s(42),h=s.n(u);a.default.use(n.a),e.a=new n.a({mode:"history",routes:[{name:"index",path:"/",component:c.a},{name:"content",path:"/stories/:frompath/:id",component:o.a},{name:"comment",path:"/stories/:id/comments",component:l.a},{name:"themesList",path:"/themes/:id",component:h.a}],scrollBehavior:function(t,e,s){if(s)return s;var a={x:0,y:0};return"/"===t.path&&(a.y=+sessionStorage.getItem("scrollTop")),a},base:"zhihu-daily/"})},function(t,e,s){"use strict";function a(){return h.a.get("https://www.reckful.net/api/4/news/latest")}function n(){return h.a.get("https://www.reckful.net/api/4/themes")}function i(t){return h.a.get("https://www.reckful.net/api/4/news/before/"+t)}function o(t){return h.a.get("https://www.reckful.net/api/4/news/"+t)}function r(t){return h.a.get("https://www.reckful.net/api/4/story-extra/"+t)}function c(t){return h.a.get("https://www.reckful.net/api/4/story/"+t+"/short-comments")}function d(t,e){return h.a.get("https://www.reckful.net/api/4/story/"+t+"/short-comments/before/"+e)}function l(t){return h.a.get("https://www.reckful.net/api/4/theme/"+t)}var u=s(6),h=s.n(u);e.f=a,e.h=n,e.g=i,e.e=o,e.c=r,e.d=c,e.b=d,e.a=l},,,,,,,,,,,function(t,e,s){s(55);var a=s(1)(s(65),s(46),null,null);t.exports=a.exports},,function(t,e){},,,,,,,,,,,,,,,,,,,function(t,e,s){var a=s(1)(s(63),s(45),null,null);t.exports=a.exports},function(t,e,s){var a=s(1)(s(64),s(43),null,null);t.exports=a.exports},function(t,e,s){s(54);var a=s(1)(s(66),s(44),null,null);t.exports=a.exports},function(t,e,s){s(58);var a=s(1)(s(67),s(49),null,null);t.exports=a.exports},function(t,e,s){s(56);var a=s(1)(s(68),s(47),"data-v-2be9b03a",null);t.exports=a.exports},function(t,e,s){s(59);var a=s(1)(s(69),s(50),"data-v-d1534d58",null);t.exports=a.exports},function(t,e,s){s(60);var a=s(1)(s(70),s(51),null,null);t.exports=a.exports},function(t,e,s){s(57);var a=s(1)(s(71),s(48),null,null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),s("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.h_show,expression:"h_show"}],attrs:{id:"header"}},[s("div",{staticClass:"title-box",style:t.header_obj},[s("mu-icon",{staticClass:"menu-btn",attrs:{value:"menu",size:28,color:"white"},on:{click:t.toggle}}),t._v(" "),s("span",{staticClass:"title"},[t._v("今日热闻")])],1),t._v(" "),s("div",{attrs:{id:"swiper-box"}},[t.swiper_mes?s("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption,id:"swiper"}},[t._l(t.swiper_mes,function(e){return s("swiper-slide",{key:e.id,attrs:{id:"swiper-item"}},[s("img",{attrs:{src:e.image,alt:""}}),t._v(" "),s("span",{staticClass:"swiper-title"},[t._v(t._s(e.title))])])}),t._v(" "),s("div",{staticClass:"swiper-pagination swiper-pagination-white",slot:"pagination"})],2):t._e(),t._v(" "),s("div",{staticClass:"shade-top"}),t._v(" "),s("div",{staticClass:"shade-bottom"})],1),t._v(" "),s("mu-drawer",{attrs:{open:t.open,docked:t.docked,width:"160px"},on:{close:function(e){t.toggle()}}},[s("mu-list",[s("mu-list-item",{attrs:{title:"知乎日报",titleClass:"head-title"}}),t._v(" "),t._l(t.themesData,function(e){return s("mu-list-item",{key:e.id,attrs:{title:e.name,titleClass:"themes-title"},on:{click:function(s){t.goToThemesList(e.id)}}},[s("mu-icon",{attrs:{value:"chevron_right"},slot:"right"})],1)})],2)],1),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.shadeShow,expression:"shadeShow"}],staticStyle:{position:"fixed","z-index":"3",left:"0",right:"0",top:"0",bottom:"0","background-color":"#000",opacity:"0.3"},on:{click:t.toggle}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.slideClass},[t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("keep-alive",[s("router-view")],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.commentShow,expression:"commentShow"}],ref:"comment",staticClass:"animated fadeIn",attrs:{id:"comment"}},[s("div",{staticClass:"comment-title"},[s("span",[t._v(t._s(t.extraData.short_comments)+"条点评")]),t._v(" "),s("div",{staticClass:"comment-back",on:{click:t.backToContent}},[s("mu-icon",{attrs:{value:"arrow_back",size:26,color:"white"}})],1)]),t._v(" "),s("div",{staticClass:"user"},[t._l(t.shortCommentsData,function(e){return s("div",{staticClass:"user-detail"},[s("img",{staticClass:"user-avatar",attrs:{src:e.avatar,alt:""}}),t._v(" "),s("span",{staticClass:"user-name"},[t._v(t._s(e.author))]),t._v(" "),s("span",{staticClass:"user-rating"},[t._v(t._s(e.content))]),t._v(" "),s("span",{staticClass:"rating-time"},[t._v(t._s(t._f("time")(e.time)))]),t._v(" "),s("mu-divider",{attrs:{inset:""}})],1)}),t._v(" "),s("mu-circular-progress",{directives:[{name:"show",rawName:"v-show",value:t.commentLoading,expression:"commentLoading"}],staticClass:"loading",attrs:{size:40,color:"black"}})],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.themesListShow,expression:"themesListShow"}],staticClass:"animated fadeIn",attrs:{id:"themes-list"}},[s("div",{staticClass:"theme-header"},[s("mu-icon",{staticClass:"theme-btn",attrs:{value:"arrow_back",size:28,color:"white"},on:{click:t.backToHome}}),t._v(" "),s("span",{staticClass:"theme-header-title"},[t._v(t._s(t.themesListData.name))]),t._v(" "),s("img",{attrs:{src:t.themesListData.image,alt:""}})],1),t._v(" "),s("div",{staticClass:"list-box"},t._l(t.themesListData.stories,function(e){return s("div",{staticClass:"list-items",on:{click:function(s){t.getItemContent(e.id)}}},[s("div",{staticClass:"list-item-title"},[t._v(t._s(e.title))]),t._v(" "),e.images?s("div",{staticClass:"list-item-img"},[s("img",{attrs:{src:e.images[0],alt:""}})]):t._e()])}))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.n_show,expression:"n_show"}],attrs:{id:"news"}},[t._l(t.news,function(e,a){return s("div",{attrs:{id:"news-items"},on:{click:function(s){t.getNewsContent(e.id)}}},[s("div",{staticClass:"content-text"},[t._v(t._s(e.title))]),t._v(" "),s("div",{staticClass:"content-img"},[s("img",{attrs:{src:e.images[0],alt:""}})])])}),t._v(" "),s("div",{attrs:{id:"old-news"}},[s("div",{staticClass:"yesterday-news"},[t._v(t._s(t.getYesterday))]),t._v(" "),t._l(t.yesterday_news,function(e,a){return s("div",{attrs:{id:"yesterday-news-items"},on:{click:function(s){t.getNewsContent(e.id)}}},[s("div",{staticClass:"content-text"},[t._v(t._s(e.title))]),t._v(" "),s("div",{staticClass:"content-img"},[s("img",{attrs:{src:e.images[0],alt:""}})])])})],2),t._v(" "),s("div",{staticClass:"before"},[s("div",{staticClass:"before-tag"},[t._v("更早之前")]),t._v(" "),t._l(t.before_news,function(e,a){return s("div",{attrs:{id:"before-news"},on:{click:function(s){t.getNewsContent(e.id)}}},[s("div",{staticClass:"content-text"},[t._v(t._s(e.title))]),t._v(" "),s("div",{staticClass:"content-img"},[s("img",{attrs:{src:e.images[0],alt:""}})])])}),t._v(" "),s("mu-raised-button",{staticClass:"demo-raised-button",attrs:{label:"点击更多",backgroundColor:"#000",fullWidth:""},on:{click:t.loadMore}})],2)],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.c_waiting,expression:"c_waiting"}],staticClass:"animated fadeIn",attrs:{id:"content"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.content_data.image,expression:"content_data.image"}],staticClass:"content_head"},[s("span",{staticClass:"content_title"},[t._v(t._s(t.content_data.title))]),t._v(" "),s("span",{staticClass:"content_img_source"},[t._v("图片:  "+t._s(t.content_data.image_source))]),t._v(" "),s("img",{attrs:{src:t.content_data.image,alt:""}})]),t._v(" "),s("div",{domProps:{innerHTML:t._s(t.dataBody)}}),t._v(" "),s("div",{staticClass:"content-bottom"},[s("mu-paper",[s("mu-bottom-nav",{attrs:{value:t.bottomNav},on:{change:t.handleChange}},[s("mu-bottom-nav-item",{attrs:{value:"arrowback",icon:"arrow_back"}}),t._v(" "),s("mu-bottom-nav-item",{attrs:{value:"thumbup",icon:"thumb_up"}}),t._v(" "),s("mu-bottom-nav-item",{attrs:{value:"chat",icon:"chat"}})],1)],1),t._v(" "),s("span",{staticClass:"thumb-up"},[t._v(t._s(t.extra.popularity))]),t._v(" "),s("span",{staticClass:"chat"},[t._v(t._s(t.extra.short_comments))])],1),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.content_data.image,expression:"content_data.image"}],staticClass:"shade"})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"animated fadeIn",attrs:{id:"index"}},[s("v-header"),t._v(" "),s("news")],1)},staticRenderFns:[]}},,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a="undefined"!=typeof window;a&&(window.Swiper=s(13),s(53)),e.default={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&a&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&a){delete t.options.notNextTick;var e=!1;for(var s in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(s)&&t.options[s]&&(e=!0,t.defaultSwiperClasses[s]=t.options[s]);var n=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(n):n()}};this.options.notNextTick?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(2),n=s(7),i=(s.n(n),s(3));e.default={data:function(){var t=this;return{swiperOption:{pagination:".swiper-pagination",paginationClickable:!0,autoplay:2850,autoplayDisableOnInteraction:!1,effect:"fade",touchMoveStopPropagation:!1,loop:!1,onTap:function(e){t.getTopStories(e)}},depth:0,scroll:0,swiper_mes:[],header_obj:{backgroundColor:"rgba(0,0,0,0)"},h_show:!1,open:!1,docked:!0,shadeShow:!1,themesData:[]}},components:{swiper:n.swiper,swiperSlide:n.swiperSlide},created:function(){var t=this;this.h_show=!1,s.i(i.f)().then(function(e){t.swiper_mes=e.data.top_stories,t.h_show=!0}),s.i(i.h)().then(function(e){t.themesData=e.data.others})},activated:function(){window.addEventListener("scroll",this.watchScroll)},deactivated:function(){window.removeEventListener("scroll",this.watchScroll)},methods:{watchScroll:function(){var t=void 0;this.scroll=document.body.scrollTop,(t=this.scroll/800)>=1||(this.header_obj.backgroundColor="rgba(0,0,0,"+t+")")},getTopStories:function(t){var e=this.swiper_mes[t.activeIndex].id;a.a.push({name:"content",params:{id:e,frompath:"top_news"}})},toggle:function(){this.open=!this.open,this.shadeShow=!this.shadeShow},goToThemesList:function(t){a.a.push({name:"themesList",params:{id:t}})}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(72),n=s(2),i=s(3);e.default={data:function(){return{news:[],yesterday_news:[],before_news:[],load_str:"",load_month:0,n_show:!1}},created:function(){var t=this,e=new Date,n=void 0,o=void 0,r=void 0,c=void 0,d=void 0,l=void 0,u=void 0;if(n=e.getFullYear(),o=e.getMonth()+1,r=e.getDate(),l=o,u=r,c=""+n+o+r,this.n_show=!1,o<10&&(o="0"+o),r<10&&(r="0"+r),c=n+o+r,this.load_str=c,this.load_month=e.getMonth()+1,s.i(i.f)().then(function(e){t.news=e.data.stories}),s.i(i.g)(c).then(function(e){t.yesterday_news=e.data.stories}),1==u){l-=1;var h=!0;for(u=s.i(a.a)(n,l);h;)l<10&&(l="0"+l),u<10&&(u="0"+u),d=""+n+l+u,h=!1}else d=c-1;s.i(i.g)(d).then(function(e){t.before_news=e.data.stories,t.n_show=!0})},computed:{getYesterday:function(){var t=new Date,e=void 0,n=void 0,i=void 0,o=void 0,r=void 0;switch(e=t.getFullYear(),n=t.getMonth()+1,i=t.getDate()-1,o=t.getDay(),0==i&&(n-=1,i=s.i(a.a)(e,n)),o){case 0:r="六";break;case 1:r="日";break;case 2:r="一";break;case 3:r="二";break;case 4:r="三";break;case 5:r="四";break;case 6:r="五"}return n+"月"+i+"日 星期"+r}},methods:{loadMore:function(){var t=this,e=new Date,n=void 0,o=void 0;if(n=e.getFullYear(),this.load_str-=1,this.load_str+="",0==this.load_str[6]&&0==this.load_str[7]){var r=void 0;this.load_month-=1,r=this.load_month,o=s.i(a.a)(n,this.load_month),this.load_month<10&&(this.load_month="0"+this.load_month),this.load_str=""+n+this.load_month+o,this.load_month=r}s.i(i.g)(this.load_str-1+"").then(function(e){for(var s=0;s<e.data.stories.length;s++)t.before_news.push(e.data.stories[s])})},getNewsContent:function(t){n.a.push({name:"content",params:{id:t,frompath:"daily_news"}})}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(2),n=s(3);e.default={data:function(){return{extraData:{},shortCommentsData:[],commentLoading:!1,id:Number,commentShow:!1}},methods:{backToContent:function(){a.a.go(-1)},handleScroll:function(){var t=this;if(this.$refs.comment.offsetHeight+document.body.scrollTop>=document.body.scrollHeight){this.commentLoading=!0;var e=void 0,a=void 0;e=this.shortCommentsData[this.shortCommentsData.length-1].id,s.i(n.b)(this.id,e).then(function(e){a=t.shortCommentsData.concat(e.data.comments),t.shortCommentsData=a,t.commentLoading=!1})}}},activated:function(){var t=this;this.commentShow=!1,this.id=this.$route.params.id,window.addEventListener("scroll",this.handleScroll),s.i(n.c)(this.id).then(function(e){t.extraData=e.data}),s.i(n.d)(this.id).then(function(e){t.shortCommentsData=e.data.comments,t.commentShow=!0})},deactivated:function(){window.removeEventListener("scroll",this.handleScroll)}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(2),n=s(3);e.default={data:function(){return{content_data:{},c_waiting:!1,bottomNav:"",extra:{},shortComments:[],_id:Number,dataBody:"",fromPath:""}},activated:function(){var t=this;this.c_waiting=!1;var e=this.$route.params.id;this._id=e;var a=this.$route.params.frompath;this.fromPath=a,console.log(this.fromPath),s.i(n.e)(e).then(function(e){t.content_data=e.data,t.dataBody=e.data.body.replace('<div class="headline">\n\n<div class="img-place-holder"></div>\n\n\n\n</div>',"")}),s.i(n.c)(e).then(function(e){t.extra=e.data,t.c_waiting=!0})},methods:{handleChange:function(t){switch(this.bottomNav=t,this.bottomNav){case"arrowback":this.fromPath.indexOf("themenews")?a.a.go(-1):a.a.push({name:"index"}),this.bottomNav="";break;case"thumbup":this.bottomNav="";break;case"chat":this.bottomNav="",a.a.push({name:"comment"},{params:{id:this._id}})}}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(37),n=s.n(a),i=s(38),o=s.n(i);e.default={components:{"v-header":n.a,news:o.a},deactivated:function(){sessionStorage.setItem("scrollTop",document.body.scrollTop)}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(2),n=s(3);e.default={data:function(){return{themesListData:{},themesListShow:!1,themeId:""}},activated:function(){var t=this;this.themeId=this.$route.params.id,this.themesListShow=!1,s.i(n.a)(this.themeId).then(function(e){t.themesListData=e.data,t.themesListShow=!0})},methods:{backToHome:function(){a.a.push({name:"index"})},getItemContent:function(t){a.a.push({name:"content",params:{id:t,frompath:"theme_"+this.themeId}})}}}},function(t,e,s){"use strict";s.d(e,"a",function(){return a});var a=function(t,e){return 2==e?t%4==0?29:28:1==e||3==e||5==e||7==e||8==e||10==e||12==e?31:30}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(4),n=s(14),i=s.n(n),o=s(2),r=s(6),c=(s.n(r),s(15)),d=s.n(c),l=s(16),u=(s.n(l),s(7)),h=s.n(u);a.default.use(d.a),a.default.use(h.a),a.default.config.productionTip=!1,a.default.filter("time",function(t){t*=1e3;var e=new Date(t),s=e.getMonth()+1,a=e.getDate(),n=e.getHours(),i=e.getMinutes(),o=e.getSeconds();return s<10&&(s="0"+s),a<10&&(a="0"+a),n<10&&(n="0"+n),i<10&&(i="0"+i),o<10&&(o="0"+o),s+"-"+a+" "+n+":"+i+":"+o}),new a.default({el:"#app",router:o.a,template:"<App/>",components:{App:i.a}})}],[73]);
//# sourceMappingURL=app.6ee33f495a95caa06adf.js.map