import React, { Component } from 'react';
import './Preview.css';
import { Button } from '../Button/Button';

export class Preview extends Component {

    constructor(props) {
        super(props);
        let index = this.props.index && this.props.index + 1;
        const url = this.props.items[index] && this.props.items[index].url ;
        this.state = {
            activity: false,
            url: url,
            index: index
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyPress =this.handleKeyPress.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        let index = nextProps.index && nextProps.index + 1;
        const url = nextProps.items[index] && nextProps.items[index].url ;
        this.setState({
            url: url,
            index: index
        })
    }

    componentDidMount() {
        document.addEventListener('click', this.handleClick.bind(this));
        document.addEventListener('keydown', this.handleKeyPress);
    }

    handleKeyPress(e) {
        if( this.state.index - 1 === 0 || this.state.index + 1 === this.props.items.length ) {
            return this.setState({
                activity: false
            });
        }
        switch(e.keyCode || e.target.className) {
            case( 27 ):
            return this.setState({
                activity: false
            });

            case( 37 ):
            return this.setState({
                index: this.state.index - 1,
                url: this.props.items[this.state.index - 1].url,
                activity: true
            });

            case( 39 ):
            return this.setState({
                index: this.state.index + 1,
                url: this.props.items[this.state.index + 1].url,
                activity: true
            });

            case( 'leftButton' ):
            return this.setState({
                index: this.state.index - 1,
                url: this.props.items[this.state.index - 1].url,
                activity: true
            }); 

            case( 'rightButton' ):
            return this.setState({
                index: this.state.index + 1,
                url: this.props.items[this.state.index + 1].url,
                activity: true
            }); 
        }
}

    handleClick(e) {
        if( e.target.tagName === 'IMG' ) {
            this.setState({
                activity: !this.state.activity
            })
        }
        
    }

    componentDidUpdate() {
        console.log('this.preview', this.props.items[this.state.index] && this.props.items[this.state.index].height );
    }

    render() {
        const elem = <img src={this.state.url} />
        const height =  this.props.items[this.state.index] && this.props.items[this.state.index].height;
        const className = this.state.activity ? 'preview visible' : 'hidden';
        return (
            <div className={className} >
                <Button 
                    modif='left'
                    act={this.state.activity}
                    func={this.handleKeyPress.bind(this)}
                    height={height}
                />
                {elem }
                <Button 
                    modif='right'
                    act={this.state.activity}
                    func={this.handleKeyPress.bind(this)}
                    height={height}
                />
            </div>
        );
    }
}