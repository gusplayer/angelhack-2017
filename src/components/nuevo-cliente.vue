<template>
	<div class="nuevo_cliente">
		<div class="nuevo_cliente_form">
			<input type="text" placeholder="Nombre del cliente" class="input">
			<input type="text" placeholder="Direccion" class="input">
			<input type="text" placeholder="Numero de celular" class="input">
			<button class="btnAction">CREAR CLIENTE</button>
		</div>
	</div>
</template>
<style scoped>
	.nuevo_cliente{
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.nuevo_cliente_form{
		display: flex;
		flex-direction: column;
	}
	.btnAction{
		margin-top: 20px;
	}
</style>