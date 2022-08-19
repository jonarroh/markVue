import { storeToRefs } from 'pinia';
import { useTextStore } from '../store/textStore';

export const useText = () => {
	const textStore = useTextStore();

	const { inputText, hasFile } = storeToRefs(textStore);

	const newInputText = (newText: string) => {
		textStore.setInputText(newText);
	};

	const newHasFile = (newHasFile: boolean) => {
		textStore.setHasFile(newHasFile);
	};

	return {
		//props
		inputText,
		hasFile,
		//methods
		newInputText,
		newHasFile
	};
};
