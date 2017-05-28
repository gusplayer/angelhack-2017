<template>
	<h1>{{orderDetail.nombre}}</h1>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		computed: {
			orderDetail() {
				let orders = this.$store.state.currUser.orders,
						id = this.$route.params.id,
						data = {};
				for (var o in orders) {
					if(o == id) {
						data = orders[o];
					}
				}
				return data;
			},
		}
	}
</script>
