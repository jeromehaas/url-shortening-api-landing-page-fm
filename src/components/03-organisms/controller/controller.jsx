import { Component, createRef } from 'react';
import Button from 'components/01-atoms/button/button';
import { Player } from '@lottiefiles/react-lottie-player';
import Input from 'components/01-atoms/input/input';
import LottieA from 'public/lotties/blob-a.json';
import LottieB from 'public/lotties/blob-a.json';
import Output from 'components/02-molecules/output/output';
import AppContext from 'context/app-context';
import base64 from 'base-64';

class Controller extends Component {
	static contextType = AppContext;

	constructor(props) {
		super(props);
		this.blobA = createRef();
		this.blobB = createRef();
		this.lottieA = LottieA;
		this.lottieB = LottieB;
	}

	componentDidMount = () => {
		this.context.initControllerOutputItems()
	};
	
	onSubmit = (event) =>  {
		event.preventDefault();
		const link = this.context.controller.input;
		this.validateLink(
			this.context.controller.input, 
			async () => { 
				await this.context.resetControllerInput('');
				await this.context.updateControllerStatus('success') 
				await this.context.createControllerOutputItem({ original: link, short: this.minifyLink(link)}) 
				await this.context.saveControllerOutputItem();
			},
			async () => { 
				await this.context.resetControllerInput('');
				await this.context.updateControllerStatus('error') 
			}
		);
	};

	minifyLink = (link) => {
		const baseUrl = 'https://rel.ink/'
		const hash =  base64.encode(link).substring(0, 5);
		const minifiedLink = `${baseUrl}${hash}`;
		return minifiedLink
	}

	onChange = (event) => {
		this.context.updateControllerInput(event.target.value);
	};

	validateLink = (link, successCallback, errorCallback) => {
		const expression = /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)?/gi;
		const regex = new RegExp(expression);
		link.match(regex) 
			? successCallback()
			: errorCallback(); 
	}
	
	render() {
		
		
		return(
			<section className="controller section">
				<div className="controller__inner section__inner">
					<form className="controller__form form" onSubmit={ this.onSubmit } readOnly>
						<Input className="form__input" placeholder="Shorten a link here" modifier={ this.context.controller.status === 'error' ? 'error' : ''} value={ this.context.controller.input } onChange={ this.onChange } /> 
						<Button className="form__button" modifier="squarish" onClick={ (event) => this.onSubmit(event) }>Shorten It!</Button>
						
						<div className="form__blob blob--a">
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
						<div className="form__blob blob--b">
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
					</form>
					<div className="controller__output-wrapper">
						{ this.context.controller.output.items.map((item, index) =>  <Output data={ item } key={ index } /> )}
					</div>
				</div>
			</section>
		);

	};

};

export default Controller;