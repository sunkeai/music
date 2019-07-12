import personInit from '../../state/find/person'
//bannerList:[]
export default function (state=personInit,{type,payload}) {
    state = JSON.parse(JSON.stringify(state));
    if(type === "UP_BANNER"){
        // console.log(11111,state.bannerList)
        // console.log(22222,payload.banners)
        state.bannerList = state.bannerList.concat(payload.banner);// = ;
        console.log(state,999);
    }
    return state;
}