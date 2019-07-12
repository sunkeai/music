import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import React from 'react';
//子组件,
import Person from './Person'
import Anchor from './Anchor'
import Search from '../common/Search'
const tabs = [
    { title: <Badge >个性推荐</Badge> },
    { title: <Badge >主播电台</Badge> }
];
const TabType = () => (
        <div style={{height:'100%'}}>
            <Search></Search>
            <Tabs tabs={tabs}
                  initialPage={0}
                  onChange={(tab, index) => { console.log('onChange', index, tab); }}
                  onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
            >
                <div style={{ display: 'flex', alignItems: '', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
                    <Person></Person>
                </div>
                <div style={{ display: 'flex', alignItems: '', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
                    <Anchor></Anchor>
                </div>
            </Tabs>
        </div>
);
export default TabType;