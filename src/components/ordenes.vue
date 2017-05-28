<template>
	<div class="container">

		<div v-if='orders'>
			<div class='singleOrder' v-for="order in orders">

			</div>
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
				return this.$store.state.currUser.orders
			}
		}
	}
</script>

<style scoped>

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
	.container h3 {
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
