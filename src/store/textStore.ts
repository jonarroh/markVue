import { defineStore } from 'pinia';

interface TextStore {
	inputText: string;
}

export const useTextStore = defineStore('textStore', {
	state: (): TextStore => ({
		inputText: '# Hello World!'
	}),
	actions: {
		setInputText(text: string) {
			this.inputText = text;
		}
	}
});
