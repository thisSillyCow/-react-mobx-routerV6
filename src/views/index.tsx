/**
 * @Author: ZH
 * @createdTime: 2021-12-2021/12/27 09:59
 * @description:
 */
import React from 'react'
import { Button } from 'antd';
import { BrowserRouter as Router, Outlet, } from "react-router-dom";
export class Index extends React.Component {
    render() {
        return (
            <div>
                <Button>1111</Button>
                <Outlet />
            </div>
        );
    }
}