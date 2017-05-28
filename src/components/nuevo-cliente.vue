<template>
	<div class="nuevo_cliente">
		<figure class="nuevo_cliente_logo">
			<img src="../assets/logoWhite.png">
			<p>Crea tus clientes</p>
		</figure>
		<div class="nuevo_cliente_form">
			<input type="text" v-model="customername" placeholder="Nombre del cliente" class="input">
			<input type="text" v-model="address" id="address" placeholder="Direccion" class="input">
			<input type="text" v-model="phonenumber" placeholder="Numero de celular" class="input">
			<button class="btnAction" v-on:click="saveCustomer">CREAR CLIENTE</button>
		</div>
	</div>
</template>
<script>

	export default{
		data(){
			return{
				customername: '',
				address: '',
				phonenumber: '',
				lat: 0,
				lng: 0
			}
		},
		mounted(){
			var input = document.getElementById('address');
		    var searchBox = new google.maps.places.SearchBox(input);
		    var data = this;
		    searchBox.addListener('places_changed', function() {
          		var places = searchBox.getPlaces();
          		data.lat = places[0].geometry.location.lat();
          		data.lng = places[0].geometry.location.lng();
          	})
		},
		methods: {
			saveCustomer(){
				let data = this;
				firebase.database().ref('/customers').push({
					storeId: firebase.auth().currentUser.uid,
					customername: data.customername,
					address: data.address,
					phonenumber: data.phonenumber,
					location: {
						lat: data.lat,
						lng: data.lng,
					}
				})
				this.$router.push('/in/clientes');
			}
		}
	}
</script>
<style scoped>
	.nuevo_cliente{
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding-bottom: 80px;
	}
	.nuevo_cliente_logo{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.nuevo_cliente_logo img{
		max-width: 170px;
		width: 100%;
	}
	.nuevo_cliente_logo p{
		color: #257B4E;
		font-size: 25px;
	}
	.nuevo_cliente_form{
		display: flex;
		flex-direction: column;
	}
	.btnAction{
		margin-top: 20px;
	}
</style>