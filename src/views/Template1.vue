<template>
	<v-container>
		<v-card>

			<!-- Title -->
			<v-card-title>
				<h2 class="grey--text">Status Report Template 1</h2>
			</v-card-title>


			<v-divider></v-divider>

			
			<v-card-text>

				<!-- Form -->
				<Template1Form @actionSuccess="snackbar = true" />


			</v-card-text>
		</v-card>
		
		<!-- Snackbar -->
		<v-snackbar v-model="snackbar" :timeout="7000" left color="green darken-1">
			<span>Submitted Successfully!</span>
			<v-btn flat color="white" @click="snackbar = false">Close</v-btn>
		</v-snackbar>

	</v-container>
</template>

<script>
	import Template1Form from '@/components/Template1Form.vue';
	export default {
		name: 'Template1',
		data() {
			return {
				snackbar: false
			}
		},
		components: {
			Template1Form
		}
	}
</script>

<style>

</style>