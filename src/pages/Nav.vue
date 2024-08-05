<template>
    <div class="nav">
        <div class="aside">
            <router-link :to="{
                path:page.url
            }" v-for="page in pages" :key="page.id" class="url" active-class="active">{{ page.url }}</router-link>
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
    {id:1,url:'Props'},
    {id:2,url:'CustomEvent'},
    {id:3,url:'Mitt'},
    {id:4,url:'Ref-Parent'}
])
//JS或TS

</script>

<style scoped>
/*  样式  */
.nav{
    min-width: 100px;
    min-height: 800px;
    border: 2px solid lightblue;
    border-radius: 5px ;
    display: flex;
    flex-direction: row;
    /* flex-wrap: wrap; */
    flex: 0 1 auto;
    /* flex-wrap: wrap; */
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
    /* margin: 20px ; */
    padding: 10px;
    background-color: white;
    border: 1px solid black;
    /* border-radius: 10px; */
    color: black;
    text-align: center;
    text-decoration: none;
}
.content{
    flex-wrap: wrap;
    margin: 50px;
    width: 100%;
    /* height: 100%; */
    border: 1px solid red;
}
.url:hover{
    color: black;
}
.active{
    background-color:rgb(77, 116, 178);
}
</style>