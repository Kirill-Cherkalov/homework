import React, { Component } from 'react';
import './Grid.css';
import { Item } from '../Item/Item';
import { connect } from 'react-redux';
import { getGifs } from '../../actions/getGifs';
import { InfiniteScroll } from '../InfiniteScroll/InfiniteScroll'
import { Preview } from '../Preview/Preview'

const stateToProps = state => ({
    items: state.fetchGifs
});

export const Grid = connect(stateToProps) (
     class Grid extends Component {

         state = {
            index: 0,
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

        updateData(index) {
            this.setState({
                index: index
            })
        }

        render(props) {
                let Items = this.state.prevProps.map((elem, index) => {
                return (
                     <Item
                        key={index}
                        src={elem.url}
                        height={elem.height}
                        index={index}
                        update={this.updateData.bind(this)}/>
                );
            })
            console.log('this.state.data', this.state.data)
            console.log('index', this.state.index)
            return (
                <InfiniteScroll fetchNext={this.props.dispatch(getGifs)}>
                    <div className='grid'>
                        <Preview 
                            items={this.props.items}
                            index={this.state.index}
                            />
                        { Items }
                         {/* {this.state.data} */}
                    </div>
                </InfiniteScroll>
            );
        }
    }
)

