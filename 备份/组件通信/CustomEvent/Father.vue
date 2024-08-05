<template>
    <div class="father">
        <h2>我是爹</h2>
        <h2>{{ car }}</h2>
        <h2>{{ toy }}</h2>
        <Child @sendtoy="(v)=> toy = v"/>
        <span>
            笔记:
        </span>
    </div>
</template>

<script lang='ts' setup name="Father">
import { ref } from 'vue';
import Child from './Child.vue';

let car = ref('奔驰')
let toy = ref('')

function getToy(value:string){
    console.log(value);
    toy.value = value
}
</script>

<style scoped>
/*  样式  */
.father{
    border: 1px solid green;
    border-radius: 5px;
    background-color: darkgreen;
    margin: 10px;
}
</style>