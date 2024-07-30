<template>
    <ul>
        <li>{{ route.id }}</li>
        <li>{{ route.title}}</li>
        <li>{{ route.content }}</li>
    </ul>
</template>

<script lang="ts" setup name="Detail">
    import {  toRefs } from 'vue';
import {useRoute} from 'vue-router'
    let route = toRefs( useRoute()).query;
    // console.log('@',route.query);
    
</script>

<style>
li ::marker{
    color: aqua;
}
</style>