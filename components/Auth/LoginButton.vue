<template>
	<Button @click.prevent class="authButton">Giriş Yap</Button>
</template>

<style scoped>
	.authButton {
		@apply border-solid border-black border-2 mt-2 py-1 sm:px-4  px-1 rounded-lg hover:bg-black hover:text-white;
	}
</style>
