<template>
    <div class="person">
        <h2>当前求和为{{ sum }}</h2>
        <button @click="sumAdd">点我+1</button>
        <br>
        <img v-for="dog in dogList"  :src="dog" class="dog" :key="dog">
        <br>
        <button @click="addDog">点我+修狗</button>
    </div>

</template>

<script lang="ts" setup name='Person'>
    import userSum from '@/hooks/userSum';
    import useDog from '@/hooks/useDog';
    let {sum,sumAdd} = userSum()
    let {dogList,addDog} = useDog()
        
    
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
.dog {
    margin-right: 10px;
    width: 200px;
}
</style>