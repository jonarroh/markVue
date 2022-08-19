<script setup lang="ts">
import OutputText from './components/outputText.vue';
import InputMark from './components/inputMark.vue';
import Navbar from './components/UI/Navbar.vue';
</script>

<template>
	<Navbar />
	<div class="flex text-white box-content">
		<section class="w-2/4 h-screen">
			<InputMark />
		</section>
		<section class="w-2/4 h-screen border-separator">
			<OutputText />
		</section>
	</div>
</template>

<style scoped>
.border-separator {
	border-left: 1px solid rgb(173, 172, 172);
	margin-left: -1px;
}
</style>
