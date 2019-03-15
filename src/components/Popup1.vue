<template>
	<v-dialog max-width="700px" v-model="dialog">
		<v-btn flat slot="activator" class="">View</v-btn>
		<v-card>
			<v-card-title>
				<h2 class="grey--text">Record Details</h2>
			</v-card-title>
			<v-divider></v-divider>
			<v-card-text>
				<v-layout row wrap>
					<v-flex xs12 sm6 class="pa-2" id="topics">
						Week Start:
					</v-flex>
					<v-flex xs12 sm6 class="pa-2" id="contents">
						{{ formatDate(this.report.weekstart) }}
					</v-flex>
				</v-layout>
				<v-layout row wrap>
					<v-flex xs12 sm6 class="pa-2" id="topics">
						Week End:
					</v-flex>
					<v-flex xs12 sm6 class="pa-2" id="contents">
						{{ formatDate(this.report.weekend) }}
					</v-flex>
				</v-layout>
				<v-layout row wrap>
					<v-flex xs12 sm6 class="pa-2" id="topics">
						Distribution/Project Manager:
					</v-flex>
					<v-flex xs12 sm6 class="pa-2" id="contents">
						{{ this.report.distribution }}
					</v-flex>
				</v-layout>
				<v-layout row wrap>
					<v-flex xs12 sm6 class="pa-2" id="topics">
						Project Name:
					</v-flex>
					<v-flex xs12 sm6 class="pa-2" id="contents">
						{{ this.report.project }}
					</v-flex>
				</v-layout>
				<v-layout row wrap>
					<v-flex xs12 sm6 class="pa-2" id="topics">
						Accomplishments:
					</v-flex>
					<v-flex xs12 sm6 class="pa-2" id="contents">
						{{ this.report.accomplishments }}
					</v-flex>
				</v-layout>
				<v-layout row wrap>
					<v-flex xs12 sm6 class="pa-2" id="topics">
						Plans for Next Period:
					</v-flex>
					<v-flex xs12 sm6 class="pa-2" id="contents">
						{{ this.report.plans }}
					</v-flex>
				</v-layout>
				<v-layout row wrap>
					<v-flex xs12 sm6 class="pa-2" id="topics">
						Issues and Concerns:
					</v-flex>
					<v-flex xs12 sm6 class="pa-2" id="contents">
						{{ this.report.issues }}
					</v-flex>
				</v-layout>
				<v-layout row wrap>
					<v-flex xs12 sm6 class="pa-2" id="topics">
						Billable Hours:
					</v-flex>
					<v-flex xs12 sm6 class="pa-2" id="contents">
						{{ this.report.bh }}
					</v-flex>
				</v-layout>
				<v-layout row wrap>
					<v-flex xs12 sm6 class="pa-2" id="topics">
						Non-Billable Hours:
					</v-flex>
					<v-flex xs12 sm6 class="pa-2" id="contents">
						{{ this.report.nbh }}
					</v-flex>
				</v-layout>
				<v-layout row wrap>
					<v-flex xs12 sm6 class="pa-2" id="topics">
						Expenses this Perios:
					</v-flex>
					<v-flex xs12 sm6 class="pa-2" id="contents">
						{{ this.report.expenses }}
					</v-flex>
				</v-layout>
				<v-layout row wrap>
					<v-flex xs12 sm6 class="pa-2" id="topics">
						Expenses Planned for Next Period:
					</v-flex>
					<v-flex xs12 sm6 class="pa-2" id="contents">
						{{ this.report.expensesNext }}
					</v-flex>
				</v-layout>
			</v-card-text>
			<v-divider></v-divider>
			<v-card-actions>
				<v-btn color="green darken-1" flat="flat" @click="dialog = false">Close</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
	import { format } from 'date-fns';
	export default {
		name: 'Popup1',
		props: ['report'],
		data() {
			return {
				dialog: false
			}
		},
		methods: {
			formatDate(value) {
				return format(value, 'Do MMMM, YYYY');
			}
		}
	}
</script>

<style>
	#topics {
		font-size: 15px;
		font-weight: bolder;
		letter-spacing: 1px;
	}
	#contents {
		font-size: 15px;
	}
</style>