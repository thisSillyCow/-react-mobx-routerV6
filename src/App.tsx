import React from 'react'
import { inject } from 'mobx-react';
import './App.css'
import { Button } from 'antd';
@inject(({ store }) => ({ count: store.count, increase: store.increase }))

export default class App extends React.Component<any, {}> {
    constructor(props: any) {
        super(props);
        this.state = { seconds: 0 };
    }
    render() {
        const { count, increase } = this.props;
        return (
            <div>
                <Button type="primary">Button</Button>
                <span>{count}</span>
                <button onClick={increase}>increase</button>
            </div>
        )
    }
}
