import React, { Component } from 'react';
import './Image.css';

export class Image extends Component {

    render() {
        return (
            <img className='image' src={this.props.src} tabIndex='0' />
        );
    }
}