export default {
  SET_SEARCH_VALUE_TO_VUEX: (state, value) => {
    state.searchValue = value;
  },
  SET_ALBUMS_TO_STATE: (state, albums) => {
    state.albums = albums;
  },
  SET_CART: (state, album) => {
    if (state.cart.length) {
      let isAlbumExists = false;
      state.cart.map(function (item) {
        if (item.article === album.article) {
          isAlbumExists = true;
          item.quantity++
        }
      })
      if (!isAlbumExists) {
        state.cart.push(album)
      }
    } else {
      state.cart.push(album)
    }
  },
  REMOVE_FROM_CART: (state, index) => {
    state.cart.splice(index, 1)
  },
  INCREMENT: (state, index) => {
    state.cart[index].quantity++
  },
  DECREMENT: (state, index) => {
    if (state.cart[index].quantity > 1) {
      state.cart[index].quantity--
    }
  }
}