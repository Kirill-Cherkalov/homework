import React, { Component } from 'react';
import './Example.css'

export  class Example extends Component {
        componentDidMount(el) {
            setTimeout(()=>{
                let allItems = document.getElementsByClassName("item");
                function resizeGridItem(item) {
                   let grid = document.getElementsByClassName("grid")[0];
                   let rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'), 10);
                   let rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'), 10);
                   let rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
                   console.log('rowSpan', item.querySelector('.content').getBoundingClientRect());
                    item.style.gridRowEnd = "span " + rowSpan;
                }
        
                function resizeAllGridItems() {
                    console.log('resize');
                    allItems = document.getElementsByClassName("item");
                    
                    for (let x = 0; x < allItems.length; x++) {
                        resizeGridItem(allItems[x]);
                    }
                }
        
                resizeAllGridItems();
            }, 0)
    }

    render() {
        return (
            <div className='grid'>
                <div className='item' ref='itemRef'>
                    <div className='content'>
                    <img className='image' src='./1.PNG' tabIndex='0' />
                    </div>
                </div>
                
                <div className='item' ref='itemRef'>
                    <div className='content'>
                    <img className='image' src='./2.PNG' tabIndex='0' alt='eqwecwe'/>
                    </div>
                </div>
                <div className='item'>
                    <div className='content'>
                    <img className='image' src='./3.PNG' tabIndex='0' alt='ewcewc'/>
                    </div>
                </div>
                <div className='item'>
                    <div className='content'>
                    <img className='image' src='./4.PNG' tabIndex='0' alt='photo'/>
                    </div>
                </div>
                <div className='item'>
                    <div className='content'>
                    <img className='image' src='./5.PNG' tabIndex='0' alt='photo'/>
                    </div>
                </div>
                <div className='item'>
                    <div className='content'>
                    <img className='image' src='./6.PNG' tabIndex='0' alt='photo'/>
                    </div>
                </div>
                <div className='item' >
                    <div className='content'>
                    <img className='image' src='./9.PNG' tabIndex='0' alt='photo'/>
                    </div>
                </div>
            </div>
        );
    }
}