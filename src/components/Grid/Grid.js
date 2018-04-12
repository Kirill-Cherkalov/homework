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
            loading: true,
            prevProps:[this.props.items]
        };

        componentDidMount(props,dispatch) {
            this.props.dispatch(getGifs())
        }

        componentDidUpdate(prevProps) {
            // console.log('componentDidUpdate', this.props, prevProps)
            // this.setState({
            //     prevProps: 
            // })
        }

        componentWillReceiveProps(nextProps) {
            let lengthOldArr = this.props.items.length;
            let lengthNewArr = nextProps.items.length - lengthOldArr;
            let newArr = [... nextProps.items];
            newArr.splice(0, lengthOldArr)
            this.setState({
                prevProps: newArr,
            })
        }


    
        render(props) {
             let Items = this.props.items.map((elem, index) => {
                return (
                     <Item
                        key={index}
                        src={elem.url}
                        height={elem.height}
                        index={index}/>
                ); 
            })
            // let Items = this.state.prevProps.map((elem, index) => {
            //     console.log('this.props.items.length', this.props.items.length)
            //     return (
            //         <Item 
            //         key={index  }
            //         src={elem.url}
            //         height={elem.height}
            //         index={index  }/>
            //     ); 
            // })

            return (
                <InfiniteScroll fetchNext={this.props.dispatch(getGifs)}>
                    <div className='grid'>
                        { Items }
                    </div>
                </InfiniteScroll>
            );
        }
    }
)

