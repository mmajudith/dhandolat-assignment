import './property.css';

const Property = ({ property }) => {
	const { name, image, minInVestment, minArea, rentalYield, location } =
		property;

	return (
		<div>
			<div>
				<img src={image} alt="building property" />
				<p>{name}</p>
			</div>

			<div>
				<div>
					<>
						<p>{minInVestment}</p>
						<p>MIN INVESTMENT</p>
					</>
					<>
						<p>{minArea}</p>
						<p>MIN AREA</p>
					</>
				</div>
				<div>
					<>
						<p>{rentalYield}</p>
						<p>RENTAL YIELD</p>
					</>
					<>
						<p>{location}</p>
						<p>LOCATION</p>
					</>
				</div>
				<p>CONTACT</p>
			</div>
		</div>
	);
};

export default Property;
