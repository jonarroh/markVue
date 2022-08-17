<template>
	<div class="grid-cols-6">
		<textarea
			class="w-full h-screen border-none p-6"
			v-model="inputText"
		></textarea>
	</div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { useText } from '../composables/useText';
const { inputText } = useText();

onMounted(() => {
	inputText.value = '# Hello world!';
});
</script>
