<template>
  <div id="inside">
    <router-view></router-view>
    <div class="navigation">
      <router-link to='/in/perfil'>
        <img src="../assets/menuProfile.png" alt="profile">
      </router-link>
      <router-link to='/in/solicitar'>
        <img src="../assets/menuSolicitar.png" alt="solicitar">
      </router-link>
      <router-link to='/in/ordenes'>
        <img src="../assets/menuEnvios.png" alt="envios">
      </router-link>
      <router-link to='/in/clientes'>
        <img src="../assets/menuLibreria.png" alt="libreria">
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'inside'
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.navigation {
  width: 100%;
  height: 50px;
  position: absolute;
  bottom: 0;
  border-top: 1px solid #eee;
  display: flex;
  flex-direction: row;
}
.navigation a {
  height: 100%;
  width: 25%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
.navigation a img {
  height: 30px;
  width: 30px;
}s
.navigation a.router-link-active {
  background-color: black;
}
</style>
