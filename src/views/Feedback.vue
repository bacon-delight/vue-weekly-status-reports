<template>
	<v-container>
		<v-card>

			<!-- Title -->
			<v-card-title>
				<h2 class="grey--text">Issues & Feedback</h2>
			</v-card-title>


			<v-divider></v-divider>

			<v-card-text>
				<v-layout row align-center justify-center wrap>
					<v-flex xs12 sm6 class="pa-3 text-xs-center">
						<v-btn class="" @click="reportBug">
							<v-icon left>error_outline</v-icon>
							<span>Report a Bug</span>
						</v-btn>
						<p class="subheading mt-3">Report a bug in this application</p>
					</v-flex>
					<v-flex xs12 sm6 class="pa-3 text-xs-center" align-center>
						<v-btn class="" @click="featureRequest">
							<v-icon left>call_merge</v-icon>
							<span>Feature Request</span>
						</v-btn>
						<p class="subheading mt-3">Suggest an idea for this project</p>
					</v-flex>
				</v-layout>
			</v-card-text>

			<!-- Feedback Form -->
			<!-- <v-card-text>
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
			</v-card-text> -->
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
			/*submit(e) {
				e.preventDefault();
				if(this.$refs.form.validate())
				{
					console.log('Done');
				}
			},*/
			reportBug() {
				window.open("https://github.com/bacon-delight/philips-wsr/issues/new?assignees=&labels=&template=bug_report.md&title=", "_blank");
			},
			featureRequest() {
				window.open("https://github.com/bacon-delight/philips-wsr/issues/new?assignees=&labels=&template=feature_request.md&title=", "_blank");
			}
		}
	}
</script>

<style>
	
</style>