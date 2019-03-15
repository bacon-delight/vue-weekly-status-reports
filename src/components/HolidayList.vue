<template>
	<div>
		<v-layout>
			<v-flex xs1 md8>
				
			</v-flex>
			<v-flex xs11 md4>
				<v-text-field outline v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
			</v-flex>
		</v-layout>
		<v-data-table :headers="headers" :items="holidays" :search="search">
			<template v-slot:items="props">
				<td>{{ formatDate(props.item.date) }}</td>
				<td>{{ props.item.comment }}</td>
			</template>
		</v-data-table>
	</div>
</template>

<script>
	import { format } from 'date-fns';
	export default {
		name: 'HolidayList',
		data() {
			return {
				headers: [
					{text: 'Dates', value: 'date'},
					{text: 'Comment', value: 'comment'},
				],
				holidays: this.$store.state.holidays,
				search: ''
			}
		},
		computed: {
		},
		methods: {
			formatDate(value) {
				return format(value, 'Do MMMM, YYYY');
			}
		}
	}
</script>

<style>
	
</style>