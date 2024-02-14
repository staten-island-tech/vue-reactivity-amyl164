<template>
    <div class="body2">
        <h1 class="title2">Shopping Cart</h1>

    </div>
</template>

<script setup>
const props = defineProps({
    ingredient: Object
})
</script>

<style scoped>
.body2{
background-color: white;
width: 30%; 
position:absolute;
top:0; right:0; 
}
.title2{
text-align:center;
font-size: 3rem;
}
</style>