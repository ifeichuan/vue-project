<template>
    <div class="person">
            姓: <input type="text" v-model="firstName" ><br>
            名: <input type="text" v-model="lastName"> <br>
            <button @click="changeName">将全名改为李斯</button>
            全名 <span>{{fullNmae}}</span> <br>
    </div>
</template>

<script lang="ts" setup name = 'Person'>
    import { log } from 'console';
import { ref,computed} from 'vue';
    let firstName = ref('zhang')
    let lastName = ref('san')
    
    //这么计算的fullName是一个计算属性，且只读
    // let fullNmae = computed(()=>{
    //     return firstName.value.slice(0,1).toUpperCase() + firstName.value.slice(1) + '-' +lastName.value
    // })
    //这么计算的fullName是一个计算属性，且可读可写
    let fullNmae = computed({
        get(){
            return firstName.value.slice(0,1).toUpperCase() + firstName.value.slice(1) + '-' +lastName.value
        },
        set(val){
            const [str1,str2] = val.split('-')
            firstName.value = str1
            lastName.value = str2
            console.log('set',val);
            
        }
    })
    function changeName(){
        fullNmae .value = '李-四'
    }
</script>
        
<style>
/*  样式  */

.person{
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
button{
    margin: 0 5px;
}
</style>