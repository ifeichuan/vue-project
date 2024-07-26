<template>
    <div class="person">
        <h1>China</h1>
        <h2 ref="title2">Beijing</h2>
        <h3>尚硅谷</h3>
        <button @click="showLog">点我输出 h2 这个袁术</button>
    </div>

</template>

<script lang="ts" setup name='Person'>
    import {ref} from 'vue';
    //  创建一个title2,用于存储ref标记的内容
    let title2 = ref()
    function showLog(){
        console.log(title2.value);
        
    }
    defineExpose({title2})
</script>

<style scoped>
/*  样式  */

.person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}

button {
    margin: 0 5px;
}
</style>