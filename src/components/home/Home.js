import { ReactComponent as HotelPro } from '../../assets/hotel-pro.svg';
import GrowthIcon from '../../assets/growth.svg';
import InvestIcon from '../../assets/invest.svg';
import ProIcon from '../../assets/property.svg';
import AssistIcon from '../../assets/assistance.svg';
import './home.css';

const strategies = [
	{ name: 'GROWTH', image: GrowthIcon },
	{ name: 'INVESTMENT', image: InvestIcon },
	{ name: 'PROPERTY', image: ProIcon },
	{ name: 'ASSISTANCE', image: AssistIcon },
];

const Home = () => {
	return (
		<div className="home-container w-90 m-auto flex-row between">
			<div className="discover-container flex-col ">
				<div className="discover-wrapper w-100 flex-col center">
					<h1>DISCOVER </h1>
					<p>Investment Opportunities</p>
					<button>CLICK HERE</button>
				</div>

				<div className="strategies-wrapper w-100 flex-row around">
					{strategies.map((strategy, index) => (
						<div key={index} className="flex-col center">
							<img src={strategy.image} alt="icons" />
							<p>{strategy.name}</p>
						</div>
					))}
				</div>
			</div>

			<div className="hotel-pro-wrapper">
				<HotelPro className="hotel-pro" />
			</div>
		</div>
	);
};

export default Home;
