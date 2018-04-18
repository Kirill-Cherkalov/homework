import React, { Component } from 'react';
import { Content } from '../Content/Content';

    export class Item extends Component {
        constructor(props) {
            super(props);
            let item = document.getElementsByClassName("item")[this.props.index];
            let rowSpan = Math.ceil(((this.props.height * 0.80 )) * (0.034333));
            this.state = {
                rowSpan: rowSpan
            }
            this.resize = this.resize.bind(this);
        }
        componentDidMount (props) {
                let item = document.getElementsByClassName("item")[this.props.index];
                let rowSpan = Math.ceil(((this.props.height * 0.80 )) * (0.034333));
                this.setState({
                    rowSpan: rowSpan
                })
                item.style.gridRowEnd = "span " + this.state.rowSpan;

                window.addEventListener('resize', this.resize.bind(this))
            }

        resize(props) {
            let windowWidth = window.innerWidth;

            if( windowWidth > 275 && windowWidth < 285 ) {
                console.log('284')
                let item = document.getElementsByClassName("item")[this.props.index];
                let rowSpan = Math.ceil(((this.props.height * 0.80 )) * (0.049333));
                this.setState({
                    rowSpan: rowSpan
                })
                item.style.gridRowEnd = "span " + this.state.rowSpan;
            } else if( windowWidth > 385 && windowWidth < 395 ) {
                console.log('> 385')
                let item = document.getElementsByClassName("item")[this.props.index];
                let rowSpan = Math.ceil(((this.props.height * 0.80 )) * (0.060333));
                this.setState({
                    rowSpan: rowSpan
                })
                item.style.gridRowEnd = "span " + this.state.rowSpan;
            } 
            else if( windowWidth > 510 && windowWidth < 520 ) {
                console.log('> 515')
                let item = document.getElementsByClassName("item")[this.props.index];
                let rowSpan = Math.ceil(((this.props.height * 0.80 )) * (0.065333));
                this.setState({
                    rowSpan: rowSpan
                })
                item.style.gridRowEnd = "span " + this.state.rowSpan;
            } else if( windowWidth > 780 && windowWidth < 790 ) {
                let item = document.getElementsByClassName("item")[this.props.index];
                let rowSpan = Math.ceil(((this.props.height * 0.80 )) * (0.034333));
                this.setState({
                    rowSpan: rowSpan
                })
                item.style.gridRowEnd = "span " + this.state.rowSpan;
            }
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
