export default class Tools {
    generate_token() {
        cy.request({
            method: "POST",
            url: "/prod-api/account/login",
            form: true,
            body: {
                username: "admin",
                password: "admin"
                //    提取返回的额数据, token
            }
        }).then(response => {
           //  将数据包起来,然后再取别名
           cy.wrap(response.body.data.token).as("token");
        })
    }
}