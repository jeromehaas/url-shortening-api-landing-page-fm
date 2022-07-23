import { Component } from 'react';
import AppContext from 'context/app-context';

class AppProvider extends Component {

	state = {
		mobileNavigation: {
			status: 'active'
		},
		items: [
			'one', 'two', 'three'
		]
	};
	
	render() {
		
		return(
			<AppContext.Provider value={{
				mobileNavigation: this.state.mobileNavigation,
				items: this.state.items
			}}>
				{ this.props.children }
			</AppContext.Provider>

		);
	};

};

export default AppProvider;