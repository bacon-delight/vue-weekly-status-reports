import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		holidays: [
			{ date: '2019-03-20', comment: 'Going to repair car' },
			{ date: '2019-03-22', comment: 'Need to work on Bilonz' },
		],
		reportsT1: [
			{
				weekstart: '2019-03-20',
				weekend: '2019-03-22',
				distribution: 'Bacon',
				project: 'Bilonz',
				accomplishments: 'APIs Work',
				plans: 'Improve GUI',
				issues: 'Data Migration',
				bh: '82',
				nbh: '176',
				expenses: 'Rs. 15,000/-',
				expensesNext: 'Rs. 7,000/-'
			}
		],
		reportsT2: [
			{
				year: '2019',
				date1: '2019-03-20',
				date2: '2019-03-22',
				date3: '2019-03-20',
				date4: '2019-03-20',
				date5: '2019-03-20',
				date6: '2019-03-20',
				date7: '2019-03-20',
				weekNumber: '10',
				weekEnding: '11',
				primary: 'Bacon',
				secondary: 'Eggs',
				clientRegion: 'USA',
				client: 'Bilonz',
				projectProduct: 'Cloudify',
				projectName: 'Cloudify Support',
				projectActivity: 'Development',
				timeEntry: '7 hours',
				opemEms: '7221',
				totalBilled: '8',
				comments: 'No Comments'
			}
		],
		username: 'nobody@philips.com'
	},
	mutations: {
		ADD_HOLIDAY: (state, holiday) => {
			state.holidays.push(holiday);
		},
		ADD_REPORTST1: (state, report) => {
			state.reportsT1.push(report);
		}
		,
		ADD_REPORTST2: (state, report) => {
			state.reportsT2.push(report);
		},
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
