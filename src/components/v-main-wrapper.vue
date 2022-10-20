<template>
    <div class="v-main-wrapper">
       <VHeader /> 
     <router-view></router-view>
      <VFooter />
    </div>
</template>

<script>



import VHeader from './v-header.vue';
import VFooter from './v-footer.vue';

    export default {
        name: 'v-main-wrapper',
      components: {
 
  
    VHeader,
    VFooter
},
        props: {},
        data() {
            return {
                title: 'main wrapper'
            }
        }, 
        computed: {
        
        },
        methods: {},
        
       
       
        
        watch: {},
        mounted() {
            console.log('hello')
        }
    }
</script>

<style>
    .v-main-wrapper {
       
        max-width: 100wh;
        margin: 0 auto;
    }

</style>