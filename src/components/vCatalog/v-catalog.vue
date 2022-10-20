<template>
    <div class="v-catalog">

        <h1 class="v-catalog__title">Catalogue</h1>

        <div class="v-catalog__select">
            <VGenreSelect :selected="selected" :options="genres" @select="sortByGenres" />

        </div>



        <div class="v-catalog__list">
            <VCatalogItem v-for="album in paginatedAlbums" :key="album.article" :album_data="album"
                @addToCart="addToCart" />

        </div>

        <div class="v-catalog__pagination">
            <div class="page"
            v-for="page in pages"
            :key="page"
            :class="{'page__selected': page === pageNumber }"
            @click="pageClick(page)"
            >{{page}} </div>
   
        </div>
    </div>
</template>

<script>
import VCatalogItem from './v-catalog-item.vue';
import { mapActions, mapGetters } from 'vuex';
import VGenreSelect from '../vGenreSelect.vue';





export default {
    name: "v-catalog",
    components: {
        VCatalogItem,
        VGenreSelect,
    
    },

    data() {
        return {
            genres: [
                { name: 'Genre', value: 1 },
                { name: 'Hip-Hop', value: 2 },
                { name: 'Jazz', value: 3 },
                { name: 'R&B', value: 4 },
                { name: 'Rock', value: 5 },
                { name: 'Country', value: 6 },
                { name: 'Folk', value: 7 },
            ],
            selected: 'Select Genre',
            sortedAlbums: [],
           albumsPerPage: 9,
           pageNumber: 1
      

        }

    },
    props: {},
    computed: {
        ...mapGetters([
            'ALBUMS',
            'CART',
            'SEARCH_VALUE'
        ]),
        filteredAlbums() {
            if (this.sortedAlbums.length) {
                return this.sortedAlbums
            }
        
            else {
                return this.ALBUMS
            }

        },
        pages(){
            return Math.ceil (this.filteredAlbums.length / 9)
        },
        paginatedAlbums() {
            let from = (this.pageNumber - 1) * this.albumsPerPage;
            let to = from + this.albumsPerPage;
            return this.filteredAlbums.slice(from, to);
        }

    },
    methods: {
        ...mapActions([
            'GET_ALBUMS_FROM_API',
            'ADD_TO_CART'
        ]),
        sortByGenres(genre) {

            let vm = this;
            this.sortedAlbums = [...this.ALBUMS]
            this.sortedAlbums = this.sortedAlbums.filter(function (item) {
                vm.selected === genre.name;
                return item.genre === genre.name;
            })
        },
        pageClick(page) {
            this.pageNumber = page;
        },
  

    sortAlbumsBySearchValue(value) {
        this.sortedAlbums = [...this.ALBUMS];
        if (value) {
            this.sortedAlbums = this.sortedAlbums.filter(function (item) {
                return item.artist.toLowerCase().includes(value.toLowerCase());
            })
        }
        // if (value) {
        //     this.sortedAlbums = this.sortedAlbums.filter(function (item) {
        //         return item.project.toLowerCase().includes(value.toLowerCase())
        //     })
        // }
        else {
            this.sortedAlbums = this.ALBUMS
        }

    },

    addToCart(data) {
        this.ADD_TO_CART(data)
    }
},
watch: {
    SEARCH_VALUE() {
        this.sortAlbumsBySearchValue(this.SEARCH_VALUE);
    }
},
mounted() {
    this.GET_ALBUMS_FROM_API()
        .then((response) => {
            if (response.data) {
                this.sortAlbumsBySearchValue(this.SEARCH_VALUE)
            }
        })
}
}
</script>

<style>
.v-catalog {
    max-width: 900px;
    min-height: 100vh;
    margin: 0 auto;
    display: flex;

    flex-direction: column;
}

.v-catalog__title {
    font-family: 'Enthalpy 298';
    font-weight: 400;
    font-size: 40px;
    line-height: 40px;
    color: #000000;
    text-align: start;
}

.v-catalog__select {
    display: flex;
    gap: 20px;
    margin-top: 20px;
}

.v-catalog__list {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    align-items: center;
    margin-top: 40px;
    justify-content: center;
}

.v-catalog__pagination {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: 30px;
    gap:10px
}

.page {
    
    width: 20px;
    border: solid 1px #000000 ;
    border-radius: 50%;
}

.page:hover {
   
    width: 20px;
    background-color: #F95530 ;
    cursor: pointer;
}

.page__selected {
    width: 20px;
    background-color: #F95530;
    cursor: pointer;
}

</style>