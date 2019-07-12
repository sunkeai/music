import { Result, Icon, WhiteSpace } from 'antd-mobile';
import React from 'react';

const ResultExample = () => (
    <div className="result-example" style={{display:this.props.isSuccess?'block':'none'}}>
        <div className="sub-title">登录成功</div>
        <Result
            img={<Icon type="check-circle" className="spe" style={{ fill: '#1F90E6' }} />}
            title="验证成功"
            message="所提交内容已成功完成验证"
        />
    </div>);

export default ResultExample;