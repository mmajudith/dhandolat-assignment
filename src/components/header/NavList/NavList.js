import { HashLink } from 'react-router-hash-link';
import './nav-list.css';

const NavList = () => {
	return (
		<nav className="header-nav-list">
			<ul className="flex-row">
				{[
					['Home', '/'],
					['About Us', '/#about'],
					['Properties', '/#properties'],
					['Contact', '/#contact'],
				].map(([list, url], index) => (
					<li key={index}>
						<HashLink
							// activeStyle={{ color: 'rgba(255, 193, 7, 1)' }}
							scroll={(element) =>
								element.scrollIntoView({ behavior: 'smooth' })
							}
							to={url}
						>
							{list}
						</HashLink>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default NavList;
