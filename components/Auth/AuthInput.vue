<template>
	<input class="authInput" v-bind="$attrs" @input="updateValue" />
</template>
<script setup lang="ts">
	const emit = defineEmits(['update:modelValue']);

	function updateValue(event: any) {
		emit('update:modelValue', event.target.value);
	}
</script>

<style scoped>
	.authInput {
		@apply border-solid border-black border-b-2 mb-3 placeholder:text-black outline-none indent-5;
	}
</style>
