import { Component } from 'react';

class Icon extends Component {

	render() {
		return (
			<div className={` ${ this.props.className ? this.props.className : '' } icon`}>
				<img className="icon__symbol" src={ this.props.src } alt="symbol" />
			</div>
		)
	};

};

export default Icon;