<template>
	<div class="container">

		<div v-if='orders'>
			<div class="topimg">
				<img src="../assets/logoWhite.png" alt="logo">
				<p>Tus pedidos</p>
			</div>
			<router-link :to="'/in/ordenes/'+index" class='singleOrder' v-for="(order, index) in orders">
				<div class="left">
					$ {{order.cost}}
				</div>
				<div class="right">
					<h1>{{order.nombre}}</h1>
					<h2>{{order.dir}}</h2>
					<h3>4 km a destino - 5 min ETA</h3>
				</div>
			</router-link>
		</div>

		<div v-else class="noOrders">
			<img class='loading' src="../assets/loading.gif" alt="">
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
	export default {
		computed: {
			orders() {
				console.log(this.$store.state.currUser.orders);
				return this.$store.state.currUser.orders
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
		height: 100px;
		margin-bottom: 60px;
	}
	.container .noOrders > h3 {
		margin-bottom: 50px;
		text-align: center;
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
</style>
