import { Component, createRef } from 'react';
import Lottie from 'public/lotties/person.json';
import { Player } from '@lottiefiles/react-lottie-player';
import Heading from 'components/01-atoms/heading/heading';
import Paragraph from 'components/01-atoms/paragraph/paragraph';
import Button from 'components/01-atoms/button/button';

class Hero extends Component {

	constructor(props) {
		super(props);
		this.person = createRef();
		this.lottie = Lottie;
	};

	render() {
		
		return (
			<section className="hero section">
				<div className="hero__inner section__inner">


				<div className="hero__content">
				<Heading className="hero__heading" level="h1">More than just shorter links</Heading>
				<Paragraph className="hero__text">Build your brand’s recognition and get detailed insights on how your links are performing.</Paragraph>
				<Button className="hero__button">Get started</Button>
				</div>
					
				<div className="hero__person">

				<Player
					ref={ this.person }
					autoplay={ true }
					speed= { 0.5 }
					direction={ 1 }
					loop={ true }
					controls={ true }
					src={ this.lottie }
					/>
				</div>

				</div>
			</section>
		);

	};

};

export default Hero;