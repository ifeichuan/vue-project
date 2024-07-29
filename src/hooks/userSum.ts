import {ref} from 'vue';
import useDog from './useDog';


export default function (){
    // eslint-disable-next-line prefer-const
    const sum = ref(0);
    const {dogList,addDog} = useDog()
    function sumAdd(){
        sum.value += 1
        console.log(dogList);
        
    }
    

    // 向外部提供数据
    return {sum,sumAdd}
}