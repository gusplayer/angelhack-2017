<template>
	<div class="clientes screen_padding">
		<router-link to="nuevo-cliente" class="btnAction">Crear Cliente</router-link>
		<router-link to="clientes/3" class="cliente_card" v-for="customer in customers" >
			<div>
				<span></span>
			</div>
			<div>
				<p>{{customer.name}}</p>
				<p>{{customer.phonenumber}}</p>
				<p>{{customer.address}}</p>
			</div>
		</router-link>
	</div>
</template>
<script>
	export default{
		firebase: {
			customers: firebase.database().ref('/customers')
		}
	}
</script>
<style scoped>
	.clientes{
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.cliente_card{
		box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.15);
		padding: 10px 20px;
		margin: 10px;
	}
</style>