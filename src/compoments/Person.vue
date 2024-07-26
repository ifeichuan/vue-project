<template>
    <div class="person">
        <h2>当水温达到 60°,或水位达到 80cm 时，给服务器发请求</h2>
        <h2>当前水温:{{ temp }}</h2>
        <h2>当前水位:{{ height }}</h2>
        <button @click="changeTemp">水温 +1</button>
        <button @click="changeHeight">点我 +1</button>
    </div>

</template>

<script lang="ts" setup name='Person'>
    import { log } from 'console';
import { ref, watchEffect } from 'vue';

    var temp = ref(10);
    var height = ref(0);

    function changeTemp() {
        temp.value += 10;
    }
    function changeHeight() {
        height.value += 10;
    }
    // watch 写法
    // let tempWatch = watch(temp,()=>{
    //     if(temp.value>=60){
    //         alert('dddd')
    //         tempWatch()
    //     }
    // })
const x = watchEffect(()=>{
    if(temp.value>0){
        console.log("222");
        
    }
    if(temp.value>99){
        console.log("结束了");
        
        x()
    }
})
</script>

<style>
/*  样式  */

.person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}

button {
    margin: 0 5px;
}
</style>