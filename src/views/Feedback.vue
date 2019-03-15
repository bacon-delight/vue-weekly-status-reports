<template>
	<v-container>
		<v-card>

			<!-- Title -->
			<v-card-title>
				<h2 class="grey--text">Feedback</h2>
			</v-card-title>


			<v-divider></v-divider>

			
			<v-card-text>

				<!-- Form -->
				<v-form ref="form" @submit.prevent="submit">
					<v-layout row wrap>
						<v-flex xs12 class="ma-3">
							<v-text-field label="How was your experience?" prepend-icon="star" :rules="inputRules" v-model="comments"></v-text-field>
						</v-flex>
						<v-flex xs12 class="ma-3">
							<v-textarea label="Please describe how you think we can help improve" prepend-icon="list" :rules="inputRules" v-model="comments"></v-textarea>
						</v-flex>
					</v-layout>

					<v-btn flat class="success ml-3" :loading="loading" @click="submit">
						<span>Submit</span>
						<v-icon right>chevron_right</v-icon>
					</v-btn>
				</v-form>
				

			</v-card-text>
		</v-card>
	</v-container>
</template>

<script>
	export default {
		name: 'Feedback',
		data() {
			return {
				rating: '',
				comments: '',
				loading: false,
				inputRules: [
					inputData => inputData.length >0 || 'Cannot be empty'
				],
			}
		},
		methods: {
			submit(e) {
				e.preventDefault();
				if(this.$refs.form.validate())
				{
					console.log('Done');
				}
			}
		}
	}
</script>

<style>
	
</style>