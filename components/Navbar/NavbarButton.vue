<template>
	<button class="navbarButton">
		{{ buttonName }}
	</button>
</template>
<script setup lang="ts">
	const { buttonName } = defineProps(['buttonName']);
</script>

<style scoped>
	.navbarButton {
		@apply border-solid border-black border-2 m-2 py-1 sm:px-4  px-1 rounded-lg hover:bg-black hover:text-white;
	}
</style>
