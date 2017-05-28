<template>
	<div class="clientes screen_padding">
		<router-link to="nuevo-cliente" class="btnAction">Crear Cliente</router-link>
		<router-link :to="'clientes/' + customer['.key']" class="cliente_card" v-for="customer in customers" >
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
		},
		mounted(){
			this.$store.state.customers = this.customers;
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
		width: 80%;
		height: 105px;
		background-color: white;
		margin: 20px auto;
		display: flex;
		flex-direction: row;
		box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.14);
	}
</style>