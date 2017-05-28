<template>
	<div class='container'>

		<div class="scrollContainer">
			<div class="page1">
				<img src="../assets/logoWhite.png" alt="logo">
				<h2>!Estamos listos para tus clientes!</h2>
				<span class='basicInput'>
					<img src="../assets/nombre.png" alt="">
					<input placeholder='Nombre Cliente' v-model='order.nombre' class='input' type="text" id='nomDest'></input>
				</span>
				<span class='basicInput'>
					<img src="../assets/ubicacion.png" alt="">
					<input placeholder='Dirección Envío' v-model='order.dir' class='input' type="text" id='dirDest'></input>
				</span>
				<span class='currency basicInput'>
					<img src="../assets/costo.png" alt="">
					<input placeholder='Costo' v-model='order.cost' class='input' type="number" id='costDest'></input>
				</span>
				<button class='cta' data-id='1' type="button" v-on:click='nextStep'>SOLICITAR ENVÍO</button>
			</div>

			<div class="page2">
				<img src="../assets/logoWhite.png" alt="logo">
				<h2>!Tenemos lo que mas te conviene!</h2>
				<div data-id='2' :data-m='option.id_mensajero' v-for='option in options' v-on:click.prevent='nextStep' class="opt">
					<div class="imgcont">
						<img :src="option.logo" alt="algo">
					</div>

					<h2>{{option.empresa}}:   ${{option.precio}}</h2>
					<h3>{{option.distancia}} kms de distancia. ETA: {{option.tiempo}} mins.</h3>
				</div>
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
					order: {},
					options: {},
					rappitendero: ''
			}
		},
		mounted(){
			var input = document.getElementById('dirDest');
		    var searchBox = new google.maps.places.SearchBox(input);
		    var data = this;
		    searchBox.addListener('places_changed', ()=> {
          		var places = searchBox.getPlaces();
          		this.order.lat = places[0].geometry.location.lat();
          		this.order.lng = places[0].geometry.location.lng();
							console.log(this.order);
          	})

		},
		computed: {
			user() {
				return this.$store.state.currUser;
			},
		},
		methods: {
			nextStep(event) {
				let scroll = document.querySelector('.scrollContainer'),
						w = window.innerWidth;
				var clicked = event.target.dataset;
				console.log(clicked);

				switch (clicked.id) {
					case '1':
						var json = JSON.stringify({
							'latitud_tienda': this.user.lat,
							'longitud_tienda': this.user.long,
							'latitud_destino': this.order.lat,
							'longitud_destino': this.order.long,
						});
		        axios.defaults.headers.common['content-type'] = `application/json`;
		        axios.post(`http://brainmakers.net/solicitarenvio`, json)
									.then(
										(r) => {
											this.options = r.data
											scroll.style.transform = `translateX(-${w}px)`;
										}
									)
									.catch(
										(e) => {
											console.log(e);
										}
									)

						break;
					case '2':
						console.log(clicked.m);
						this.rappitendero = clicked.m;
						console.log(this.rapitendero);
						break;

				}


			},
			prevStep(event) {
				let scroll = document.querySelector('.scrollContainer'),
						w = window.innerWidth;
						console.log(w);
				scroll.style.transform = `translateX(${w}px)`;
			},
			solicitarPedido() {
				let id,
						t = this;
				console.log(this.$store.state.currUser);
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
		align-items: flex-start;
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
	.container .page1 img,
	.container .page2 img {
		height: 150px;
	}
	.container .page1 h2,
	.container .page2 h2 {
		color: white;
		margin-bottom: 20px;
	}
	.container .page2 .opt {
		height: 170px;
		margin: 8px 0;
		width: 90%;
		background-color: white;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
	.container .page2 .opt * {
		pointer-events: none;
	}
	.container .page2 .opt .imgcont img {
		width: 100%;
		height: auto;
		top: -5%;
		position: relative;
	}
	.container .page2 .opt .imgcont {
		height: 60%;
		width: 100%;
		overflow: hidden;
	}
	.container .page2 .opt h2 {
		color: #40CC93;
		font-size: 20px;
		margin: 5px;
		padding-left: 10px;
	}
	.container .page2 .opt h3 {
		font-weight: 400;
		padding-left: 10px;
		font-size: 16px;
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
	.container .basicInput .input::-webkit-input-placeholder {
		color: #7b7b7b;
	}
	.container .basicInput .input {
		margin-left: 0;
		color: black;
		flex-grow: 1;
		font-size: 14px;
		color: #666;
		height: 100%;
		background-color: white;
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
