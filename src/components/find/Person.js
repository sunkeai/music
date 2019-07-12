//个性推荐
import React, {Component} from 'react';
import {connect} from 'react-redux';
//引入组件轮播
import Paint from './Paint'

//引入action
import personCreator from "../../store/actionCreators/find/person";

export default class Anchor extends Component{
    render() {
        return(
            <section>
                <Paint></Paint>
            </section>
        )
    }

}
