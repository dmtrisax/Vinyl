import axios from 'axios';

export default {

    GET_ALBUMS_FROM_API({commit}) {
        return axios('http://localhost:3000/albums', {
          method: "GET"
        })
        .then((albums) => {
          commit('SET_ALBUMS_TO_STATE', albums.data);
          return albums;
        })
        .catch((error) => {
          console.log(error);
          return error;
        })
      
  
      }
}