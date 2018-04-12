import React, { Component } from 'react';
import './Image.css';
import { Button } from '../Button/Button'


export class Image extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageStatus: 'loading',
            activity: false
        }
    }

    error(ev){
        ev.target.classList.add('spinner');
    }

    handleImageLoaded() {
        this.setState({ imageStatus: "loaded" });
    }

    handleImageErrored(ev) {
        this.setState({ imageStatus: "failed to load" });
        ev.target.removeAttribute('src');
    }

    handleClick(el) {
        // console.log('hi')
        el.target.classList.add('active');
        this.setState({
            activity: true
        })
        this.props.update(this.props.index);
    }

    render() {
        const state = this.state.imageStatus
        let modif = state === 'loading' ?  'spinner image' :
            state === 'loaded' ? 'image' :
            state === 'failed to load' ? 'spinner' : 'spinner';
        return (
            // <div className='image-container'>
                    <img className={modif}
                        tabIndex='0'
                        src={this.props.src}
                        onLoad={this.handleImageLoaded.bind(this)}
                        onError={this.handleImageErrored.bind(this)}
                        onClick={this.handleClick.bind(this)}
                    />
            // </div>
        
        );
    }
}