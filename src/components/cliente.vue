<template>
	<div>
		<div>
			<i class="material-icons">arrow_back</i>
			<p>{{id}}</p>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				id: this.$route.params.id
			}
		}
	}
</script>
<style scoped>
	
</style>