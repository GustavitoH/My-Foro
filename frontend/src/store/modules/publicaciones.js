import publicaciones from "@/api/foro/publicaciones";

const state = {
  listaPublicaciones: [],
};

const getters = {};

const actions = {
  obtenerListaPublicaciones(context) {
    return publicaciones.listaPublicaciones().then((response) => {
      console.log(response);
      context.commit("SET_PUBLICACIONES", response.data);
    });
  },
  crearPublicacion(context, nuevaPublicacion) {
    return publicaciones.crearPublicacion(nuevaPublicacion).then((response) => {
      context.commit("NUEVO_PUBLICACION", response.data.publicacion);
      return response.data;
    });
  },
};

const mutations = {
  SET_PUBLICACIONES(state, payload) {
    state.listaPublicaciones = payload;
  },
  NUEVO_PUBLICACION(state, payload) {
    state.listaPublicaciones.push(payload);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
