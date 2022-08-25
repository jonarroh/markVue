<template>
	<nav class="flex items-center">
		<!-- <svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			:stroke="color"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="feather feather-menu cursor-pointer">
			<line x1="3" y1="12" x2="21" y2="12"></line>
			<line x1="3" y1="6" x2="21" y2="6"></line>
			<line x1="3" y1="18" x2="21" y2="18"></line>
		</svg> -->

		<h1 class="px-2 text-2xl text-white">Markue</h1>
		<input
			type="file"
			@change="onSelectedFile"
			ref="mdInput"
			class="hidden"
			accept=".md"
		/>
		<Button
			v-if="!hasFile"
			Text="subir archivo"
			bg="#81E6D9"
			color="#112"
			@click="mdInput.click()"
		></Button>

		<Button
			class="mx-2"
			Text="guardar archivo"
			bg="#81E6D9"
			color="#112"
			@click="writeOnFile"
		></Button>
	</nav>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useText } from '../../composables/useText';
import Button from './button.vue';

const color = ref('#fff');
const mdInput = ref();

const { newInputText, hasFile, newHasFile, inputText } = useText();

const onSelectedFile = (e: Event) => {
	const target = e!.target as HTMLInputElement;
	const file = target.files![0];
	console.log(file);
	if (file) {
		const reader = new FileReader();
		reader.onload = (e: ProgressEvent) => {
			const md = (e.target as FileReader).result as string;
			console.log(md);
			newInputText(md);
			newHasFile(true);
		};
		reader.readAsText(file);
	}
};
const writeOnFile = () => {
	console.log(inputText.value);
	const blob = new Blob([inputText.value], { type: 'text/plain' });
	const url = URL.createObjectURL(blob);
	const a = document.createElement('a');
	a.href = url;
	a.download = 'markue.md';
	a.click();
	newHasFile(false);
};
</script>

<style scoped>
nav {
	background-color: #171b25;
	padding: 10px;
	font-family: 'montserrat', sans-serif;
	font-weight: bolder;
}
</style>
