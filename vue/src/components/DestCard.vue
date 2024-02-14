<template>
    <div>
    <div class="card">
       <h2>{{ ingredient.name }}</h2>
       <img :src="ingredient.img" alt=""/>
       <h3>{{ "$" + ingredient.price }}</h3>
       <button @click="addtocart" class="btn">Add to Shopping Cart!{{ count }}</button>
    </div>
</div>
</template>

<script setup>
const props = defineProps({
    ingredient: Object
})
import { ref } from 'vue'

const count = ref(0)

function addtocart() {
  count.value++
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
  .btn {
    font-size: 1.5rem;
  }

</style>