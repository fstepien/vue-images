import api from "./../../api/imgur";

const state = {
  images: []
};

const getters = {
  allImages: state => state.images
};

const actions = {
  async fetchImages({ commit, rootState }) {
    const { token } = rootState.auth;
    const response = await api.fetchImages(token);
    console.log(response);
    commit("setImages", response.data.data);
  }
};

const mutations = {
  setImages: (state, images) => {
    state.images = images;
  }
};

export default { state, getters, actions, mutations };
