import { useState, useEffect } from 'react';
import NavList from './NavList/NavList';
import { ReactComponent as HamMenuIcon } from '../../assets/hamburger-menu.svg';
import './header.css';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);

	const handleIsOpen = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		window.addEventListener('resize', () => setScreenWidth(window.innerWidth));

		return window.addEventListener('resize', () =>
			setScreenWidth(window.innerWidth)
		);
	}, [screenWidth]);

	return (
		<header className="w-90 m-auto flex-row between">
			<div className="flex-row center logo-menu-wrapper">
				<div className="logo">LOGO</div>

				<div onClick={handleIsOpen} className="menu-icon-wrapper">
					<HamMenuIcon />
				</div>
			</div>

			{screenWidth > 640 && <NavList />}
			{screenWidth < 640 && isOpen && <NavList />}
		</header>
	);
};

export default Header;
