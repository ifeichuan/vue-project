<template>
        <Person :list="personList"/>
</template>

<script lang="ts" setup name="App">
    //JS或TS
    import Person from './compoments/Person.vue';//导入组件
    import {Persons} from '@/types';
    let personList:Persons= [
    {id:'121312x',name:'张三',age:60},
    {id:'1213122x',name:'张三',age:61},
    {id:'121312222x',name:'张三',age:30}
    ]
</script>


