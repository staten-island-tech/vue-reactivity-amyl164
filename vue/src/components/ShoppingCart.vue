<template>
    <div class="body2">
        <h1 class="title2">Shopping Cart</h1> 
        <div class="if" v-if="store.cart.length === 0">
        <h2>No items in cart</h2>
    </div>
    <div v-else>
        <div v-for="(ingredient) in store.cart" :key="ingredient.name" class="cartt">
            <h2>{{ ingredient.name }}</h2>
            <img :src="ingredient.img" alt=""/>
            <button @click="remove(ingredient)" class="btn">Remove</button>
        </div>
    </div>
    <h2 class="cost">Total Cost:${{ total()}}</h2>
    </div>
</template>

<script setup>
import {store} from "@/stores/store.js";


const props = defineProps({
    cart: Array
})
function remove(ingredient){
    const cartIndex = store.cart.indexOf(ingredient);
    store.cart.splice(cartIndex, 1);
    console.log(store.cart)
  };

function total(){
    const arr = store.cart
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i].price
    } 
    
    console.log(sum)
    return sum
}      
</script>

<style scoped>
.body2{
width: 30%; 
position:absolute;
top:0; right:0; 

}
.title2{
text-align:center;
font-size: 3rem;
}
img {
    height: 300px;
    object-fit: cover;
}
.cartt,h2{
    text-align:center;
    align-items: center;
}
.btn{
    background-color: red;
    border-radius: 0.3rem;
    font-size: 1rem;
}
.cost{
    font-size: 2rem;
}
</style>