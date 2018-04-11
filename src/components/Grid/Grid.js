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
            let grid = document.getElementsByClassName("grid")[0];
            // let grid = this.grid;
            console.log('grid', grid)
            let rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'), 10);
            let rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'), 10);
            // let rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
            let rowSpan =((item + rowGap) / (rowHeight + rowGap));
            console.log('rowSpan', item.querySelector('.content').getBoundingClientRect());
            return "span " + rowSpan;
            //  item.style.gridRowEnd = "span " + rowSpan;
        }
    
        componentDidMount(props,dispatch) {
            this.props.dispatch(getGifs())
        }
    
        render(props) {
             let Items = this.props.items.map((elem, index) => {
                console.log(this.resizeGridItem(elem.height));
                return (
                    <Item 
                    key={index}
                    // data={ (item) => this.resizeGridItem(item) }
                    src={elem.url}/>
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

