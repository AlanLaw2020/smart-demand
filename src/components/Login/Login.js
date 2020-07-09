import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginLayout from './LoginLayout';
import {Button, Col, Container, Image, Row,Form} from "react-bootstrap";
import Passport from "./Passport";

class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }
    setUserInfo(event, key) {
        // input表单元素会自动绑定一个event对象对事件函数
        // event对象target属性等于input DOM元素对象，所以event.target.value 可以获取到当前input的value值
        let obj = {};
        obj[key] = event.target.value;
        // 更新状态
        this.setState(obj);
    }
    // btnFn(){this.props.history.push('/reservations');}
    //     // goto() {
    //     //     this.props.history.push('/makereservations');
    //     // }
    handleEmail (e) {
        let value = e.target.value;
        console.log('请输入正确的Email');
        if(!(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value))) {
            console.log('请输入正确的Email');
        }

    }
    render(){
        return (
            <LoginLayout>
                <Container>
                    <Row style={{paddingTop:30,backgroundColor:'grey'}}>
                        <Col xs={1}><Image src={require("./logo.jpg")} height="30" width="30" /></Col>
                        <Col xs={10}><h3>交通管理システム</h3></Col>
                        <Col xs={1}></Col>
                    </Row>
                </Container>
                <Container >
                    <Row>
                        <Col>
                            <Form>
                                <div className="form-group" style={{textAlign:"left"}} >
                                    <label htmlFor="inputID">ID:</label>
                                    <input type="text" className="form-control" id="inputID" placeholder="ID"
                                           // onChange={(event) => {this.handleEmail(event);}}
                                           onInput={(event) => {this.setUserInfo(event, 'username');}}
                                    />
                                </div>
                                <div className="form-group" style={{textAlign:"left"}}>
                                    <label htmlFor="inputPassword">Password:</label>
                                    <input type="password" className="form-control" id="inputPassword" placeholder="Password" onInput={(event) => {
                                        this.setUserInfo(event, 'password');
                                    }}/>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                    {/*バター*/}
                    <Row>
                        <Col xs={8}>
                            <Button variant="link" size="sm" href="https://www.google.com/" style={{float: "left"}}>パスワード忘れた</Button>
                        </Col>
                        <Col xs={4}>
                            <Button variant="link" size="sm" href="https://www.baidu.com/" style={{float:"right"}}>新規登録</Button>
                        </Col>
                            </Row>
                    <Row>
                        <Col>
                            <Button variant="primary" size="sm" onClick={() => {
                                if (this.state.username.length===0 || this.state.password.length===0 ) {alert("IDまたはパスワードを入力してください");}
                                else{
                                    const p = new Passport();
                                    p.login(this.state.username, this.state.password, () => {
                                        // 登录成功时，跳转页面
                                    this.props.history.push("/");
                                })}
                            }
                            }>ログイン</Button>
                        </Col>
                    </Row>
                </Container>
                <Container style={{paddingTop:80}}>
                    <Row style={{backgroundColor:'grey'}}>
                        <Col style={{paddingTop:40}}>Copyright &copy2017 &mdash; Your Company</Col>
                    </Row>
                </Container>
            </LoginLayout>
        );
      }
}

export default Login;



