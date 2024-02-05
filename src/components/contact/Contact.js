import { useState } from 'react';
import Input from '../../shared-components/input/Input';
import './contact.css';

const Contact = () => {
	const [name, setName] = useState('');
	const [number, setNumber] = useState('');
	const [comments, setComments] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div id="contact" className="contact-container">
			<p className="connect">
				CONNECT <span>WITH US</span>
			</p>
			<p className="fill">PLEASE FILL THIS FORM!!</p>

			<form onSubmit={handleSubmit} className="w-100 flex-col center">
				<Input
					type={'text'}
					value={name}
					onChangeHandler={(e) => setName(e.target.value)}
					placeholder={'Name'}
				/>
				<div className="w-100 flex-row between">
					<input type="number" placeholder="+91" />
					<Input
						type={'number'}
						value={number}
						onChangeHandler={(e) => setNumber(e.target.value)}
						placeholder={'Contact Number'}
					/>
				</div>
				<Input
					type={'text'}
					value={comments}
					onChangeHandler={(e) => setComments(e.target.value)}
					placeholder={'Any Comments?'}
				/>
				<button type="submit">SUBMIT</button>
			</form>
		</div>
	);
};

export default Contact;
