<template>
	<form class="authForm">
		<AuthInput
			placeholder="Ad Soyad"
			type="text"
			v-model="name"
			:value="name"
		/>
		<AuthInput
			placeholder="Kullanıcı Adı"
			type="text"
			v-model="username"
			:value="username"
		/>
		<AuthInput
			placeholder="E-Posta"
			type="email"
			v-model="email"
			:value="email"
		/>
		<AuthInput
			placeholder="Şifre"
			type="password"
			v-model="password"
			:value="password"
		/>
		<AuthInput
			placeholder="Şifre Tekrar"
			type="password"
			v-model="passwordConfirm"
			:value="passwordConfirm"
		/>
		<AuthButtonsRegister
			:name="name"
			:username="username"
			:email="email"
			:password="password"
			:password-confirm="passwordConfirm"
		/>
		<div class="flex justify-between">
			<AuthGoogleButton />
			<div class="mt-3">Üye misin ? Giriş yap</div>
		</div>
	</form>
</template>

<script setup lang="ts">
	let name = ref('');
	let username = ref('');
	let email = ref('');
	let password = ref('');
	let passwordConfirm = ref('');
</script>
