import Vue from 'vue'
import Router from 'vue-router'
import outside from '@/components/outside'
import splash from '@/components/splash'
import login from '@/components/login'
import registro from '@/components/registro'
import inside from '@/components/inside'
import ordenes from '@/components/ordenes'
import orden from '@/components/orden'
import solicitar from '@/components/solicitar'
import clientes from '@/components/clientes'
import cliente from '@/components/cliente'
import chat from '@/components/chat'
import nuevoCliente from '@/components/nuevo-cliente'

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
      component: outside,
      children: [
		    {
		    	path: 'splash',
		    	component: splash
		    },{
		    	path: 'login',
		    	component: login
		    },{
		    	path: 'registro',
		    	component: registro
		    }
	    ]
    },{
    	path: '/in',
    	component: inside,
    	children: [
		    {
		    	path: 'ordenes',
		    	component: ordenes
		    },{
		    	path: 'ordenes/:id',
		    	component: orden
		    },{
		    	path: 'solicitar',
		    	component: solicitar
		    },{
		    	path: 'clientes',
		    	component: clientes
		    },{
		    	path: 'cliente/:id',
		    	component: cliente,
		    	children: [
	    			{
		    			path: 'chat',
		    			component: chat
	    			}
		    	]
		    }
		  ]
	    },{
	    	path: 'nuevo-cliente',
	    	component: nuevoCliente
	    }
  ]
})
