/**
 * @Author: ZH
 * @createdTime: 2021-12-2021/12/27 09:59
 * @description:
 */
import React, { useEffect } from 'react'
import { useNavigate, } from 'react-router-dom';
export const Login = () => {
    let navigate = useNavigate();
    const [allNumber, setAllNumber] = React.useState(1);
    const [n, setN] = React.useState(0);
    const [m, setM] = React.useState(0);
    useEffect(() => {
        console.log("模拟componentDidMount，即只运行一次该函数");
    }, []);
    useEffect(() => {
        console.log("n变化了");
    }, [n, m]);
    return (
        <div>
            { allNumber}
            <button onClick={() => setAllNumber(allNumber + 1)}>test</button>
            <div onClick={() => navigate('/home')}>登陆</div>
            <div>n:{n}</div>
            <button onClick={() => setN(n + 1)}>+1</button>
            <hr />
            <div> m:{m}</div>
            <button onClick={() => setM(m + 1)}>+1</button>
            <hr />
        </div>
    )
}