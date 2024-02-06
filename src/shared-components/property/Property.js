import './property.css';

const Property = ({ property }) => {
	const { name, image, minInVestment, minArea, rentalYield, location } =
		property;

	return (
		<div className="property-container">
			<div className="building-wrapper flex-col center">
				<img src={image} alt="building property" />
				<p>{name}</p>
			</div>

			<div className="property-description flex-col between">
				<div className="w-100 flex-row flex-start">
					<div>
						<p>{minInVestment}</p>
						<p>MIN INVESTMENT</p>
					</div>
					<div>
						<p>{minArea}</p>
						<p>MIN AREA</p>
					</div>
				</div>
				<div className="w-100 flex-row flex-start">
					<div>
						<p>{rentalYield}</p>
						<p>RENTAL YIELD</p>
					</div>
					<div>
						<p>{location}</p>
						<p>LOCATION</p>
					</div>
				</div>
				<p className="">CONTACT</p>
			</div>
		</div>
	);
};

export default Property;
