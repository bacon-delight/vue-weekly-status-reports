<template>
	<v-container>
		<v-card>

			<!-- Title -->
			<v-card-title>
				<h2 class="grey--text">Status Report Template 2</h2>
			</v-card-title>


			<v-divider></v-divider>

			
			<v-card-text>

				<!-- Form -->
				<Template2Form @actionSuccess="snackbar = true" />

				<!-- Snackbar -->
				<v-snackbar v-model="snackbar" :timeout="7000" left color="green darken-1">
					<span>Submitted Successfully!</span>
					<v-btn flat color="white" @click="snackbar = false">Close</v-btn>
				</v-snackbar>


			</v-card-text>
		</v-card>
	</v-container>
</template>

<script>
	import Template2Form from '@/components/Template2Form.vue';
	export default {
		name: 'Template2',
		data() {
			return {
				snackbar: false
			}
		},
		components: {
			Template2Form
		}
	}
</script>

<style>

</style>