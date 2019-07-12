import axios from "axios"
export default {
    upBanner(payload){
        return {
            type:"UP_BANNER",
            payload
        }
    },
    getBannerList(type=1){
        return (dispatch)=>{
            dispatch((dispatch)=>{
                console.log(11111);
                axios.get("http://swmonk.top:3000/banner?type="+type)
                    .then(({data})=>{
                        console.log(data);
                        const banner = data.banners;
                        dispatch(this.upBanner({
                            banner
                        }))
                    })
            })
        }
    }
}
