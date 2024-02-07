import { HashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';
import './nav-list.css';

const NavList = () => {
	return (
		<nav className="header-nav-list">
			<ul className="flex-row">
				{[
					['Home', '/'],
					['About Us', '/#about'],
					['Properties', '/properties'],
					['Contact', '/#contact'],
				].map(([list, url], index) => (
					<li key={index}>
						{url === '/' || url === '/properties' ? (
							<NavLink
								to={url}
								className={({ isActive }) =>
									isActive ? 'activeClassName' : undefined
								}
							>
								{list}
							</NavLink>
						) : (
							<HashLink
								scroll={(element) =>
									element.scrollIntoView({ behavior: 'smooth' })
								}
								to={url}
							>
								{list}
							</HashLink>
						)}
					</li>
				))}
			</ul>
		</nav>
	);
};

export default NavList;
