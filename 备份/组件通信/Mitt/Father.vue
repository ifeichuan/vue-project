<template>
    <div class="father">
        <h2>我是爹</h2>
        <h3>{{ car }}</h3>
        <Child/>
        <textarea v-model="mark"></textarea>
        <div class="output" v-html="output"></div>
    </div>
</template>

<script lang='ts' setup name="Father">
    import emitter from './untils/emitter';
    import { computed, onUnmounted, ref } from 'vue';
    import Child from './Child.vue';
    import { marked } from 'marked';
    let car = ref('宝马')
    let mark = ref('')
    const output = computed(()=>marked(mark.value))
    emitter.on('send-toy',(value)=>{
        console.log('事件被触发',value);
        
    })
    onUnmounted(()=>{
        emitter.off('send-toy')
    })
    
</script>

<style scoped>
/*  样式  */
.father{
    border: 1px solid green;
    border-radius: 5px;
    background-color: darkgreen;
    margin: 10px;
}
input{
    height: 200px;
    width: 200px;
}
</style>