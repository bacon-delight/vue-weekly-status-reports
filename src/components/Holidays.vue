<template>
	<v-form ref="form" @submit.prevent="submit">
		
		<!-- Holiday List Input -->
		<v-menu ref="menu" v-model="menu" :close-on-content-click="false" :nudge-right="40" :return-value.sync="dates" lazy transition="scale-transition" offset-y full-width min-width="290px">
			<template v-slot:activator="{ on }">
				<v-combobox v-model="dates" multiple chips small-chips label="Select Dates" prepend-icon="event" readonly v-on="on">
				</v-combobox>
			</template>
			<v-date-picker v-model="dates" multiple no-title scrollable :allowed-dates="allowedDates">
				<v-spacer></v-spacer>
				<v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
				<v-btn flat color="primary" @click="$refs.menu.save(dates)">OK</v-btn>
			</v-date-picker>
		</v-menu>

		<!-- Comment Field -->
		<v-text-field label="Comments" v-model="comments" prepend-icon="chat_bubble" :rules="inputRules"></v-text-field>

		<!-- Submit -->
		<v-btn flat class="success mx-0 mt-3" :loading="loading" @click="submit">
			<span>Submit</span>
			<v-icon right>chevron_right</v-icon>
		</v-btn>
	</v-form>
</template>

<script>
	import { isAfter, startOfToday, isSunday, isSaturday } from 'date-fns';
	import { ADD_USER_HOLIDAY_MUTATION } from '../constants/graphql.js';
	export default {
		name: 'Holidays',
		data() {
			return {
				dates: [],
				menu: false,
				comments: '',
				loading: false,
				inputRules: [
					inputData => inputData.length >0 || 'Cannot be empty'
				],
			}
		},
		methods: {
			submit(e) {
				e.preventDefault();
				if(this.dates.length > 0)
				{
					if(this.$refs.form.validate())
					{
						this.dates.forEach((value) => {

							this.$apollo.mutate({
								mutation: ADD_USER_HOLIDAY_MUTATION,
								variables: {
									date: value,
									comment: this.comments,
									userId: this.$store.state.username
								}
							}).then(() => {
								//Show Snackbar
								this.$emit('actionSuccess');
							});
						});

						//Clear Form
						//this.$refs.form.reset()
					}
				}
			},
			allowedDates(val) {
				if(isSunday(val) || isSaturday(val))
					return false;
				return isAfter(val, startOfToday());
			}
		},
		mounted() {
			
		}
	}
</script>

<style>

</style>