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


				<!-- Snackbar Success -->
				<v-snackbar v-model="snackbar" :timeout="7000" left color="green darken-1">
					<span>Submitted Successfully!</span>
					<v-btn flat color="white" @click="snackbar = false">Close</v-btn>
				</v-snackbar>

				<!-- Snackbar Error -->
				<v-snackbar v-model="snackbarError" :timeout="7000" left color="red darken-1">
					<span>Please select a CSV file to continue</span>
					<v-btn flat color="white" @click="snackbarError = false">Close</v-btn>
				</v-snackbar>


			</v-card-text>
		</v-card>
		


		<!-- Upload Excel Sheets with old data -->
		<v-card class="mt-3">

			<!-- Card Title -->
			<v-card-title>
				<h2 class="grey--text">Backward Compatibility</h2>
			</v-card-title>

			<v-divider></v-divider>
			
			<!-- Upload Dialog -->
			<v-card-text class="pa-3">
				<Template2Upload @actionSuccess="snackbar = true" @actionError="snackbarError = true" />
			</v-card-text>

		</v-card>


	</v-container>
</template>

<script>
	import Template2Form from '@/components/Template2Form.vue';
	import Template2Upload from '@/components/Template2Upload.vue';
	export default {
		name: 'Template2',
		data() {
			return {
				snackbar: false,
				snackbarError: false
			}
		},
		components: {
			Template2Form,
			Template2Upload
		}
	}
</script>

<style>

</style>