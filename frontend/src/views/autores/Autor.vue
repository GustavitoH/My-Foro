<template>
  <div class="list-group-item list-group-item-action">
    <div class="text-left float-left">
      <div class="d-flex justify-content-between">
        <h5 class="mb-1">{{ autor.idautor }}) {{ autor.nombre }} {{ autor.apellido }}</h5>
      </div>
      <small class="d-flex justify-content-left text-muted">
        Usuario:<span class="badge bg-warning text-dark">{{ autor.usuario  }}</span></small>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Autor',
  props: {
    autor: Object,
  },
};
</script>
<style></style>
