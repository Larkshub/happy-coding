export default {

  bookList(state, payload) {
    state.fetchData = true;
    state.books = [...payload];
  }
};
