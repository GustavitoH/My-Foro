<template>
    <div class="w-50 m-auto">
        <h1 class="text-lg-left">Publicaciones</h1>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                <a class="nav-link" href="#">Publicaciones<span class="sr-only"></span></a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">/ Lista</a>
                </li>
            </ul>
            </div>
        </nav>
        <div class="alert alert-danger" role="alert" v-if="error">
            El usuario no coincide con la contraseña
        </div>
        <form class="d-flex shadow-lg p-3 mb-4 bg-body rounded">
            <div class="w-100 m-1">
                <input class="form-control mb-1" type="text" placeholder="Titulo" aria-label="Search" v-model="nuevaPublicacion.titulo">
                <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Mensaje..." rows="3" v-model="nuevaPublicacion.mensaje"></textarea>
            </div>
            <div>
                <input class="form-control m-1" type="text" placeholder="Usuarios" aria-label="Search" v-model="autor">
                <input class="form-control m-1" type="password" placeholder="Password" aria-label="Search" v-model="psw">
                <button class="btn btn-primary float-right form-control m-1" type="button" @click="publicar" >Publicar</button>
            </div>
        </form>
        <List :listaPublicaciones="listaPublicaciones" />
    </div>
</template>

<script>
import { mapState } from "vuex";

import List from "@/views/publicaciones/List.vue";

export default {
    name: "Index",
    components: {
    List,
    },
    data() {
        return{
            error: false,
            autor: "",
            psw: "",
            nuevaPublicacion: {
                idpublicacion: 0,
                idautor: 0,
                titulo: "",
                mensaje: "",
                fecha: ""
            },
        };
    },
    computed: {
    ...mapState({
        listaPublicaciones: (state) => state.publicaciones.listaPublicaciones,
        listaAutores: (state) => state.autores.listaAutores,
        listaRespuestas: (state) => state.respuestas.listaRespuestas, 
        listaAutor() {
            const autor = this.autor.toUpperCase();
            const psw = this.psw.toString();
            return this.listaAutores.filter(u => u.usuario.toUpperCase().match(autor) && u.passw.toString().match(psw));
        }
}),
    },
    created() {
    this.cargarLista();
    },
    methods: {
        cargarLista() {
            this.$store.dispatch("publicaciones/obtenerListaPublicaciones");
            this.$store.dispatch("autores/obtenerListaAutores");
            this.$store.dispatch("respuestas/obtenerListaRespuestas");
        },
        publicar() {
            if ( this.listaAutor.length > 0) {
                this.nuevaPublicacion.idautor = this.listaAutor[0].idautor;
                this.$store.dispatch("publicaciones/crearPublicacion", this.nuevaPublicacion).then(res => {
                console.log(res.mensaje + this.cargarLista());
            });   
            } else {
                this.error = true;
            }
        },
    }
};
</script>
<style></style>