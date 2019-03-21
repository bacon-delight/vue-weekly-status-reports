<template>
	<v-card>
		<v-card-title>
			<v-layout>
				<v-flex xs12 md8>
					<h2 class="grey--text">Report Archive 1</h2>
				</v-flex>
				<v-flex xs12 md4>
					<v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
				</v-flex>
			</v-layout>
		</v-card-title>
		<v-divider></v-divider>
		<v-card-text>
			<v-data-table :headers="headers" :items="this.$store.state.reportsT1" :search="search">
				<template v-slot:items="props">
					<td>{{ formatDate(props.item.weekstart) }}</td>
					<td>{{ formatDate(props.item.weekend) }}</td>
					<td>{{ props.item.distribution }}</td>
					<td>{{ props.item.project }}</td>
					<td>
						<Popup1 v-bind:report='props.item' />
					</td>
				</template>
			</v-data-table>
		</v-card-text>
	</v-card>
</template>

<script>
	import { format } from 'date-fns';
	import Popup1 from '@/components/Popup1.vue';
	import { FETCH_USER_ARCHIVE1 } from '../constants/graphql.js';

	export default {
		name: 'Archive1',
		data() {
			return {
				headers: [
					{text: 'Week', value: 'weekstart'},
					{text: 'Week End', value: 'weekend'},
					{text: 'Distribution', value: 'distribution'},
					{text: 'Project', value: 'project'},
					{text: 'View', value: '', sortable: false},
				],
				search: '',
			}
		},
		components: {
			Popup1
		},
		apollo: {
			userArchive1s: {
				query: FETCH_USER_ARCHIVE1,
				variables() {
					return {
						userId: this.$store.state.username
					}
				},
				result(response) {
					// Commit to Store
					this.$store.commit('FETCH_REPORTS1',response.data.userArchive1s);
				}
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

</style>