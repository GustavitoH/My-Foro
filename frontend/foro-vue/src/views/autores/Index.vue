<template>
    <div class="w-50 m-auto">
        <h1 class="text-lg-left">Autores</h1>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                <a class="nav-link" href="#">Autores<span class="sr-only"></span></a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">/ Lista</a>
                </li>
            </ul>
            </div>
        </nav>
        <List :listaAutores="listaAutores" />
    </div>
</template>

<script>
import { mapState } from "vuex";
import List from "@/views/autores/List.vue";

export default {
    name: "Index",
    components: {
    List,
    },
    computed: {
    ...mapState({
        listaAutores: (state) => state.autores.listaAutores,
        listaRespuestas: (state) => state.respuestas.listaRespuestas,
    }),
    },
    created() {
    this.cargarLista();
    },
    methods: {
        cargarLista() {
            this.$store.dispatch("autores/obtenerListaAutores");
            this.$store.dispatch("respuestas/obtenerListaRespuestas");
        },
    },
};
</script>
<style></style>