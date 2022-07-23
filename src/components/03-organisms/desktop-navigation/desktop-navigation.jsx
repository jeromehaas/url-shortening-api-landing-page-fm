import { Component } from 'react';
import Logo from 'components/01-atoms/logo/logo';
import Link from 'components/01-atoms/link/link';
import Button from 'components/01-atoms/button/button';

class DesktopNavigation extends Component {

	render() {

		return(
			<div className="desktop-navigation section">
				<div className="desktop-navigation__inner section__inner">

				<Logo className="desktop-navigation__logo" />
				<div className="desktop-navigation__links links">
					<Link className="links__item" href="/">Features</Link>
					<Link className="links__item" href="/">Pricing</Link>
					<Link className="links__item" href="/">Ressources</Link>
				</div>
				<div className="desktop-navigation__actions">
					<Link className="actions__item" href="/">Ressources</Link>
					<Button className="actions__button">Sign up</Button>
				</div>
				</div>
			</div>
		);

	};

};

export default DesktopNavigation;