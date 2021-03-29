<template>
    <div class="list-group-item list-group-item-action">
        <div class="d-flex justify-content-between">
            <h5 class="mb-1 fw-bold"> <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-person-circle"
            style="margin: -3px 5px 0 0"
            fill="#11123"
            xmlns="http://www.w3.org/2000/svg">
            <path
            d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"
            />
            <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            <path
            fill-rule="evenodd"
            d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
            /></svg><span><small class=" justify-content-left text-muted fw-light" enable>
                {{ usuario.autor }}</small></span></h5>
        </div>
        <small class=" d-flex justify-content-left text-muted fst-italic" enable>
            {{ respuesta.fecha.substr(0,10) }}</small>
        <p class="mb-1 d-flex justify-content-between"> {{ respuesta.mensaje }}</p>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    name: 'Respuesta',
    props: {
        respuesta: Object,
    },
    computed: {
        ...mapState({
            listaAutores: state => state.autores.listaAutores,
        }),
        usuario() {
            const autores = this.listaAutores.filter(r => r.idautor === this.respuesta.idautor);
            if (autores.length > 0) {
                return { autor: autores[0].usuario };
            } else {
                return {autor: null}
            }
        },
    }
};
</script>
<style></style>
