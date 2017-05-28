<template>
	<div class="login screen-padding">
		<figure class="login_logo">
			<img src="">
		</figure>
		<p class="login_text">Bienvenido a rappi-dito la aplicacion con la que podras hacer uso de nuestros rappi-tenderos para enviar tus productos a tus clientes.</p>
		<div class="login_form">
			<input type="email" v-model="email" placeholder="Correo" class="input">
			<input type="password" v-model="password" placeholder="Contraseña" class="input">
			<button class="btnAction" v-on:click="loginUser">Ingresar</button>
		</div>
		<router-link to="registro" class="btnSignin">Crear cuenta</router-link>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				email: '',
				password: '',
			}
		},
		methods: {
			loginUser() {
				firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch(function(error) {
				  // Handle Errors here.
				  var errorCode = error.code;
				  var errorMessage = error.message;
				  console.log(error)
				  // ...
				});
				this.email = '';
				this.password = '';
				this.$router.push('in/ordenes')
			}
		}
	}
</script>

<style scoped>
	.login{
		width: 100%;
		height: 100vh;
		background-color: #ff5845;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
	}
	.login_logo{
		background-color: #FFF;
		max-width: 150px;
		width: 100%;
		max-height: 150px;
		height: 100%;
		border-radius: 50%;
	}
	.login_text{
		color: #FFF;
	}
	.login_form{
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.btnAction{
		margin-top: 30px;
		background-color: #FFF;
		color: #ff5845;
	}
	.btnSignin{
		color: #FFF;
	}
</style>