<template>
	<button
		:style="{ color: color, backgroundColor: bg }"
		class="px-2 py-2 rounded-lg"
	>
		{{ Text }}
	</button>
</template>

<script lang="ts" setup>
defineProps({
	color: {
		type: String,
		default: '#fff'
	},
	bg: {
		type: String,
		default: '#171b25'
	},
	Text: {
		type: String,
		default: 'Button'
	}
});
</script>
