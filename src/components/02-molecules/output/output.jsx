import { Component } from 'react';
import Button from 'components/01-atoms/button/button';
import copy from 'copy-to-clipboard';

class Output extends Component {
    
    constructor(props) {
        super(props);
        this.buttons = document.querySelectorAll('.output__button');
    }

    componentDidMount = () => {
        this.buttons = document.querySelectorAll('.output__button');
    }
    
    onClick = (event) => {
        event.preventDefault();
        this.resetButtonStyles();
        this.addButtonStyles(event);
        this.addValueToClipboard(event);
    };

    addValueToClipboard = (event) => {
        const value = event.target.getAttribute('data-value');
        console.log(value);
        copy(value);
        
    }
    
    addButtonStyles = (event) => {
        event.target.innerText = 'Copied!';
        event.target.classList.add('button--clicked');

    }

    resetButtonStyles = () => {
        this.buttons.forEach((button) => {
            button.classList.remove('button--clicked');
            button.innerText = 'Copy';
        });
    }
    
    render() {

        return (
            <div className="output">
            <a className="output__link link--original" href={ `https://${this.props.data.original}` } target="_blank"  rel="noreferrer" >{ this.props.data.original }</a>
                <a className="output__link link--short" href={ `https://${this.props.data.original}` } target="_blank"  rel="noreferrer" >{ this.props.data.short }</a>
                <Button className="output__button button--squarish button--small" onClick={ this.onClick } dataValue={ this.props.data.short }>Copy</Button>
            </div>
        );

    };
    
};

export default Output;