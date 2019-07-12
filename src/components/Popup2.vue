<template>
	<v-dialog max-width="700px" v-model="dialog">
		<v-btn flat dark round small slot="activator" class="blue darken-1">View</v-btn>
		<v-card>
			<v-card-title>
				<h2 class="grey--text">Record Details</h2>
			</v-card-title>
			<v-divider></v-divider>
			<v-card-text style="max-height: 400px; overflow-y: scroll;">
				<v-layout row wrap>
					<v-flex xs12 sm6 class="pa-2" id="topics">
						Year:
					</v-flex>
					<v-flex xs12 sm6 class="pa-2" id="contents">
						{{ this.report.year }}
					</v-flex>
				</v-layout>
				<v-layout row wrap>
					<v-flex xs12 sm6 class="pa-2" id="topics">
						Week Number:
					</v-flex>
					<v-flex xs12 sm6 class="pa-2" id="contents">
						{{ this.report.weekNumber }}
					</v-flex>
				</v-layout>
				<v-layout row wrap>
					<v-flex xs12 sm6 class="pa-2" id="topics">
						Week Ending:
					</v-flex>
					<v-flex xs12 sm6 class="pa-2" id="contents">
						{{ this.report.weekEnding }}
					</v-flex>
				</v-layout>
				<v-layout row wrap>
					<v-flex xs12 sm6 class="pa-2" id="topics">
						Primary Resource Name:
					</v-flex>
					<v-flex xs12 sm6 class="pa-2" id="contents">
						{{ this.report.primary }}
					</v-flex>
				</v-layout>
				<v-layout row wrap>
					<v-flex xs12 sm6 class="pa-2" id="topics">
						Secondary Resource Name:
					</v-flex>
					<v-flex xs12 sm6 class="pa-2" id="contents">
						{{ this.report.secondary }}
					</v-flex>
				</v-layout>

				<!-- Client Details -->
				<v-layout row wrap>
					<v-flex xs12 sm6 class="pa-2" id="topics">
						Client Region:
					</v-flex>
					<v-flex xs12 sm6 class="pa-2" id="contents">
						{{ this.report.clientRegion }}
					</v-flex>
				</v-layout>
				<v-layout row wrap>
					<v-flex xs12 sm6 class="pa-2" id="topics">
						Client Name:
					</v-flex>
					<v-flex xs12 sm6 class="pa-2" id="contents">
						{{ this.report.client }}
					</v-flex>
				</v-layout>


				<!-- Project Details -->
				<v-layout row wrap>
					<v-flex xs12 sm6 class="pa-2" id="topics">
						Project Name:
					</v-flex>
					<v-flex xs12 sm6 class="pa-2" id="contents">
						{{ this.report.projectName }}
					</v-flex>
				</v-layout>
				<v-layout row wrap>
					<v-flex xs12 sm6 class="pa-2" id="topics">
						Project Activity:
					</v-flex>
					<v-flex xs12 sm6 class="pa-2" id="contents">
						{{ this.report.projectActivity }}
					</v-flex>
				</v-layout>
				<v-layout row wrap>
					<v-flex xs12 sm6 class="pa-2" id="topics">
						Status:
					</v-flex>
					<v-flex xs12 sm6 class="pa-2" id="contents">
						{{ this.report.status }}
					</v-flex>
				</v-layout>
				<v-layout row wrap>
					<v-flex xs12 sm6 class="pa-2" id="topics">
						Phase:
					</v-flex>
					<v-flex xs12 sm6 class="pa-2" id="contents">
						{{ this.report.phase }}
					</v-flex>
				</v-layout>
				<v-layout row wrap>
					<v-flex xs12 sm6 class="pa-2" id="topics">
						Project Manager:
					</v-flex>
					<v-flex xs12 sm6 class="pa-2" id="contents">
						{{ this.report.projectManager }}
					</v-flex>
				</v-layout>


				<!-- Dates -->
				<v-layout row wrap>
					<v-flex xs12 sm6 class="pa-2" id="topics">
						Assigned Date:
					</v-flex>
					<v-flex xs12 sm6 class="pa-2" id="contents">
						{{ formatDate(this.report.date1) }}
					</v-flex>
				</v-layout>
				<v-layout row wrap>
					<v-flex xs12 sm6 class="pa-2" id="topics">
						Temp Go Live Date:
					</v-flex>
					<v-flex xs12 sm6 class="pa-2" id="contents">
						{{ formatDate(this.report.date2) }}
					</v-flex>
				</v-layout>
				<v-layout row wrap>
					<v-flex xs12 sm6 class="pa-2" id="topics">
						Start Date:
					</v-flex>
					<v-flex xs12 sm6 class="pa-2" id="contents">
						{{ formatDate(this.report.date3) }}
					</v-flex>
				</v-layout>
				<v-layout row wrap>
					<v-flex xs12 sm6 class="pa-2" id="topics">
						Servers Available on PRS Date:
					</v-flex>
					<v-flex xs12 sm6 class="pa-2" id="contents">
						{{ formatDate(this.report.date4) }}
					</v-flex>
				</v-layout>
				<v-layout row wrap>
					<v-flex xs12 sm6 class="pa-2" id="topics">
						Released for UAT Date:
					</v-flex>
					<v-flex xs12 sm6 class="pa-2" id="contents">
						{{ formatDate(this.report.date5) }}
					</v-flex>
				</v-layout>
				<v-layout row wrap>
					<v-flex xs12 sm6 class="pa-2" id="topics">
						UAT Begin Date:
					</v-flex>
					<v-flex xs12 sm6 class="pa-2" id="contents">
						{{ formatDate(this.report.date6) }}
					</v-flex>
				</v-layout>
				<v-layout row wrap>
					<v-flex xs12 sm6 class="pa-2" id="topics">
						UAT End Date:
					</v-flex>
					<v-flex xs12 sm6 class="pa-2" id="contents">
						{{ formatDate(this.report.date7) }}
					</v-flex>
				</v-layout>
				<v-layout row wrap>
					<v-flex xs12 sm6 class="pa-2" id="topics">
						Go Live Date:
					</v-flex>
					<v-flex xs12 sm6 class="pa-2" id="contents">
						{{ formatDate(this.report.date8) }}
					</v-flex>
				</v-layout>
				<v-layout row wrap>
					<v-flex xs12 sm6 class="pa-2" id="topics">
						Transition to Support Date:
					</v-flex>
					<v-flex xs12 sm6 class="pa-2" id="contents">
						{{ formatDate(this.report.date9) }}
					</v-flex>
				</v-layout>


				<!-- Comments -->
				<v-layout row wrap>
					<v-flex xs12 sm6 class="pa-2" id="topics">
						Comments:
					</v-flex>
					<v-flex xs12 sm6 class="pa-2">
						<p id="comments">{{ this.report.comments }}</p>
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
		name: 'Popup2',
		props: ['report'],
		data() {
			return {
				dialog: false
			}
		},
		methods: {
			formatDate(value) {
				if (value == '')
					return '';
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
	#comments {
		font-size: 15px;
		white-space: pre-line;
	}
</style>