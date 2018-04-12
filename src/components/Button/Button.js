import React, { Component } from 'react';
import './Button.css';

export class Button extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         position: 'left'
    //     }
    // }

    componentDidMount(props) {

    }

    handleClick(porps) {
        console.log('jo')
    }

    render() {
        // const state = this.state.position;
        let btnClass = this.props.modif === 'left' ? 'leftButton' : 'rightButton' ;
        // let bthContainer = this.props.modif === 'righ' ? 'leftCont' : 'rightCont' ;
        return (
            <div className=''>
                <button className={btnClass + ' hidden'}
                onClick={this.handleClick.bind(this)}
                />
            </div>
        );
    }
}