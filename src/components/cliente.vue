<template>
	<div class="cliente">
		<div class="cliente_header">
			<i class="material-icons back" v-on:click="backPage">arrow_back</i>
		</div>
		<p class="cliente_label">Nombre:</p><p class="cliente_name">{{customer.customername}}</p>
		<p class="cliente_label">Direccion:</p><p class="cliente_direccion">{{customer.address}}</p>
		<p class="cliente_label">Numero de contacto:</p><p class="cliente_phonenumber">{{customer.phonenumber}}</p>
		<div id="map"></div>
	</div>
</template>
<script>
      
	export default{
		data(){
			return{
				id: this.$route.params.id
			}
		},
		mounted(){
				var map = new google.maps.Map(document.getElementById('map'), {
		          center: this.customer.location,
		          zoom: 14,
				  mapTypeControl: false,
				  scaleControl: false,
				  streetViewControl: false,
				  rotateControl: false,
				  fullscreenControl: false
		        });
		        var marker = new google.maps.Marker({
				    position: this.customer.location,
				    map: map,
			  	});

		},
		computed: {
			customer(){
				let customers = this.$store.state.customers;
				let customer = {};
				for(let cust of customers){
					if(cust['.key'] == this.id){
						customer = cust;
					}
				}
				return customer;
			}
		},
		methods: {
			backPage(){
				this.$router.go(-1);
			}
		}
	}
</script>
<style scoped>
	.cliente{
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: column;
		padding-bottom: 80px;

	}
	#map {
		width: 100%;
        height: 250px;
    }
    .cliente_header{
    	width: 100%;
    	background-color: #FFF;
    	display: flex;
    	padding: 10px;
    	margin-bottom: 10px;
    }
    .cliente_label{
    	padding-left: 30px;
    }
    .cliente_name{
    	color: #FFF;
    	font-weight: 500;
    	font-size: 22px;
    	margin: 15px 30px;
    }
    .cliente_direccion{
    	margin: 15px 30px;
    	font-size: 20px;
    	color: black;
    	font-weight: lighter;
    }
    .cliente_phonenumber{
    	margin: 15px 30px;
    	font-weight: bold;
    }
    
    .back{
    	cursor: pointer;
    }
</style>