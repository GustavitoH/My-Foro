import Vue from 'vue';
import Vuex from 'vuex';
import autores from './modules/autores';
import publicaciones from './modules/publicaciones';
import respuestas from './modules/respuestas';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    autores,
    publicaciones,
    respuestas,
  },
  strict: debug,
});
