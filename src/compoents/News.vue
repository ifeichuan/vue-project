<template>
    <div class="">
        <ul>
            <li v-for="news in newList" :key="news.id">
                <router-link 
                :to="{
                name:'xiangqing',
                params:{
                    id:news.id,
                    title:news.title,
                    content:news.content,
                }
                }">
                {{ news.title }}
            </router-link>
            </li>
        </ul>
    </div>
    <div class="content">
        <router-view></router-view>
    </div>
</template>

<script lang="ts" setup name="News">
import { reactive } from 'vue';

    const newList = reactive([
        {id:'01',title:'正经!',content:'namse'},
        {id:'02',title:'cjxnsm!',content:'namsecxxss'},
        {id:'03',title:'cmxjsffcxxssw!',content:'namasdmckjsse'},
    ])
</script>

<style scoped>
    .home{
        display: flex;
        /* justify-c ontent: center; */
        align-items: center;
        height: 100%;
    }
    li{
        font-size: 20px;
    }
    .link{
        text-decoration: none;
    }
    .link:active{
        color:lightcoral
    }
    .active{
        background-color: lightblue;
    }
</style>