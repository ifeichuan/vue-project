import {ref} from 'vue';

export default function (){
    // eslint-disable-next-line prefer-const
    const sum = ref(0);
    function sumAdd(){
        sum.value += 1
        
    }
    

    // 向外部提供数据
    return {sum,sumAdd}
}