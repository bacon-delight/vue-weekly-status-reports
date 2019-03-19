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
				weekNumber: '10',
				weekEnding: '11',
				primary: 'Bacon',
				secondary: 'Eggs',
				clientRegion: 'USA',
				client: 'Bilonz',
				projectProduct: 'Cloudify',
				projectName: 'Cloudify Support',
				projectActivity: 'Development',
				status: 'WIP',
				phase: 'Live',
				projectManager: 'Hambone',
				date1: '2019-03-20',
				date2: '2019-03-22',
				date3: '2019-03-20',
				date4: '2019-03-20',
				date5: '2019-03-20',
				date6: '2019-03-20',
				date7: '2019-03-20',
				date8: '2019-03-20',
				date9: '2019-03-20',
				timeEntry: '7 hours',
				opemEms: '7221',
				totalBilled: '8',
				comments: 'No Comments'
			}
		],
		optionsT2: {
			resourceOptions: ['Abdul Kalam Azad', 'Ashish Anand', 'Atul Shah', 'Dan Gillette', 'Daniel Daniels', 'Daniela Baldazzi', 'Hemant Kumar Joshi', 'Jason Flores', 'Jason Young', 'Manoj Kumar Sharma', 'Mohammed Khalid Nehan', 'Prashant Kumar', 'Ramakanth Porolla', 'Rana Abhishek Singh', 'Sarang Tade', 'Twan Jansen', 'Veenashree M E', 'Yogesh Shukla'],
			clientRegionOptions: ['ANZ', 'APAC', 'EU', 'LATAM', 'MET', 'NA'],
			projectProductOptions: ['DECG', 'DWP', 'IECG', 'ISCV', 'PB', 'PedsCath', 'XcC', 'Xcelera', 'XpC', 'XPER'],
			projectActivityOptions: ['Broker Migration', 'Context Launch', 'EMPI', 'Extensions', 'ICL', 'Image Migration', 'Interface Addition', 'MRN Conversion', 'N-1', 'Net New', 'New EMR/HIS', 'Post Go-Live Support', 'Report Registration', 'Report Resend', 'Server Build', 'Training', 'Upgrade'],
			statusOptions: ['Cancelled', 'Complete', 'No Info', 'No Scope', 'Not Started', 'On Hold - Client', 'On Hold - Philips', 'WIP'],
			phaseOptiona: ['Assigned', 'Configurations', 'Customizations', 'Documentation', 'Go-Live Planning', 'Kick Off', 'Live', 'Resource Requested', 'Site Survey', 'TTS', 'UAT', 'Unit Testing', 'Waiting for Servers'],
			timeEntryOptions: ['Yes', 'No', 'Request Sent', 'Pending'],
			projectNameOptions: ['IBE CONFIGURATION', 'IBE FOR DWP', 'IBE for iECG', 'IBE FOR ISCV', 'IBE for PedsCath', 'IBE For Xcelera', 'IBE FOR XPER', 'IBE GO-LIVE SUPPORT', 'IBE L2 Support', 'IBE SA TRAINING', 'IBE SERVER BUILD', 'IBE UPGRADE', 'MRN CONVERSION', 'XCC SUPPORT', 'XCC TO IBE MIGRATION', 'XpC CONFIGURATION', 'XpC NET NEW', 'XPC TO IBE MIGRATION', 'XpC UPGRADE'],
			projectManagerOptions: ['Alicia Mickel', 'Amir Rosenbloom', 'Belinda Peck-Akisanmi', 'Bermont Leblanc', 'Bert Reinders', 'Bowen Rice', 'Brian Beasley', 'Bruce Graham', 'Carter Carter', 'Catherine Senz', 'Chris Botelho', 'Christian Thompson', 'Clarisse Loechleiter', 'Cormac Waynne', 'Daniel Daniels', 'David Lam', 'Deborah Suraci', 'Deirdre Thomas', 'Dennis Soroczak', 'Don Hauck', 'Donald Martineau', 'Eric Wagenknecht', 'Faraz Muhammad', 'Garland Jonshon', 'George Mulligan', 'Girish Muttagi', 'Jackie Crouser', 'Janet Sobczak', 'Jeremy Ebenezer Wang', 'John Ives', 'John Laundon', 'Joseph Shearn', 'Karen Fitzmaurice', 'Karie Randall', 'Kelly Franz', 'Kent Carle', 'Koen Heijnen', 'Kumaran Thayumanavan ', 'Lijoy ', 'Luke Kearns', 'Luke Thomas', 'Marc Joosten', 'Marché Williams', 'Mark Brennan', 'Mary L. Millette', 'Matthew Croxford', 'Michael Lyons', 'Michelle Fox', 'Nixon Khoo', 'No Pm For This N-1.', 'Pablo Naveas', 'Pattachai', 'Paul Campbell', 'Paul De Wergifosse', 'Peter Gakuru', 'Richard Brooks', 'Rick Lawton', 'Rick O\'Brien', 'Ronald Krebes', 'Ruurd Sanders', 'Samhita Gaddam', 'Samuel Straughan', 'Sanjay Patel', 'Sarah Englert', 'Sarut Praditpan', 'Scott Barnes', 'Sheikh Mahmood', 'Stephane Denault', 'Stephen French', 'Tan Chun Hooi', 'Thomas Clohessy', 'Tony Drake', 'Twan Jansen']
		},
		username: 'nobody@philips.com'
	},
	mutations: {
		ADD_HOLIDAY: (state, holiday) => {
			state.holidays.push(holiday);
		},
		ADD_REPORTST1: (state, report) => {
			state.reportsT1.push(report);
		},
		ADD_REPORTST2: (state, report) => {
			state.reportsT2.push(report);
		},
		ADD_REPORTST2_BULK: (state, reports) => {
			state.reportsT2.push(...reports);
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
