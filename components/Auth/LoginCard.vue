<template>
	<form class="flex flex-col w-80">
		<AuthInput
			placeholder="Kullanıcı Adı"
			type="text"
			v-model="username"
			:value="username"
		/>
		<AuthInput
			placeholder="Şifre"
			type="password"
			v-model="password"
			:value="password"
		/>
		<AuthLoginButton />
		<div class="flex justify-between">
			<AuthGoogleButton />
			<div class="mt-3">Şifremi unuttum</div>
		</div>
	</form>
</template>

<script setup lang="ts">
	let username = ref('');
	let password = ref('');
</script>
