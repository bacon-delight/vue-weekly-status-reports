import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		holidays: [],
		reportsT1: [],
		reportsT2: [],
		optionsT2: {
			resourceOptions: ['Grant Gustin', 'Barry Allen', 'Caitlyn Snow', 'Cisco Ramone'],
			clientRegionOptions: ['ANZ', 'APAC', 'EU', 'LATAM', 'Other'],
			projectActivityOptions: ['Post Go-Live Support', 'Server Build', 'Training', 'Upgrade'],
			statusOptions: ['Cancelled', 'Complete', 'No Info', 'No Scope', 'Not Started', 'On Hold', 'Work In Progress'],
			phaseOptions: ['Assigned', 'Installations', 'Documentation', 'Go-Live Planning', 'Kick Off', 'Live', 'Unit Testing', 'Waiting for Servers'],
			projectNameOptions: ['Project MK Ultra', 'Project X', 'Hunger Games'],
			projectManagerOptions: ['John Doe', 'Natalie Byers', 'Will Robinson', 'Tala Ashe', 'LA Thoma']
		},
		username: ''
	},
	mutations: {

		//Holidays
		ADD_HOLIDAY: (state, holiday) => {
			state.holidays.push(holiday);
		},
		FETCH_HOLIDAYS: (state, holidays) => {
			state.holidays = holidays;
		},

		//Archive 1
		ADD_REPORTST1: (state, report) => {
			state.reportsT1.push(report);
		},
		FETCH_REPORTS1: (state, reports) => {
			state.reportsT1 = reports;
		},

		//Archive 2
		ADD_REPORTST2: (state, report) => {
			state.reportsT2.push(report);
		},
		FETCH_REPORTS2: (state, reports) => {
			state.reportsT2 = reports;
		},
		ADD_REPORTST2_BULK: (state, reports) => {
			state.reportsT2.push(...reports);
		},

		//User
		REFRESH_USER: (state, username) => {
			state.username = username;
		},
	},
	actions: {

	},
	getters: {
		getHolidays: state => {
			return state.holidays;
		},
		getReportsT1: state => {
			return state.reportsT1;
		},
		getReportsT2: state => {
			return state.reportsT2;
		},
		getUser: state => {
			return state.username;
		},
	}
})
