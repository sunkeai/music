import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import PlayerTop from '../../components/common/PlayerTop'

// import LoginBtn from '../../components/account/LoginBtn'
class Account extends Component{
    render(){
        return(
            <div>
                <div className="account-top">
                    <div></div>
                    <div>账号</div>
                    <PlayerTop></PlayerTop>
                </div>
                <div className='login'>
                    <p>登录网易云音乐</p>
                    <p>手机电脑多端同步，尽享海量高品质音乐</p>
                    <NavLink to={'/login'} exact className='navlink-login-btn' style={{display:'block'}}>立即登录</NavLink>
                </div>
            </div>
        )
    }
}

export default Account;