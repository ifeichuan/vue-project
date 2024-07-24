<template>
        <Person/>
</template>

<script lang="ts">
    //JS或TS
    import Person from './compoments/Person.vue';//导入组件
    // 暴露组件名
    export default {
        name: 'App' ,//组件名
        components:{Person} // 注册组件
    }
    
</script>

