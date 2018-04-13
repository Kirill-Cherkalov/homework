import React, { Component } from 'react';
import './Preview.css';
import { Button } from '../Button/Button';

export class Preview extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activity: false,
        }
        this.handleKeyPress = this.handleKeyPress.bind(this)
    }

    componentDidMount() {
        document.addEventListener('click', this.handleClick.bind(this));
    }

    handleKeyPress(e) {
        if( e.keyCode === 27 ) {
            this.handleClick();
        }
    }

    handleClick(e) {
        if( e.target.tagName === 'IMG' ) {
            this.setState({
                activity: !this.state.activity
            })
        }
        
    }

    render() {
        let index = this.props.index && this.props.index + 1;
        let url = this.props.items[index] && this.props.items[index].url ;
        const elem = <img 
        src={url}
        />
        const className = this.state.activity ? 'preview visible' : 'hidden'
        return (
            <div className={className} >
                <Button 
                modif='left'
                act={this.state.activity}
                />
                {elem }
                <Button 
                modif='right'
                act={this.state.activity}
                />
            </div>
        );
    }
}