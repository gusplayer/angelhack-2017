<template>
	<div class="clientes screen_padding container">
		<router-link to="nuevo-cliente" class="btnAction">Crear Cliente</router-link>
		<router-link :to="'clientes/' + customer['.key']" class="cliente_card" v-for="customer in customers" >
			<div>
				<p class="clientes_nombre">{{customer.customername}}</p>
				<p>{{customer.phonenumber}}</p>
				<p class="clientes_direccion">{{customer.address}}</p>
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
	.container{
		margin-bottom: 80px;
	}
	.clientes{
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.clientes_nombre{
		font-weight: bold;
	}
	.clientes_direccion{
		color: #c3c3c3;
	}
	.btnAction{
		margin: 30px 0px;
	}
	.cliente_card{
		width: 70%;
		background-color: white;
		margin: 5px 0px;
		padding: 15px 30px;
		flex-direction: row;
		box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.14);
		border-left: 10px solid #F7E61D;
		text-decoration: none;
		color: black;
	}
</style>