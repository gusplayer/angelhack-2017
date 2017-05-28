<template>
	<div class="cliente">
		<div class="cliente_header">
			<i class="material-icons back" v-on:click="backPage">arrow_back</i>
		</div>
		<p>{{customer.customername}}</p>
		<p>{{customer.address}}</p>
		<p>{{customer.phonenumber}}</p>
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
    }
    .back{
    	cursor: pointer;
    }
</style>