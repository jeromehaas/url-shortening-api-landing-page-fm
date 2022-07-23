import { createContext, Component } from 'react';
import store from 'store2';

const AppContext = createContext();

export class AppProvider extends Component {
	state = {
		mobileNavigation: {
			isVisible: false
		},
		controller: {
			status: '',
			input: '',
			output: {
				items: []
		},

		}
	};

	showMobileNavigation = () => {
		this.setState({ 
			...this.state,
			mobileNavigation: { isVisible: true }
		});
	};

	hideMobileNavigation = () => {
		this.setState({ 
			...this.state,
			mobileNavigation: { isVisible: false }
		});
	};

	toggleMobileNavigation = () => {
		this.setState({ 
			...this.state,
			mobileNavigation: { isVisible: !this.state.mobileNavigation.isVisible }
		});
	};

	createControllerOutputItem = (item) => {
		this.setState({ 
			...this.state,
			controller: { 
				...this.state.controller,
				output: { items: [...this.state.controller.output.items, item] }
			}
		});
	};

	initControllerOutputItems = () => {
		const items = store.get('output');
		items && this.setState({
			...this.state, 
			controller: {
				...this.state.controller,
				output: { items: [ ...items ]  } 
			}
		})	
	};

	saveControllerOutputItem = () => {
		store('output', [ ...this.state.controller.output.items ]) 
	}

	updateControllerInput = (value) => {
		this.setState({ 
			...this.state,
			controller: {
				 ...this.state.controller,
				 input: value
			} 
		});
	};

	resetControllerInput = () => {
		this.setState({ 
			...this.state,
			controller: {
				...this.state.controller,
				input: ''
			} 
		});
	};

	updateControllerStatus = (value) => {
		this.setState({
			...this.state, 
			controller: {
				...this.state.controller, 
				status: value
			}
		})
	};

	render() {

		const { mobileNavigation } = this.state;
		const { controller } = this.state;
		const { showMobileNavigation, toggleMobileNavigation } = this;
		const { createControllerOutputItem, updateControllerInput, updateControllerStatus, resetControllerInput, saveControllerOutputItem, initControllerOutputItems } = this;

		return(
			<AppContext.Provider value={{
				mobileNavigation, 
				showMobileNavigation, 
				toggleMobileNavigation, 
				controller,
				createControllerOutputItem,
				updateControllerInput,
				resetControllerInput,
				updateControllerStatus,
				saveControllerOutputItem,
				initControllerOutputItems
			}}>
				{ this.props.children }
			</AppContext.Provider>
		)

	}

} 

export default AppContext;