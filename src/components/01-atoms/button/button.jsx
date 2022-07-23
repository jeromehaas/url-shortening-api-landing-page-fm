import { Component } from 'react';

class Button extends Component {

	render() {
		return <a className={`${ this.props.className } button ${ this.props.modifier ? `button--${ this.props.modifier }` : '' }`} href="/" onClick={ this.props.onClick } data-value={ this.props.dataValue ? this.props.dataValue  : '' } >{ this.props.children }</a>
	};

};

export default Button;