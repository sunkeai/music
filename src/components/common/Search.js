import { SearchBar, Button, WhiteSpace, WingBlank } from '_antd-mobile@2.2.14@antd-mobile/lib/index';
import React from 'react';

class SearchBarExample extends React.Component {
    state = {
        value: '美食',
    };

    onChange= (value) => {
        this.setState({ value });
    };
    clear = () => {
        this.setState({ value: '' });
    };

    render() {
        return (<div>
            <SearchBar
                value={this.state.value}
                placeholder="Search"
                onSubmit={value => console.log(value, 'onSubmit')}
                onClear={value => console.log(value, 'onClear')}
                onFocus={() => console.log('onFocus')}
                onBlur={() => console.log('onBlur')}
                onCancel={() => console.log('onCancel')}
                showCancelButton
                onChange={this.onChange}
            />
        </div>);
    }
}
export default SearchBarExample




