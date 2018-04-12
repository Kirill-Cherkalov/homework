import React, { Component } from 'react';
import { Content } from '../Content/Content';
import { connect } from 'react-redux'

const stateToProps = state => ({
    items: state.fetchGifs
})

export const Item = connect(stateToProps)(
     class Item extends Component {
        state = {
            loading: true,
            images: []
        };
    
        componentDidMount (props) {
            // setTimeout(()=>{
                let rowHeight = 20;
                let rowGap = 10;
                let allItems = document.getElementsByClassName("item")[this.props.index];
                console.log('allItems', allItems)
                // console.log('allItems.length', allItems.length)
                // console.log('this.props.items.length', this.props.items )
                // for (let x = 0; x < allItems.length; x++) {
                    // let item = allItems[x];
                    // console.log('allItems[x]', item.querySelector('.content').getBoundingClientRect().height)
                    console.log('this.props.items[x].height')
                    // let rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
                    let rowSpan = Math.ceil(((this.props.height / 2) + rowGap) / (rowHeight + rowGap));
                    // item.style.gridRowEnd = "span " + rowSpan;
                    allItems.style.gridRowEnd = "span " + rowSpan;
                // }
                // }, 5000)
            }
                
                
                
                // let rowSpan =((this.props.height + rowGap) / (rowHeight + rowGap));
                // for (let x = 0; x < allItems.length; x++) {
                    // console.log('allItems[x]', allItems[x])
                    // this.props.data(allItems[x]);
                // }}, 2000)
                // console.log('this.item', this.item)
                // window.onload = this.ready();
                
        // }
    
    
    componentDidUpdate() {
        // console.log('][')
        // console.log('ITEM_componentWillUpdate', this.props.items)
    }
    
    componentWillUpdate(props) {
        // console.log('ITEM_componentWillUpdate', this.props.items)
    }
    
        render() {
            console.log('this.props.height')
            
            return (
               <div className='item' style={{
                //    border: '5px solid black',
                //    visibility: 'hidden'
               }}
               ref={(node) => this.item = node}>
                    <Content src={this.props.src}/>
               </div>
            );
        }
    }
)
