<template>
    <div class="father" >
        <h2>我是爹</h2>
        <h3>{{ car }}</h3>
        <button @click="changeToy">修改Child1的玩具</button>
        <button @click="changeComputer">修改Child2的玩具</button>
        <button @click="getAllChild($refs)">获取所有的子组件对象</button>
        <Child ref="c1" />
        <Child ref="c2"/>
        
    </div>
</template>

<script lang='ts' setup name="Father">
import  Child from './Child.vue'
    import {ref} from 'vue'
    let c1 = ref()
    let c2 = ref()
    let car = ref('宝马')
    
    function changeToy(){
        // console.log(c1.value);
        // c1.value.toy = '小明治'
        c1.value.toy+='明治'
    }
    function changeComputer(){
        c2.value.toy = '联想'
    }
    function getAllChild(refs:any){
        
        for(let key in refs){
            refs[key].book += 3
        }
        
    }
    // 将数据交给外部
    defineExpose({car})
</script>

<style scoped>
/*  样式  */
.father{
    border: 1px solid green;
    border-radius: 5px;
    background-color: darkgreen;
    margin: 10px;
}
button{
    /* border: 0; */
    background-color: lightgreen;
    margin: 10px;
    padding: 5px;
    border-radius: 5px;
}
</style>
