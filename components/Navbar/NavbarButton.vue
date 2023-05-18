<template>
	<NuxtLink class="navbarButton" :to="to">
		{{ buttonName }}
	</NuxtLink>
</template>
<script setup lang="ts">
	const { buttonName, to } = defineProps({
		buttonName: String,
		to: String,
	});
</script>

<style scoped>
	.navbarButton {
		@apply border-solid border-black border-2 m-2 py-1 sm:px-4  px-1 rounded-lg hover:bg-black hover:text-white;
	}
</style>
