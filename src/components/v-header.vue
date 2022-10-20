<template>
    <header class="v-header">
        <div class="v-header__container">

            <nav class="v-header__menu">

                <img class="v-header__logo" src="../assets/icons/Logo.svg" alt="">



                <ul class="menu__list">
                    <li class="menu__list-item">
                        <router-link to="./">main</router-link>
                    </li>
                    <li class="menu__list-item">
                        <router-link to="./catalog">catalogue</router-link>
                    </li>
                    <li class="menu__list-item">
                        artists
                    </li>
                </ul>
                <div class="menu__icons">



                    <router-link to="./cart">
                        <img src="../assets/icons/Cart.svg" alt="">
                        <p class="icon__cart">{{ CART.length }}</p>
                    </router-link>
                    <div class="search">
                        <input v-model="searchValue" type="text">
                        <img @click="search(searchValue)" class="search" src="../assets/icons/Search.svg" alt="">
                    </div>

                </div>
            </nav>
        </div>
    </header>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';

export default {
    name: "v-header",
    components: {
    },
    props: {},
    data() {
        return {
            searchValue: '',
        }

    },
    computed: {
        ...mapGetters([
            'CART',
            'SEARCH_VALUE'
        ])
    },
    methods: {
        ...mapActions([
            'GET_SEARCH_VALUE_TO_VUEX'
        ]),
        search(value) {
            this.GET_SEARCH_VALUE_TO_VUEX(value);
            if (this.$route.path !== '/caatalog') {
                this.$router.push('/catalog')

            }
        }

    },
    mounted() {

    }
}
</script>

<style>
.v-header__container {
    min-height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #F95530;
    border: 1px solid #000000;
}

.v-header__logo {
    max-width: 150px;
}

.v-header__menu {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

.menu__list {
    display: flex;
    gap: 80px;
    margin: 0 120px;
}

.menu__icons {
    display: flex;
    gap: 50px;
    position: relative;

}

.icon__cart {
    width: 15px;
    font-size: x-small;

    background-color: #fff;
    border-radius: 50%;

    position: absolute;
    top: 0;
    left: 25px;
}

.menu__list-item-link {

    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 37px;
    text-align: center;
    text-transform: uppercase;

    color: #000000;
}

.search {
    display: flex;
    gap: 5px;
}

input {
    border: none;
    background-color: bisque;
}
</style>