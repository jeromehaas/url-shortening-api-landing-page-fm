import { Component } from 'react';

class Input extends Component {

	render() {
		return(
			<div className={` ${this.props.className ? this.props.className : '' } ${this.props.modifier ? `input--${this.props.modifier}` : '' } input`} >
				<input  className="input__input" type="text" value={ this.props.value } onChange={ this.props.onChange } placeholder={` ${ this.props.placeholder ? this.props.placeholder : ''} `} />
				<p className="input__error-text paragraph paragraph--small">Please add a valid link</p>
			</div>
		); 

	};

};

export default Input;