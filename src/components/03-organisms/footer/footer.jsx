import { Component } from 'react';
import Logo from 'components/01-atoms/logo/logo';
import Link from 'components/01-atoms/link/link';
import SocialMediaIcons from 'components/01-atoms/social-media-icons/social-media-icons';

class Footer extends Component {

	render() {

		return (
			<footer className="footer section">
				<div className="footer__inner section__inner">
					<Logo className="footer__logo" />				
					
					<div className="footer__links links">
					<div className="links__container">
						<Link className="links__heading" href="/">Features</Link>
						<Link className="links__item" href="/">Link Shortening</Link>
						<Link className="links__item" href="/">Branded Links</Link>
						<Link className="links__item" href="/">Analytics</Link>
					</div>
					<div className="links__container">
						<Link className="links__heading" href="/">Features</Link>
						<Link className="links__item" href="/">Link Shortening</Link>
						<Link className="links__item" href="/">Branded Links</Link>
						<Link className="links__item" href="/">Analytics</Link>
					</div>
					<div className="links__container">
						<Link className="links__heading" href="/">Features</Link>
						<Link className="links__item" href="/">Link Shortening</Link>
						<Link className="links__item" href="/">Branded Links</Link>
						<Link className="links__item" href="/">Analytics</Link>
					</div>
				</div>
				
					<SocialMediaIcons className="footer__social-media-icons" />
					
				</div>
			</footer>
		);

	};

};

export default Footer;