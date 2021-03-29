<template>
<div id="listaAutores">
<div class="row justify-content-between p-3">
    <input type="text" class="form-control" placeholder="Buscar" v-model="buscar" />
</div>
<div class="list-group my-custom-scrollbar">
    <Autor :key="autor.id" :autor="autor" v-for="autor in listaFiltrada" />
</div>
    </div>
</template>

<script>
import Autor from "@/views/autores/Autor.vue";

export default {
    name: "List",
    components: {
    Autor,
    },
    props: {
        listaAutores: {
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
            return this.listaAutores.filter(u => u.nombre.toUpperCase().match(match) || u.apellido.toUpperCase().match(match) || u.usuario.toUpperCase().match(match));
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
