context('Buy item', () => {
    let text, price;
    beforeEach(() => {

        cy.visit('')
        .get('#user-name')
        .type('standard_user')
        .get('#password')
        .type('secret_sauce')
        .get('#login-button')
        .click()
    })

    it('Buys an item from the site', () => {
        var indexNumber = Cypress._.random(0,5);

        cy.get('.inventory_item').then((element, index, $list)=>{
            if (index===indexNumber){
                text = element.find('.inventory_item_name').text()
                price = element.find('.inventory_item_price').text()

                element.find('.btn_small.btn_inventory').click()
            }
            //I can use text and price in this level
            cy.log(text)
            cy.log(price)
        })

        //I can not use text and price variables in here
        cy.log(text)
        cy.log(price)

        cy.get('.shopping_cart_link').click()
    })

})