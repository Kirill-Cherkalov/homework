import React, { Component } from 'react';
import './Image.css';
import PropTypes from 'prop-types';

export class Image extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageStatus: 'loading',
            activity: false
        };
        this.handleImageLoaded = this.handleImageLoaded.bind(this);
        this.handleImageErrored = this.handleImageErrored.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    error(ev){
        ev.target.classList.add('spinner');
    }

    handleImageLoaded() {
        this.setState({ imageStatus: 'loaded' });
    }

    handleImageErrored(ev) {
        this.setState({ imageStatus: 'failed to load' });
        ev.target.removeAttribute('src');
    }

    handleClick(el) {
        el.target.classList.add('active');
        this.setState({
            activity: true,
        });
        this.props.update(this.props.index);
    }

    render() {
        const state = this.state.imageStatus;
        let modif = state === 'loading' ?  'spinner image' :
            state === 'loaded' ? 'image' :
                state === 'failed to load' ? 'spinner' : 'spinner';
        return (
            <img className={modif}
                tabIndex='0'
                src={this.props.src}
                onLoad={this.handleImageLoaded.bind(this)}
                onError={this.handleImageErrored.bind(this)}
                onClick={this.handleClick.bind(this)}
            />
        );
    }
}

Image.propTypes = {
    update: PropTypes.func,
    index: PropTypes.number,
    imageStatus: PropTypes.string,
    src: PropTypes.string
};