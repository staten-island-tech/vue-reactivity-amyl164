<template>
    <div class="body2">
        <h1 class="title2">Shopping Cart</h1> 
        <div class="if" v-if="cart.length === 0">
        <h2>No items in cart</h2>
    </div>
    <div v-else>
        <div v-for="(ingredient) in cart" :key="ingredient.name" class="cartt">
            <h2>{{ ingredient.name }}</h2>
        </div>
    </div>
    </div>
</template>

<script setup>
import {ref} from 'vue';
const cart = ref([])

const props = defineProps({
    cart: Array
})
</script>

<style scoped>
.body2{
background-color: blue;
width: 30%; 
position:absolute;
top:0; right:0; 
height: 889vh;
}
.title2{
text-align:center;
font-size: 3rem;
}
img {
    height: 300px;
    object-fit: cover;
}
</style>