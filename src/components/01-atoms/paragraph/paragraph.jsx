
import { Component } from 'react';

class Paragraph extends Component {

	render() {
		return <p className={` ${this.props.className ? this.props.className : '' } paragraph`}>{ this.props.children }</p>
	};

};

export default Paragraph;