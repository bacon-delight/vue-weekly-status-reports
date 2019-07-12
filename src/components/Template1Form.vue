<template>
	<v-form ref="form" @submit.prevent="submit">
		<v-layout row wrap>
			<v-flex xs12 sm6 class="pa-3">
				<v-menu ref="menuStart" v-model="menuStart" :close-on-content-click="false" :nudge-right="40" :return-value.sync="newReport.weekstart" lazy transition="scale-transition" offset-y full-width min-width="290px">
					<template v-slot:activator="{ on }">
						<v-text-field v-model="newReport.weekstart" :rules="inputRules" label="Week Start" prepend-icon="event" readonly v-on="on"></v-text-field>
					</template>
					<v-date-picker v-model="newReport.weekstart" no-title scrollable>
						<v-spacer></v-spacer>
						<v-btn flat color="primary" @click="menuStart = false">Cancel</v-btn>
						<v-btn flat color="primary" @click="$refs.menuStart.save(newReport.weekstart)">OK</v-btn>
					</v-date-picker>
				</v-menu>
			</v-flex>
			<v-flex xs12 sm6 class="pa-3">
				<v-menu ref="menuEnd" v-model="menuEnd" :close-on-content-click="false" :nudge-right="40" :return-value.sync="newReport.weekend" lazy transition="scale-transition" offset-y full-width min-width="290px">
					<template v-slot:activator="{ on }">
						<v-text-field v-model="newReport.weekend" :rules="inputRules" label="Week End" prepend-icon="event" readonly v-on="on"></v-text-field>
					</template>
					<v-date-picker v-model="newReport.weekend" no-title scrollable>
						<v-spacer></v-spacer>
						<v-btn flat color="primary" @click="menuEnd = false">Cancel</v-btn>
						<v-btn flat color="primary" @click="$refs.menuEnd.save(newReport.weekend)">OK</v-btn>
					</v-date-picker>
				</v-menu>
			</v-flex>
		</v-layout>

		<v-layout row wrap>
			<v-flex xs12 sm6 class="pa-3">
				<v-text-field label="Project Manager" prepend-icon="person" :rules="inputRules" v-model="newReport.distribution"></v-text-field>
			</v-flex>
			<v-flex xs12 sm6 class="pa-3">
				<v-text-field label="Project Name" prepend-icon="folder_special" :rules="inputRules" v-model="newReport.project"></v-text-field>
			</v-flex>
		</v-layout>

		<v-layout row class="pa-3">
			<v-textarea label="Accomplishments this Period" prepend-icon="trending_up" :rules="inputRules" v-model="newReport.accomplishments"></v-textarea>
		</v-layout>

		<v-layout row class="pa-3">
			<v-textarea label="Plans for Next Period" prepend-icon="turned_in_not" :rules="inputRules" v-model="newReport.plans"></v-textarea>
		</v-layout>

		<v-layout row class="pa-3">
			<v-textarea label="Major Issues and Concerns" prepend-icon="warning" :rules="inputRules" v-model="newReport.issues"></v-textarea>
		</v-layout>

		<v-layout row wrap>
			<v-flex xs12 sm6 class="pa-3">
				<v-text-field label="Billable Hours" prepend-icon="access_time" :rules="inputRules" v-model="newReport.bh"></v-text-field>
			</v-flex>
			<v-flex xs12 sm6 class="pa-3">
				<v-text-field label="Non-Billable Hours" prepend-icon="timer_off" :rules="inputRules" v-model="newReport.nbh"></v-text-field>
			</v-flex>
		</v-layout>

		<v-layout row wrap>
			<v-flex xs12 sm6 class="pa-3">
				<v-text-field label="Expenses this Period" prepend-icon="attach_money" v-model="newReport.expenses"></v-text-field>
			</v-flex>
			<v-flex xs12 sm6 class="pa-3">
				<v-text-field label="Expenses Planned for Next Period" prepend-icon="attach_money" v-model="newReport.expensesNext"></v-text-field>
			</v-flex>
		</v-layout>

		<v-btn flat class="success ml-3" :loading="loading" @click="submit">
			<span>Submit</span>
			<v-icon right>chevron_right</v-icon>
		</v-btn>
	</v-form>
</template>

<script>
	import { mapMutations } from 'vuex';
	import { PUBLISH_REPORT1 } from '../constants/graphql.js';
	import { startOfToday, endOfISOWeek, startOfISOWeek, addDays, format } from 'date-fns';
	export default {
		name: 'Template1Form',
		data() {
			return {
				newReport: {
					weekstart: '',
					weekend: '',
					distribution: '',
					project: '',
					accomplishments: '',
					plans: '',
					issues: '',
					bh: '',
					nbh: '',
					expenses: '',
					expensesNext: ''
				},
				menuStart: false,
				menuEnd: false,
				loading: false,
				inputRules: [
					inputData => inputData.length >0 || 'Cannot be empty'
				],
			}
		},
		mounted() {
			//Autofill Weeks
			var today = startOfToday();
			this.newReport.weekstart = String(format(startOfISOWeek(today), 'YYYY-MM-DD'));
			this.newReport.weekend = String(format(addDays(endOfISOWeek(today),1), 'YYYY-MM-DD'));
		},
		methods: {
			...mapMutations([
				'ADD_REPORTST1',
			]),
			submit(e) {
				e.preventDefault();
				if(this.$refs.form.validate())
				{
					this.$apollo.mutate({
						mutation: PUBLISH_REPORT1,
						variables: {
							userId: this.$store.state.username,
							weekstart: this.newReport.weekstart,
							weekend: this.newReport.weekend,
							distribution: this.newReport.distribution,
							project: this.newReport.project,
							accomplishments: this.newReport.accomplishments,
							plans: this.newReport.plans,
							issues: this.newReport.issues,
							bh: this.newReport.bh,
							nbh: this.newReport.nbh,
							expenses: this.newReport.expenses,
							expensesNext: this.newReport.expensesNext
						}
					}).then(() => {
						//Add Mutation to Vuex
						this.ADD_REPORTST1({
							weekstart: this.newReport.weekstart,
							weekend: this.newReport.weekend,
							distribution: this.newReport.distribution,
							project: this.newReport.project,
							accomplishments: this.newReport.accomplishments,
							plans: this.newReport.plans,
							issues: this.newReport.issues,
							bh: this.newReport.bh,
							nbh: this.newReport.nbh,
							expenses: this.newReport.expenses,
							expensesNext: this.newReport.expensesNext
						});

						//Show Snackbar
						this.$emit('actionSuccess');
					});

					//Clear the Form
					//this.$refs.form.reset()
				}
			}
		}
	}
</script>