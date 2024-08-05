<template>
    <div class="child">
        <h2>我是儿子</h2>
        <h3>{{ toy }}</h3>
        <button @click="emitter.emit('send-toy',toy)">将玩具给父亲</button>
    </div>
</template>

<script lang='ts' setup name="Child">
import { ref } from 'vue';
import emitter from './untils/emitter';
let toy = ref('奥特曼')
function getToy(){
    emitter.emit('send-toy',toy.value)
}
</script>

<style scoped>
/*  样式  */
.child{
    border: 1px solid lightseagreen;
    border-radius: 5px;
    background-color: lightsalmon;
    margin: 10px;
}
</style>