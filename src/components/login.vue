<template>
	<div class="login">
		<figure class="login_logo">
			<img src="">
		</figure>
		<p class="login_text">Bienvenido a rappi-dito la aplicacion con la que podras hacer uso de nuestros rappi-tenderos para enviar tus productos a tus clientes.</p>
		<div class="login_form">
			<input type="email" placeholder="Correo" class="input">
			<input type="password" placeholder="Contraseña" class="input">
			<router-link to="in" class="btnAction">{{name}}</router-link>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{

			}
		},
		computed: {
			name() {
				return this.$store.state.name;
			}
		}
	}
</script>

<style scoped>
	.login{
		width: 100%;
		height: 100vh;
		background-color: #ff5845;
	}
	.login_text{
		color: #FFF;
	}
	.login_form{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>