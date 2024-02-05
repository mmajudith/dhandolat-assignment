import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import FilterProps from './filter/Filter';
import Property from '../../shared-components/property/Property';
import { ReactComponent as BackArrow } from '../../assets/back-arrow-icon.svg';
import { ReactComponent as FrontArrow } from '../../assets/front-arrow-icon.svg';
import './properties.css';

const Properties = ({ properties, root }) => {
	const [isdropDown, setIsDropDown] = useState(false);

	const handleDropDown = () => {
		setIsDropDown(!isdropDown);
	};

	return (
		<div id="properties" className="properties-container">
			<div>
				<div>
					<HashLink to={'/#properties'}>
						<BackArrow />
						<p>PROPERTIES</p>
					</HashLink>
				</div>
				{!root && (
					<div>
						<p onClick={handleDropDown}>FILTER</p>
						{isdropDown && <FilterProps />}
					</div>
				)}
			</div>

			<div>
				<div>
					{properties.map((property, index) => (
						<Property key={index} property={property} />
					))}
				</div>
				{root && (
					<div>
						<Link to={'/properties'}>
							<FrontArrow />
						</Link>
					</div>
				)}
			</div>
		</div>
	);
};

export default Properties;
