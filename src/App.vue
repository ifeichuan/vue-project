<template>
    <div class="nav"></div>
        <Person :list="personList" v-if="isShow"/>
        <Person :list="personList" v-if="isShow"/>
        <Person :list="personList" v-if="isShow"/>
        <Person :list="personList" v-if="isShow"/>
        <Person :list="personList" v-if="isShow"/>
        <Person :list="personList" v-if="isShow"/>
        
</template>

<script lang="ts" setup name="App">
    //JS或TS
    import Person from './compoments/Person.vue';//导入组件
    // import {Persons} from '@/types';
    import {ref} from 'vue';
    let personList:Persons= [
    {id:'121312x',name:'张三',age:60},
    {id:'1213122x',name:'张三',age:61},
    {id:'121312222x',name:'张三',age:30}
    ]
    let isShow = ref(true)
</script>

<style scoped>
.nav{
    left: 0;
    width: 200px;
    height: 100px;
    background-color: aqua;
    position: static;
    float: left;
}
</style>