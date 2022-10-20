<template>
    <div class="v-cart-item">
        <img class="v-cart-item__cover" :src=" require('../../assets/covers/' + cart_item_data.cover) " alt="cover">
        <div class="v-cart-item__info">
            <p class="v-cart-item__artist">{{cart_item_data.artist}}</p>
            <p class="v-cart-item__project">{{cart_item_data.project}}</p>
           
        </div>
        <p class="v-cart-item__price">${{cart_item_data.price}}</p>                        
        <div class="v-cart-item__quantity">
            <button class="v-cart-item__quantity-btn" @click="decrementItem">-</button>
            <button class="v-cart-item__quantity-btn" @click="incrementItem">+</button>
            <p>{{ cart_item_data.quantity }}</p>
            <button class="v-cart-item__quantity-del" @click="deleteFromCart">Delete</button>
        </div>

     

    </div>
</template>

<script>

export default {
    name: "v-cart-item",
    props: {
        cart_item_data: {
            type: Object,
            default() {
                return {
                    
                }
            }
        }
    },
    data() {
        return {
        
        }
    },
    methods: {
     
        incrementItem() {
            this.$emit('increment')
        },
        decrementItem() {
            this.$emit('decrement')

        },
        deleteFromCart() {
            this.$emit('deleteFromCart')
        }

    },
    computed: {

         
      
    },
    mounted() {
    }
}
</script>

<style>
.v-cart-item {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    gap: 50px
}

.v-cart-item__cover {
    max-width: 200px;
}

.v-cart-item__quantity-btn {
    margin: 1px;
    width: 20px;
    color: #FFFBE5;
    background-color: #000000;
    border: none;

}

.v-cart-item__quantity-del {
    padding: 10px 15px;
    color: #FFFBE5;
    background-color: #000000;
    border: none;
}
</style>