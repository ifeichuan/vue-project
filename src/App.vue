<template>
    <div class="app">
        <h2 class="title">Vue路由测试</h2>
        <!-- 导航区 -->
         <div class="navigate">
            <router-link to="/News" active-class="active">新闻</router-link>
            <router-link to="/Home" active-class="active">首页</router-link>
            <router-link to="/About" active-class="active">关于</router-link>
         </div>
         <!-- 展示区 -->
          <div class="maincontent">
            <router-view></router-view>
          </div>
    </div>
</template>

<script lang="ts" setup name="App">
import { RouterView } from 'vue-router';

    
</script>

<style scoped>
.title{
    font-size: 40px;
    text-align: center;
    background: linear-gradient(to right,lightblue,lightgreen);
}
.navigate a:active{
    color: aqua;
}
.navigate{
    /* width: 80%; */
    /* background-color: lightblue; */
    height: 60px;
    padding-left: 10%;
    font-size: 20px;
    border: 1px solid;
}
.navigate a{
    padding:0 20px;
    margin:0 10%;
    line-height: 60px;
    text-align: center;
    border: 1px solid;
    background-color: darkgray;
    color:aliceblue;
    border-radius: 5px;
    text-decoration: none;
}
.maincontent{
    margin-top: 30px;
    border: 1px solid;
    border-color: darkcyan;
    height: 500px;
    width: 80%;
    margin-left: 10%;
}
.navigate .active{
    background-color: chartreuse;
    color: brown;
}
</style>