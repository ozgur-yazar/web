const useAlertBox = () => {
	const visible = useState('visible', () => false);
	const isError = useState('erorr', () => false);
	const title = useState('title', () => '');
	const description = useState('description', () => '');

	const setVisiblity = (visiblityValue: boolean) => {
		visible.value = visiblityValue;
		if (visiblityValue === true) {
			setTimeout(() => {
				visible.value = false;
			}, 5000);
		}
	};

	const setError = (error: boolean) => {
		isError.value = error;
	};

	const setTitleAndDescription = (
		titleValue: string,
		descriptionValue: string,
	) => {
		title.value = titleValue;
		description.value = descriptionValue;
	};

	return {
		visible,
		isError,
		title,
		description,
		setTitleAndDescription,
		setError,
		setVisiblity,
	};
};
export default useAlertBox;
