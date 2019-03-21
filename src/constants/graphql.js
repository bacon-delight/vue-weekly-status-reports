import gql from 'graphql-tag';

export const USER_HOLIDAYS_QUERY = gql`
	query UserHolidays($userId: String!) {
		userHolidays(userId: $userId) {
			date
			comment
		}
	}`

export const ADD_USER_HOLIDAY_MUTATION = gql`
	mutation ($date: String!, $comment: String!, $userId: String!) {
		addHoliday(date: $date, comment: $comment, userId: $userId) {
			id
		}
	}`

export const FETCH_USER_ARCHIVE1 = gql`
	query UserArchive1s($userId: String!) {
		userArchive1s(userId: $userId) {
			id
			weekstart
			weekend
			distribution
			project
			accomplishments
			plans
			issues
			bh
			nbh
			expenses
			expensesNext
		}
	}`

export const PUBLISH_REPORT1 = gql`
	mutation ($userId: String!, $weekstart: String!, $weekend: String!, $distribution: String!, $project: String!, $accomplishments: String!, $plans: String!, $issues: String!, $bh: String!, $nbh: String!, $expenses: String, $expensesNext: String) {
		addArchive1(userId: $userId, weekstart: $weekstart, weekend: $weekend, distribution: $distribution, project: $project, accomplishments: $accomplishments, plans: $plans, issues: $issues, bh: $bh, nbh: $nbh, expenses: $expenses, expensesNext: $expensesNext) {
			id
		}
	}`

export const FETCH_USER_ARCHIVE2 = gql`
	query UserArchive2s($userId: String!) {
		userArchive2s(userId: $userId) {
			id,
			year,
			weekNumber,
			weekEnding,
			primary,
			secondary,
			clientRegion,
			client,
			projectProduct,
			projectName,
			projectActivity,
			status,
			phase,
			projectManager,
			date1,
			date2,
			date3,
			date4,
			date5,
			date6,
			date7,
			date8,
			date9,
			timeEntry,
			opemEms,
			totalBilled,
			comments
		}
	}`

export const PUBLISH_REPORT2 = gql`
	mutation ($userId: String!, $year: String, $weekNumber: String, $weekEnding: String, $primary: String, $secondary: String, $clientRegion: String, $client: String, $projectProduct: String, $projectName: String, $projectActivity: String, $status: String, $phase: String, $projectManager: String, $date1: String, $date2: String, $date3: String, $date4: String, $date5: String, $date6: String, $date7: String, $date8: String, $date9: String, $timeEntry: String, $opemEms: String, $totalBilled: String, $comments: String) {
		addArchive2(userId: $userId, year: $year, weekNumber: $weekNumber, weekEnding: $weekEnding, primary: $primary, secondary: $secondary, clientRegion: $clientRegion, client: $client, projectProduct: $projectProduct, projectName: $projectName, projectActivity: $projectActivity, status: $status, phase: $phase, projectManager: $projectManager, date1: $date1, date2: $date2, date3: $date3, date4: $date4, date5: $date5, date6: $date6, date7: $date7, date8: $date8, date9: $date9, timeEntry: $timeEntry, opemEms: $opemEms, totalBilled: $totalBilled, comments: $comments) {
			id
		}
	}`

export const PUBLISH_REPORT2_BULK = gql`
	mutation ($userId: String!, $year: String, $weekNumber: String, $weekEnding: String, $primary: String, $secondary: String, $clientRegion: String, $client: String, $projectProduct: String, $projectName: String, $projectActivity: String, $status: String, $phase: String, $projectManager: String, $date1: String, $date2: String, $date3: String, $date4: String, $date5: String, $date6: String, $date7: String, $date8: String, $date9: String, $timeEntry: String, $opemEms: String, $totalBilled: String, $comments: String) {
		addArchive2(userId: $userId, year: $year, weekNumber: $weekNumber, weekEnding: $weekEnding, primary: $primary, secondary: $secondary, clientRegion: $clientRegion, client: $client, projectProduct: $projectProduct, projectName: $projectName, projectActivity: $projectActivity, status: $status, phase: $phase, projectManager: $projectManager, date1: $date1, date2: $date2, date3: $date3, date4: $date4, date5: $date5, date6: $date6, date7: $date7, date8: $date8, date9: $date9, timeEntry: $timeEntry, opemEms: $opemEms, totalBilled: $totalBilled, comments: $comments) {
			id
		}
	}`