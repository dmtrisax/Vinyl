<template>
    <div class="v-cart">
        <h1 class="v-cart__title">Cart</h1>
        <h1 v-if="!CART.length" class="v-cart__empty">There are no products in cart</h1>
        <div class="v-cart__list">
            <VCartItem 
            v-for="(item, index) in CART" 
            :key="item.article" 
            :cart_item_data="item"
            @deleteFromCart="deleteFromCart(index)"
            @increment="increment(index)"
            @decrement="decrement(index)"
            />

            <div class="v-cart__total">
                <p>Total:</p>
                <p>{{cartTotalCost}}</p>
            </div>
        </div>


    </div>
</template>

<script>
import VCartItem from "./v-cart-item.vue";
import { mapActions, mapGetters } from "vuex";


export default {
    name: "v-cart",
    props: {
        cart_data: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {};
    },
    computed: {
        ...mapGetters(['CART']),


        cartTotalCost() {

            let result = []
            if (this.CART.length) {

                for (let item of this.CART) {
                    result.push(item.price * item.quantity)

                }

                result = result.reduce(function (sum, el) {
                    return sum + el;
                })
            }
            return result;

        }

    },
    components: {
        VCartItem,

    },
    methods: {
        ...mapActions([
            'DELETE_FROM_CART',
            'INCREMENT_CART_ITEM',
            'DECREMENT_CART_ITEM'
        ]),

        increment(index){
            this.INCREMENT_CART_ITEM(index)
        },

        decrement(index){
            this.DECREMENT_CART_ITEM(index)
        },
       
        deleteFromCart(index) {
            this.DELETE_FROM_CART(index)

        }
    },
}
</script>

<style>
.v-cart {
    min-height: 100vh;
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
}

.v-cart__title {
    font-family: 'Enthalpy 298';
    font-weight: 400;
    font-size: 40px;
    line-height: 40px;
    color: #000000;
    text-align: start;
}

.v-cart__empty {
    font-family: 'Enthalpy 298';
    font-weight: 400;
    font-size: 40px;
    line-height: 40px;
    color: #000000;
    margin: auto;
}


.v-cart__list {
    margin-top: 150px;
    padding-left: 100px;
}

.v-cart__total {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    height: 200px;
    gap: 20px;
}
</style>