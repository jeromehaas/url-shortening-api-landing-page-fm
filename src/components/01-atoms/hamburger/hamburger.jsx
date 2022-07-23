import { Component, createRef } from 'react';
import Lottie from 'public/lotties/hamburger.json';
import { Player } from '@lottiefiles/react-lottie-player';
import AppContext from 'context/app-context';

class Hamburger extends Component {
	static contextType = AppContext;

	constructor(props) {
		super(props);
		this.hamburger = createRef();
		this.lottie = Lottie;
	};
	
	toggleStatus = () => {
		this.context.toggleMobileNavigation();
		this.hamburger.current.setPlayerDirection( this.context.mobileNavigation.isVisible === false ? 1 : -1)
		this.hamburger.current.play();
	}
	render() {

		return(
			<button className="hamburger" onClick={ this.toggleStatus }>
				<Player 
					ref={ this.hamburger }
					autoplay={ false }
					speed= { 3 }
					direction={ 1 }
					keepLastFrame= { true }
					loop={ false }
					controls={ true }
					src={ this.lottie }
					/>
			</button>
		)
	}

};


export default Hamburger;