<template>
	<div class="registro screen-padding">
		<figure class="registro_logo">
			<img src="../assets/app.png">
			<h1 class="registro_title">Vecino</h1>
		</figure>
		<div class="registro_header">
			<h2 class="registro_title light">Crea tu cuenta</h2>
		</div>
		<div class="registro_form">
			<input type="email" v-model="email" placeholder="Correo" class="input">
			<input type="password" v-model="password" placeholder="Contraseña" class="input">
			<input type="text" class="input" v-model="store_name" placeholder="Nombre de la tienda">
			<input type="text" class="input" v-model="address" placeholder="Direccion">
			<input type="text" class="input" v-model="phone_number" placeholder="Celular">
			<button class="btnAction" v-on:click="saveUser" >Crear</button>
		</div>
	</div>
</template>
<script>
	export default{
		data() {
			return{
				email: '',
				password: '',
				store_name: '',
				address: '',
				phone_number: '',
			}
		},
		computed: {

		},
		methods: {
			saveUser(){
				let store_name = this.store_name;
				let address = this.address;
				let phone_number = this.phone_number;
				firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(function() {
				}).catch(function(error) {
				  // Handle Errors here.
				  var errorCode = error.code;
				  var errorMessage = error.message;
				  // ...
				});
				firebase.auth().onAuthStateChanged(function(user) {
				  if (user) {
			      	firebase.database().ref('users/').push({
						uid: firebase.auth().currentUser.uid,
						storename: store_name,
						address: address,
						phonenumber: phone_number,
					});
				  } else {
				    // No user is signed in.
				  }
				});

				this.email = '';
				this.password = '';
				this.store_name = '';
				this.address = '';
				this.phone_number = '';
				this.$router.push('/in/ordenes');
			}
		}
	}
</script>
<style scoped>
	.registro{
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
	}
	.registro_logo{
		width: 100%;
		max-height: 150px;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.registro_logo img{
		width: 100px;
		height: 100px;
	}
	.registro_title{
		font-family: 'Lobster', cursive;
		color: #5f5e70;
	}
	.registro_header{
		color:#FFF;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.registro_form{
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.btnAction{
		margin-top: 30px;
		background-color: #40CC93;
		color: #FFF;
	}
</style>