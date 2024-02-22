<template>
    <div class="body2">
        <h1 class="title2">Shopping Cart</h1> 
        <img :src="ingredient.img" alt=""/>
    </div>
</template>

<script setup>
const props = defineProps({
    ingredient: Object
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