<template>
    <div>
    <div class="card">
       <h2>{{ ingredient.name }}</h2>
       <img :src="ingredient.img" alt=""/>
       <h3>{{ "$" + ingredient.price }}</h3>
       <button @click=" addToCart(ingredient) " class="btnn">Add to Shopping Cart!</button>
    </div>
</div>
</template>

<script setup>
import {store} from '@/stores/store.js'

const props = defineProps({
    ingredient: Object
})
const addToCart = function(product){
  store.cart.push(product)
}

</script>
<style  scoped>
img{
    height: 300px;
    object-fit: cover;
}
.card {
    font-size: 2rem;
    background-color: white;
    padding: 2%;
    margin: 2rem 2rem;
    border: 3px solid black;
    width: 555px;
    height: 70vh;
  } 
  .btnn {
    font-size: 1.5rem;
  }

</style>