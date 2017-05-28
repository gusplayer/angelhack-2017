<template>
  <div id="inside">
    <router-view></router-view>
    <div class="navigation">
      <router-link to='/in/perfil'>
        <!-- <img src="../assets/menuProfile.png" alt="profile"> -->
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve">
        <g transform="translate(0,-952.36218)">
        	<path fill="#D8D8D8" d="M11.2,960c-0.3,0-0.6,0.2-0.7,0.4L6.9,967c-0.1,0.1-0.1,0.3-0.1,0.4v1.4c0,1.3,0.8,2.5,1.9,3v12.1
        		c0,0.5,0.4,0.8,0.8,0.8h3.2h5.7h12c0.5,0,0.8-0.4,0.8-0.8v-12.1c1.1-0.5,1.9-1.7,1.9-3v-1.4c0-0.1,0-0.3-0.1-0.4l-3.6-6.6
        		c-0.1-0.3-0.4-0.4-0.7-0.4H11.2z M11.7,961.6h16.6l2.7,5H9L11.7,961.6z M8.4,968.2h3.3v0.6c0,0.9-0.7,1.7-1.7,1.7
        		c-0.9,0-1.7-0.7-1.7-1.7V968.2z M13.4,968.2h3.3v0.6c0,0.9-0.7,1.7-1.7,1.7c-0.9,0-1.7-0.7-1.7-1.7V968.2z M18.3,968.2h3.3v0.6
        		c0,0.9-0.7,1.7-1.7,1.7s-1.7-0.7-1.7-1.7V968.2z M23.3,968.2h3.3v0.6c0,0.9-0.7,1.7-1.7,1.7s-1.7-0.7-1.7-1.7V968.2z M28.3,968.2
        		h3.3v0.6c0,0.9-0.7,1.7-1.7,1.7s-1.7-0.7-1.7-1.7V968.2z M12.6,971c0.6,0.7,1.5,1.1,2.5,1.1s1.9-0.4,2.5-1.1
        		c0.6,0.7,1.5,1.1,2.5,1.1s1.9-0.4,2.5-1.1c0.6,0.7,1.5,1.1,2.5,1.1c1,0,1.9-0.4,2.5-1.1c0.5,0.6,1.3,1,2.2,1.1v11H19.2v-8
        		c0-0.5-0.4-0.8-0.8-0.8h-5.5c-0.5,0-0.8,0.4-0.8,0.8v8h-1.7v-11C11.2,972,12,971.6,12.6,971z M21.1,974.3c-0.5,0-0.8,0.4-0.8,0.8
        		v3.9c0,0.5,0.4,0.8,0.8,0.8h6.1c0.5,0,0.8-0.4,0.8-0.8v-3.9c0-0.5-0.4-0.8-0.8-0.8H21.1z M13.7,975.9h3.9v7.2h-3.9V975.9z
        		 M21.9,975.9h4.4v2.2h-4.4V975.9z"/>
        </g>
        </svg>
      </router-link>

      <router-link to='/in/solicitar'>
        <!-- <img src="../assets/menuSolicitar.png" alt="solicitar"> -->
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve">
        <g>
        	<g>
        		<path fill="none" d="M15.1,30.3c-0.7,0-1.3,0.6-1.3,1.3c0,0.7,0.6,1.3,1.3,1.3c0.7,0,1.3-0.6,1.3-1.3S15.8,30.3,15.1,30.3z"/>
        		<path fill="none" d="M24.7,30.3c-0.7,0-1.3,0.6-1.3,1.3s0.6,1.3,1.3,1.3c0.7,0,1.3-0.6,1.3-1.3C26,30.9,25.4,30.3,24.7,30.3z"/>
        		<path fill="#D8D8D8" d="M15.1,28.4c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2s3.2-1.4,3.2-3.2C18.3,29.8,16.9,28.4,15.1,28.4z
        			 M15.1,32.9c-0.7,0-1.3-0.6-1.3-1.3c0-0.7,0.6-1.3,1.3-1.3c0.7,0,1.3,0.6,1.3,1.3S15.8,32.9,15.1,32.9z"/>
        		<path fill="#D8D8D8" d="M24.7,28.4c-1.8,0-3.2,1.4-3.2,3.2c0,1.8,1.4,3.2,3.2,3.2c1.8,0,3.2-1.4,3.2-3.2S26.5,28.4,24.7,28.4z
        			 M24.7,32.9c-0.7,0-1.3-0.6-1.3-1.3s0.6-1.3,1.3-1.3c0.7,0,1.3,0.6,1.3,1.3C26,32.3,25.4,32.9,24.7,32.9z"/>
        		<path fill="#D8D8D8" d="M31.4,12h-1L30,14h0.2l-1.5,6.6l-14.6,1.1l-3-7.7h0.1l-0.8-2h-0.1l-1-2.5C9.1,9.1,8.8,9,8.4,9H4.6
        			c-0.5,0-1,0.5-1,1c0,0.5,0.4,1,1,1h3.2c1.6,4,3.2,7.9,4.7,11.9L11,26.4c-0.1,0.3-0.1,0.8,0.1,1c0.2,0.3,0.5,0.6,0.8,0.6h16
        			c0.5,0,1-0.5,1-1c0-0.5-0.5-1-1-1H13.4l0.8-2.1l15.4-1.3c0.4,0,0.8-0.4,0.9-0.8l1.9-8.5C32.5,12.8,32,12,31.4,12z"/>
        	</g>
        	<g>

        			<line fill="none" stroke="#D8D8D8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="21" y1="4" x2="21" y2="16"/>

        			<polyline fill="none" stroke="#D8D8D8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="
        			16,12.4 21.1,17.5 26.1,12.5 		"/>
        	</g>
        </g>
        </svg>
      </router-link>

      <router-link to='/in/ordenes'>
        <!-- <img src="../assets/menuEnvios.png" alt="envios"> -->
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve">
        <g>
        	<g transform="translate(0,-952.36218)">
        		<path fill="#D8D8D8" d="M13.1,978.8c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2s3.2-1.4,3.2-3.2C16.3,980.2,14.9,978.8,13.1,978.8z
        			 M13.1,983.2c-0.7,0-1.3-0.6-1.3-1.3c0-0.7,0.6-1.3,1.3-1.3c0.7,0,1.3,0.6,1.3,1.3S13.8,983.2,13.1,983.2z"/>
        		<path fill="#D8D8D8" d="M26.9,970.5l-0.1,0.6l-14.6,1.2l-3.1-7.6h19.1l0,0h2l0.2-0.8c0.1-0.6-0.4-1.2-0.9-1.2H8.3l-1-2.6
        			c-0.1-0.4-0.5-0.6-0.9-0.6l-3.8,0c-0.5,0-1,0.4-1,1c0,0.5,0.4,1,1,1h3.2c1.6,3.9,3.2,7.9,4.7,11.8L9,976.8
        			c-0.1,0.3-0.1,0.6,0.1,0.9c0.2,0.3,0.5,0.4,0.8,0.4h16c0.5,0,1-0.5,1-1c0-0.5-0.5-1-1-1H11.4l0.8-2l15.4-1.2
        			c0.4,0,0.8-0.3,0.9-0.7l0.4-1.7H26.9z"/>
        		<path fill="#D8D8D8" d="M22.7,978.8c-1.8,0-3.2,1.4-3.2,3.2c0,1.8,1.4,3.2,3.2,3.2c1.8,0,3.2-1.4,3.2-3.2S24.5,978.8,22.7,978.8z
        			 M22.7,983.2c-0.7,0-1.3-0.6-1.3-1.3s0.6-1.3,1.3-1.3s1.3,0.6,1.3,1.3C24,982.7,23.4,983.2,22.7,983.2z"/>
        	</g>
        	<g>

        			<line fill="none" stroke="#D8D8D8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="24" y1="15" x2="36" y2="15"/>

        			<polyline fill="none" stroke="#D8D8D8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="
        			32.7,19.8 37.8,14.7 32.8,9.7 		"/>
        	</g>
        </g>
        </svg>
      </router-link>
      
      <router-link to='/in/clientes'>
        <!-- <img src="../assets/menuLibreria.png" alt="libreria"> -->
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve">
        <path fill="#D8D8D8" d="M24.3,30.4c0,0.5,0.3,0.9,0.7,1.1l0.1,0l0.1,0l0.1,0l0.1,0c0.6,0.2,1.1,0.3,1.7,0.5c1.1,0.4,2.2,0.9,3.2,1.6
        	c0.5,0.3,1,0.5,1.5,0.7c0.6,0.1,0.1-0.4-0.7-1.1c-1.5-1.2-3.2-2.2-5-2.8c-0.1,0-0.2-0.1-0.4-0.1l-0.1,0l0,0l0-0.4l0.1-1.6l0-0.8
        	v-0.4v0l0,0l0,0v0l0.1-0.1l0.1-0.2c0.1-0.1,0.2-0.2,0.2-0.4c0.2-0.2,0.3-0.5,0.4-0.7c0.5-1,0.9-2.2,1-3.3c1-0.8,1.7-1.9,1.9-3.1
        	c0-0.2,0-0.3,0.1-0.5v-0.3c0-0.1,0-0.2,0-0.3c0-0.4-0.2-0.8-0.4-1.2c-0.3-0.5-0.8-0.8-1.3-1l0-2.1c0-1.1-0.3-2.1-1-3
        	c-0.6-0.8-1.3-1.5-2.2-2.1c-0.7-0.4-1.4-0.7-2.1-0.9V6.5l0,0c0-0.5-0.4-0.9-0.9-0.9h-1.4c-0.2,0-0.3,0-0.5,0c-0.7,0-1.4,0.2-2.1,0.4
        	c-1.3,0.5-2.4,1.3-3.3,2.4c-0.5,0.5-0.9,1.1-1.2,1.7c-0.2,0.3-0.3,0.7-0.4,1c-0.1,0.3-0.2,0.7-0.3,1.1c-0.1,0.4-0.1,0.8-0.1,1.2
        	l0,1.1l0,1.4c-0.1,0-0.3,0.1-0.4,0.2c-0.4,0.2-0.7,0.5-1,0.9c-0.3,0.4-0.4,0.8-0.5,1.3c0,0.1,0,0.2,0,0.3v0.3c0,0.2,0,0.4,0.1,0.5
        	c0.2,1.3,0.9,2.5,1.9,3.3c0.2,1,0.5,2,0.9,3c0.2,0.5,0.6,1.1,0.9,1.5l0,0v0.2v0.8l0,1.6v0.2L14.3,30c-1.1,0.3-2.1,0.7-3.1,1.2
        	c-0.9,0.4-1.8,1-2.6,1.6c-0.6,0.5-0.8,0.9-0.6,1c0.4,0.2,1.8-0.6,3.9-1.5c0.9-0.4,1.9-0.7,2.9-1l0.4-0.1l0.1,0h0h0l0.1,0
        	c0.3-0.1,0.5-0.4,0.6-0.7c0-0.1,0-0.1,0-0.2v-0.1v-0.2v-0.4l0-1.6v-0.8V27c0-0.1,0-0.1,0-0.2c0-0.1-0.1-0.3-0.1-0.4
        	c0-0.1,0-0.1,0-0.2l-0.1-0.1c-0.3-0.4-0.5-0.8-0.7-1.3c-0.4-0.9-0.7-1.9-0.8-2.8v-0.1l0,0c0-0.2-0.1-0.4-0.3-0.5
        	c-0.8-0.6-1.4-1.5-1.6-2.4c0-0.1,0-0.2,0-0.4v-0.2c0-0.1,0-0.1,0-0.1c0-0.2,0.1-0.3,0.2-0.5c0.2-0.3,0.5-0.5,0.9-0.5h0
        	c0.4,0,0.7-0.3,0.7-0.7c0,0,0,0,0,0v-3.3c0-0.5,0.1-1,0.2-1.5c0.1-0.5,0.3-0.9,0.6-1.4c0.5-0.9,1.2-1.7,2-2.3c0.8-0.6,1.7-1,2.7-1.1
        	l-0.2,0l0.2,0c0.2,0,0.3,0,0.5,0l0.5,0h0.4l0,1.5c0,0.4,0.3,0.7,0.6,0.7h0c1.5,0.2,3,1.2,3.9,2.5c0.4,0.6,0.7,1.3,0.7,2l0,2.7l0,0
        	c0,0.5,0.4,0.9,0.9,0.9l0,0c0.3,0,0.6,0.2,0.7,0.4c0.1,0.1,0.1,0.3,0.1,0.4c0,0,0,0.1,0,0.1v0.2c0,0.1,0,0.2,0,0.3
        	c-0.2,0.9-0.7,1.8-1.4,2.3l0,0c-0.2,0.1-0.3,0.4-0.4,0.6c-0.1,1.1-0.4,2.2-1,3.3c-0.1,0.2-0.3,0.5-0.4,0.7L24.7,26
        	c0,0.1-0.1,0.1-0.2,0.3c-0.1,0.2-0.2,0.3-0.2,0.5c0,0.1,0,0.2,0,0.3L24.3,30.4L24.3,30.4z"/>
        </svg>
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
    let userRef = db.ref('/users').orderByChild('uid').equalTo(firebase.auth().currentUser.uid);
        userRef.on('child_changed', (snapshot)=> {
          this.$store.state.currUser = snapshot.val();
        })
        userRef.on('child_added', (snapshot)=> {
          console.log(snapshot.val());
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
  max-height: 100vh;
  height: 100vh;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  overflow-y: scroll;
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
.navigation a svg {
  height: 40px;
  width: 40px;
}s
.navigation a.router-link-active {
  background-color: black;
}
</style>
