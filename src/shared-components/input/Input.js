import './input.css';

const Input = ({ type, value, placeholder, onChangeHandler }) => {
	return (
		<input
			type={type}
			value={value}
			placeholder={placeholder}
			onChange={onChangeHandler}
		/>
	);
};

export default Input;
