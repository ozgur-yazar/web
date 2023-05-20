<template>
	<div class="centerForm">
		<form class="authForm">
			<AuthInput
				placeholder="Ad Soyad"
				type="text"
				v-model="userRegisterForm.name"
				:value="userRegisterForm.name"
			/>
			<AuthInput
				placeholder="Kullanıcı Adı"
				type="text"
				v-model="userRegisterForm.username"
				:value="userRegisterForm.username"
			/>
			<AuthInput
				placeholder="E-Posta"
				type="email"
				v-model="userRegisterForm.email"
				:value="userRegisterForm.email"
			/>
			<AuthInput
				placeholder="Şifre"
				type="password"
				v-model="userRegisterForm.password"
				:value="userRegisterForm.password"
			/>
			<AuthInput
				placeholder="Şifre Tekrar"
				type="password"
				v-model="userRegisterForm.passwordConfirm"
				:value="userRegisterForm.passwordConfirm"
			/>
			<AuthRegisterButton :userRegisterForm="userRegisterForm" />
			<div class="flex justify-between">
				<AuthGoogleButton />
				<div class="mt-3">Üye misin ? Giriş yap</div>
			</div>
		</form>
	</div>
</template>

<script setup lang="ts">
	import { UserRegisterForm } from '~/types';

	const userRegisterForm: UserRegisterForm = reactive({
		name: '',
		username: '',
		email: '',
		password: '',
		passwordConfirm: '',
	});
</script>
