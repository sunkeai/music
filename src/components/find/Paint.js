import React,{Component} from "react";
import { Carousel, WingBlank } from 'antd-mobile';
import personCreator from "../../store/actionCreators/find/person";

import {connect} from 'react-redux';
//轮播
class Paint extends Component {
    state = {
        data: ['1', '2', '3','4'],
        imgHeight: 125,
    }
    componentDidMount() {
        // simulate img loading
        // setTimeout(() => {
        //     this.setState({
        //         data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
        //     });
        // }, 100);
        //调用被绑定的方法
        this.props.getBannerList();
        console.log(this.props);
    }
    render() {
        return (
            <WingBlank>
                <Carousel
                    autoplay={true}
                    infinite={true}
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                >
                    {this.props.bannerList.map(val => (
                        <a
                            key={val}
                            href="http://www.baidu.com"
                            style={{ display: 'inline-block', width: '100%',  }}
                        >
                            <img
                                src={val.pic}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </a>
                    ))}
                </Carousel>
            </WingBlank>
        );
    }

}
function mapStateToProps(state){
    // console.log(333333333,state);
    return {
        bannerList:state.find.person.bannerList
    }
}
function mapDispatch(dispatch){
    // console.log(444444,dispatch)
    return{
        //personCreator中的获取banner的方法
        getBannerList(type =1){
            dispatch(personCreator.getBannerList(type))
        }
    }
}
export default connect(mapStateToProps,mapDispatch)(Paint);