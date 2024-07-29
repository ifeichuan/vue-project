import {reactive} from 'vue';
import axios from 'axios';

export default function (){const dogList = reactive([
        'https://images.dog.ceo/breeds/greyhound-italian/n02091032_10688.jpg',
    ])

  async function addDog(){
    try {
        // eslint-disable-next-line prefer-const
        const dog = await axios.get('https://dog.ceo/api/breeds/image/random')
        dogList.push(dog.data.message)
    } catch (error) {
        console.log('failure!');
        
    }
  }
  return {dogList,addDog}
}