import DownArrow from '../../../assets/down-arrow-icon.svg';
import './filter.css';

const FilterProps = () => {
	return (
		<div className="filter-prop-container">
			{[['MIN INVESTMENT'], ['AREA']].map(([list], index) => (
				<div key={index} className="area-invest-wrapper w-100 m-auto">
					<p>{list}</p>
					<div className="flex-row between">
						<p>Low to High</p>
						<img src={DownArrow} alt="down arrow icon" />
					</div>
				</div>
			))}

			<div className="location-wrapper w-100 m-auto">
				<p>LOCATION</p>
				<ul className="w-100 flex-row between">
					{[['Noida'], ['Noida'], ['Noida']].map(([location], index) => (
						<li key={index} className="flex-col center">
							{location}
						</li>
					))}
				</ul>
			</div>

			<p className="done">DONE</p>
		</div>
	);
};

export default FilterProps;
