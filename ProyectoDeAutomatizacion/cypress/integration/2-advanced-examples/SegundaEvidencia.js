describe("Segunda practica ",function(){
//entrar a la pagina

it('Encontrar y agregar una camisa desde la pagina de inicio', function(){
    cy.visit("https://malaracha.com/") 
    
//conseguir contenedor
cy.get('#CollectionSection-16240833728b7a4b5b').as('Camisas')
cy.get('@Camisas')

        .find('.grid-product__title')
        .each(($el,index, $list) => {
            cy.get('@Camisas').find('.grid-product__price').then(function($el1){
                let precio = $el1.text()
                cy.log(precio)
        //////////////////////
            if($el.attr('.grid-product__title') === 'HÉROES DEL SILENCIO - MALDITO DUENDE - MUJER ' && precio.includes('299.00')){
                cy.log('Se ha encontrado el elemento buscado')
                cy.log('Se ha encontrado el precio buscado')
                
                cy.get('@Camisas').eq(index).contains('HÉROES DEL SILENCIO - MALDITO DUENDE - MUJER ').click()
            }
        })
        
    })

    //cy.get('#acid-pop > div.ajax-success-normal.ajax-success-modal.halo-modal').should('contain.text','se agrega a tu carrito.').should('be.visible')
})

it('Verificar el dropdown y comprobar que los elementos existan.',function(){
  //  cy.visit("acid.com.mx") 
    //cy.get('.site-nav > :nth-child(3) > :nth-child(1)')//.invoke('attr', 'style','display: block')


    })

})