<template>
	<Button @click.prevent class="loginButton">Kayıt Ol</Button>
</template>

<script setup>
	const { name, username, email, password, passwordConfirm } = defineProps({
		name: String,
		username: String,
		email: String,
		password: String,
		passwordConfirm: String,
	});
</script>

<style scoped>
	.loginButton {
		@apply border-solid border-black border-2 py-1 sm:px-4  px-1 rounded-lg hover:bg-black hover:text-white;
	}
</style>
