<template>
	<div class='container'>

		<div class="scrollContainer">
			<div class="page1">
				<img src="../assets/logoWhite.png" alt="logo">
				<h2>!Estamos listos para tus clientes!</h2>
				<span class='basicInput'>
					<img src="../assets/nombre.png" alt="">
					<input v-model='order.nombre' class='input' type="text" id='nomDest'></input>
				</span>
				<span class='basicInput'>
					<img src="../assets/ubicacion.png" alt="">
					<input v-model='order.dir' class='input' type="text" id='dirDest'></input>
				</span>
				<span class='currency basicInput'>
					<img src="../assets/costo.png" alt="">
					<input v-model='order.cost' class='input' type="number" id='costDest'></input>
				</span>
				<button class='cta' type="button" v-on:click='nextStep'>SOLICITAR ENVÍO</button>
			</div>

			<div class="page2">
				<h1>page 2</h1>
			</div>

			<div class="page3">
				<h1>page 3</h1>
			</div>

			<div class="page4">
				<h1>page 4</h1>
			</div>
		</div>






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
			nextStep() {
				let scroll = document.querySelector('.scrollContainer'),
						w = window.innerWidth;
				scroll.style.transform = `translateX(-${w}px)`;
			},
			prevStep() {
				let scroll = document.querySelector('.scrollContainer'),
						w = window.innerWidth;
						console.log(w);
				scroll.style.transform = `translateX(${w}px)`;
			},
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
		flex-direction: row;
		align-items: center;
		max-width: 100vw;
		overflow: hidden;
	}
	.container .scrollContainer {
		display: flex;
		flex-direction: row;
		align-items: center;
		position: relative;
		transition: all .2s ease-in-out;
	}
	.container .page1,
	.container .page2,
	.container .page3,
	.container .page4 {
		min-width: 100vw;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 20px 20px 0;
	}
	.container .page1 img {
		height: 200px;
	}
	.container .page1 h2 {
		color: white;
		margin-bottom: 20px;
	}
	.container .basicInput {
		width: 80%;
		height: 50px;
		background-color: white;
		margin: 5px 0;
		position: relative;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.container .basicInput img {
		height: 20px;
		width: 20px;
		margin: 0 15px;
	}
	.container .basicInput .input:focus {
		outline: none;
	}
	.container .basicInput .input {
		margin-left: 0;
		color: black;
		flex-grow: 1;
		font-size: 14px;
		color: #666;
	}
	.currency {
		position: relative;
	}
	.currency::after {
		position: absolute;
		right: 25px;
		top: 18px;
		content: '$';
		color: #c1c1c1;
	}
	.container .cta {
		margin-top: 30px;
		background-color: #DAF8B8;
		height: 50px;
		width: 280px;
		border-radius: 40px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		color: #40CC93;
		font-size: 19px;
		font-weight: 600;
		outline: none;
		border: none;
	}
</style>
