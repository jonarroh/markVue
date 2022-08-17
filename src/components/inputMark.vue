<template>
	<div class="grid-cols-6">
		<textarea
			class="w-full h-full border-none p-6"
			v-model="inputText"
		></textarea>
	</div>
</template>

<script lang="ts" setup>
import { useText } from '../composables/useText';
const { inputText } = useText();
</script>
