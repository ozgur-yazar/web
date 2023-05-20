<template>
	<button @submit.prevent="" class="authButton">Kayıt Ol</button>
</template>

<script setup lang="ts">
	import { UserRegisterForm } from '~/types';

	const { userRegisterForm } = defineProps<{
		userRegisterForm: UserRegisterForm;
	}>();
</script>

<style scoped></style>
