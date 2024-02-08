<template>
    <div>
       <h2>{{ ingredient.name }}</h2>
       <img :src="ingredient.img" alt=""/>
       <h3>{{ "$" + ingredient.price }}</h3>
    </div>
</template>

<script setup>
const props = defineProps({
    ingredient: Object
})
</script>

<style  scoped>
img{
    width:450px;
    object-fit: cover;

}

</style>