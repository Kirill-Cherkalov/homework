import React, { Component } from 'react';
import './Grid.css';
import { Item } from '../Item/Item';
import { connect } from 'react-redux';
import { getGifs } from '../../actions/getGifs';
import { InfiniteScroll } from '../InfiniteScroll/InfiniteScroll';
import { Preview } from '../Preview/Preview';
import PropTypes from 'prop-types';

const stateToProps = state => ({
    items: state.fetchGifs
});

export const Grid = connect(stateToProps) (
    class Grid extends Component {
        state = {
            index: 0,
            prevProps:[]
        };

        componentDidMount() {
            this.props.dispatch(getGifs());
        }

        componentWillReceiveProps(nextProps) {
            let newArr = [...nextProps.items];
            newArr.splice(0,1);
            this.setState({
                prevProps: [...newArr],
            });
        }

        updateData(index) {
            this.setState({
                index: index
            });
        }

        render() {
            let Items = this.state.prevProps.map((elem, index) => {
                return (
                    <Item
                        key={index}
                        src={elem.url}
                        height={elem.height}
                        index={index}
                        update={this.updateData.bind(this)}/>
                );
            });
            return (
                <InfiniteScroll fetchNext={this.props.dispatch(getGifs)}>
                    <div className='grid'>
                        { Items }
                        <Preview 
                            items={this.props.items}
                            index={this.state.index}
                        />
                    </div>
                </InfiniteScroll>
            );
        }
    }
);

Grid.propTypes = {
    dispatch: PropTypes.func
    // nextProps: PropTypes.shape({
    //     items: PropTypes.object.isRequired
    // }),

};