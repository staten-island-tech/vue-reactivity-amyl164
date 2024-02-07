<template>
    <div>
       <h2>{{ burger.name }}</h2>
       <img :src="burger.img" alt=""/>
       <h3>{{ burger.price }}</h3>
       <button @click="increment">Add to cart</button>
    </div>
</template>

<script setup>
import {ref} from "vue";
const props = defineProps({
    burger: Object,
})
const clicked = ref(0)
function increment(){
    clicked.value++;
}
</script>

<style  scoped>
img{
    width:250px;
    height: 300px;
    object-fit: cover;
}
</style>