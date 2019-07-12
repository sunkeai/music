import { TabBar } from '_antd-mobile@2.2.14@antd-mobile/lib/index';
import React from 'react';

//组件
import Find from '../../components/find/Find'
import Video from '../Video/Video'
import Mine from '../Mine/Mine'
import Friend from '../Friend/Friend'
import Account from '../Account/Account'


class TabBarExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'pinkTab',
            hidden: false,
            fullScreen: false,
            pageT:'Find'
        };
    }
    render() {
        return (
            <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', bottom:0,left:0 } : { height: 667 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#C20C0C"
                    barTintColor="#eee"
                    hidden={this.state.hidden}
                >
                    <TabBar.Item
                        title="发现"
                        key="Find"
                        icon={<span style={{
                            width: '22px',
                            height: '22px'}} className='iconfont'
                        >&#xebb4;</span>
                        }
                        selectedIcon={<span style={{
                            width: '22px',
                            height: '22px',
                            color:'#C20C0C',
                        }} className='iconfont'
                        >&#xe650;</span>
                        }
                        selected={this.state.selectedTab === 'blueTab'}
                        badge={0}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'blueTab',
                            });
                        }}
                        data-seed="logId"
                    >
                       <Find></Find>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <span style={{
                                width: '22px',
                                height: '22px',}}
                                  className='iconfont'
                            >&#xe741;</span>
                        }
                        selectedIcon={
                            <span style={{
                                width: '22px',
                                height: '22px',
                                color:'#C20C0C'}}
                                  className='iconfont'
                            >&#xe741;</span>
                        }
                        title="视频"
                        key="Video"
                        badge={0}
                        selected={this.state.selectedTab === 'redTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'redTab',
                            });
                        }}
                        data-seed="logId1"
                    >
                        <Video></Video>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',}}
                                 className='iconfont'
                            >&#xe741;</div>
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                color:'#C20C0C'}}
                                 className='iconfont'
                            >&#xe741;</div>
                        }
                        title="我的"
                        key="Mine"
                        selected={this.state.selectedTab === 'greenTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'greenTab',
                            });
                        }}
                    >
                        <Mine></Mine>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',}}
                                 className='iconfont'
                            >&#xe617;</div>
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                color:'#C20C0C'}}
                                 className='iconfont'
                            >&#xe617;</div>
                        }
                        title="朋友"
                        key="Friend"
                        selected={this.state.selectedTab === 'yellowTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'yellowTab',
                            });
                        }}
                    >
                        <Friend></Friend>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',}}
                                 className='iconfont'
                            >&#xe658;</div>
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                color:'#C20C0C'}}
                                 className='iconfont'
                            >&#xe658;</div>
                        }
                        title="账号"
                        key="Account"
                        selected={this.state.selectedTab === 'pinkTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'pinkTab',
                            });
                        }}
                    >
                        <Account></Account>
                    </TabBar.Item>
                </TabBar>
            </div>
        );
    }
}
export default TabBarExample;
