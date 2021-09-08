describe('login', function () {
    it("输入正确的用户名可以登录成功", () => {
        cy.request({
            method: "POST",
            url: "/prod-api/account/login",
            form: true,
            body: {
                username: "admin",
                password: "admin"
            }
        })
            .its("body")
            .should("contain", {"code": 20000, "msg": "成功"})
    })
})