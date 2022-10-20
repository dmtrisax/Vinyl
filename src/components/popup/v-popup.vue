<template>
    <div class="popup__wrapper" ref="popup__wrapper">
       
        <div class="v-popup">
            <div class="v-popup__header">

                <span>
                    <i @click="closePopup" class="material-icons">close</i>
                </span>

            </div>
            <div class="v-popup__content">
                <slot></slot>
            </div>

        </div>
  
    </div>
</template>

<script>
export default {
    name: "v-popup",
    props: {},
    data() {
        return {}
    },
    computed: {},
    methods: {
        closePopup() {
            this.$emit('closePopup')
        }
    },
    mounted() {
        let vm = this
        document.addEventListener('click', function (item) {
            if (item.target === vm.$refs['popup__wrapper']) {
                vm.closePopup()
            }
        })
    }
}
</script>

<style>


.popup__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
  background-color: rgba(64, 64, 64, .4);

}
.v-popup {
    position: fixed;
    width: 803px;
    height: 500px;
    box-shadow: 0 0 17px 0 #e7e7e7;
    background-color: #FFFBE5;
    border: 2px solid #000000;
    justify-content: center;
    display: flex;
   

}

.v-popup__header {
    position: absolute;
    right: 0;
}


.v-popup__content {
    display: flex;
    gap: 50px;
    align-items: center;
}

i {
  
    
    cursor: pointer;
}


.v-catalog-popup__cover {
        width: 400px;
      }


    .v-catalog-popup__info {
        display: flex;
        flex-direction: column;
    }
p {
    
    
}

.v-catalog-popup__artist {
    font-family: 'Enthalpy 298';
    font-weight: 400;
    font-size: 25px;
    line-height: 10px;
    color: #F95530;
    transition: transform 0.9s;
    }

    .v-catalog-popup__artist:hover {
        transform: scale(130%);
    }
.v-catalog-popup__project {
    font-family: 'Enthalpy 298';
    font-weight: 400;
    font-size: 25px;
    line-height: 10px;
    color: #F95530;
    transition: transform 0.9s;
    }

    .v-catalog-popup__project:hover {
        transform: scale(130%);
    }
.v-catalog-popup__info {
    font-family: 'Enthalpy 298';
    font-weight: 400;
    font-size: 25px;
    line-height: 10px;
    color: #000000;
}
</style>