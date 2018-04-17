import React, { Component } from 'react';
import './Button.css';

export class Button extends Component {
    handleClick(e) {
        this.props.func(e);
    }

    componentWillUpdate(props) {
        let windowWidth = window.innerWidth,
            windowHeight = window.innerHeight,
            btnStyle =  this.btn.style,
            btnClassName = this.btn.className;

        if( windowWidth <= 690 ) {
            let BtntPozWidth = windowWidth * 0.5 - 30;
            let BtntPozHeight = (windowHeight - this.props.height) * 0.5;

            if( btnClassName === 'leftButton' ) {
                btnStyle.left = BtntPozWidth + 'px';
                btnStyle.top = 0 + 'px';
    
            } else if( btnClassName === 'rightButton' ) {
                btnStyle.right = BtntPozWidth + 'px';
                btnStyle.bottom = 80 + 'px';
            }

        } else {

            let BtntPozWidth = (windowWidth - 480) * 0.5 - 105; 
            let BtntPozHeight = ((windowHeight - this.props.height) * 0.5) + (this.props.height * 0.5) - 50;

            if( btnClassName === 'leftButton' ) {
                btnStyle.left = BtntPozWidth + 'px';
                btnStyle.top = BtntPozHeight + 'px';
   
           } else if( btnClassName === 'rightButton' ) {
                btnStyle.right = BtntPozWidth + 'px';
                btnStyle.top = BtntPozHeight + 'px';
           }
        }

    }

    render() {
        let btnClass = this.props.modif === 'left' ? 'leftButton' : 'rightButton' ;
        return (
            <div className={this.props.activity}>
                <button 
                    className={btnClass}
                    onClick={this.handleClick.bind(this)}
                    ref={(node)=>this.btn=node}
                />
            </div>
        );
    }
}