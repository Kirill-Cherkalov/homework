import React, { Component } from 'react'
import './Preview.css'
import { Button } from '../Button/Button'

export class Preview extends Component {
    componentDidMount() {

    }

    showElem() {
        return (
            <p>asdasdasd</p>
        );
    }

    render() {
        let index = this.props.index && this.props.index + 1;
        let url = this.props.items[index] && this.props.items[index].url ;
        const elem = <img src={url}/>
        console.log('elem Preview' , elem)
        return (
            <div className='preview'>
                <Button modif='left'/>
                {elem}
                <Button modif='right'/>
            </div>
        );
    }
}