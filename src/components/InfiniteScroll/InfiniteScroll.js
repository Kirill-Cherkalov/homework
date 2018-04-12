import * as React from 'react';
import { getGifs } from '../../actions/getGifs'
import { connect } from 'react-redux';

const THRESHOLD = 100;

const stateToProps = state => ({
    items: state.fetchGifs
});

export const InfiniteScroll = connect(stateToProps) (
 class InfiniteScroll extends React.Component {

    state = {
        loading: false
    };

    constructor(props) {
        super(props);

        this.onScroll = this.onScroll.bind(this);
    }

    componentDidMount() {
        document.addEventListener('scroll', this.onScroll, {passive: true});
        console.log('componentDidMount scroll')
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.onScroll);
        console.log('componentWillUnmount scroll')
    }

    componentDidUpdate() {
        this.onScroll();
        console.log('componentDidUpdate scroll')
    }

    onScroll() {
        if (!this.container || this.state.loading) {
            return;
        }

        let scrollTop = document.body.scrollTop || document.documentElement.scrollTop,
            containerHeight = this.container.clientHeight,
            windowHeight = window.innerHeight;
            console.log('onScroll scroll')
            // console.log('scrollTop', scrollTop)
            // console.log('containerHeight', containerHeight)
            // console.log('windowHeight', windowHeight)

        if (scrollTop + windowHeight >= containerHeight - THRESHOLD) {
            console.log('RELOAD scroll')
            // scrollTop -= windowHeight
            this.props.dispatch(getGifs())
        }
    }
    render() {
        return (
            <div className="infinite" ref={(container) => this.container = container}>
                {this.props.children}

                {this.state.loading && (
                    <div className="infinite__spinner">
                        <div className="spinner"/>
                    </div>
                )}
            </div>
        );
    }
})