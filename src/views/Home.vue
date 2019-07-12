<template>

	<!-- Centered Container -->
	<v-layout align-center justify-center row fill-height>
		<v-card width="600px" max-width="90%" style="border-radius: 10px;">
			<v-card-title>
				<h2 class="grey--text lighten-2">Sign In to Access Dashboard</h2>
			</v-card-title>
			<v-divider></v-divider>
			<v-card-text>

				<!-- Login Form -->
				<v-form ref="form" @submit.prevent="submit">
					<!-- Username Input -->
					<v-text-field label="Company Mail" v-model="username" hint="username@company.com" :rules="inputRules"></v-text-field>
					<!-- Submit -->
					<v-btn flat class="success mx-0 mt-3" :loading="loading" @click="submit">
						<span>Enter</span>
						<v-icon right>chevron_right</v-icon>
					</v-btn>
				</v-form>


			</v-card-text>
		</v-card>
	</v-layout>
</template>

<script>
	import { mapMutations } from 'vuex';
	export default {
		name: 'Home',
		data() {
			return {
				username: '',
				loading: false,
				inputRules: [
					inputData => inputData.length >=5 || 'Username is too short'
				],
			}
		},
		components: {
			
		},
		methods: {
			...mapMutations([
				'REFRESH_USER',
			]),
			submit(e) {
				e.preventDefault();
				if(this.$refs.form.validate())
				{
					this.loading = true;
					this.REFRESH_USER(this.username);

					//Add into Session
					sessionStorage.setItem("user",this.username);
					
					setTimeout(() => this.$router.push('dashboard'), 1500);
				}
			}
		},
	}
</script>
