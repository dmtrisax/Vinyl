<template>
    <div class="v-mainpage">

        <section class="section-one">
           
            <div class="section-one__text">
                <h1 class="text__title">WHEN I DIE, I WANT PEOPLE TO PLAY MY MUSIC...</h1>
                <p class="text__sub">— Jimi Hendrix, American guitarist, singer, and songwriter 1942–1970</p>
                <button class="text__btn">VIEW VINYLS <img src="../assets/icons/play.svg" alt=""></button>
            
            </div>

            <div class="section-one__content">
                <img class="content__img" src="../assets/img/home1.png" alt="">
                <img class="content__img" src="../assets/img/home2.png" alt="">
            </div>


        </section>

        <section class="section-two">
            <img class="section-two__img" src="../assets/img/home3.png" alt="">
            <h2 class="section-two__text">A brand new place with unique collections of everyone's favorite vinyl records
            </h2>
        </section>
    </div>

    <!-- <div class="pre-catalog">
        <h2>New vinyls</h2>
 <VCatalogItem
            
            v-for="album in ALBUMS" 
            :key="album.article" 
            :album_data="album"  />  
    </div> -->

</template>

<script>
    import { mapActions, mapGetters } from 'vuex';
// import VCatalogItem from './vCatalog/v-catalog-item.vue';

    export default {
        name:'v-mainpage',
        components:{
    // VCatalogItem
},
        data() {
            return {
                
            }
        },

        computed: {
            ...mapGetters([
                'ALBUMS'
            ])
        },
        methods: {
            ...mapActions([
                'GET_ALBUMS_FROM_API'
            ])
        },

        mounted() {
            this.GET_ALBUMS_FROM_API()
            .then((response) => {
                if (response.data) {
                    console.log('Data arrived!')
                }
            })
        }


    }
</script>
<style>
.v-mainpage {
    min-height: 100vh;
    max-width: 1300px;
    margin: 0 auto;

}

.section-one {
    position: relative;
    display: flex;
    justify-content: space-around;
    margin-bottom: 100px;
}

.section-one__text {
    display: flex;
    flex-direction: column;
}

.text__title {

    width: 550px;
    font-family: 'Enthalpy 298';
    font-style: normal;
    font-weight: 400;
    font-size: 60px;
    line-height: 100px;
    color: #000000;

    text-align: start;

}

.text__sub {
    font-family: 'Montserrat';
    width: 300px;
}

.text__btn {
    width: 230px;
    height: 60px;
    border: none;
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;


    color: white;
    background: #000000;
}

.content__img:nth-child(1) {
    width: 500px;
    position: absolute;
    right: 0;
}

.content__img:nth-child(2) {

    position: absolute;
    top: 13rem;
    right: 20rem;
    width: 300px;
}

.section-two {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 15px;
    padding: 0 40px;
}

.section-two__img {
    width: 350px;
}

h2 {
    width: 400px;
    font-family: 'Enthalpy 298';
    font-weight: 400;
    font-size: 40px;
    line-height: 40px;
    color: #000000;
}


</style>