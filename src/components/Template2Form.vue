<template>
	<v-form ref="form" @submit.prevent="submit">

		<v-layout row wrap>
			<v-flex xs12 class="px-3">
				<v-select :items="yearOptions" :rules="inputRules" prepend-icon="date_range" v-model="newReport.year" label="Year"></v-select>
			</v-flex>
		</v-layout>
		
		<v-layout row wrap>
			<v-flex xs12 sm6 class="px-3">
				<v-select :items="weekOptions" :rules="inputRules" prepend-icon="date_range" v-model="newReport.weekNumber" label="Week Number"></v-select>
			</v-flex>
			<v-flex xs12 sm6 class="px-3">
				<v-select :items="weekOptions" :rules="inputRules" prepend-icon="date_range" v-model="newReport.weekEnding" label="Week Ending"></v-select>
			</v-flex>
		</v-layout>

		<v-layout row wrap>
			<v-flex xs12 sm6 class="px-3">
				<v-select :items="this.$store.state.optionsT2.resourceOptions" prepend-icon="person" v-model="newReport.primary" :rules="inputRules" label="Primary Resource Name"></v-select>
			</v-flex>
			<v-flex xs12 sm6 class="px-3">
				<v-select :items="this.$store.state.optionsT2.resourceOptions" prepend-icon="person" v-model="newReport.secondary" :rules="inputRules" label="Secondary Resource Name"></v-select>
			</v-flex>
		</v-layout>

		<v-layout class="pa-3" row>
			<v-expansion-panel>
				<v-expansion-panel-content>
					<div slot="header">Client Details</div>
					<v-card-text class="px-4 grey--text">
						<v-layout row wrap>
							<v-flex xs12 sm4 class="px-2">
								<v-select :items="this.$store.state.optionsT2.clientRegionOptions" prepend-icon="language" v-model="newReport.clientRegion" label="Client Region"></v-select>
							</v-flex>
							<v-flex xs12 sm8 class="px-2">
								<v-text-field label="Client Name" prepend-icon="person" v-model="newReport.client"></v-text-field>
							</v-flex>
						</v-layout>
					</v-card-text>
				</v-expansion-panel-content>
			</v-expansion-panel>
		</v-layout>
		
		<v-layout class="pa-3" row>
			<v-expansion-panel>
				<v-expansion-panel-content>
					<div slot="header">Project Details</div>
					<v-card-text class="grey--text">
						<v-layout row wrap>
							<v-flex xs12 class="px-2">
								<v-select :items="this.$store.state.optionsT2.projectNameOptions" prepend-icon="turned_in_not" v-model="newReport.projectName" label="Project Name"></v-select>
							</v-flex>
							<v-flex xs12 class="px-2">
								<v-select :items="this.$store.state.optionsT2.projectManagerOptions" prepend-icon="person" v-model="newReport.projectManager" label="Project Manager"></v-select>
							</v-flex>
							<v-flex xs12 md6 class="px-2">
								<v-select :items="this.$store.state.optionsT2.projectActivityOptions" prepend-icon="trending_up" v-model="newReport.projectActivity" label="Project Activity"></v-select>
							</v-flex>
							<v-flex xs12 md6 class="px-2">
								<v-select :items="this.$store.state.optionsT2.statusOptions" prepend-icon="gavel" v-model="newReport.status" label="Status"></v-select>
							</v-flex>
							<v-flex xs12 md6 class="px-2">
								<v-select :items="this.$store.state.optionsT2.phaseOptions" prepend-icon="hourglass_empty" v-model="newReport.phase" label="Phase"></v-select>
							</v-flex>
						</v-layout>
					</v-card-text>
				</v-expansion-panel-content>
			</v-expansion-panel>
		</v-layout>

		<v-layout class="pa-3" row>
			<v-expansion-panel>
				<v-expansion-panel-content>
					<div slot="header">Select Dates</div>
					<v-card-text class="px-4 grey--text">
						<v-layout row wrap>
							<v-flex xs12 md4 class="pa-2">
								<v-menu ref="menu1" v-model="menu1" :close-on-content-click="false" :nudge-right="40" :return-value.sync="newReport.date1" lazy transition="scale-transition" offset-y full-width min-width="290px">
									<template v-slot:activator="{ on }">
										<v-text-field v-model="newReport.date1" label="Assigned Date" prepend-icon="event" readonly v-on="on"></v-text-field>
									</template>
									<v-date-picker v-model="newReport.date1" no-title scrollable>
										<v-spacer></v-spacer>
										<v-btn flat color="primary" @click="menu1 = false">Cancel</v-btn>
										<v-btn flat color="primary" @click="$refs.menu1.save(newReport.date1)">OK</v-btn>
									</v-date-picker>
								</v-menu>
							</v-flex>
							<v-flex xs12 md4 class="pa-2">
								<v-menu ref="menu2" v-model="menu2" :close-on-content-click="false" :nudge-right="40" :return-value.sync="newReport.date2" lazy transition="scale-transition" offset-y full-width min-width="290px">
									<template v-slot:activator="{ on }">
										<v-text-field v-model="newReport.date2" label="Temporary Go Live Date" prepend-icon="event" readonly v-on="on"></v-text-field>
									</template>
									<v-date-picker v-model="newReport.date2" no-title scrollable>
										<v-spacer></v-spacer>
										<v-btn flat color="primary" @click="menu2 = false">Cancel</v-btn>
										<v-btn flat color="primary" @click="$refs.menu2.save(newReport.date2)">OK</v-btn>
									</v-date-picker>
								</v-menu>
							</v-flex>
							<v-flex xs12 md4 class="pa-2">
								<v-menu ref="menu3" v-model="menu3" :close-on-content-click="false" :nudge-right="40" :return-value.sync="newReport.date3" lazy transition="scale-transition" offset-y full-width min-width="290px">
									<template v-slot:activator="{ on }">
										<v-text-field v-model="newReport.date3" label="Start Date" prepend-icon="event" readonly v-on="on"></v-text-field>
									</template>
									<v-date-picker v-model="newReport.date3" no-title scrollable>
										<v-spacer></v-spacer>
										<v-btn flat color="primary" @click="menu3 = false">Cancel</v-btn>
										<v-btn flat color="primary" @click="$refs.menu3.save(newReport.date3)">OK</v-btn>
									</v-date-picker>
								</v-menu>
							</v-flex>
							<v-flex xs12 md4 class="pa-2">
								<v-menu ref="menu4" v-model="menu4" :close-on-content-click="false" :nudge-right="40" :return-value.sync="newReport.date4" lazy transition="scale-transition" offset-y full-width min-width="290px">
									<template v-slot:activator="{ on }">
										<v-text-field v-model="newReport.date4" label="Servers Availability Date" prepend-icon="event" readonly v-on="on"></v-text-field>
									</template>
									<v-date-picker v-model="newReport.date4" no-title scrollable>
										<v-spacer></v-spacer>
										<v-btn flat color="primary" @click="menu4 = false">Cancel</v-btn>
										<v-btn flat color="primary" @click="$refs.menu4.save(newReport.date4)">OK</v-btn>
									</v-date-picker>
								</v-menu>
							</v-flex>
							<v-flex xs12 md4 class="pa-2">
								<v-menu ref="menu5" v-model="menu5" :close-on-content-click="false" :nudge-right="40" :return-value.sync="newReport.date5" lazy transition="scale-transition" offset-y full-width min-width="290px">
									<template v-slot:activator="{ on }">
										<v-text-field v-model="newReport.date5" label="Released for UAT Date" prepend-icon="event" readonly v-on="on"></v-text-field>
									</template>
									<v-date-picker v-model="newReport.date5" no-title scrollable>
										<v-spacer></v-spacer>
										<v-btn flat color="primary" @click="menu5 = false">Cancel</v-btn>
										<v-btn flat color="primary" @click="$refs.menu5.save(newReport.date5)">OK</v-btn>
									</v-date-picker>
								</v-menu>
							</v-flex>
							<v-flex xs12 md4 class="pa-2">
								<v-menu ref="menu6" v-model="menu6" :close-on-content-click="false" :nudge-right="40" :return-value.sync="newReport.date6" lazy transition="scale-transition" offset-y full-width min-width="290px">
									<template v-slot:activator="{ on }">
										<v-text-field v-model="newReport.date6" label="UAT Begin Date" prepend-icon="event" readonly v-on="on"></v-text-field>
									</template>
									<v-date-picker v-model="newReport.date6" no-title scrollable>
										<v-spacer></v-spacer>
										<v-btn flat color="primary" @click="menu6 = false">Cancel</v-btn>
										<v-btn flat color="primary" @click="$refs.menu6.save(newReport.date6)">OK</v-btn>
									</v-date-picker>
								</v-menu>
							</v-flex>
							<v-flex xs12 md4 class="pa-2">
								<v-menu ref="menu7" v-model="menu7" :close-on-content-click="false" :nudge-right="40" :return-value.sync="newReport.date7" lazy transition="scale-transition" offset-y full-width min-width="290px">
									<template v-slot:activator="{ on }">
										<v-text-field v-model="newReport.date7" label="UAT End Date" prepend-icon="event" readonly v-on="on"></v-text-field>
									</template>
									<v-date-picker v-model="newReport.date7" no-title scrollable>
										<v-spacer></v-spacer>
										<v-btn flat color="primary" @click="menu7 = false">Cancel</v-btn>
										<v-btn flat color="primary" @click="$refs.menu7.save(newReport.date7)">OK</v-btn>
									</v-date-picker>
								</v-menu>
							</v-flex>
							<v-flex xs12 md4 class="pa-2">
								<v-menu ref="menu8" v-model="menu8" :close-on-content-click="false" :nudge-right="40" :return-value.sync="newReport.date8" lazy transition="scale-transition" offset-y full-width min-width="290px">
									<template v-slot:activator="{ on }">
										<v-text-field v-model="newReport.date8" label="Go Live Date" prepend-icon="event" readonly v-on="on"></v-text-field>
									</template>
									<v-date-picker v-model="newReport.date8" no-title scrollable>
										<v-spacer></v-spacer>
										<v-btn flat color="primary" @click="menu8 = false">Cancel</v-btn>
										<v-btn flat color="primary" @click="$refs.menu8.save(newReport.date8)">OK</v-btn>
									</v-date-picker>
								</v-menu>
							</v-flex>
							<v-flex xs12 md4 class="pa-2">
								<v-menu ref="menu9" v-model="menu9" :close-on-content-click="false" :nudge-right="40" :return-value.sync="newReport.date9" lazy transition="scale-transition" offset-y full-width min-width="290px">
									<template v-slot:activator="{ on }">
										<v-text-field v-model="newReport.date9" label="Transition to Support Date" prepend-icon="event" readonly v-on="on"></v-text-field>
									</template>
									<v-date-picker v-model="newReport.date9" no-title scrollable>
										<v-spacer></v-spacer>
										<v-btn flat color="primary" @click="menu9 = false">Cancel</v-btn>
										<v-btn flat color="primary" @click="$refs.menu9.save(newReport.date9)">OK</v-btn>
									</v-date-picker>
								</v-menu>
							</v-flex>
						</v-layout>
					</v-card-text>
				</v-expansion-panel-content>
			</v-expansion-panel>
		</v-layout>

		<v-layout row wrap>
			<v-flex xs12 class="px-3">
				<v-textarea label="Comments" prepend-icon="comment" v-model="newReport.comments"></v-textarea>
			</v-flex>
		</v-layout>

		<v-btn flat class="success ml-3" :loading="loading" @click="submit">
			<span>Submit</span>
			<v-icon right>chevron_right</v-icon>
		</v-btn>
	</v-form>
</template>

<script>
	import { startOfToday, getYear, getISOWeek } from 'date-fns';
	import { mapMutations } from 'vuex';
	import { PUBLISH_REPORT2 } from '../constants/graphql.js';
	export default {
		name: 'Template2Form',
		data() {
			return {
				loading: false,
				inputRules: [
					inputData => inputData.length >0 || 'Cannot be empty'
				],
				yearOptions: [],
				weekOptions: [],
				menu1: false,
				menu2: false,
				menu3: false,
				menu4: false,
				menu5: false,
				menu6: false,
				menu7: false,
				menu8: false,
				menu9: false,
				newReport: {
					year: '',
					weekNumber: '',
					weekEnding: '',
					primary: '',
					secondary: '',
					clientRegion: '',
					client: '',
					projectName: '',
					projectActivity: '',
					status: '',
					phase: '',
					projectManager: '',
					date1: '',
					date2: '',
					date3: '',
					date4: '',
					date5: '',
					date6: '',
					date7: '',
					date8: '',
					date9: '',
					comments: ''
				}
			}
		},
		mounted() {
			//Generate Years Array
			var startYear = 2000 ;
			while(startYear<=2030)
			{
				this.yearOptions.push(String(startYear++));
			}

			//Generate Weeks Array
			var startWeek = 1 ;
			while(startWeek<=53)
			{
				this.weekOptions.push(String(startWeek++));
			}

			//Populate Year
			var today = startOfToday();
			this.newReport.year = String(getYear(today));

			//Populate Week Number & Week Ending
			this.newReport.weekNumber = String(getISOWeek(today));
			this.newReport.weekEnding = String(getISOWeek(today)+1);
		},
		methods: {
			...mapMutations([
				'ADD_REPORTST2',
			]),
			submit(e) {
				e.preventDefault();
				
				if(this.$refs.form.validate())
				{

					this.$apollo.mutate({
						mutation: PUBLISH_REPORT2,
						variables: {
							userId: this.$store.state.username,
							year: this.newReport.year,
							weekNumber: this.newReport.weekNumber,
							weekEnding: this.newReport.weekEnding,
							primary: this.newReport.primary,
							secondary: this.newReport.secondary,
							clientRegion: this.newReport.clientRegion,
							client: this.newReport.client,
							projectName: this.newReport.projectName,
							projectActivity: this.newReport.projectActivity,
							status: this.newReport.status,
							phase: this.newReport.phase,
							projectManager: this.newReport.projectManager,
							date1: this.newReport.date1,
							date2: this.newReport.date2,
							date3: this.newReport.date3,
							date4: this.newReport.date4,
							date5: this.newReport.date5,
							date6: this.newReport.date6,
							date7: this.newReport.date7,
							date8: this.newReport.date8,
							date9: this.newReport.date9,
							comments: this.newReport.comments
						}
					}).then(() => {
						//Add Mutation to Vuex
						this.ADD_REPORTST2({
							year: this.newReport.year,
							weekNumber: this.newReport.weekNumber,
							weekEnding: this.newReport.weekEnding,
							primary: this.newReport.primary,
							secondary: this.newReport.secondary,
							clientRegion: this.newReport.clientRegion,
							client: this.newReport.client,
							projectName: this.newReport.projectName,
							projectActivity: this.newReport.projectActivity,
							status: this.newReport.status,
							phase: this.newReport.phase,
							projectManager: this.newReport.projectManager,
							date1: this.newReport.date1,
							date2: this.newReport.date2,
							date3: this.newReport.date3,
							date4: this.newReport.date4,
							date5: this.newReport.date5,
							date6: this.newReport.date6,
							date7: this.newReport.date7,
							date8: this.newReport.date8,
							date9: this.newReport.date9,
							comments: this.newReport.comments
						});

						//Show Snackbar
						this.$emit('actionSuccess');
					});

					//Clear the Form
					//this.$refs.form.reset();
				}
			}
		}
	}
</script>