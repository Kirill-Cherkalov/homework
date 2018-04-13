import React, { Component } from 'react';
import { Content } from '../Content/Content';

    export class Item extends Component {
        componentDidMount (props) {
                let item = document.getElementsByClassName("item")[this.props.index];
                let rowSpan = Math.ceil(((this.props.height * 0.5 ) + 10) * (0.033333));
                item.style.gridRowEnd = "span " + rowSpan;
            }

        render() {
            return (
               <div className='item' >
                    <Content 
                        src={this.props.src}
                        update={this.props.update}
                        index={this.props.index}
                    />
               </div>
            );
        }
    }
