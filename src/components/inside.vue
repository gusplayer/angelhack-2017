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
let db = firebase.database();
export default {
  data() {
    return  {
      users: {},
    }
  },
  name: 'inside',
  firebase: {
		// users: db.ref('/users').equalTo(firebase.auth().currentUser.uid),
	},
  mounted() {
    db.ref('/users').orderByChild('uid').equalTo(firebase.auth().currentUser.uid)
        .on('child_changed', (snapshot)=> {
          console.log(snapshot.val());
          this.$store.state.currUser = snapshot.val();
        });
  }
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
#inside {
  height: 100vh;
  background: linear-gradient(45deg, #29E5AF, #D6F6B5);
}
.navigation {
  width: 100%;
  height: 60px;
  position: absolute;
  bottom: 0;
  border-top: 1px solid #eee;
  display: flex;
  flex-direction: row;
  background-color: white;
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
