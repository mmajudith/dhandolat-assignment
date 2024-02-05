import NavList from './NavList/NavList';
import './header.css';

const Header = () => {
	return (
		<header className="w-90 m-auto flex-row between">
			<div className="logo">LOGO</div>

			<NavList />
		</header>
	);
};

export default Header;
