<template>
  <div class="body">
  <div class="title">BURGER MAKER!</div>
  <div class="container">
    <DestCard v-for="ingredient in ingredients" :key ="ingredients.name" :ingredient="ingredient"/> 
  </div>
  <div>
    <ShoppingCart :cart="cart"/>
  </div>
</div>

</template>

<script setup>
import DestCard from "@/components/DestCard.vue";
import ShoppingCart from "@/components/ShoppingCart.vue";


const ingredients = [
{
    name: "Top Bun",
    price: 0.50,
    img: "https://static1.squarespace.com/static/5e13726e4066163f23e4d2ed/5e272c63b622362df79e64a6/5e272c64b622362df79e652b/1580413462340/?format=1500w",
  },
  {
    name: "Cheese",
    price: 0.50,
    img: "https://i.seadn.io/gae/w2-mQ7Cj8VMHDR6d0t-FMocTtu1lh1GdHe9Avbq4dlsr9nyGx1UppbMGZYXqYi-eHfeCr9fQ_4GwwxKsziKWEdw_xeumCeAK7Iav6DQ?auto=format&dpr=1&w=1000",
  },
  {
    name: "Lettuce",
    price: 0.50,
    img: "https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Vegetables-PNG/Lettuce_PNG_Clipart_Image.png?m=1557120116",
  },
  {
    name: "Tomato",
    price: 0.50,
    img: "https://static.vecteezy.com/system/resources/previews/010/985/669/original/slice-of-red-fresh-tomato-isolated-cut-out-png.png",
  },
  {
    name: "Pickles",
    price: 0.50,
    img: "https://144114145.cdn6.editmysite.com/uploads/1/4/4/1/144114145/s189238826265581700_p28_i1_w2000.png",
  },
  {
    name: "Onions",
    price: 0.50,
    img: "https://dtgxwmigmg3gc.cloudfront.net/imagery/assets/derivations/icon/512/512/true/eyJpZCI6Ijc1ODI4Y2M1NGFiNTg1ODUyMDE3ODNiZDYzODQ5YTk0Iiwic3RvcmFnZSI6InB1YmxpY19zdG9yZSJ9?signature=f8256a4048277d2db5846c74731ac8c302bd308ee9413195826d81dd6fffe1a9",
  },
  {
    name: "Burger Patty",
    price: 3,
    img: "https://www.pngitem.com/pimgs/b/371-3717213_hamburger-patty-top-view-hd-png-download.png",
  },
  {
    name: "Ketchup",
    price: 0.20,
    img: "https://pngimg.com/d/ketchup_PNG62.png",
  },
  {
    name: "Mustard",
    price: 0.20,
    img: "https://cdn.culvers.com/menu/images/item/sauces-dressings/mustard.png?q=90&w=800&format=auto",
  },
  {
    name: "Mayonnaise",
    price: 0.20,
    img: "https://static.vecteezy.com/system/resources/previews/010/833/988/original/mayonnaise-sauce-isolated-on-white-background-top-view-png.png",
  },
  {
    name: "Bottom Bun",
    price: 0.50,
    img: "https://www.niceburger.be/assets/images/burger/bottom.png",
  },
]
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  justify-content: space-around;
  flex-direction: column;
  
}

.body {
  background-color: antiquewhite;
  width: 70%; 
}

.title {
  font-size: 5rem;
  text-align:center;
}
</style>


<!-- <script setup>
import { createApp } from "vue";
import { createPinia } from "pinia";
import { ref, computed } from "vue";

const Main = [
 
];

const cart = ref([]);

const additem = (item) => {
  cart.value.push(item);
};

const addtotalCost = computed(() => {
  return cart.value.reduce((total, item) => total + parseInt(item.Price), 0);
});
</script>

<template>
  <div class="container">
    <div class="card">
      <h1>Valorant Shop</h1>
      <div v-for="(item, index) in Main" :key="index">
        <p>{{ item.Name }}- ${{ item.Price }}</p>
        <button @click="additem(item)">Add to Cart</button>
      </div>
      <h2>Cart</h2>
      <li v-for="(cartItem, index) in cart" :key="index">
        {{ cartItem.Name }}-${{ cartItem.Price }}
      </li>
      <p>Total Cost:${{ addtotalCost }}</p>
    </div>
  </div>
</template> -->