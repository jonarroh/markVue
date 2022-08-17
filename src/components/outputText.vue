<template>
	<div class="grid-cols-6">
		<div
			class="w-full h-screen border-none p-6"
			v-html="outputText"
		></div>

		>
	</div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useText } from '../composables/useText';
import { marked } from 'marked';

const outputText = computed(() => {
	const { inputText } = useText();
	return marked(inputText.value);
});
</script>

<style scoped>
div {
	font-size: 18px;
}
</style>
