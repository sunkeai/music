import React,{Component} from 'react';
import Anchor from '../../components/find/Anchor'
import Person from '../../components/find/Person'
import {connect} from 'react-redux';
import personCreator from '../../store/actionCreators/find/person'


export default class Find extends Component{
    constructor(){
        super()
        this.state={
            isShow:true
        }
    }
    render(){
        return(
            <div>
                <div className='s-top'>
                    <p>个性推荐1</p>
                    <p>主播电台2</p>
                </div>

                <Person></Person>
                <Anchor></Anchor>


            </div>
        )
    }

}

