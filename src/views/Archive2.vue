<template>
	<v-card>
		<v-card-title>
			<v-layout>
				<v-flex xs12 md8>
					<h2 class="grey--text">Report Archive 2</h2>
				</v-flex>
				<v-flex xs12 md4>
					<v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
				</v-flex>
			</v-layout>
		</v-card-title>
		<v-divider></v-divider>
		<v-card-text>
			
			<v-data-table :headers="headers" :items="reports" :search="search">
				<template v-slot:items="props">
					<td>{{ props.item.year }}</td>
					<td>{{ props.item.weekNumber }}</td>
					<td>{{ props.item.weekEnding }}</td>
					<td>{{ props.item.primary }}</td>
					<td>{{ props.item.client }}</td>
					<td>{{ props.item.projectName }}</td>
					<td>
						<Popup2 v-bind:report='props.item' />
					</td>
				</template>
			</v-data-table>
		</v-card-text>
	</v-card>
</template>

<script>
	import Popup2 from '@/components/Popup2.vue';
	export default {
		name: 'Archive2',
		data() {
			return {
				headers: [
					{text: 'Year', value: 'year'},
					{text: 'Week Number', value: 'weekNumber'},
					{text: 'Week Ending', value: 'weekEnding'},
					{text: 'Primary Resource', value: 'primary'},
					{text: 'Client', value: 'client'},
					{text: 'Project', value: 'projectName'},
					{text: 'View', value: '', sortable: false},
				],
				reports: this.$store.state.reportsT2,
				search: ''
			}
		},
		components: {
			Popup2
		},
		methods: {
		}
	}
</script>

<style>

</style>