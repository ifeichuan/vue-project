<template>
    <div class="person">
        <h2>姓名:{{ name }}</h2>
        <h2>年龄:{{ age}}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click = "showTel">查看联系方式</button>
    </div>
</template>

<script lang='ts'>
// import { tel } from 'vue';
//JS或TS
export default {
        name:'Person',
        // 组合式API
        // setup() {
        //     // 数据 
        //     //setup函数中没有this
        //     let name = '张三'//此时name不是响应式
        //     let age = 18//此时age不是响应式
        //     let tel = '18888888'

        //     function changeName(){
        //         name = '扉川'
        //     }
        //     function changeAge(){
        //         age = 404
        //     }
        //     function showTel(){
        //         alert(tel)
        //     }
        //     return {name,age,changeName,changeAge,showTel}
        // }
    }
</script>

<script lang="ts" setup>
    let name = '张三'
    let age = 12
    let tel =  '119'

    function changeAge(){
        age +=1
    }
    function changeName(){
        name = 'CHs'
    }
</script>

<style>
/*  样式  */

.person{
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
button{
    margin: 0 5px;
}
</style>