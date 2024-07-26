<template>
    <div class="person">
        <h2>{{ person.name }}</h2>
        <h2>{{ person.age}}</h2>
        <h2>{{ person.car.c1 }},{{ person.car.c2 }}</h2>
        <button @click="changeName">修改明治</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changeC1">修改第一台车</button>
        <button @click="changeC2">修改第二台车</button>
        <button @click="changeCar">修改整台车</button>
    </div>

</template>

<script lang="ts" setup name = 'Person'>
    import { reactive,watch } from 'vue';
    let person = reactive({
        name:'张三',
        age:18,
        car:{
            c1:'奔驰',
            c2:'宝马'
        }
    })
    function changeName(){
        person.name += '~'
        // Object.assign(person,{name:'lis'})
    }
    function changeAge(){
        person.age += 1
    }
    function changeC1(){
        person.car.c1 = '奥迪'
    }
    function changeC2(){
        person.car.c2 = 'AE86'
    }
    function changeCar(){
        person.car = {c1:'雅迪',c2:'帝豪'}
    }
    // 第四种情况，监视对象中某个值，可以使用函数式返回该值
    // watch(()=>person.car,(newValue,oldValue)=>{
    //     console.log(newValue,oldValue);
        
    // },{deep:true})
    // 第五种情况
    watch([()=>person.car,()=>person.name],(newValue,oldValue)=>{
        console.log(newValue,oldValue);
        
    },{deep:true})
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