import { ReactComponent as MailIcon } from '../../assets/mail-icon.svg';
import { ReactComponent as PhoneIcon } from '../../assets/phone-icon.svg';
import WhatAppIcon from '../../assets/whatapp-icon.png';
import './footer.css';

const Footer = () => {
	return (
		<footer>
			<div className="footer-nav-container flex-row between">
				<div className="logo">
					<p>LOGO</p>
				</div>

				<ul className="reach-out-wrapper flex-col">
					<li>
						<MailIcon />
						<p>MAIL ID</p>
					</li>
					<li>
						<PhoneIcon />
						<p>Contact no.</p>
					</li>
				</ul>

				<ul className="footer-lists flex-col">
					<li>HOME</li>
					<li>ABOUT US</li>
					<li>PROPERTIES</li>
					<li>PROPERTIES</li>
				</ul>

				<div className="whatapp-reach-out-container">
					<p>DIRECTLY CONTACT US ON</p>
					<div className="whatapp-wrapper flex-row center">
						<img src={WhatAppIcon} alt="whatapp icon" />
						<p>WHATSAPP</p>
					</div>
				</div>
			</div>
			<div className="copy-right-container">
				<p>
					&#169; 2024 ALL RIGHTS RESERVED | POWERED BY{' '}
					<span>PROPERTY VISTA</span>
				</p>
				<p>DISCLAIMER</p>
			</div>
		</footer>
	);
};

export default Footer;
