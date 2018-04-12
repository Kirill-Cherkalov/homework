import React, { Component } from 'react';
import { Content } from '../Content/Content';
import { connect } from 'react-redux'

    export class Item extends Component {
        state = {
            loading: true,
            images: []
        };
    
        componentDidMount (props) {
                let rowHeight = 20;
                let rowGap = 10;
                let item = document.getElementsByClassName("item")[this.props.index];
                let rowSpan = Math.ceil(((this.props.height / 2) + rowGap) / (rowHeight + rowGap));
                item.style.gridRowEnd = "span " + rowSpan;
            }

        componentWillUpdate(props) {
        }
    
        render() {
            return (
               <div className='item' >
                    <Content src={this.props.src}/>
               </div>
            );
        }
    }
