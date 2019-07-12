<template>
	<nav>

		<!-- Top Toolbar -->
		<v-toolbar app>
			<v-toolbar-side-icon class="grey--text" @click="drawer = !drawer" v-if="['dashboard','template1','archive1','template2','archive2','feedback'].includes($route.name)"></v-toolbar-side-icon>
			<v-toolbar-title class="text-uppercase grey-text"> 
				<span class="font-weight-light">Bilonz </span>
				<span>Weekly Status Reports</span>
			</v-toolbar-title>
		</v-toolbar>


		<!-- Navigation Drawer -->
		<v-navigation-drawer v-model="drawer" app class="primary" v-if="['dashboard','template1','archive1','template2','archive2','feedback'].includes($route.name)">

			<!-- User Details -->
			<v-layout column align-center>
				<v-flex class="mt-5" align-center>
					<v-avatar size="100">
						<v-icon class="white--text" size="100px">person_outline</v-icon>
					</v-avatar>
				</v-flex>
				<v-flex class="mt-0" align-center>
					<p class="white--text subheading mt-1" style="text-align: center;">
						{{ this.getUser }}
					</p>
				</v-flex>
				<v-flex class="mt-4 mb-3">
				</v-flex>
			</v-layout>


			<!-- Navigation URLs -->
			<v-list>
				<v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
					<v-list-tile-action>
						<v-icon class="white--text">{{ link.icon }}</v-icon>
					</v-list-tile-action>
					<v-list-tile-content>
						<v-list-tile-title class="white--text">{{ link.text }}</v-list-tile-title>
					</v-list-tile-content>
				</v-list-tile>
			</v-list>


		</v-navigation-drawer>



	</nav>
</template>

<script>
	import { mapGetters } from 'vuex';
	export default {
		name: 'Navbar',
		components: {
			
		},
		data() {
			return {
				drawer: false,
				links: [
					{icon: 'dashboard', text: 'Dashboard', route: '/dashboard'},
					{icon: 'assignment', text: 'Report Template 1', route: '/template1'},
					{icon: 'archive', text: 'Report Archive 1', route: '/archive1'},
					{icon: 'assignment', text: 'Report Template 2', route: '/template2'},
					{icon: 'archive', text: 'Report Archive 2', route: '/archive2'},
					{icon: 'chat_bubble_outline', text: 'Issues & Feedback', route: '/feedback'}
				]
			}
		},
		computed: {
			...mapGetters([
				'getUser'
			])
		}
	}
</script>