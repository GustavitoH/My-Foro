import respuestas from "@/api/foro/respuestas";

const state = {
  listaRespuestas: [],
};

const getters = {};

const actions = {
  obtenerListaRespuestas(context) {
    return respuestas.listaRespuestas().then((response) => {
      console.log(response);
      context.commit("SET_RESPUESTAS", response.data);
    });
  },
  crearRespuesta(context, nuevaRespuesta) {
    return respuestas.crearRespuesta(nuevaRespuesta).then((response) => {
      context.commit("NUEVO_RESPUESTA", response.data.respuesta);
      return response.data;
    });
  },
};

const mutations = {
  SET_RESPUESTAS(state, payload) {
    state.listaRespuestas = payload;
  },
  NUEVO_RESPUESTA(state, payload) {
    state.lista.push(payload);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
