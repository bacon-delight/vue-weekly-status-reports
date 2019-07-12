import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'

Vue.use(VueApollo)

const apolloClient = new ApolloClient({
	uri: 'http://localhost:4001/graphql'
	//uri: 'https://philips-wsr-server.herokuapp.com/graphql'
})

const apolloProvider = new VueApollo({
	defaultClient: apolloClient,
})

Vue.config.productionTip = false

new Vue({
	router,
	store,
	apolloProvider,
	render: h => h(App)
}).$mount('#app')
