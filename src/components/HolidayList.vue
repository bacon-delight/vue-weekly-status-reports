<template>
	<v-card>
		<v-card-title>
			<v-layout>
				<v-flex xs12 md8>
					<h2 class="grey--text">Planned Holidays</h2>
				</v-flex>
				<v-flex xs12 md4>
					<v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
				</v-flex>
			</v-layout>
		</v-card-title>
		<v-divider></v-divider>
		<v-card-text>
			<v-data-table :headers="headers" :items="this.$store.state.holidays" :search="search">
				<template v-slot:items="props">
					<td>{{ formatDate(props.item.date) }}</td>
					<td>{{ props.item.comment }}</td>
				</template>
			</v-data-table>
		</v-card-text>
	</v-card>
</template>

<script>
	import { format } from 'date-fns';
	import { USER_HOLIDAYS_QUERY } from '../constants/graphql.js';

	export default {
		name: 'HolidayList',
		data() {
			return {
				headers: [
					{text: 'Dates', value: 'date'},
					{text: 'Comment', value: 'comment'},
				],
				search: '',
			}
		},
		apollo: {
			userHolidays: {
				query: USER_HOLIDAYS_QUERY,
				variables() {
					return {
						userId: this.$store.state.username
					}
				},
				result(response) {
					// Commit to Store
					this.$store.commit('FETCH_HOLIDAYS',response.data.userHolidays);
				},
				pollInterval: 5000
			}
		},
		methods: {
			formatDate(value) {
				return format(value, 'Do MMMM, YYYY');
			}
		},
	}
</script>

<style>
	
</style>