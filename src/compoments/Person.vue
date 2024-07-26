<template>
    <div class="person">
        <ul>
            <li v-for="l in list" :key="l.id" >{{ l .id}}</li>
        </ul>
    </div>

</template>

<script lang="ts" setup name='Person'>
    import {type Persons} from '@/types'
    import {defineProps,withDefaults} from 'vue'
    // let person:PersonInter= {id:'121312x',name:'张三',age:60}
    // 接收list并保存至x
    // let x = defineProps(['list'])

    // 接收list并限制类型
    // defineProps<{list:Persons}>()

    //  接收list + 限制类型 + 限制必要性(`?`) + 指定默认值
    // defineProps<{list?:Persons}>()
    withDefaults(defineProps<{list?:Persons}>(),{
        list:()=>[{
            id:'11112xx',
            name:'zhangsna',
            age:198
    }]
    })
    // console.log(x.list);
    
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