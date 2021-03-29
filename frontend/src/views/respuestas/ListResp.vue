<template>
    <div id="listaRespuestas">
        <div class="list-group ">
            <Respuesta :key="respuesta.id" :respuesta="respuesta" v-for="respuesta in listaFiltrada" />
        </div>
    </div>
</template>

<script>
import Respuesta from "@/views/respuestas/Respuesta.vue";

export default {
    name: "ListResp",
    components: {
    Respuesta,
    },
    props: {
        listado: {
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
        return this.listado.filter(u => u.mensaje.toUpperCase().match(match));
    },
    }
};
</script>

<style>
.my-custom-scrollbar {
    height: 70vh;
    overflow: auto;
}
</style>
