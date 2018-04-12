import React, { Component } from 'react';
// import './Button.css';

export class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: 'left'
        }
    }

    componentDidMount(props) {

    }

    handleClick(porps) {
        console.log('jo')
    }

    render() {
        const state = this.state.position;
        let btnClass = state === 'left' ? 'leftButton' : 'rightButton' ;
        let bthContainer = state === 'left' ? 'leftCont' : 'rightCont' ;
        return (
            <div className={bthContainer}>
                <button className={btnClass}
                onClick={this.handleClick.bind(this)}
                />
            </div>
        );
    }
}