import accountInit from '../../state/account/accountLogin';
//accountInit中code:0,phone:[]
export default function (state=accountInit,action){
    state = JSON.parse(JSON.stringify(state));
    // console.log(action,9999);
    // console.log(state, 888888);
    if(action.type==='GET_PHONE'){
        state.phone = action.payload;
        state.code = action.payload.accountData.code;
        // console.log(888888888, state);
    }
    return state;
}
