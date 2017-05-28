<template>
	<div>
	<h1>Ordenes</h1>
		<p v-for="user in ususarios" >{{user}}</p>
	</div>
</template>
<script>
	export default{
		computed: {
			ususarios() {
				return this.$store.state.users
			}
		}
	}
</script>