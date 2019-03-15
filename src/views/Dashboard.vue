<template>
	<div class="dashboard">

		<!-- Top Cards -->
		<v-container>
			<v-layout row wrap>

				<!-- Insights Card -->
				<v-flex xs12 md6 class="pa-3">
					<v-card>
						<v-card-title>
							<h2 class="grey--text">Insights</h2>
						</v-card-title>
						<v-divider></v-divider>
						<v-card-text>
							Insights Data
						</v-card-text>
					</v-card>
				</v-flex>


				<v-flex xs12 md6 class="pa-3">
					<v-card>
						<v-card-title>
							<h2 class="grey--text">Holiday Planner</h2>
						</v-card-title>
						<v-divider></v-divider>
						<v-card-text>
							<Holidays @actionSuccess="snackbar = true" />
						</v-card-text>
					</v-card>
				</v-flex>


				<v-flex xs12 class="pa-3">
					<v-card>
						<v-card-title>
							<h2 class="grey--text">Planned Holidays</h2>
						</v-card-title>
						<v-divider></v-divider>
						<v-card-text>
							<HolidayList />
						</v-card-text>
					</v-card>
				</v-flex>


			</v-layout>
		</v-container>

		<!-- Snackbar -->
		<v-snackbar v-model="snackbar" :timeout="7000" left color="green darken-1">
			<span>Submitted Successfully!</span>
			<v-btn flat color="white" @click="snackbar = false">Close</v-btn>
		</v-snackbar>
		
	</div>
</template>

<script>
	import Holidays from '@/components/Holidays.vue';
	import HolidayList from '@/components/HolidayList.vue';

	export default {
		name: 'Dashboard',
		components: {
			Holidays,
			HolidayList
		},
		data() {
			return {
				snackbar: false
			}
		}
	}
</script>

<style>
	#headingText {
		text-align: center;
		font-size: 30px;
		color: grey;
	}
</style>