<template>
    <div class="child">
        <h2>{{ toy }}</h2>
        <h3>来自父亲的car:{{send}}</h3>
        <button @click="getToy(toy)">将玩具给父亲</button>
    </div>
</template>

<script lang='ts' setup name="Child">
import { ref } from 'vue';
//JS或TS
defineProps(['send','getToy'])
let toy = ref('奥特曼')

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