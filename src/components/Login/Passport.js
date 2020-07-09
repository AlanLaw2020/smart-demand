'use strict';
export default class Passport {
    constructor() {
        // 用户登录标识
        this.isLogin = false;
    }

    login(username, password, callback) {
        if (username === 'abc' && password === '123') {
            // 登录成功
            this.isLogin = true;
            // 将登录成功之后的操作给调用者处理
            callback();
        } else {
            // 登录失败
            // 这里简单弹出一个消息
            alert('登录失败！');
        }
    }
}