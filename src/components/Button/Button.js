import React, { Component } from 'react';
import './Button.css';
import PropTypes from 'prop-types';

export class Button extends Component {
    handleClick(e) {
        this.props.func(e);
    }

    componentWillUpdate() {
        let windowWidth = window.innerWidth,
            windowHeight = window.innerHeight,
            btnStyle =  this.btn.style,
            btnClassName = this.btn.className;

        if( windowWidth <= 550 ) {
            let BtntPozWidth = windowWidth * 0.5 - 30;

            if( btnClassName === 'leftButton' ) {
                btnStyle.left = BtntPozWidth + 'px';
                btnStyle.top = 0 + 'px';
    
            } else if( btnClassName === 'rightButton' ) {
                btnStyle.right = BtntPozWidth + 'px';
                btnStyle.bottom = 80 + 'px';
            }

        } else {
            // let BtntPozWidth = (windowWidth - 480) * 0.5 - 105; 
            let BtntPozWidth = (windowWidth - 480 ) * 0.5; 
            let BtntPozHeight = ((windowHeight - this.props.height) * 0.5) + (this.props.height * 0.5) - 50;

            if( btnClassName === 'leftButton' ) {
                btnStyle.right = BtntPozWidth + 500  + 'px';
                btnStyle.top = BtntPozHeight + 'px';
   
            } else if( btnClassName === 'rightButton' ) {
                btnStyle.left = BtntPozWidth + 500 + 'px';
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

Button.propTypes = {
    func: PropTypes.func,
    modif: PropTypes.string,
    activity: PropTypes.string,
    height: PropTypes.string
};