import React, { Component } from 'react';
import { Image } from '../Image/Image';
import PropTypes from 'prop-types';

export class Content extends Component {
    render() {
        return (
            <div className='content'>
                <Image 
                    src={this.props.src}
                    update={this.props.update}
                    index={this.props.index}/>
            </div>
        );
    }
}

Content.propTypes = {
    src: PropTypes.string,
    update: PropTypes.func,
    index: PropTypes.number
};