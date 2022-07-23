import { Component } from 'react';
import Logo from 'components/01-atoms/logo/logo';
import Hamburger from 'components/01-atoms/hamburger/hamburger';
import Button from 'components/01-atoms/button/button';
import AppContext from 'context/app-context';

class MobileNavigation extends Component {
	static contextType = AppContext;
	
	render() {

		return (
			<nav className="mobile-navigation section">
				<div className="mobile-navigation__inner section__inner">

					<div className="mobile-navigation__bar bar">
						<Logo className="mobile-navigation__logo" />
						<Hamburger />
					</div>	
					<div className={`mobile-navigation__menu menu ${ this.context.mobileNavigation.isVisible ? 'menu--is-visible' : '' }`}>
						<div className="menu__links links">
							<a className="links__item" href="/">Features</a>
							<a className="links__item" href="/">Pricing</a>
							<a className="links__item" href="/">Ressources</a>
						</div>
						<figure className="menu__separator"></figure>
						<div className="menu__actions">
							<a className="actions__item" href="/">Login</a>
							<Button className="actions__button">Sign up</Button>
						</div>
					</div>
				</div>
			</nav>
		);

	};

};

export default MobileNavigation;