<template>
    <div class="v-catalog-item">

    
    
    <img class="v-catalog-item__cover" :src=" require('../../assets/covers/' + album_data.cover) " alt="cover">
    <p class="v-catalog-item__artist">{{album_data.artist}}</p>
    <p class="v-catalog-item__project">{{album_data.project}}</p>
    <p class="v-catalog-item__sub">{{album_data.genre}}/{{album_data.released}}</p>
    <p class="v-catalog-item__price">${{album_data.price}}</p>
    <button @click='addToCart' class="v-catalog-item__btn">Add to cart</button>  
    <button @click="showPopup" class="v-catalog-item__btn">Show</button>
          
    </div>
    <transition name="fade">

    <VPopup 
    v-if="isPopupVisible"
    @closePopup="closePopup"
    >
    <img class="v-catalog-popup__cover" :src=" require('../../assets/covers/' + album_data.cover) " alt="cover">
    <div class="v-catalog-popup__info">
    <p class="v-catalog-popup__artist">{{album_data.artist}}</p>
    <p class="v-catalog-popup__project">{{album_data.project}}</p>
    <p class="v-catalog-popup__sub">{{album_data.genre}}/{{album_data.released}}</p>
    <p class="v-catalog-popup_price">${{album_data.price}}</p>
    <button @click='addToCart' class="v-catalog-item__btn">Add to cart</button>

</div>
</VPopup>
        </transition>
</template>

<script>


import VPopup from '../popup/v-popup.vue'


export default {
    name: "v-catalog-item",
    props: {
        album_data: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    data() {
        return {
    isPopupVisible: false,
 

        };
    },
    computed: {},
    methods: {
      
        showPopup() {
            this.isPopupVisible = true;
         },
         closePopup() {
            this.isPopupVisible = false;
         },
        addToCart() {
            this.$emit("addToCart", this.album_data);
        },
    },
    components: { VPopup }
}
</script>

<style>
     .v-catalog-item {
        height: 420px;
        flex-basis: 25%;
        padding: 10px;
        margin-bottom: 16px;
        background-color: #FFFBE5;
        border: 2px solid #000000;
        transition: transform 0.5s;
    }

    .v-catalog-item:hover {
        transform: scale(103%);
    }

    .v-catalog-item__cover {
        max-width: 200px;
    }


    .v-catalog-item__btn {
        padding: 10px 15px;
        color: #FFFBE5;
        background-color: #000000;
        border: none;
        margin-right: 5px;
    }

    .v-catalog-item__btn:hover {
        color:#000000;
        background-color: #F95530;
    }


    .fade-enter-active,
    .fade-leave-active {
        transition: all 0.4s ease-out;
}

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
        /* transform: translate(0, 100px); */
}


    
</style>