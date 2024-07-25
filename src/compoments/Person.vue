<template>
    <div class="person">
        <h1>情况一:监视[ref]定义基本数据类型</h1>
        <h2>当前求和为:{{ sum }}</h2>
        <button @click="changeSum">点我sum+1</button>
    </div>

</template>

<script lang="ts" setup name = 'Person'>
import { ref,watch} from 'vue';
// import 
// 数据
let sum = ref(0);
// 方法
function changeSum(){
    sum.value += 1
}
// 监视 
// watch(谁,回调函数)
const stopwatch = watch(sum,(newValue,oldValue)=>{
    console.log(newValue,oldValue);
    if(newValue>= 10){
        stopwatch()
    }
})
console.log(stopwatch)
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