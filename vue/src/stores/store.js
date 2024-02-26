import {ref} from 'vue';
const cart = ref([])

export function addtocart(){
     cart.value.push(props.ingredient);
      console.log(cart.value);
     }