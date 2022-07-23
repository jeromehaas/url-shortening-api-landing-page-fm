import { Component } from 'react';
import Heading from 'components/01-atoms/heading/heading';
import Paragraph from 'components/01-atoms/paragraph/paragraph';
import Card from 'components/02-molecules/card/card';
import IconBrandRecognition from 'public/icons/icon-brand-recognition.svg'
import IconDetailedRecords from 'public/icons/icon-detailed-records.svg'
import IconFullyCustomizable from 'public/icons/icon-fully-customizable.svg'

class Cards extends Component {

	render() {

		return (
			<section className="cards section">
				<div className="cards__inner section__inner">
					<Heading className="cards__heading" level="h2">Advanced Statistics</Heading>
					<Paragraph className="cards__paragraph">Track how your links are performing across the web with our advanced statistics dashboard.</Paragraph>
					<div className="cards__wrapper">
							<Card className="cards__item" heading="Brand Recognition" text="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content." icon={ IconBrandRecognition } />
							<Card className="cards__item" heading="Detailed Records" text="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions." icon={ IconDetailedRecords } />
							<Card className="cards__item" heading="Fully Customizable" text="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement." icon={ IconFullyCustomizable } />
					</div>
				</div>
			</section>
		);

	};

};

export default Cards;
