<template>
    From DestCard: {{ store.cart }}
    <div class="body2">
        <h1 class="title2">Shopping Cart</h1>
        <img :src="ingredient.img" alt=""/>

    </div>
</template>

<script setup>
import { store } from './store.js'

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
</style>