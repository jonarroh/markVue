<template>
	<div class="grid-cols-6">
		<textarea
			class="w-full h-full border-none p-6"
			v-model="outputText"
		></textarea>
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
