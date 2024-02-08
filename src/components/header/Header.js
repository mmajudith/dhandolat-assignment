import { useState } from 'react';
import NavList from './NavList/NavList';
import { ReactComponent as HamMenuIcon } from '../../assets/hamburger-menu.svg';
import './header.css';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleIsOpen = () => {
		setIsOpen(!isOpen);
	};

	return (
		<header className="w-90 m-auto flex-row between">
			<div className="flex-row center logo-menu-wrapper">
				<div className="logo">LOGO</div>

				<div onClick={handleIsOpen} className="menu-icon-wrapper">
					<HamMenuIcon />
				</div>
			</div>

			{/* {isOpen } */}
			<NavList />
		</header>
	);
};

export default Header;
