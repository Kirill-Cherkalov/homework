import React, { Component } from 'react'
import './Preview.css'
import { Button } from '../Button/Button'

export class Preview extends Component {
    state = {
        activity: false
    }
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress)
    }

    handleKeyPress(e) {
        console.log('ji')
        if( e.keyCode === 27 ) {
            this.handleClick()
        }
    }

    handleClick() {
        this.setState({
            activity: !this.state.activity
        })
    }

    componentWillMount() {
        console.log('update')
    }

    render() {
        let index = this.props.index && this.props.index + 1;
        let url = this.props.items[index] && this.props.items[index].url ;
        const elem = <img 
        src={url}
        onClick={() => this.handleClick()}/>
        console.log('elem Preview' , elem)
        const className = this.state.activity ? 'preview visible' : 'hidden'
        return (
            <div className={className}>
                <Button 
                modif='left'
                act={this.state.activity}
                />
                {elem}
                <Button 
                modif='right'
                act={this.state.activity}
                />
            </div>
        );
    }
}