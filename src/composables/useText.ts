import { storeToRefs } from 'pinia';
import { useTextStore } from '../store/textStore';

export const useText = () => {
	const textStore = useTextStore();

	const { inputText } = storeToRefs(textStore);

	const newInputText = () => {
		textStore.setInputText(inputText.value);
	};

	return {
		//props
		inputText,
		//methods
		newInputText
	};
};
