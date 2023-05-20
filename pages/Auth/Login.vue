<template>
	<div class="centerForm">
		<form class="authForm">
			<AuthInput
				placeholder="E-Posta"
				type="email"
				v-model="userLoginForm.email"
				:value="userLoginForm.email"
			/>
			<AuthInput
				placeholder="Şifre"
				type="password"
				v-model="userLoginForm.password"
				:value="userLoginForm.password"
			/>
			<AuthLoginButton />
			<div class="flex justify-between">
				<AuthGoogleButton />
				<div class="mt-3">Şifremi unuttum</div>
			</div>
		</form>
	</div>
</template>

<script setup lang="ts">
	import { UserLoginForm } from '~/types';

	const userLoginForm: UserLoginForm = reactive({
		email: '',
		password: '',
	});
</script>
