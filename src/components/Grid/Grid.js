import React, { Component } from 'react';
import './Grid.css';
import { Item } from '../Item/Item';
import { connect } from 'react-redux';
import { getGifs } from '../../actions/getGifs';
import { InfiniteScroll } from '../InfiniteScroll/InfiniteScroll'

const stateToProps = state => ({
    items: state.fetchGifs
});

export const Grid = connect(stateToProps) (
     class Grid extends Component {

         state = {
            loading: true
        };

        resizeGridItem(item) {
            // let grid = document.getElementsByClassName("grid")[0];
            // let rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'), 10);//20
            let rowHeight = 20
            // let rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'), 10);//10
            let rowGap = 10
            let rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
            // let rowSpan =((item + rowGap) / (rowHeight + rowGap));
             item.style.gridRowEnd = "span " + rowSpan;
        }
    
        componentDidMount(props,dispatch) {
            this.props.dispatch(getGifs())
            document.addEventListener("DOMContentLoaded", this.DOMContentLoaded);
            // window.onload = this.onload();
            if(this.props.items) {
                // console.log('jo', this.props.items)
            }
        }

        componentDidUpdate(prevProps) {
            console.log('componentDidUpdate', this.props, prevProps)
        }

        // DOMContentLoaded() {
        //     console.log('DOMContentLoaded', this.props)
            
        // }

        // onload() {
        //     console.log('onload', this.props)
        // }



        componentWillReceiveProps(nextProps) {
            console.log('componentWillReceiveProps', nextProps, this.props)
        }

        componentWillUpdate(props) {
            // console.log('componentWillUpdate', this.props)
        }
    
        render(props) {
             let Items = this.props.items.map((elem, index) => {
                // console.log(this.resizeGridItem(elem.height));
                return (
                    <Item 
                    key={index}
                    // data={ (item) => this.resizeGridItem(item) }
                    node={this.grid}
                    src={elem.url}
                    height={elem.height}
                    index={index}/>
                ); 
            })
            return (
                <InfiniteScroll fetchNext={this.props.dispatch(getGifs)}>
                    <div className='grid' ref={(node) => this.grid = node}>
                        { Items }
                    </div>
                </InfiniteScroll>
            );
        }
    }
)

