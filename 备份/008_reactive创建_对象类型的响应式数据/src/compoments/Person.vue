<template>
    <div class="person">
        <h2>一辆{{car.name}}车,价值{{ car.price }}万</h2>
        <button @click="changePrice">修改汽车价格</button>
        <ul>
            <li v-for="g in games" :key="g.id">{{ g.name }}</li>
        </ul>
    </div>
</template>

<script lang="ts" setup name = 'Person'>
    import { reactive } from 'vue';
    let car = reactive({brand:'奔驰',price:100})
    let games  =reactive([
        {id:'01',name:'王者荣耀'},
        {id:'02',name:'原神,启动!'},
        {id:'03', name:'三国杀!'}
    ])

    function changePrice(){
        car.price += 10
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