import locator from "./locator.json"
// export 表示可以被引用
export default class LoginPage {
//    初始化 - 构造函数
    constructor() {
        this.url = ""
    }

//     封装页面对象
//     get 获取属性 https://blog.csdn.net/u010403387/article/details/44238539
    get username() {
        // 读取locator 中的元素定位器
        return cy.get(locator.loginpage.username)
    }

    get password() {
        return cy.get(locator.loginpage.password)
    }

    visit() {
        cy.visit(this.url)
    }

    get submit() {
        return cy.get(locator.loginpage.submit)
    }

//     业务流的操作 - 封装业务逻辑
    login(name, pwd) {
        if (name !== "" && pwd !== "") {
            this.username.type(name)
            this.password.type(pwd)
        }
        this.submit.click()
    }
}