<template>
	<div class='container'>
		<label for="dirDest">Dirección Destino</label>
		<input v-model='order.dir' class='input' type="text" id='dirDest'></input>
		<label for="telDest">Teléfono de contacto</label>
		<input v-model='order.tel' class='input' type="phone" id='telDest'></input>
		<label for="nomDest">Nombre Destino</label>
		<input v-model='order.nombre' class='input' type="text" id='nomDest'></input>
		<label for="dirDest">Costo</label>
		<span class='currency'>
			<input v-model='order.cost' class='input' type="number" id='costDest'></input>
		</span>

		<button type="button" v-on:click='solicitarPedido'>Solicitar</button>

	</div>

</template>

<script>
	export default {
		data() {
			return {
					order: {}
			}
		},
		methods: {
			solicitarPedido() {
				console.log(this.order);
			}
		}
	}


</script>

<style scoped>
	.container {
		display: flex;
		flex-direction: column;
		align-items: left;
		padding: 20px 20px 0;

	}
	.container .input {
		border: 1px solid #eee;
		margin-left: 0;
		color: black;
		width: 200px;
	}
	.currency {
		position: relative;
	}
	.currency::after {
		position: absolute;
		right: 20px;
		top: 18px;
		content: '$';
	}
</style>
