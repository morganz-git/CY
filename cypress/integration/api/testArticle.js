import Tools from "./tools";

describe("文章", function () {
    beforeEach(() => {
        let tools = new Tools()
        tools.generate_token()
    })
    it("添加文章", function () {
        cy.request({
            method: "POST",
            url: "/prod-api/article",
            form: false,
            headers: {contentType: "application/json;charset=UTF-8", Authorization: this.token},
            body: {
                "title": "112",
                "author": "",
                "idChannel": 1,
                "content": "<p>222ee</p>",
                "img": ""
            },
        }).its("body").should("contain", {"code": 20000, "msg": "成功", "success": true})
    })
})