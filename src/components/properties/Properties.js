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
		<div id="properties" className="properties-container w-100 m-auto">
			<div
				className={`link-width m-auto flex-row ${!root ? `between` : `center`}`}
			>
				<HashLink to={'/#properties'} className="flex-row center">
					<BackArrow />
					<p>PROPERTIES</p>
				</HashLink>

				{!root && (
					<div className="filter-props-wrapper">
						<p onClick={handleDropDown} className="filter">
							FILTER
						</p>
						{isdropDown && <FilterProps />}
					</div>
				)}
			</div>

			<div className="p-relative w-100 m-auto">
				<div className="properities-wrapper">
					{properties.map((property, index) => (
						<Property key={index} property={property} />
					))}
				</div>
				{root && (
					<div className="front-arrow-wrapper">
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
