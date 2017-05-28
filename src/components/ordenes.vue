<template>
	<div class="container">

		<div v-if='orders'>
			<div class="topimg">
				<img src="../assets/logoWhite.png" alt="logo">
				<p>Tus pedidos</p>
			</div>
			<div  v-for="(order, index) in orders">
				<div class='singleOrder' v-on:click="toggleOrder(index)">
						<div class="left">
							$ {{order.cost | tipoPeso}}
						</div>
						<div class="right">
							<h1>{{order.nombre}}</h1>
							<h2>{{order.dir | substr}}</h2>
							<h3>4 km a destino - 5 min ETA</h3>
						</div>
				</div>
				<div :id="index" class="order hidden">
					<p class="order_distancia">Distancia a destino</p>
					<hr>
					<img id="mapOrder" src="../assets/mapa.jpeg"></img>
					<div class="order_content">
						<img :src="order.envio.foto">
						<div>
							<p>{{order.envio.nombre}}</p>
						</div>
						<a href="tel:+546788768"><i class="material-icons">phone</i></a>
						<i class="material-icons">chat</i>
					</div>
				</div>
			</div>

		</div>

		<div v-else class="noOrders">
			<img class='loading' src="../assets/logoWhite.png" alt="">
			<h3>Parece que no tienes ningúna solicitud de recogida</h3>
			<div class="cta">
				<router-link to='/in/solicitar'>
					Solicita tu recogida
				</router-link>
			</div>

		</div>

	</div>
</template>

<script>
	let db = firebase.database();
	export default {
		data(){
			return{
				orders: [],
				orderCount: 0,
			}
		},
		mounted(){
				
				let orders;
				let data = this;
				let userRef = db.ref('/users/' + firebase.auth().currentUser.uid);
        		userRef.on('value', (snapshot)=> {
          			data.orders = snapshot.val().orders;
        		})

				var mapOrder = new google.maps.Map(document.getElementById('mapOrder'), {
			        center: {lat: -34.397, lng: 150.644},
			        zoom: 14,
					mapTypeControl: false,
					scaleControl: false,
					streetViewControl: false,
					rotateControl: false,
					fullscreenControl: false
				});
				

		},
		filters: {
			tipoPeso(value){
				return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			},
			substr(value){
				return value.substr(0, 30) + "...";
			}
		},
		methods: {
			toggleOrder(index){
				document.getElementById(index).classList.toggle("hidden");
			}
		}
	}
</script>

<style scoped>
	.container {
		margin-bottom: 80px;
	}
	a {
		text-decoration: none;
	}
	.container .topimg {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		margin: 30px 0;
	}
	.container .topimg img {
		width: 80px;
	}
	.container .topimg p {
		color: #257B4E;
		font-size: 25px;
	}
	.container .singleOrder {
		width: 80%;
		height: 105px;
		background-color: white;
		margin: 20px auto;
		display: flex;
		flex-direction: row;
		box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.14);
	}
	.container .singleOrder .right {
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: center;
		padding-left: 15px;
	}
	.container .singleOrder .right h3 {
		color: #c3c3c3;
		font-size: 14px;
		font-weight: 500;
	}
	.container .singleOrder .right h2 {
		color: #c3c3c3;
		font-size: 18px;
		font-weight: 500;
		margin-bottom: 5px;
	}
	.container .singleOrder .right h1 {
		color: #29E5AF;
		font-size: 20px;
		font-weight: 500;
		margin-bottom: 5px;
	}
	.container .singleOrder .left {
		width: 35%;
		border-left: 10px solid #F7E61D;
		border-right: 1px solid #eee;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
	}
	.container .singleOrder .left p {
		font-size: 20px;
		color: #666;
	}
	.container .singleOrder .right {
		flex-grow: 1;
	}
	.container .noOrders {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.container .loading {
		margin-top: 20%;
		height: 140px;
		margin-bottom: 60px;
	}
	.container .noOrders > h3 {
		margin-bottom: 50px;
		text-align: center;
		font-size: 18px;
		padding: 0 47px;
		color: #525252;
		font-weight: 400;
	}
	.container .cta {
		background-color: #40CC93;
		height: 40px;
		width: 250px;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
	.container .cta a {
		text-decoration: none;
		color: white;
		font-size: 16px;
		font-weight: 600;
	}
	.order{
		width: 80%;
		background-color: white;
		margin: 10px auto;
		display: flex;
		flex-direction: column;
		box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.14);
		padding: 5px;
		opacity: 1;
		visibility: visible;
	}
	.order_distancia{
		color: #29E5AF;
		margin-left: 2.5%;
		margin-bottom: 10px;
	}
	hr{
		background-color: #29E5AF;
		width: 95%;
		height: 4.5px;
		border-radius: 5px;
		border-style: none;
		margin: 0px auto;
	}
	#mapOrder{
		width: 100%;
		height: 200px;
		background-color: #e7e7e7;
		border-bottom: 1px solid #29E5AF;
	}
	.order_content{
		display: flex;
		justify-content: space-around;
		margin-top: 10px;
	}
	.hidden{
		height: 0px;
		opacity: 0px;
		visibility: hidden;
	}
	.order_content img{
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background-color: #EEE;
	}
	.order i{
		color: #29E5AF;
		font-size: 40px;
		padding: 2px;
	}
	.order i:first-child{
		border-right: 1px solid #29E5AF;
	}
</style>
