<template>
    <div class="father">
        <h2>{{ car }}</h2>
        <h3>{{ toy }}</h3>
        <Child :send="car" :getToy="getToy"/>
    </div>
</template>

<script lang='ts' setup name="Father">
import { ref } from 'vue';
import Child from './Child.vue';


//JS或TS
let car = ref('奔驰')
let toy = ref('')
function getToy(value){
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