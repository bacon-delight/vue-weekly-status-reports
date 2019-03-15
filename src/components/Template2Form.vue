<template>
	<v-form ref="form" @submit.prevent="submit">

		<v-layout row wrap>
			<v-flex xs12 class="px-3">
				<v-text-field label="Year" prepend-icon="date_range" :rules="inputRules" v-model="year"></v-text-field>
			</v-flex>
		</v-layout>
		
		<v-layout row wrap>
			<v-flex xs12 sm6 class="px-3">
				<v-text-field label="Week Number" prepend-icon="date_range" :rules="inputRules" v-model="weekNumber"></v-text-field>
			</v-flex>
			<v-flex xs12 sm6 class="px-3">
				<v-text-field label="Week Ending" prepend-icon="date_range" :rules="inputRules" v-model="weekEnding"></v-text-field>
			</v-flex>
		</v-layout>

		<v-layout row wrap>
			<v-flex xs12 sm6 class="px-3">
				<v-text-field label="Primary Resource Name" prepend-icon="person" :rules="inputRules" v-model="primary"></v-text-field>
			</v-flex>
			<v-flex xs12 sm6 class="px-3">
				<v-text-field label="Secondary Resource Name" prepend-icon="person" v-model="secondary"></v-text-field>
			</v-flex>
		</v-layout>

		<v-layout class="pa-3" row>
			<v-expansion-panel>
				<v-expansion-panel-content>
					<div slot="header">Client Details</div>
					<v-card-text class="px-4 grey--text">
						<v-layout row wrap>
							<v-flex xs12 sm4 class="px-2">
								<v-text-field label="Client Region" prepend-icon="language" v-model="clientRegion"></v-text-field>
							</v-flex>
							<v-flex xs12 sm8 class="px-2">
								<v-text-field label="Client Name" prepend-icon="person" v-model="client"></v-text-field>
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
								<v-text-field label="Project Name" prepend-icon="turned_in_not" v-model="projectName"></v-text-field>
							</v-flex>
							<v-flex xs12 md6 class="px-2">
								<v-text-field label="Project Product" prepend-icon="shopping_cart" v-model="projectProduct"></v-text-field>
							</v-flex>
							<v-flex xs12 md6 class="px-2">
								<v-text-field label="Project Activity" prepend-icon="trending_up" v-model="projectActivity"></v-text-field>
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
								<v-menu ref="menu1" v-model="menu1" :close-on-content-click="false" :nudge-right="40" :return-value.sync="date1" lazy transition="scale-transition" offset-y full-width min-width="290px">
									<template v-slot:activator="{ on }">
										<v-text-field v-model="date1" label="Assigned Date" prepend-icon="event" readonly v-on="on"></v-text-field>
									</template>
									<v-date-picker v-model="date1" no-title scrollable>
										<v-spacer></v-spacer>
										<v-btn flat color="primary" @click="menu1 = false">Cancel</v-btn>
										<v-btn flat color="primary" @click="$refs.menu1.save(date1)">OK</v-btn>
									</v-date-picker>
								</v-menu>
							</v-flex>
							<v-flex xs12 md4 class="pa-2">
								<v-menu ref="menu2" v-model="menu2" :close-on-content-click="false" :nudge-right="40" :return-value.sync="date2" lazy transition="scale-transition" offset-y full-width min-width="290px">
									<template v-slot:activator="{ on }">
										<v-text-field v-model="date2" label="Temp Go Live Date" prepend-icon="event" readonly v-on="on"></v-text-field>
									</template>
									<v-date-picker v-model="date2" no-title scrollable>
										<v-spacer></v-spacer>
										<v-btn flat color="primary" @click="menu2 = false">Cancel</v-btn>
										<v-btn flat color="primary" @click="$refs.menu2.save(date2)">OK</v-btn>
									</v-date-picker>
								</v-menu>
							</v-flex>
							<v-flex xs12 md4 class="pa-2">
								<v-menu ref="menu3" v-model="menu3" :close-on-content-click="false" :nudge-right="40" :return-value.sync="date3" lazy transition="scale-transition" offset-y full-width min-width="290px">
									<template v-slot:activator="{ on }">
										<v-text-field v-model="date3" label="Start Date" prepend-icon="event" readonly v-on="on"></v-text-field>
									</template>
									<v-date-picker v-model="date3" no-title scrollable>
										<v-spacer></v-spacer>
										<v-btn flat color="primary" @click="menu3 = false">Cancel</v-btn>
										<v-btn flat color="primary" @click="$refs.menu3.save(date3)">OK</v-btn>
									</v-date-picker>
								</v-menu>
							</v-flex>
							<v-flex xs12 md4 class="pa-2">
								<v-menu ref="menu4" v-model="menu4" :close-on-content-click="false" :nudge-right="40" :return-value.sync="date4" lazy transition="scale-transition" offset-y full-width min-width="290px">
									<template v-slot:activator="{ on }">
										<v-text-field v-model="date4" label="Servers Available on PRS Date" prepend-icon="event" readonly v-on="on"></v-text-field>
									</template>
									<v-date-picker v-model="date4" no-title scrollable>
										<v-spacer></v-spacer>
										<v-btn flat color="primary" @click="menu4 = false">Cancel</v-btn>
										<v-btn flat color="primary" @click="$refs.menu4.save(date4)">OK</v-btn>
									</v-date-picker>
								</v-menu>
							</v-flex>
							<v-flex xs12 md4 class="pa-2">
								<v-menu ref="menu5" v-model="menu5" :close-on-content-click="false" :nudge-right="40" :return-value.sync="date5" lazy transition="scale-transition" offset-y full-width min-width="290px">
									<template v-slot:activator="{ on }">
										<v-text-field v-model="date5" label="Released for UAT Date" prepend-icon="event" readonly v-on="on"></v-text-field>
									</template>
									<v-date-picker v-model="date5" no-title scrollable>
										<v-spacer></v-spacer>
										<v-btn flat color="primary" @click="menu5 = false">Cancel</v-btn>
										<v-btn flat color="primary" @click="$refs.menu5.save(date5)">OK</v-btn>
									</v-date-picker>
								</v-menu>
							</v-flex>
							<v-flex xs12 md4 class="pa-2">
								<v-menu ref="menu6" v-model="menu6" :close-on-content-click="false" :nudge-right="40" :return-value.sync="date6" lazy transition="scale-transition" offset-y full-width min-width="290px">
									<template v-slot:activator="{ on }">
										<v-text-field v-model="date6" label="UAT Begin Date" prepend-icon="event" readonly v-on="on"></v-text-field>
									</template>
									<v-date-picker v-model="date6" no-title scrollable>
										<v-spacer></v-spacer>
										<v-btn flat color="primary" @click="menu6 = false">Cancel</v-btn>
										<v-btn flat color="primary" @click="$refs.menu6.save(date6)">OK</v-btn>
									</v-date-picker>
								</v-menu>
							</v-flex>
							<v-flex xs12 md4 class="pa-2">
								<v-menu ref="menu7" v-model="menu7" :close-on-content-click="false" :nudge-right="40" :return-value.sync="date7" lazy transition="scale-transition" offset-y full-width min-width="290px">
									<template v-slot:activator="{ on }">
										<v-text-field v-model="date7" label="UAT End Date" prepend-icon="event" readonly v-on="on"></v-text-field>
									</template>
									<v-date-picker v-model="date7" no-title scrollable>
										<v-spacer></v-spacer>
										<v-btn flat color="primary" @click="menu7 = false">Cancel</v-btn>
										<v-btn flat color="primary" @click="$refs.menu7.save(date7)">OK</v-btn>
									</v-date-picker>
								</v-menu>
							</v-flex>
						</v-layout>
					</v-card-text>
				</v-expansion-panel-content>
			</v-expansion-panel>
		</v-layout>

		<v-layout class="pa-3" row>
			<v-expansion-panel>
				<v-expansion-panel-content>
					<div slot="header">Additional Details</div>
					<v-card-text class="px-4 grey--text">
						<v-layout row wrap>
							<v-flex xs12 class="pa-2">
								<v-text-field label="Assigned for Time Entry" prepend-icon="restore" v-model="timeEntry"></v-text-field>
							</v-flex>
							<v-flex xs12 sm6 class="pa-2">
								<v-text-field label="One EMS Number" prepend-icon="style" v-model="opemEms"></v-text-field>
							</v-flex>
							<v-flex xs12 sm6 class="pa-2">
								<v-text-field label="Total Billed Hours" prepend-icon="attach_money" v-model="totalBilled"></v-text-field>
							</v-flex>
						</v-layout>
					</v-card-text>
				</v-expansion-panel-content>
			</v-expansion-panel>
		</v-layout>

		<v-layout row wrap>
			<v-flex xs12 class="px-3">
				<v-textarea label="Comments" prepend-icon="comment" v-model="comments"></v-textarea>
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
		name: 'Template2Form',
		data() {
			return {
				loading: false,
				inputRules: [
					inputData => inputData.length >0 || 'Cannot be empty'
				],
				year: '',
				date1: '',
				date2: '',
				date3: '',
				date4: '',
				date5: '',
				date6: '',
				date7: '',
				menu1: false,
				menu2: false,
				menu3: false,
				menu4: false,
				menu5: false,
				menu6: false,
				menu7: false,
				weekNumber: '',
				weekEnding: '',
				primary: '',
				secondary: '',
				clientRegion: '',
				client: '',
				projectProduct: '',
				projectName: '',
				projectActivity: '',
				timeEntry: '',
				opemEms: '',
				totalBilled: '',
				comments: ''
			}
		},
		methods: {
			...mapMutations([
				'ADD_REPORTST2',
			]),
			submit(e) {
				e.preventDefault();
				if(this.$refs.form.validate())
				{
					this.ADD_REPORTST2({
						year: this.year,
						date1: this.date1,
						date2: this.date2,
						date3: this.date3,
						date4: this.date4,
						date5: this.date5,
						date6: this.date6,
						date7: this.date7,
						weekNumber: this.weekNumber,
						weekEnding: this.weekEnding,
						primary: this.primary,
						secondary: this.secondary,
						clientRegion: this.clientRegion,
						client: this.client,
						projectProduct: this.projectProduct,
						projectName: this.projectName,
						projectActivity: this.projectActivity,
						timeEntry: this.timeEntry,
						opemEms: this.opemEms,
						totalBilled: this.totalBilled,
						comments: this.comments
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