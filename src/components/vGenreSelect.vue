<template>
    <div class="v-genreselect">
        <p class="title" 
        
        @click="areOptionsVisible = !areOptionsVisible">{{selected}}</p>
        <div class="options" 
        v-if="areOptionsVisible">
            <p 
            v-for="option in options" 
            :key="option.value" 
            @click="selectOption(option)">
                {{option.name}} 
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "v-genreselect",
    props: {
        options: {
            type: Array,
            default() {
                return []
            }
        },
        selected: {String,
        default: ''
        }
    },
    data() {
        return {
            areOptionsVisible: false

        }
    },
    methods: {
        selectOption(option) {
            this.$emit('select', option)
            this.areOptionsVisible = false;

        },
        hideSelect() {
            this.areOptionsVisible = false;

        }
    },
    mounted() {
    document.addEventListener('click', this.hideSelect.bind(this),true)



     },
     beforeUnmount() {
        document.removeEventListener('click', this.hideSelect)

    }
    }
</script>

<style>
.v-genreselect {
    position: relative;
    width: 200px;
    cursor: pointer;
    margin-bottom: 80px;
}
.v-genreselect:hover {
    background-color: #F95530;
}

.v-genreselect p {
    margin: 0;
}

.title {
    border: 2px solid #F95530;
    padding: 10px;
}

.title-selected {
    background-color: #F95530;
}

.options {
    border: 2px solid #F95530;

    position: absolute;
    top: 40px;
    right: 0;
    width: 98%;
    height: 80px;
    overflow: scroll;
}

.options p:hover {
    color: #F95530;
}
</style>