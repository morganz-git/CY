import LoginPage from "./page/loginpage";

context("login", () => {
    it("should be able to login if the correct username and password", function () {
        //    定义一个变量
        let login = new LoginPage()
        login.visit()
        login.login("user", "password")
        // 登录以后需要做检查
        cy.url().should("contain", "")
    })
})