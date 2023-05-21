<template>
	<div class="centerForm">
		<form class="authForm">
			<AuthInput
				placeholder="E-Posta"
				type="email"
				v-model="IUserLoginForm.email"
				:value="IUserLoginForm.email"
			/>
			<AuthInput
				placeholder="Şifre"
				type="password"
				v-model="IUserLoginForm.password"
				:value="IUserLoginForm.password"
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
	import { IUserLoginForm } from '~/types';

	const IUserLoginForm: IUserLoginForm = reactive({
		email: '',
		password: '',
	});
</script>
