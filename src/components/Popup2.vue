<template>
	<v-dialog max-width="700px" v-model="dialog">
		<v-btn flat slot="activator" class="">View</v-btn>
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
						Project Product:
					</v-flex>
					<v-flex xs12 sm6 class="pa-2" id="contents">
						{{ this.report.projectProduct }}
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


				<!-- Dates -->
				<v-layout row wrap>
					<v-flex xs12 sm6 class="pa-2" id="topics">
						Assigned Date:
					</v-flex>
					<v-flex xs12 sm6 class="pa-2" id="contents">
						{{ this.report.date1 }}
					</v-flex>
				</v-layout>
				<v-layout row wrap>
					<v-flex xs12 sm6 class="pa-2" id="topics">
						Temp Go Live Date:
					</v-flex>
					<v-flex xs12 sm6 class="pa-2" id="contents">
						{{ this.report.date2 }}
					</v-flex>
				</v-layout>
				<v-layout row wrap>
					<v-flex xs12 sm6 class="pa-2" id="topics">
						Start Date:
					</v-flex>
					<v-flex xs12 sm6 class="pa-2" id="contents">
						{{ this.report.date3 }}
					</v-flex>
				</v-layout>
				<v-layout row wrap>
					<v-flex xs12 sm6 class="pa-2" id="topics">
						Servers Available on PRS Date:
					</v-flex>
					<v-flex xs12 sm6 class="pa-2" id="contents">
						{{ this.report.date4 }}
					</v-flex>
				</v-layout>
				<v-layout row wrap>
					<v-flex xs12 sm6 class="pa-2" id="topics">
						Released for UAT Date:
					</v-flex>
					<v-flex xs12 sm6 class="pa-2" id="contents">
						{{ this.report.date5 }}
					</v-flex>
				</v-layout>
				<v-layout row wrap>
					<v-flex xs12 sm6 class="pa-2" id="topics">
						UAT Begin Date:
					</v-flex>
					<v-flex xs12 sm6 class="pa-2" id="contents">
						{{ this.report.date6 }}
					</v-flex>
				</v-layout>
				<v-layout row wrap>
					<v-flex xs12 sm6 class="pa-2" id="topics">
						UAT End Date:
					</v-flex>
					<v-flex xs12 sm6 class="pa-2" id="contents">
						{{ this.report.date7 }}
					</v-flex>
				</v-layout>



				<!-- Additional Details -->
				<v-layout row wrap>
					<v-flex xs12 sm6 class="pa-2" id="topics">
						Assigned for Time Entry:
					</v-flex>
					<v-flex xs12 sm6 class="pa-2" id="contents">
						{{ this.report.timeEntry }}
					</v-flex>
				</v-layout>
				<v-layout row wrap>
					<v-flex xs12 sm6 class="pa-2" id="topics">
						One EMS Number:
					</v-flex>
					<v-flex xs12 sm6 class="pa-2" id="contents">
						{{ this.report.opemEms }}
					</v-flex>
				</v-layout>
				<v-layout row wrap>
					<v-flex xs12 sm6 class="pa-2" id="topics">
						Total Billed Hours:
					</v-flex>
					<v-flex xs12 sm6 class="pa-2" id="contents">
						{{ this.report.totalBilled }}
					</v-flex>
				</v-layout>


				<!-- Comments -->
				<v-layout row wrap>
					<v-flex xs12 sm6 class="pa-2" id="topics">
						Comments:
					</v-flex>
					<v-flex xs12 sm6 class="pa-2" id="contents">
						{{ this.report.comments }}
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
	export default {
		name: 'Popup2',
		props: ['report'],
		data() {
			return {
				dialog: false
			}
		},
		methods: {
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