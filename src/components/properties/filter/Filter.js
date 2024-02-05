import { ReactComponent as DownArrow } from '../../../assets/down-arrow-icon.svg';

const FilterProps = () => {
	return (
		<div>
			{[['MIN INVESTMENT'], ['AREA']].map(([list], index) => (
				<div key={index} className="">
					<p>{list}</p>
					<div>
						<p>Low to High</p>
						<DownArrow />
					</div>
				</div>
			))}

			<div>
				<p>LOCATION</p>
				<ul>
					{[['Noida'], ['Noida'], ['Noida']].map(([location], index) => (
						<li key={index} className="">
							{location}
						</li>
					))}
				</ul>
			</div>

			<p>DONE</p>
		</div>
	);
};

export default FilterProps;
