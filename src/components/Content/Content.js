import React, { Component } from 'react';
import { Image } from '../Image/Image'; 

export class Content extends Component {

    render() {
        return (
            <div className='content'>
                <Image src={this.props.src}/>
            </div>
        );
    }
}