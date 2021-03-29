<template>
    <div class="list-group-item list-group-item-action">
    <div class="text-left float-left">
        <div class="d-flex justify-content-between">
        <h5 class="mb-1 fw-bold">
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person-circle" style="margin: -3px 5px 0 0" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
            <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            <path fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" />
            </svg>
            {{ publicacion.titulo }}
            <span
            ><small class=" justify-content-left text-muted fw-light" enable> {{ info.autor }}</small></span
            >
        </h5>
        </div>
        <small class="d-flex justify-content-left text-muted fst-italic">{{ publicacion.fecha.substr(0,10) }}</small>
        <p class="mb-1 d-flex justify-content-between">{{ publicacion.mensaje }}</p>
    </div>
    <ListResp :listado="resp" />
    <div class="alert alert-danger" role="alert" v-if="error">
        El usuario no coincide con la contraseña
    </div>
    <form class="d-flex p-2">
        <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Comentar..." rows="3" v-model="nuevaRespuesta.mensaje"></textarea>
        <div>
        <input class="form-control m-1" type="text" placeholder="Usuarios" aria-label="Search" v-model="autor" />
        <input class="form-control m-1" type="password" placeholder="Password" aria-label="Search" v-model="psw" />
        <button class="btn btn-outline-primary form-control m-1" type="button" @click="responder">Publicar</button>
        </div>
    </form>
    <br />
    </div>
</template>
<script>
import { mapState } from "vuex";
import ListResp from "@/views/respuestas/ListResp.vue";

export default {
    components: {
    ListResp
    },
    name: "Publicacion",
    data() {
    return {
        autor: "",
        psw: "",
        publi: 0,
        error: false,
        nuevaRespuesta: {
        idrespuesta: 0,
        idpublicacion: 0,
        mensaje: "",
        fecha: "",
        idautor: 0
        }
    };
    },
    props: {
    publicacion: Object
    },
    created() {
    this.cargarLista();
    },
    computed: {
    ...mapState({
        listaAutores: state => state.autores.listaAutores,
        listaRespuestas: state => state.respuestas.listaRespuestas,
        listaPublicaciones: state => state.publicaciones.listaPublicaciones
    }),
    listaAutor() {
        const autor = this.autor.toUpperCase();
        const psw = this.psw.toString();
        return this.listaAutores.filter(u => u.usuario.toUpperCase().match(autor) && u.passw.toString().match(psw));
    },
    info() {
        const autores = this.listaAutores.filter(r => r.idautor === this.publicacion.idautor);
        if (autores.length > 0) {
        return { autor: autores[0].usuario };
        } else {
            return {autor: null}
        }
    },
    resp() {
        return this.listaRespuestas.filter(r => r.idpublicacion === this.publicacion.idpublicacion);
    }
    },
    methods: {
    cargarLista() {
        this.$store.dispatch("respuestas/obtenerListaRespuestas");
        this.$store.dispatch("autores/obtenerListaAutores");
        this.$store.dispatch("publicaciones/obtenerListaPublicaciones");
    },
    responder() {
        if (this.listaAutor.length > 0) {
        this.nuevaRespuesta.idautor = this.listaAutor[0].idautor;
        this.nuevaRespuesta.idpublicacion = this.publicacion.idpublicacion;
        this.$store.dispatch("respuestas/crearRespuesta", this.nuevaRespuesta).then(res => {
            console.log(res.mensaje);
        });
        } else {
        this.error = true;
        }
    }
    }
};
</script>
<style></style>
