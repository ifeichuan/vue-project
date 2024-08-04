<template>
    <ul>
        <li>ID:{{ id }}</li>
        <li>标题:{{ title }}</li>
        <li>内容:{{ content }}</li>
    </ul>
</template>

<script lang="ts" setup name="Detail">
    defineProps(['id','title','content'])
    
</script>

<style scoped>
li::marker{
    content: '>';
    color: green;
}
</style>