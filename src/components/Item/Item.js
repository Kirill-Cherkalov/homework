import React, { Component } from 'react';
import { Content } from '../Content/Content';

export class Item extends Component {
    componentDidMount(props) {
        setTimeout(()=>{       
            let allItems = document.getElementsByClassName("item");
            
            for (let x = 0; x < allItems.length; x++) {
                this.props.data(allItems[x]);
            }}, 5000)
    }

    render() {
        return (
           <div className='item' >
                <Content src={this.props.src}/>
           </div>
        );
    }
}