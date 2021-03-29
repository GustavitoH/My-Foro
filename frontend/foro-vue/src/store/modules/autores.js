import autores from "@/api/foro/autores";

const state = {
  listaAutores: [],
};

const getters = {};

const actions = {
  obtenerListaAutores(context) {
    return autores.listaAutores().then((response) => {
      console.log(response);
      context.commit("SET_AUTORES", response.data);
    });
  },
  /*crearAutor(context, crearAutor) {
    return autores.crearAutor(nuevoAutor).then((response) => {
      context.commit("NUEVO_AUTOR", response.data.autor);
      return response.data;
    });
  },*/
};

const mutations = {
  SET_AUTORES(state, payload) {
    state.listaAutores = payload;
  },
  /*NUEVO_AUTOR(state, payload) {
    state.listaAutores.push(payload);
  },*/
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
