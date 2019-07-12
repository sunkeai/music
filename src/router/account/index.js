import Login from '../../views/Common/Login'
import PhoneLogin from '../../views/Common/PhoneLogin'
import EmailLogin from '../../views/Common/EmailLogin'
export default[
    {
        path:"/login",
        exact:true,
        component:Login,
        nameStr:"登录",
        isAuthorization:true
    },{
        path:"/login/phone",
        exact:false,
        component:PhoneLogin,
        nameStr:"手机号登录",
        isAuthorization:true
    },{
        path:"/login/email",
        exact:false,
        component:EmailLogin,
        nameStr:"邮箱登录",
        isAuthorization:true
    }
]