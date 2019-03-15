<template>
	<v-form ref="form" @submit.prevent="submit">
		<v-layout row>
			<v-flex xs12 sm6 class="ma-3">
				<v-menu ref="menuStart" v-model="menuStart" :close-on-content-click="false" :nudge-right="40" :return-value.sync="weekstart" lazy transition="scale-transition" offset-y full-width min-width="290px">
					<template v-slot:activator="{ on }">
						<v-text-field v-model="weekstart" :rules="inputRules" label="Week End" prepend-icon="event" readonly v-on="on"></v-text-field>
					</template>
					<v-date-picker v-model="weekstart" no-title scrollable>
						<v-spacer></v-spacer>
						<v-btn flat color="primary" @click="menuStart = false">Cancel</v-btn>
						<v-btn flat color="primary" @click="$refs.menuStart.save(weekstart)">OK</v-btn>
					</v-date-picker>
				</v-menu>
			</v-flex>
			<v-flex xs12 sm6 class="ma-3">
				<v-menu ref="menuEnd" v-model="menuEnd" :close-on-content-click="false" :nudge-right="40" :return-value.sync="weekend" lazy transition="scale-transition" offset-y full-width min-width="290px">
					<template v-slot:activator="{ on }">
						<v-text-field v-model="weekend" :rules="inputRules" label="Week End" prepend-icon="event" readonly v-on="on"></v-text-field>
					</template>
					<v-date-picker v-model="weekend" no-title scrollable>
						<v-spacer></v-spacer>
						<v-btn flat color="primary" @click="menuEnd = false">Cancel</v-btn>
						<v-btn flat color="primary" @click="$refs.menuEnd.save(weekend)">OK</v-btn>
					</v-date-picker>
				</v-menu>
			</v-flex>
		</v-layout>

		<v-layout row>
			<v-flex xs12 sm6 class="ma-3">
				<v-text-field label="Distribution/Project Manager" prepend-icon="person" :rules="inputRules" v-model="distribution"></v-text-field>
			</v-flex>
			<v-flex xs12 sm6 class="ma-3">
				<v-text-field label="Project Name" prepend-icon="folder_special" :rules="inputRules" v-model="project"></v-text-field>
			</v-flex>
		</v-layout>

		<v-layout row class="pa-3">
			<v-textarea label="Accomplishments this Period" prepend-icon="trending_up" :rules="inputRules" v-model="accomplishments"></v-textarea>
		</v-layout>

		<v-layout row class="pa-3">
			<v-textarea label="Plans for Next Period" prepend-icon="turned_in_not" :rules="inputRules" v-model="plans"></v-textarea>
		</v-layout>

		<v-layout row class="pa-3">
			<v-textarea label="Major Issues and Concerns" prepend-icon="warning" :rules="inputRules" v-model="issues"></v-textarea>
		</v-layout>

		<v-layout row class="pa-3">
			<v-flex xs12 sm6 class="pr-2">
				<v-text-field label="Billable Hours" prepend-icon="access_time" :rules="inputRules" v-model="bh"></v-text-field>
			</v-flex>
			<v-flex xs12 sm6 class="pl-2">
				<v-text-field label="Non-Billable Hours" prepend-icon="timer_off" :rules="inputRules" v-model="nbh"></v-text-field>
			</v-flex>
		</v-layout>

		<v-layout row class="pa-3">
			<v-flex xs12 sm6 class="pr-2">
				<v-text-field label="Expenses this Period" prepend-icon="attach_money" v-model="expenses"></v-text-field>
			</v-flex>
			<v-flex xs12 sm6 class="pl-2">
				<v-text-field label="Expenses Planned for Next Period" prepend-icon="attach_money" v-model="expensesNext"></v-text-field>
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
	export default {
		name: 'Template1Form',
		data() {
			return {
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
				expensesNext: '',
				menuStart: false,
				menuEnd: false,
				loading: false,
				inputRules: [
					inputData => inputData.length >0 || 'Cannot be empty'
				],
			}
		},
		methods: {
			...mapMutations([
				'ADD_REPORTST1',
			]),
			submit(e) {
				e.preventDefault();
				if(this.$refs.form.validate())
				{
					this.ADD_REPORTST1({
						weekstart: this.weekstart,
						weekend: this.weekend,
						distribution: this.distribution,
						project: this.project,
						accomplishments: this.accomplishments,
						plans: this.plans,
						issues: this.issues,
						bh: this.bh,
						nbh: this.nbh,
						expenses: this.expenses,
						expensesNext: this.expensesNext
					});

					//Show Snackbar
					this.$emit('actionSuccess');

					//Clear the Form
					this.$refs.form.reset()
				}
			}
		}
	}
</script>