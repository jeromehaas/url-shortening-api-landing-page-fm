import { Component } from 'react';
import DesktopNavigation from 'components/03-organisms/desktop-navigation/desktop-navigation';
import MobileNavigation from 'components/03-organisms/mobile-navigation/mobile-navigation';
import { AppProvider } from 'context/app-context';
import Hero from 'components/03-organisms/hero/hero';
import Controller from 'components/03-organisms/controller/controller';
import Cards from 'components/03-organisms/cards/cards';
import Cta from 'components/03-organisms/cta/cta';
import Footer from 'components/03-organisms/footer/footer';

class App extends Component {

	render() {
		return (
    	<AppProvider>
				<DesktopNavigation />
				<MobileNavigation />
				<Hero />
				<Controller />
				<Cards />
				<Cta />
				<Footer />
    	</AppProvider>
		)
	}

}

export default App;
