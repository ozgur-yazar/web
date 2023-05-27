<template>
	<div
		v-if="visible"
		:class="isError ? 'errorAlert' : 'successAlert'"
		role="alert"
	>
		<p class="font-bold">{{ title }}</p>
		<p>{{ description }}</p>
		<span class="closeButtonSpan" @click="setVisiblity(false)">
			<svg
				class="closeButtonSvg"
				role="button"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
			>
				<title>Close</title>
				<path
					d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
				/>
			</svg>
		</span>
	</div>
</template>

<script setup lang="ts">
	const { visible, isError, title, description, setVisiblity } = useAlertBox();
</script>

<style scoped>
	.successAlert {
		@apply bg-green-100 border-l-4 border-green-500 text-green-700 p-4 w-56 absolute top-16 right-0;
	}

	.errorAlert {
		@apply bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 w-56 absolute top-16 right-0;
	}
	.closeButtonSpan {
		@apply absolute top-0 bottom-0 right-0 px-4 py-3;
	}
	.closeButtonSvg {
		@apply fill-current h-6 w-6 text-green-700;
	}
</style>
