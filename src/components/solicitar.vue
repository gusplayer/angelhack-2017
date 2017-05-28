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

		<button class='cta' type="button" v-on:click='solicitarPedido'>Solicitar</button>

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
				let id,
						t = this;
				console.log(this.order);
				let db = firebase.database();
				db.ref('/users').orderByChild('uid').equalTo(firebase.auth().currentUser.uid)
					.on('child_added', (snapshot)=> {
						id = snapshot.key;
						console.log(snapshot.address);
						db.ref(`users/${id}/orders`).push(t.order)
					});
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
	.container .cta {
		margin-top: 30px;
		background-color: #40CC93;
		height: 40px;
		width: 250px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		color: white;
		font-size: 16px;
		font-weight: 600;
		outline: none;
		border: none;
	}
</style>
