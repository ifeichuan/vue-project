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
import { log } from 'console';
import { isNumberObject } from 'util/types';

// import { tel } from 'vue';

//JS或TS
export default {
        name:'Person',
        data(){
            return{
                name:'张三',
                age:18,
                tel:"8888888888",
            }
        },
        methods: {
            showTel(){
                alert(this.tel)
            },
            changeName(){
                this.name = prompt("请输入明治")
            },
            changeAge(){
                var num = prompt("请输入数字")
                this.age = num
            },
        }
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