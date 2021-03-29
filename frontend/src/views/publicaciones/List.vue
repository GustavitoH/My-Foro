<template>
<div id="listaPublicaciones">
<div class="row justify-content-between p-3">
    <input type="text" class="form-control" placeholder="Buscar" v-model="buscar" />
</div>
<div class="list-group">
    <Publicacion :key="publicacion.id" :publicacion="publicacion" v-for="publicacion in listaFiltrada" />
</div>
</div>
</template>

<script>
import Publicacion from "@/views/publicaciones/Publicacion.vue";

export default {
    name: "List",
    components: {
    Publicacion,
    },
    props: {
        listaPublicaciones: {
            type: Array,
        },
    },
    data() {
    return {
        buscar: "",
    };
    },
    computed: {
        listaFiltrada() {
            const match = this.buscar.toUpperCase();
            return this.listaPublicaciones.filter(u => u.titulo.toUpperCase().match(match) || u.mensaje.toUpperCase().match(match));
        },
    },
};
</script>

<style>
.my-custom-scrollbar {
    height: 70vh;
    overflow: auto;
}
</style>
