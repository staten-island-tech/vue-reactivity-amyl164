<template>
    <div class="body2">
        <h1>Shopping Cart</h1>

    </div>
</template>

<script setup>
const props = defineProps({
    ingredient: Object
})
</script>

<style scoped>
.body2{
    margin: 0;
 padding: 0;
 height: 100vh;
 display: flex;
 justify-content: right;
 align-items: center;
}
</style>