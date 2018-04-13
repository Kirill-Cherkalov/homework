import React, { Component } from 'react';
import './Button.css';

export class Button extends Component {
    handleClick(e) {
        this.props.func(e);
    }

    componentWillUpdate(props) {
        let windowWidth = window.innerWidth;
        let windowHeight = window.innerHeight;
        let BtntPozWidth = (windowWidth - 480) / 2; 
        let BtntPozHeight = ((windowHeight - this.props.height) / 2) + (this.props.height / 2);
        if( this.btn.className === 'leftButton' ) {
             this.btn.style.left = BtntPozWidth + 'px';
             this.btn.style.top = BtntPozHeight + 'px';

        } else if( this.btn.className === 'rightButton' ) {
             this.btn.style.right = BtntPozWidth + 'px';
             this.btn.style.top = BtntPozHeight + 'px';
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