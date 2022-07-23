import { Component } from 'react';
import Heading from 'components/01-atoms/heading/heading';
import Paragraph from 'components/01-atoms/paragraph/paragraph';
import Icon from 'components/01-atoms/icon/icon';

class Card extends Component {

	render() {
		return (
			<div className={` ${this.props.className ? this.props.className : ''} card` }>
				<Heading className="card__heading" level="h3">{ this.props.heading }</Heading>	
				<Paragraph className="card__paragraph">{ this.props.text }</Paragraph>	
				<Icon className="card__icon" src={ this.props.icon } />
			</div>
		);
	};

};

export default Card;