<template>
    <div class="app">
        <h2 class="title">Vue组件通信</h2>
            <Nav></Nav>
    </div>
</template>

<script lang="ts" setup name="App">
import Nav from './pages/Nav.vue';

</script>

<style scoped>
.title{
    font-size: 40px;
    text-align: center;
    background: linear-gradient(to right,lightblue,lightgreen);
}

</style>