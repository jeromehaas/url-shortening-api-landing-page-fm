import { Component, createRef } from 'react';
import Heading from 'components/01-atoms/heading/heading';
import Button from 'components/01-atoms/button/button';
import { Player } from '@lottiefiles/react-lottie-player';
import LottieA from 'public/lotties/blob-a.json';
import LottieB from 'public/lotties/blob-a.json';
import LottieC from 'public/lotties/blob-c.json';

class Cta extends Component {
	
	constructor(props) {
		super(props);
		this.blobA = createRef();
		this.blobB = createRef();
		this.blobC = createRef();
		this.lottieA = LottieA;
		this.lottieB = LottieB;
		this.lottieC = LottieC;
	};

	render() {

		return (
			<section className="cta section">
				<div className="cta__inner section__inner">
					<Heading className="cta__heading" level="h2">Boost your links today</Heading>
					<Button className="cta__button">Get Started</Button>
					<div className="cta__blob blob--a">
							<Player 
								ref={ this.blobA }
								autoplay={ true }
								speed= { 0.5 }
								direction={ 1 }
								loop={ true }
								controls={ true }
								src={ this.lottieA }
							/>
						</div>
						<div className="cta__blob blob--b">
							<Player 
								ref={ this.blobB }
								autoplay={ true }
								speed= { 0.5 }
								direction={ 1 }
								loop={ true }
								controls={ true }
								src={ this.lottieB }
							/>
						</div>
						<div className="cta__blob blob--c">
							<Player 
								ref={ this.blobC }
								autoplay={ true }
								speed= { 0.5 }
								direction={ 1 }
								loop={ true }
								controls={ true }
								src={ this.lottieC }
							/>
						</div>
				</div>
			</section>
		);

	};

};

export default Cta;