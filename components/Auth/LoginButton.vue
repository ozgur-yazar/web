<template>
	<Button @click.prevent class="loginButton"> Giriş Yap</Button>
</template>

<style scoped>
	.loginButton {
		@apply border-solid border-black border-2 mt-2 py-1 sm:px-4  px-1 rounded-lg hover:bg-black hover:text-white;
	}
</style>
