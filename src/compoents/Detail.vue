<template>
    <ul>
        <li>ID:{{ route.params.id }}</li>
        <li>标题:{{ route.params.title }}</li>
        <li>内容:{{ route.params.content }}</li>
    </ul>
</template>

<script lang="ts" setup name="Detail">
    import { useRoute } from 'vue-router';
    let route = useRoute();
    console.log(route);
    
</script>

<style scoped>
li::marker{
    content: '>';
    color: green;
}
</style>