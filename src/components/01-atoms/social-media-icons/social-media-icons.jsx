import { Component } from 'react';
import IconTwitter from 'public/icons/icon-twitter.svg';
import IconFacebook from 'public/icons/icon-facebook.svg';
import IconPinterest from 'public/icons/icon-pinterest.svg';
import IconInstagram from 'public/icons/icon-instagram.svg';

class SocialMediaIcons extends Component {

	render() {
		return (
			<div className="social-media-icons">
				<a className="social-media-icons__link" href="/"><img  className="social-media-icons__icon" src={ IconFacebook } alt="Facebook"/></a>
				<a className="social-media-icons__link" href="/"><img  className="social-media-icons__icon" src={ IconTwitter } alt="Twitter"/></a>
				<a className="social-media-icons__link" href="/"><img  className="social-media-icons__icon" src={ IconPinterest } alt="Pinterest"/></a>
				<a className="social-media-icons__link" href="/"><img  className="social-media-icons__icon" src={ IconInstagram } alt="Instagram"/></a>
			</div>
		);
	};

};

export default SocialMediaIcons;