<template>
        <h2 ref="title2">2222</h2>
        <button @click="showLog">点我输出h2</button>
        <Person ref = "ren"/>
        <Person ref = "ren2"/>
</template>

<script lang="ts" setup name="App">
    //JS或TS
    import Person from './compoments/Person.vue';//导入组件
    import {ref} from 'vue';
    let title2 = ref()
    let ren = ref()
    function showLog(){
        console.log(title2.value)
        console.log(ren.value.title2);
        
    }
</script>


