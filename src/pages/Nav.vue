<template>
    <div class="nav">
        <div class="aside">
            <router-link :to="{
                path:page.url
            }" v-for="page in pages" :key="page.id" class="url">{{ page.url }}</router-link>
        </div>
        <div class="content">
            <!-- 11111111 -->
            <router-view></router-view>
        </div>
    </div>
</template>

<script lang='ts' setup name="Nav">
import { RouterView } from 'vue-router';
import { reactive } from 'vue';
let pages = reactive([
    {id:1,url:'/Props'},
    {id:2,url:'/CustomEvent'},
    {id:3,url:'/Mitt'}
])
//JS或TS

</script>

<style scoped>
/*  样式  */
.nav{
    width: 1000px;
    height: 800px;
    border: 2px solid lightblue;
    display: flex;
    flex-direction: row;
}
.aside{
    /* display: flex; */
    flex-direction: column;
    flex: 0 1 auto;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: lightgoldenrodyellow;
}
.url{
    display: block;
    margin: 20px ;
    padding: 10px;
    background-color: lightcoral;
}
.content{
    margin: 50px;
    width: 500px;
    height: 500px;
    border: 1px solid red;
}
</style>