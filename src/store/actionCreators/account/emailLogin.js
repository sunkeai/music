import axios from "axios";
export default{
    upEmail(payload){
        return{
            type:"GET_EMAIL"
        }
    },
    getEmail(email,password){
        return (dispatch)=>{
            console.log(email, password);
            axios.get("http://swmonk.top:3000/login?email="+email+"&password="+password)
                .then(({data})=>{
                    console.log(data);
                })
        }
    }
}