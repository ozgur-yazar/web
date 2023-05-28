<template>
	<div class="centerForm">
		<form class="authForm" @submit.prevent="registerUser(userRegisterForm)">
			<AuthInput
				placeholder="Ad Soyad"
				type="text"
				v-model="userRegisterForm.name"
				:value="userRegisterForm.name"
				required
			/>
			<AuthInput
				placeholder="Kullanıcı Adı"
				type="text"
				v-model="userRegisterForm.username"
				:value="userRegisterForm.username"
				required
			/>
			<AuthInput
				placeholder="E-Posta"
				type="email"
				v-model="userRegisterForm.email"
				:value="userRegisterForm.email"
				required
			/>
			<AuthInput
				placeholder="Şifre"
				type="password"
				v-model="userRegisterForm.password"
				:value="userRegisterForm.password"
				required
			/>
			<AuthInput
				placeholder="Şifre Tekrar"
				type="password"
				v-model="userRegisterForm.passwordConfirm"
				:value="userRegisterForm.passwordConfirm"
				required
			/>

			<button class="authButton">
				<div class="spinner" role="status" v-if="isLoading"></div>
				Kayıt Ol
			</button>

			<div class="flex justify-between">
				<AuthGoogleButton />
				<NuxtLink to="/auth/login" class="mt-3 hover:underline"
					>Üye misin ? Giriş yap</NuxtLink
				>
			</div>
		</form>
	</div>
</template>

<script setup lang="ts">
	import { IUserRegisterForm } from '~/types';
	const { registerUser, isLoading } = useFirebaseAuth();

	const userRegisterForm: IUserRegisterForm = reactive({
		name: '',
		username: '',
		email: '',
		password: '',
		passwordConfirm: '',
	});
</script>
