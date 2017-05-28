<template>
	<div class="container">
		<h1 v-for="order in orders">{{order}}</h1>
		<div v-if='orders'>

		</div>

		<div v-else class="noOrders">
			<img class='loading' src="../assets/loading.gif" alt="">
			<h3>Parece que no tienes ningúna solicitud de recogida activa</h3>
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
				return this.$store.state.users.orders
			},
			ordersSize() {
				return this.$store.state.users.orders.size
			}
		}
	}
</script>

<style scoped>
	.container .loading {
		margin-top: 20%;
		height: 100px;
		margin-bottom: 60px;
	}
	.container h3 {
		margin-bottom: 50px;
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
<script>
	export default{
		computed: {
			ususarios() {
				return this.$store.state.users
			}
		}
	}
</script>
