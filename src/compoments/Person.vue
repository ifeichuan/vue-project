<template>
    <div class="person">
        <h2>当前求和为{{ sum }}</h2>
        <button @click="sumAdd">点我+1</button>
    </div>

</template>

<script lang="ts" setup name='Person'>
import {ref,onBeforeMount, onMounted, onBeforeUpdate, onUpdated, watch, onBeforeUnmount, onUnmounted} from 'vue';
    let sum = ref(0);
    function sumAdd(){
        sum.value += 1
    }
    watch(sum,(newValue,oldValue)=>{
        console.log('更新前:' + oldValue);
        console.log('更新后:' + newValue);
        
    })
    onBeforeMount(()=>{
        console.log('挂载前');
    })
    onMounted(()=>{
        console.log('挂载完毕');
    })
    onBeforeUpdate(()=>{
        console.log('更新前',sum.value);
    })
    onUpdated(()=>{
        console.log('更新完毕',sum.value);
    })
    onBeforeUnmount(() => {
        console.log('卸载前');
    })
    onUnmounted(()=>{
        console.log('卸载后');
    })
</script>

<style scoped>
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