import { Component } from 'react';

class Heading extends Component {

	render() {
			switch(this.props.level) {
				case 'h1': return <h1 className={` ${ this.props.className ? this.props.className : '' } heading heading--${ this.props.level }`}>{ this.props.children }</h1>
				case 'h2': return <h1 className={` ${ this.props.className ? this.props.className : '' } heading heading--${ this.props.level }`}>{ this.props.children }</h1>
				case 'h3': return <h1 className={` ${ this.props.className ? this.props.className : '' } heading heading--${ this.props.level }`}>{ this.props.children }</h1>
				default: return <h1 className={` ${ this.props.className ? this.props.className : '' } heading heading--${ this.props.level }`}>{ this.props.children }</h1>
		};
	};

};

export default Heading;