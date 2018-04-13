import React, { Component } from 'react';
import './Button.css';

export class Button extends Component {
    handleClick(e) {
        this.props.func(e);
    }

    render() {
        let btnClass = this.props.modif === 'left' ? 'leftButton' : 'rightButton' ;
        return (
            <div className={this.props.activity}>
                <button className={btnClass}
                onClick={this.handleClick.bind(this)}
                />
            </div>
        );
    }
}