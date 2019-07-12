import axios from "axios";
export default{
    upAccount(payload){
        return{
            type:"GET_PHONE",
            payload
        }
    },
    getPhone(phone,password){
        return (dispatch)=>{
            // console.log(phone, password);
            axios.get("http://swmonk.top:3000/login/cellphone?phone="+phone+"&password="+password)
                .then(({data})=>{
                    const accountData = data;
                    dispatch(this.upAccount({accountData}));
                })
        }
    }
}