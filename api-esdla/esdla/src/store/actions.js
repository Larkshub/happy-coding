import axios from 'axios';

export default {
  fetchBooks({ commit }) {
    const authorization = {
      headers: {
        Authorization: `Bearer ${process.env.VUE_APP_API_KEY}`
      }
    };
    axios(process.env.VUE_APP_API_BOOKS, authorization).then((response) => {
      commit('bookList', response.data);
    });
  }
};
