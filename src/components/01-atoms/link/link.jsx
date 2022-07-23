import { Component } from 'react';

class Link extends Component {

	render() {
		return <a className={`${ this.props.className } link ${ this.props.modifier ? `link--${ this.props.modifier }` : '' }`} href="/">{ this.props.children }</a>
	};

};

export default Link;