<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <p class="text-align-justify">
        - Implementar un foro de tal manera que permita ubicar un tema de interés y permita seguir un hilo de conversación del tema a tratar.
        <br>
        - El foro deberá contener las condiciones descritas en el documento adjunto.
      </p>
    </div>
    <h3>Items</h3>
    <ul>
      <li><a href="/autores" rel="noopener"><strong>Autores</strong></a></li>
      <li><a href="/publicaciones" rel="noopener"><strong>Publicaciones</strong></a></li>
    </ul>
    <h3>Gustavo Hidalgo Brito</h3>    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
