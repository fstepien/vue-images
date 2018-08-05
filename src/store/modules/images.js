import api from "./../../api/imgur";
import { router } from "./../../main";

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
  },
  async uploadImages({ commit, rootState }, images) {
    const { token } = rootState.auth;
    await api.upload(images, token);
    router.push("/");
  }
};

const mutations = {
  setImages: (state, images) => {
    state.images = images;
  }
};

export default { state, getters, actions, mutations };
