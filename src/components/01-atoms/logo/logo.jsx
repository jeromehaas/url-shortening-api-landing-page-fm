import { Component } from 'react';
import Heading from 'components/01-atoms/heading/heading';

class Logo extends Component  {

	render() {
		return 	<Heading className={`${ this.props.className ? this.props.className : '' } logo `} level="h2">Shortly</Heading>
	};

};

export default Logo;