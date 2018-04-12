import * as React from 'react';
import { getGifs } from '../../actions/getGifs'
import { connect } from 'react-redux';

const THRESHOLD = 300;

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
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.onScroll);
    }

    componentDidUpdate() {
        this.onScroll();
    }

    async onScroll() {
        if (!this.container || this.state.loading) {
            return;
        }

        
        let scrollTop = document.body.scrollTop || document.documentElement.scrollTop,
            containerHeight = this.container.clientHeight,
            windowHeight = window.innerHeight;

        if (scrollTop + windowHeight >= containerHeight - THRESHOLD) {
            this.setState({
                loading: true
            })
    
            console.log('RELOAD scroll')
            await this.props.dispatch(getGifs());
            this.setState({
                loading: false
            })
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