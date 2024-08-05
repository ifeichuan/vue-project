<template>
    <div class="child">
        <h2>我是儿子</h2>
        <h3>{{ toy }}</h3>
        <h3>书籍:{{ book }}</h3>
        <button @click="getAllParent($parent)">干掉父亲的房产</button>
    </div>
</template>

<script lang='ts' setup name="Child">
import { ref } from 'vue';

let toy = ref('奥特曼')
let book = ref('C++竞赛入门')
// 把数据交给外部
defineExpose({toy,book})
function getAllParent(parent){
    console.log(parent);
    parent.car= '五菱Mini'
    
}
</script>

<style scoped>
/*  样式  */
.child{
    border: 1px solid lightseagreen;
    border-radius: 5px;
    background-color: lightsalmon;
    margin: 10px;
    box-shadow: 10px 5px 5px  rgb(77, 116, 178);
}
</style>