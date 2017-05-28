<template>
	<div>
			<h1 v-for="user in usuarios" >{{user.nombre}}</h1>
	</div>
</template>
<script>
import Vue from 'vue'
import VueFire from 'vuefire'
import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBS9YRPWptV1GsOafE94OmKl6mkk1K_Qqo",
    authDomain: "angelhack-66e5d.firebaseapp.com",
    databaseURL: "https://angelhack-66e5d.firebaseio.com",
    projectId: "angelhack-66e5d",
    storageBucket: "angelhack-66e5d.appspot.com",
    messagingSenderId: "532482512198"
}
firebase.initializeApp(config);
var db = firebase.database()

Vue.use(VueFire)
export default{
	firebase: {
		users: db.ref('/user'),
	},
	mounted() {
		this.$store.state.users = this.users;
	},
	computed: {
		usuarios() {
			return this.$store.state.users
		}
	}
}
</script>