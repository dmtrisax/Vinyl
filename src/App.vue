<template>
<div id="app">
 
  <VMainWrapper />

</div>
</template>

<script>
import VMainWrapper from './components/v-main-wrapper.vue';

export default {
  name: 'App',
  components: {
    VMainWrapper,
   
}
}
</script>

<style>

@font-face {
    font-family: "Enthalpy 298";
    src: local("Enthalpy 298"),
        url(./assets/fonts/enthalpy298regular.otf) format("truetype");

}


@font-face {
    font-family: 'Montserrat';
    src: local('Montserrat'),
        url(./assets/fonts/Montserrat-Regular.ttf) format("truetype");

}
#app {
  font-family: Montserrat;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background: #FFFBE5;
  overflow: hidden;
}

body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  
}

button {
  cursor: pointer;
}

li, ul {
  list-style: none;
}

a {
  color: #000000;
  text-decoration: none;
  transition: 0.4s;
} 

a:hover {
  color: #FFFBE5;
}
</style>
