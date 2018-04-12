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
            prevProps:[]
        };

        componentDidMount(props,dispatch) {
            this.props.dispatch(getGifs())
        }

        componentWillReceiveProps(nextProps) {
            let newArr = [...nextProps.items];
            newArr.splice(0,1)
            this.setState({
                prevProps: [...newArr],
            })
        }

        render(props) {
                let Items = this.state.prevProps.map((elem, index) => {
                return (
                     <Item
                        key={index}
                        src={elem.url}
                        height={elem.height}
                        index={index}/>
                ); 
            })

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

