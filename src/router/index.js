import account from "./account";
import TabExample from '../views/Common/TabBarExample'
export default [
    ...account,
    {
        path:"/",
        exact:true,
        component:TabExample,
        nameStr:"分类",
        isAuthorization:true
    }
]