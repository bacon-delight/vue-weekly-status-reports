<template>
	
	<v-layout row justify-center>

		<v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
			
			<!-- Activator -->
			<template v-slot:activator="{ on }">
				<v-btn color="primary" dark v-on="on">Upload Old Reports</v-btn>
			</template>
			

			<!-- Main Dialog -->
			<v-card>
				<v-toolbar dark color="primary">
					<v-btn icon dark @click="dialog = false">
						<v-icon>close</v-icon>
					</v-btn>
					<v-toolbar-title>Upload Old Reports</v-toolbar-title>
				</v-toolbar>

				<v-stepper v-model="e6" vertical>

					<v-stepper-step :complete="e6 > 1" step="1">
						Select Year
						<small>Year of the record which is being uploaded</small>
					</v-stepper-step>
					<v-stepper-content step="1">
						<v-card flat class="mb-5">
							<v-layout align-center justify-center row>
								<v-select :items="yearOptions" prepend-icon="date_range" v-model="year" label="Year"></v-select>
							</v-layout>
						</v-card>
						<v-btn color="primary" @click="e6 = 2">Continue</v-btn>
					</v-stepper-content>

					<v-stepper-step :complete="e6 > 2" step="2">
						Select your file
						<small>CSV Only</small>
					</v-stepper-step>
					<v-stepper-content step="2">
						<v-card flat class="mb-5" height="100px">
							<v-layout align-center justify-center row>
								<upload-btn :fileChangedCallback="fileChanged" title="Choose your file"></upload-btn>
							</v-layout>
							<v-layout align-center justify-center row>
								{{ this.filename }}
							</v-layout>
						</v-card>
						<v-btn color="primary" @click="e6 = 3" :disabled="stepDisable">Continue</v-btn>
						<v-btn @click="e6 = 1">Go Back</v-btn>
					</v-stepper-content>

					<v-stepper-step :complete="e6 > 3" step="3">
						Preview your data and confirm changes
						<small>Changes are permanent, please verify and edit before committing</small>
					</v-stepper-step>
					<v-stepper-content step="3">
						<v-card flat>
							<v-card-text>
								<v-data-table :headers="headers" :items="reports">
									<template v-slot:items="props">
										<td>{{ props.item.year }}</td>
										<td>{{ props.item.weekNumber }}</td>
										<td>{{ props.item.weekEnding }}</td>
										<td>{{ props.item.client }}</td>
										<td>{{ props.item.projectName }}</td>
										<td>
											<Popup2 v-bind:report='props.item' />
										</td>
										<td>
											<v-btn flat fab small dark slot="activator" class="red" @click="deleteItem(props.item)">
												<v-icon>delete_outline</v-icon>
											</v-btn>
										</td>
									</template>
								</v-data-table>
							</v-card-text>
						</v-card>
						<v-btn color="primary" @click="submitData">Submit Data</v-btn>
						<v-btn @click="e6 = 2">Go Back</v-btn>
					</v-stepper-content>

				</v-stepper>


			</v-card>
		</v-dialog>


	</v-layout>


</template>

<script>

	//Dependencies
	import { format, startOfToday, getYear } from 'date-fns';
	import Papa from 'papaparse';
	import UploadButton from 'vuetify-upload-button';
	import { PUBLISH_REPORT2 } from '../constants/graphql.js';
	var _ = require('lodash');

	//Other Components
	import Popup2 from '@/components/Popup2.vue';
	
	//Store Mutations
	import { mapMutations } from 'vuex';

	export default {
		name: 'Template2Upload',
		data() {
			return {
				dialog: false,
				headers: [
					{text: 'Year', value: 'year'},
					{text: 'Week Number', value: 'weekNumber'},
					{text: 'Week Ending', value: 'weekEnding'},
					{text: 'Client', value: 'client'},
					{text: 'Project', value: 'projectName'},
					{text: 'View', value: '', sortable: false},
					{text: 'Actions', value: '', sortable: false},
				],
				reports: [],
				e6: 1,
				stepDisable: true,
				filename: '',
				yearOptions: [],
				year: ''
			}
		},
		mounted() {
			//Generate Years Array
			var startYear = 2000 ;
			while(startYear<=2030)
			{
				this.yearOptions.push(String(startYear++));
			}
			//Populate Year
			var today = startOfToday();
			this.year = String(getYear(today));
		},
		components: {
			Popup2,
			'upload-btn': UploadButton
		},
		methods: {
			...mapMutations([
				'ADD_REPORTST2_BULK',
			]),
			deleteItem (item) {
				const index = this.reports.indexOf(item)
				this.reports.splice(index, 1)
			},
			formatDate(value) {
				return format(value, 'Do MMMM, YYYY');
			},
			submitData() {
				//Send Mutation to GraphQL via Apollo
				_.forEach(this.reports, (report) => {
					this.$apollo.mutate({
						mutation: PUBLISH_REPORT2,
						variables: {
							userId: this.$store.state.username,
							year: report.year,
							weekNumber: report.weekNumber,
							weekEnding: report.weekEnding,
							primary: report.primary,
							secondary: report.secondary,
							clientRegion: report.clientRegion,
							client: report.client,
							projectProduct: report.projectProduct,
							projectName: report.projectName,
							projectActivity: report.projectActivity,
							status: report.status,
							phase: report.phase,
							projectManager: report.projectManager,
							date1: report.date1,
							date2: report.date2,
							date3: report.date3,
							date4: report.date4,
							date5: report.date5,
							date6: report.date6,
							date7: report.date7,
							date8: report.date8,
							date9: report.date9,
							timeEntry: report.timeEntry,
							opemEms: report.opemEms,
							totalBilled: report.totalBilled,
							comments: report.comments
						}
					});
				});

				//Add Mutation in Vuex
				this.ADD_REPORTST2_BULK(this.reports);

				//Clear Data and Reset Dialog to Default
				this.reports = [];
				this.e6 = 1 ;

				//Show Snackbar
				this.$emit('actionSuccess');

				//Close Dialog
				this.dialog = false;
			},
			fileChanged (file) {

				if(_.endsWith(file.name, '.csv'))
				{
					//Update Filename in UI
					this.filename = file.name;

					//Parse the CSV
					Papa.parse(file, {
						worker: false,
						download: true,
						step: (results) => {
							var newRow = {
								year: this.year,
								weekNumber: results.data[0][0],
								weekEnding: results.data[0][1],
								primary: results.data[0][2],
								secondary: results.data[0][3],
								clientRegion: results.data[0][4],
								client: results.data[0][5],
								projectProduct: results.data[0][6],
								projectName: results.data[0][7],
								projectActivity: results.data[0][8],
								status: results.data[0][9],
								phase: results.data[0][10],
								projectManager: results.data[0][11],
								date1: results.data[0][12],
								date2: results.data[0][13],
								date3: results.data[0][14],
								date4: results.data[0][15],
								date5: results.data[0][16],
								date6: results.data[0][17],
								date7: results.data[0][18],
								date8: results.data[0][19],
								date9: results.data[0][20],
								timeEntry: results.data[0][21],
								opemEms: results.data[0][22],
								totalBilled: results.data[0][23],
								comments: results.data[0][24]
							}

							//Update Local
							this.reports.push(newRow);
							//this.ADD_REPORTST2(newRow);
						}
					});
					
					// Enable Continue Button
					this.stepDisable = false;
				}
				else
				{
					//Update Filename in UI
					this.filename = "Please select a CSV file";

					// Disable Continue Button
					this.stepDisable = true;

					//Show Snackbar
					this.$emit('actionError');
				}
				
				//this.reports.push(...test);
				//this.stepDisable = false;
			}
		}
	}
</script>

<style>
	
</style>