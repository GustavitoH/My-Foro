<template>
  <div id="dashboard">
    <Header />
    <div class="container-fluid" style="margin-top: 55px">
      <div class="row">
        <main id="main" ole="main">
          <router-view />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Header from "@/components/Header.vue";

export default {
  name: "Dashboard",
  components: {
    Header,
  },
  computed: {
    ...mapState({
      listaAutores: state => state.autores.listaAutores,
      listaPublicaciones: state => state.publicaciones.listaPublicaciones
    })
  },
  created() {
    this.cargarLista();
    this.cargarPublicacion();
  },
  methods: {
    cargarLista() {
      console.log(this.listaAutores);
    },
    cargarPublicacion() {
      console.log(this.listaPublicaciones);
    }
  }
};
</script>

<style lang="css">
.nav-link {
  text-align: left;
}
</style>
