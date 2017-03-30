<template>
<div id="content">
    <div class="content-text">水洗、日晒和米处理会让咖啡豆有什么不同？</div>
    <div class="content-img"><img src="../assets/test2.jpg" alt=""></div>
</div>
</template>


<script>

export default{

}

</script>


<style lang="css" scoped>
#content{
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
}
.content-img{
    height: 65px;
    width:25%;
    /*background-color: #fbb;*/
}
.content-img img{
    height: 100%;
    width: 100%;
}
</style>