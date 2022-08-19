import { defineStore } from 'pinia';

interface TextStore {
	inputText: string;
	hasFile: boolean;
}

export const useTextStore = defineStore('textStore', {
	state: (): TextStore => ({
		inputText: '# Hello World!',
		hasFile: false
	}),
	actions: {
		setInputText(text: string) {
			this.inputText = text;
		},
		setHasFile(hasFile: boolean) {
			this.hasFile = hasFile;
		}
	}
});
